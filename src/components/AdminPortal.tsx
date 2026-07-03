import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  Unlock, 
  Upload, 
  Plus, 
  Trash2, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  Image as ImageIcon,
  Trees,
  Sparkles,
  Layers,
  Eye,
  EyeOff
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Product } from '../types';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
  customProducts: Product[];
  onDeleteProduct: (product: Product) => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (auth: boolean) => void;
  hiddenProducts?: Product[];
  onRestoreProduct?: (id: string) => void;
  onPermanentlyDeleteStandardProduct?: (id: string) => void;
}

export default function AdminPortal({ 
  isOpen, 
  onClose, 
  customProducts, 
  onDeleteProduct, 
  isAdminAuthenticated, 
  setIsAdminAuthenticated,
  hiddenProducts = [],
  onRestoreProduct,
  onPermanentlyDeleteStandardProduct
}: AdminPortalProps) {
  const [passcode, setPasscode] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const isAuthenticated = isAdminAuthenticated;
  const setIsAuthenticated = setIsAdminAuthenticated;
  
  // Custom settings (passcode changing) states
  const [dbPasscode, setDbPasscode] = useState<string | null>(null);
  const [newPasscode, setNewPasscode] = useState<string>('');
  const [confirmPasscode, setConfirmPasscode] = useState<string>('');
  const [showPasscodeToggle, setShowPasscodeToggle] = useState<boolean>(false);
  const [changePassError, setChangePassError] = useState<string>('');
  const [changePassSuccess, setChangePassSuccess] = useState<string>('');
  const [isUpdatingPasscode, setIsUpdatingPasscode] = useState<boolean>(false);

  // Subscribe to custom passcode settings in Firestore
  useEffect(() => {
    if (!isOpen) return;
    const unsubscribe = onSnapshot(doc(db, 'settings', 'admin'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && typeof data.passcode === 'string') {
          setDbPasscode(data.passcode);
        }
      }
    }, (error) => {
      console.warn("Error subscribing to settings passcode:", error);
    });
    return () => unsubscribe();
  }, [isOpen]);

  // Handles changing the passcode
  const handleChangePasscode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setChangePassError('');
    setChangePassSuccess('');

    const formattedPasscode = newPasscode.trim();
    if (formattedPasscode.length < 4) {
      setChangePassError('New passcode must be at least 4 characters long.');
      return;
    }

    if (formattedPasscode !== confirmPasscode.trim()) {
      setChangePassError('Passcodes do not match. Please retype and verify.');
      return;
    }

    setIsUpdatingPasscode(true);
    try {
      await setDoc(doc(db, 'settings', 'admin'), {
        passcode: formattedPasscode
      });
      setChangePassSuccess('Passcode updated successfully! Use your new passcode for future logins.');
      setNewPasscode('');
      setConfirmPasscode('');
    } catch (err: any) {
      console.error("Error setting passcode: ", err);
      setChangePassError(`Failed to update passcode: ${err.message || err}`);
    } finally {
      setIsUpdatingPasscode(false);
    }
  };
  
  // Confirmation state for completely deleting standard products
  const [confirmingDeleteId, setConfirmingDeleteId] = useState<string | null>(null);
  
  // Custom Product Form States
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<Product['category']>('beds');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>(''); // Base64 or URL
  const [dimensions, setDimensions] = useState<string>('');
  const [materials, setMaterials] = useState<string>(''); // comma separated
  const [features, setFeatures] = useState<string>(''); // comma separated
  const [isChester, setIsChester] = useState<boolean>(false);
  const [woodOnly, setWoodOnly] = useState<boolean>(false);
  
  // AI Research States
  const [autoGenerateAI, setAutoGenerateAI] = useState<boolean>(true);
  const [aiStatus, setAiStatus] = useState<string>('');
  
  // Upload State
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [formSuccess, setFormSuccess] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handles unlocking
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compare against the database passcode (if configured), or fall back to default passcodes "1234" and "eldoret2026"
    const isMatched = (dbPasscode && passcode === dbPasscode) || 
                      passcode === '1234' || 
                      passcode.toLowerCase() === 'eldoret2026';
                      
    if (isMatched) {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('eldoret_owner_authenticated', 'true');
      }
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Please check and try again.');
    }
  };

  // Compress uploaded image using Canvas to fit comfortably in Firestore size limits (< 1MB)
  const compressImage = (base64Str: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          // Compress as JPEG to keep the payload size extremely light
          const compressed = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressed);
        } else {
          resolve(base64Str);
        }
      };
      img.onerror = () => {
        resolve(base64Str);
      };
    });
  };

  // Convert uploaded image to base64 string
  const handleImageUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) { // 8MB limit
      setFormError('Image file is too large. Please select an image under 8MB.');
      return;
    }

    setIsUploading(true);
    setFormError('');

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      try {
        const compressed = await compressImage(base64String);
        setImage(compressed);
        setImagePreview(compressed);
      } catch (err) {
        setImage(base64String);
        setImagePreview(base64String);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setFormError('Failed to read image file.');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Drag and drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      setFormError('Image file is too large. Please select an image under 8MB.');
      return;
    }

    setIsUploading(true);
    setFormError('');

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      try {
        const compressed = await compressImage(base64String);
        setImage(compressed);
        setImagePreview(compressed);
      } catch (err) {
        setImage(base64String);
        setImagePreview(base64String);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setFormError('Failed to read image file.');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Handle addition of custom product
  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!name.trim()) return setFormError('Product Name is required.');
    if (!price || Number(price) <= 0) return setFormError('Please enter a valid price.');
    if (!image) return setFormError('Please upload an image or paste an online image URL.');

    setIsSubmitting(true);

    try {
      // Generate a clean custom ID
      const timestamp = Date.now();
      const customId = `custom-${category}-${timestamp}`;

      let finalMaterials = materials
        ? materials.split(',').map(m => m.trim()).filter(Boolean)
        : [];

      let finalFeatures = features
        ? features.split(',').map(f => f.trim()).filter(Boolean)
        : [];

      let finalDescription = description.trim();

      if (autoGenerateAI) {
        setAiStatus('Gemini AI is researching the web for materials & specifications...');
        try {
          const aiResponse = await fetch('/api/gemini/generate-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: name.trim(),
              category,
              dimensions: dimensions.trim()
            })
          });

          if (!aiResponse.ok) {
            const errData = await aiResponse.json().catch(() => ({}));
            throw new Error(errData.error || 'Failed to auto-generate details with AI.');
          }

          const aiData = await aiResponse.ok ? await aiResponse.json() : null;
          if (aiData) {
            if (aiData.materials && Array.isArray(aiData.materials)) {
              finalMaterials = aiData.materials;
            }
            if (aiData.features && Array.isArray(aiData.features)) {
              finalFeatures = aiData.features;
            }
            if (aiData.description) {
              finalDescription = aiData.description;
            }
          }
        } catch (aiErr: any) {
          console.warn('AI Generation failed, falling back to empty/manual values:', aiErr);
          // Non-blocking warning, let it proceed with user input or empty values
          setFormError(`AI details generation skipped (${aiErr.message || aiErr}). Product will still be posted with manual or basic details.`);
        } finally {
          setAiStatus('');
        }
      }

      // Write to Firestore products collection
      await setDoc(doc(db, 'products', customId), {
        id: customId,
        name: name.trim(),
        category,
        price: Number(price),
        description: finalDescription,
        image,
        dimensions: dimensions.trim(),
        materials: finalMaterials,
        features: finalFeatures,
        isChester,
        woodOnly,
        createdAt: timestamp
      });

      setFormSuccess(`Successfully posted "${name}" to the showroom!${autoGenerateAI ? ' ✨ AI-researched details have been added automatically.' : ''}`);
      
      // Reset form fields
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setImagePreview('');
      setDimensions('');
      setMaterials('');
      setFeatures('');
      setIsChester(false);
      woodOnly && setWoodOnly(false);
    } catch (err: any) {
      console.error(err);
      setFormError(`Failed to save product: ${err.message || err}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete product handler
  const handleDeleteProduct = (product: Product) => {
    onDeleteProduct(product);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-stone-200">
        
        {/* Header bar */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="bg-amber-100 p-2 rounded-xl text-amber-800">
              {isAuthenticated ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-sans">Owner Showroom Manager</h2>
              <p className="text-xs text-stone-500 font-sans">Add new images and custom products instantly to the live database</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-500 transition-colors cursor-pointer"
            id="close-admin-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-grow overflow-y-auto p-6">
          {!isAuthenticated ? (
            /* Passcode Unlock State */
            <div className="max-w-md mx-auto py-12 text-center space-y-6">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-amber-200 text-amber-800">
                <Lock className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-stone-900">Enter Access Passcode</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  To protect your website, adding new products is restricted. Please enter the workshop owner passcode (hint: use <strong>1234</strong> or <strong>eldoret2026</strong>).
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <input
                  type="password"
                  placeholder="Owner Passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full text-center px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono tracking-widest bg-stone-50"
                  autoFocus
                  id="admin-passcode-input"
                />
                
                {authError && (
                  <div className="text-red-600 text-xs flex items-center justify-center gap-1 bg-red-50 p-2.5 rounded-lg border border-red-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{authError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                  id="admin-unlock-btn"
                >
                  Unlock Showroom Manager
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Manager Hub */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form to Post New Product */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 font-mono flex items-center gap-1.5 mb-1">
                    <Plus className="w-4 h-4" />
                    <span>Post New Image & Product</span>
                  </h3>
                  <p className="text-xs text-stone-500">The product will immediately be published live on the store showroom.</p>
                </div>

                <form onSubmit={handleSubmitProduct} className="space-y-4">
                  {/* Name and Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">Product Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Eldoret Premium Teak Bed"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                        id="product-name-field"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">Price (KSh)</label>
                      <input
                        type="number"
                        placeholder="e.g. 75000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                        id="product-price-field"
                      />
                    </div>
                  </div>

                  {/* Category and Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">Showroom Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as Product['category'])}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                        id="product-category-field"
                      >
                        <option value="beds">Beds Collection</option>
                        <option value="sofas">Sofas & Recliners</option>
                        <option value="tables">Coffee & Dining Tables</option>
                        <option value="dining">Dining Sets</option>
                        <option value="shoeracks">Shoe Racks & Benches</option>
                        <option value="tvstands">TV Stands & Consoles</option>
                        <option value="kitchen">Kitchen & Cabinetry</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">Dimensions (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. 6ft x 6ft (Double Size) - Optional"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                        id="product-dims-field"
                      />
                    </div>
                  </div>

                  {/* Drag & Drop Upload Zone */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">Product Image (Drag & Drop or Upload)</label>
                    
                    <div 
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-stone-300 rounded-2xl p-5 text-center hover:border-amber-500 bg-stone-50/50 transition-all cursor-pointer space-y-2 group"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageUploadChange}
                        className="hidden"
                        id="admin-image-upload-file"
                      />
                      
                      {imagePreview ? (
                        <div className="relative w-full h-36 mx-auto rounded-lg overflow-hidden group-hover:opacity-90">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setImage('');
                              setImagePreview('');
                            }}
                            className="absolute top-2.5 right-2.5 bg-stone-900/80 text-white p-1 rounded-full hover:bg-stone-950 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="py-2">
                          {isUploading ? (
                            <Loader2 className="w-8 h-8 text-amber-700 animate-spin mx-auto" />
                          ) : (
                            <Upload className="w-8 h-8 text-stone-400 group-hover:text-amber-700 mx-auto transition-colors" />
                          )}
                          <p className="text-xs font-bold text-stone-700 mt-2 font-sans">
                            {isUploading ? 'Reading file content...' : 'Click to Upload or Drag Image Here'}
                          </p>
                          <p className="text-[10px] text-stone-400 mt-1">Supports PNG, JPG, JPEG (Max 8MB)</p>
                        </div>
                      )}
                    </div>

                    {/* Fallback URL input */}
                    <div className="pt-2">
                      <span className="text-[10px] text-stone-400 font-sans block text-center mb-1">OR paste an online image URL directly:</span>
                      <input
                        type="url"
                        placeholder="https://images.unsplash.com/photo-..."
                        value={image.startsWith('data:') ? '' : image}
                        onChange={(e) => {
                          const val = e.target.value;
                          setImage(val);
                          setImagePreview(val);
                        }}
                        className="w-full px-3 py-1.5 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-stone-50/30"
                        id="product-image-url-field"
                      />
                    </div>
                  </div>

                  {/* Materials & Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase flex items-center gap-1">
                        <Layers className="w-3 h-3 text-stone-500" />
                        <span>Materials (Optional, comma separated)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Cypress wood, Royal velvet, Memory foam"
                        value={materials}
                        onChange={(e) => setMaterials(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                        id="product-materials-field"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase">
                        Highlights/Features (Optional, comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="Tufted Headboard, 5-Year Warranty, Soft Finish"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                        id="product-features-field"
                      />
                    </div>
                  </div>

                  {/* Checkbox Options */}
                  <div className="bg-stone-50 p-3.5 rounded-2xl flex flex-wrap items-center gap-6 border border-stone-200">
                    <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isChester}
                        onChange={(e) => setIsChester(e.target.checked)}
                        className="w-4 h-4 text-amber-700 rounded focus:ring-amber-500 border-stone-300"
                      />
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>Chesterfield/Tufted Padded Style</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={woodOnly}
                        onChange={(e) => setWoodOnly(e.target.checked)}
                        className="w-4 h-4 text-amber-700 rounded focus:ring-amber-500 border-stone-300"
                      />
                      <Trees className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Solid Wood Only (No fabrics)</span>
                    </label>
                  </div>

                  {/* AI Autocomplete Banner */}
                  <div className="bg-amber-50 border border-amber-200/60 p-4 rounded-2xl flex items-start gap-3.5 shadow-sm transition-all">
                    <div className="p-2 bg-amber-100 text-amber-900 rounded-xl mt-0.5 shrink-0">
                      <Sparkles className="w-4 h-4 animate-pulse text-amber-700" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-amber-950 font-sans">
                          Smart AI Web-Research (Powered by Gemini)
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={autoGenerateAI}
                            onChange={(e) => setAutoGenerateAI(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-800"></div>
                        </label>
                      </div>
                      <p className="text-[11px] text-amber-900/80 leading-normal">
                        When active, Gemini will instantly search the internet for typical specifications of <strong>"{name || 'this item'}"</strong> to write professional, premium materials, highlights, and descriptions automatically.
                      </p>
                    </div>
                  </div>

                  {/* Materials & Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-stone-500" />
                        <span>Materials</span>
                      </label>
                      <input
                        type="text"
                        disabled={autoGenerateAI}
                        placeholder={autoGenerateAI ? "AI will research and write this..." : "Cypress wood, Royal velvet, Memory foam"}
                        value={autoGenerateAI ? "" : materials}
                        onChange={(e) => setMaterials(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:bg-stone-50 disabled:text-stone-400 disabled:border-stone-150"
                        id="product-materials-field"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 font-mono uppercase flex items-center gap-1.5">
                        <span>Highlights/Features</span>
                      </label>
                      <input
                        type="text"
                        disabled={autoGenerateAI}
                        placeholder={autoGenerateAI ? "AI will research and write this..." : "Tufted Headboard, 5-Year Warranty, Soft Finish"}
                        value={autoGenerateAI ? "" : features}
                        onChange={(e) => setFeatures(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:bg-stone-50 disabled:text-stone-400 disabled:border-stone-150"
                        id="product-features-field"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-700 font-mono uppercase flex items-center gap-1.5">
                      <span>Detailed Description</span>
                    </label>
                    <textarea
                      disabled={autoGenerateAI}
                      placeholder={autoGenerateAI ? "Gemini will search the internet and write an engaging description for this product..." : "Enter specific features, type of timber, design background..."}
                      rows={3}
                      value={autoGenerateAI ? "" : description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:bg-stone-50 disabled:text-stone-400 disabled:border-stone-150"
                      id="product-desc-field"
                    />
                  </div>

                  {/* Errors and Success Messages */}
                  {formError && (
                    <div className="text-red-600 text-xs flex items-center gap-1.5 bg-red-50 p-3 rounded-xl border border-red-200 animate-pulse">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {formSuccess && (
                    <div className="text-emerald-700 text-xs flex items-center gap-1.5 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>{formSuccess}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isUploading}
                    className="w-full bg-amber-900 hover:bg-amber-800 disabled:bg-amber-900/50 text-amber-50 font-bold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    id="submit-product-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{aiStatus || "Publishing Product to Showroom..."}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Publish Live Product Now</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column: Manage Live Posted Items list */}
              <div className="lg:col-span-5 flex flex-col h-full border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-1.5 mb-1">
                    <ImageIcon className="w-4 h-4" />
                    <span>Live Posted Items ({customProducts.length})</span>
                  </h3>
                  <p className="text-xs text-stone-500">Your custom-added showroom catalog items. Delete any to remove it live.</p>
                </div>

                <div className="flex-grow overflow-y-auto max-h-[500px] border border-stone-200 rounded-2xl bg-stone-50/50 p-3 space-y-3">
                  {customProducts.length === 0 ? (
                    <div className="text-center py-16 text-stone-400 space-y-3">
                      <ImageIcon className="w-10 h-10 mx-auto text-stone-300" />
                      <p className="text-xs font-sans">No custom products added yet.</p>
                      <p className="text-[10px] text-stone-500 leading-relaxed px-4">
                        Use the posting form on the left to add bespoke products with custom images directly to your showroom.
                      </p>
                    </div>
                  ) : (
                    customProducts.map((p) => (
                      <div 
                        key={p.id}
                        className="flex items-center gap-3 p-2 bg-white border border-stone-200 rounded-xl justify-between hover:border-amber-300 transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded-lg border border-stone-200"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{p.name}</h4>
                            <span className="text-[10px] text-amber-800 font-bold block">KSh {p.price.toLocaleString()}</span>
                            <span className="text-[9px] text-stone-400 font-mono capitalize">Cat: {p.category}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteProduct(p)}
                          className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Delete product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Removed Standard Catalog Items Section */}
                {hiddenProducts.length > 0 && (
                  <div className="pt-2 border-t border-stone-200 space-y-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-1.5 mb-1">
                        <X className="w-3.5 h-3.5 text-red-500" />
                        <span>Removed Standard Items ({hiddenProducts.length})</span>
                      </h3>
                      <p className="text-[10px] text-stone-500">Outdated default showroom items hidden from visitors.</p>
                    </div>

                    <div className="max-h-[160px] overflow-y-auto border border-stone-200 rounded-xl bg-red-50/10 p-2 space-y-2">
                      {hiddenProducts.map((p) => (
                        <div 
                          key={p.id}
                          className="flex items-center gap-2 p-1.5 bg-white border border-stone-200 rounded-lg justify-between hover:border-amber-300 transition-all shadow-xs"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-8 h-8 object-cover rounded border border-stone-200"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <h4 className="text-[10px] font-bold text-stone-900 line-clamp-1">{p.name}</h4>
                              <span className="text-[8px] text-stone-400 font-mono capitalize">{p.category}</span>
                            </div>
                          </div>

                          {confirmingDeleteId === p.id ? (
                            <div className="flex items-center gap-1.5 bg-red-50 p-1 rounded-md border border-red-100">
                              <span className="text-[9px] text-red-600 font-bold animate-pulse font-mono">Sure?</span>
                              <button
                                onClick={() => {
                                  onPermanentlyDeleteStandardProduct?.(p.id);
                                  setConfirmingDeleteId(null);
                                }}
                                className="px-1.5 py-0.5 text-[8px] font-bold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors cursor-pointer"
                              >
                                Yes
                              </button>
                              <button
                                onClick={() => setConfirmingDeleteId(null)}
                                className="px-1.5 py-0.5 text-[8px] font-bold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <div className="flex gap-1">
                              <button
                                onClick={() => onRestoreProduct?.(p.id)}
                                className="px-2 py-1 text-[9px] font-bold text-amber-950 hover:text-white bg-amber-50 hover:bg-amber-900 border border-amber-200 hover:border-amber-900 rounded-md transition-colors cursor-pointer"
                                title="Restore standard product to showroom"
                              >
                                Restore
                              </button>
                              <button
                                onClick={() => setConfirmingDeleteId(p.id)}
                                className="px-2 py-1 text-[9px] font-bold text-red-950 hover:text-white bg-red-50 hover:bg-red-900 border border-red-200 hover:border-red-900 rounded-md transition-colors cursor-pointer"
                                title="Delete completely from showroom list"
                              >
                                Delete Completely
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 🔑 Change Passcode Settings Card */}
                <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-3 shadow-xs">
                  <h4 className="text-xs font-bold text-stone-850 font-sans flex items-center gap-1.5 uppercase tracking-wider font-mono">
                    <Lock className="w-3.5 h-3.5 text-amber-800" />
                    <span>Change Access Passcode</span>
                  </h4>
                  <p className="text-[10px] text-stone-500 leading-normal">
                    Update the passcode required to access this showroom manager portal. Double check spelling to prevent typos.
                  </p>
                  
                  <form onSubmit={handleChangePasscode} className="space-y-3">
                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type={showPasscodeToggle ? "text" : "password"}
                          placeholder="Enter New Passcode"
                          value={newPasscode}
                          onChange={(e) => {
                            setNewPasscode(e.target.value);
                            setChangePassSuccess('');
                            setChangePassError('');
                          }}
                          className="w-full pl-3 pr-10 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
                          id="new-passcode-field"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPasscodeToggle(!showPasscodeToggle)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                          title={showPasscodeToggle ? "Hide passcode" : "Show passcode"}
                        >
                          {showPasscodeToggle ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          type={showPasscodeToggle ? "text" : "password"}
                          placeholder="Confirm New Passcode"
                          value={confirmPasscode}
                          onChange={(e) => {
                            setConfirmPasscode(e.target.value);
                            setChangePassSuccess('');
                            setChangePassError('');
                          }}
                          className="w-full pl-3 pr-10 py-2 border border-stone-250 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
                          id="confirm-passcode-field"
                        />
                      </div>
                    </div>

                    {changePassError && (
                      <div className="text-red-600 text-[10px] flex items-center gap-1 bg-red-50 p-2 rounded-lg border border-red-200">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{changePassError}</span>
                      </div>
                    )}

                    {changePassSuccess && (
                      <div className="text-emerald-700 text-[10px] flex items-center gap-1 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        <span>{changePassSuccess}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isUpdatingPasscode}
                      className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      id="save-passcode-btn"
                    >
                      {isUpdatingPasscode ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          <span>Saving Passcode...</span>
                        </>
                      ) : (
                        <span>Save New Passcode</span>
                      )}
                    </button>
                  </form>
                </div>

                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/50 text-[10px] text-amber-900 leading-relaxed">
                  💡 <strong>Manager Tip:</strong> Images uploaded are stored inside the Firebase database as secure base64 string payloads. This guarantees they stay permanently available on your web catalog!
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
