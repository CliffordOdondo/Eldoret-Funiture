import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Helper to safely initialize GoogleGenAI with custom headers
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not defined. Please add it in your Secrets panel.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to automatically research and generate product details using Gemini with Google Search Grounding
  app.post('/api/gemini/generate-details', async (req, res) => {
    try {
      const { title, category, dimensions } = req.body;

      if (!title) {
        return res.status(400).json({ error: 'Product title is required' });
      }

      const ai = getAiClient();

      const prompt = `
        You are an elite, professional furniture researcher and copywriter for "Eldoret Furniture", a high-end local furniture manufacturer in Kenya.
        
        Using Google Search, find typical specifications, construction details, and premium standards for the following item:
        - Product Title: "${title}"
        - Category: "${category || 'General Furniture'}"
        - Dimensions: "${dimensions || 'Not specified'}"
        
        Please research and write realistic, premium specifications suited for Kenya's luxury furniture market. Generate the following details:
        1. Typical materials used (e.g. Cypress hardwood, Premium leather, Orthopedic foam cushion, Stain-resistant velvet).
        2. Key highlights or features of this piece (e.g. Elegant hand-tufted Chesterfield button styling, Heavy-duty joint reinforcement, 5-year wood guarantee, High density density cushioning).
        3. A gorgeous, detailed marketing description (2 to 3 sentences long) highlighting the design, luxury aesthetic, absolute comfort, and durability of this handcrafted piece.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are an expert furniture copywriter. Generate high-quality specifications and description for Kenyan luxury furniture.',
          tools: [{ googleSearch: {} }],
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              materials: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'An array of 2 to 4 high-quality materials typically used for this product (e.g., ["Seasoned Cypress wood", "High density luxury foam"]).'
              },
              features: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'An array of 3 to 5 highlights or features of the product (e.g., ["Meticulous hand-finished tufting", "Durable reinforced structure"]).'
              },
              description: {
                type: Type.STRING,
                description: 'A beautifully crafted marketing description of the product in 2 to 3 professional sentences.'
              }
            },
            required: ['materials', 'features', 'description']
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('No text generated from Gemini');
      }

      // Parse the JSON output
      const details = JSON.parse(responseText.trim());
      res.json(details);

    } catch (err: any) {
      console.error('Gemini Details Generation Error:', err);
      res.status(500).json({ 
        error: err.message || 'An error occurred while researching and writing specifications using Gemini.' 
      });
    }
  });

  // Serve static assets or use Vite dev server middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Eldoret Furniture Server] Running on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`);
  });
}

startServer();
