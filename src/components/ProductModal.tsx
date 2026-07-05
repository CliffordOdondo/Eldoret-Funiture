/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Info, Hammer, CheckCircle, Sparkles, Trees } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const WOOD_OPTIONS = [
  { id: 'mahogany', name: 'Premium Solid Mahogany', description: 'Deep red-brown, extremely durable, structural heavy hardwood' },
  { id: 'mvule', name: 'Authentic East African Mvule', description: 'Exceptional tensile strength, natural termite immunity' },
  { id: 'oak', name: 'Premium Select White Oak', description: 'Bright golden texture, iconic high-contrast grain lines' },
  { id: 'cypress', name: 'Kiln-Dried Cypress', description: 'Strong, modern light-yellow tone, economic grade' },
  { id: 'pine', name: 'Select Grade Softwood Pine', description: 'Light density, clean minimalist visual appeal' }
];

const FABRIC_OPTIONS = [
  { id: 'royal-blue', name: 'Royal Navy Velvet', hex: '#1E3A8A' },
  { id: 'emerald', name: 'Rich Emerald Plush', hex: '#065F46' },
  { id: 'vintage-tan', name: 'Chesterfield Tan Leatherette', hex: '#78350F' },
  { id: 'crimson', name: 'Crimson Wine Suede', hex: '#991B1B' },
  { id: 'charcoal', name: 'Charcoal Grey Weave', hex: '#374151' },
  { id: 'ivory', name: 'Ivory Linen Cotton', hex: '#F9F6F0' }
];

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const [selectedWood, setSelectedWood] = useState(WOOD_OPTIONS[0]);
  const [selectedFabric, setSelectedFabric] = useState(FABRIC_OPTIONS[0]);
  const [customDimension, setCustomDimension] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [imgSrc, setImgSrc] = useState(product.image);

  // Sync image when product changes
  useEffect(() => {
    setImgSrc(product.image);
  }, [product]);

  // Is this item a Chester upholstered product? Or has fabric?
  const hasUpholstery = product.category === 'sofas' || product.isChester || product.materials.some(m => m.toLowerCase().includes('velvet') || m.toLowerCase().includes('canvas') || m.toLowerCase().includes('upholstered') || m.toLowerCase().includes('linen'));

  // Handle outside click close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Format Price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price).replace('KES', 'KSh');
  };

  // Compile full custom WhatsApp order details
  const getWhatsAppInquiryUrl = () => {
    const getAbsoluteImageUrl = (img: string) => {
      if (!img || img.startsWith('data:') || img.startsWith('blob:') || img.length > 500) return '';
      if (img.startsWith('http://') || img.startsWith('https://')) return img;
      return `https://eldoret-funiture.onrender.com${img.startsWith('/') ? '' : '/'}${img}`;
    };

    const liveLink = `https://eldoret-funiture.onrender.com?product=${product.id}`;
    const imageUrl = getAbsoluteImageUrl(product.image);
    const priceText = product.price && product.price > 0 ? formatPrice(product.price) : "Bespoke Pricing Upon Request";

    let message = `Hello ELDORET FUNITURE! I am inquiring about one of your custom furniture items from your website:\n\n`;
    message += `📋 ITEM INQUIRY DETAILS:\n`;
    message += `-------------------------\n`;
    message += `• Product: ${product.name}\n`;
    message += `• Price: ${priceText}\n`;
    message += `• Standard Dimensions: ${product.dimensions}\n`;
    message += `• Item Reference: ${product.id}\n`;
    if (imageUrl) {
      message += `• Product Image: ${imageUrl}\n`;
    }
    message += `• Product Link: ${liveLink}\n\n`;

    message += `🛠️ MY CHOSEN CUSTOMISATIONS:\n`;
    message += `-------------------------\n`;
    message += `• Timber Selection: ${selectedWood.name}\n`;
    if (hasUpholstery) {
      message += `• Upholstery Finish: ${selectedFabric.name}\n`;
    }
    if (customDimension.trim()) {
      message += `• Custom Size Wanted: ${customDimension.trim()}\n`;
    }
    if (deliveryArea.trim()) {
      message += `• Delivery Destination: ${deliveryArea.trim()}\n`;
    }
    if (customNotes.trim()) {
      message += `• Additional Specs: ${customNotes.trim()}\n`;
    }

    message += `\nCan you please confirm the current crafting queue wait-time and share a custom quote for these specifications? Thank you!`;

    return `https://wa.me/254711507064?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/85 p-4 overflow-y-auto backdrop-blur-sm" id="product-detail-modal">
      <div 
        className="relative bg-stone-50 rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full border border-stone-200 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button absolute */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-900 text-white p-2 rounded-full cursor-pointer shadow-md transition-colors"
          title="Close Dialog"
          id="modal-close-button"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Left Frame: Sticky Image Preview Container */}
        <div className="md:w-1/2 relative bg-stone-200 h-[280px] md:h-auto overflow-hidden">
          <img
            src={imgSrc}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={() => {
              setImgSrc('https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80');
            }}
          />
          {/* Soft background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent hidden md:block" />

          {/* Quick Specifications Overlay in left bar (Desktop Only) */}
          <div className="absolute bottom-6 left-6 right-6 text-white hidden md:block">
            <span className="text-xxs uppercase tracking-widest text-amber-400 font-bold font-mono">Guaranteed Handcrafted</span>
            <h3 className="text-xl font-extrabold mt-1 font-sans">{product.name}</h3>
            <p className="text-xs text-stone-300 mt-2 font-sans line-clamp-3">
              {product.description}
            </p>
            
            {/* Standard specifications badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-xxs font-mono font-bold">
              <span className="bg-stone-800/90 text-stone-100 px-2.5 py-1 rounded-md border border-stone-700/50">
                SIZE: {product.dimensions}
              </span>
              <span className="bg-stone-800/90 text-stone-100 px-2.5 py-1 rounded-md border border-stone-700/50">
                TIMBER: {selectedWood.name}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Right Frame: Scrollable Customizer Panel */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-full flex flex-col justify-between" id="modal-right-scroll-container">
          
          {/* Main Specs Section */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-800 font-mono">
                {product.category.toUpperCase()} CATALOG PREVIEW
              </span>
              <h2 className="text-2xl font-black text-stone-900 font-sans tracking-tight mt-1 leading-tight">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-2.5 mt-2.5">
                <span className="text-lg font-bold text-amber-900 font-sans">
                  {product.price && product.price > 0 ? formatPrice(product.price) : 'Bespoke Pricing Upon Request'}
                </span>
              </div>
            </div>

            {/* Features bullet checklist */}
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-700" />
                <span>Wood-Seasoning Details & Features</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cured for 45 days in chemical anti-insect chambers</span>
                </li>
              </ul>
            </div>

            {/* Customiser Interactive Control Blocks */}
            <div className="space-y-5 border-t border-stone-200 pt-5">
              <h3 className="text-sm font-black text-stone-800 uppercase tracking-widest font-mono flex items-center gap-2">
                <Hammer className="w-4 h-4 text-amber-700" />
                <span>Bespoke Timber & Finish Customizer</span>
              </h3>

              {/* Timber selection */}
              <div>
                <label className="block text-xs font-bold text-stone-600 uppercase tracking-widest font-mono mb-2">
                  1. Choose Timber Material:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="timber-options">
                  {WOOD_OPTIONS.map((wood) => (
                    <button
                      key={wood.id}
                      type="button"
                      onClick={() => setSelectedWood(wood)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex flex-col justify-between cursor-pointer ${
                        selectedWood.id === wood.id
                          ? 'bg-amber-50/50 border-amber-600 ring-1 ring-amber-600 text-stone-900'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                      }`}
                      id={`timber-opt-${wood.id}`}
                    >
                      <span className="font-bold flex items-center gap-1 text-stone-900 font-sans">
                        {wood.id === 'mahogany' || wood.id === 'mvule' ? (
                          <Trees className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                        ) : (
                          <Trees className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        )}
                        {wood.name}
                      </span>
                      <span className="text-[10px] text-stone-500 font-sans mt-1 leading-normal italic">
                        {wood.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric/Color Selection (Only shown if applicable) */}
              {hasUpholstery && (
                <div>
                  <label className="block text-xs font-bold text-stone-600 uppercase tracking-widest font-mono mb-2">
                    2. Choose Upholstery Color / Texture:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2" id="fabric-options">
                    {FABRIC_OPTIONS.map((fabric) => (
                      <button
                        key={fabric.id}
                        type="button"
                        onClick={() => setSelectedFabric(fabric)}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all text-[10px] cursor-pointer ${
                          selectedFabric.id === fabric.id
                            ? 'bg-amber-50/50 border-amber-600 ring-1 ring-amber-600 font-bold text-stone-900'
                            : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
                        }`}
                        title={fabric.name}
                        id={`fabric-opt-${fabric.id}`}
                      >
                        <span 
                          className="w-5 h-5 rounded-full border border-stone-900/10 shadow-inner" 
                          style={{ backgroundColor: fabric.hex }}
                        />
                        <span className="truncate w-full text-[9px] font-sans text-stone-800">{fabric.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom size input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="custom-dimensions-input" className="block text-xs font-bold text-stone-600 uppercase tracking-widest font-mono mb-1.5">
                    Custom Dimensions (Optional):
                  </label>
                  <input
                    type="text"
                    id="custom-dimensions-input"
                    placeholder="e.g., Special 7ft x 6ft, or high rise headboard"
                    value={customDimension}
                    onChange={(e) => setCustomDimension(e.target.value)}
                    className="w-full bg-white text-stone-800 border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="delivery-area-input" className="block text-xs font-bold text-stone-600 uppercase tracking-widest font-mono mb-1.5">
                    Deliver To (Town/Area):
                  </label>
                  <input
                    type="text"
                    id="delivery-area-input"
                    placeholder="e.g., Eldoret CBD, Nairobi, Kisumu"
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full bg-white text-stone-800 border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-sans"
                  />
                </div>
              </div>

              {/* Special Custom Notes text area */}
              <div>
                <label htmlFor="custom-notes-input" className="block text-xs font-bold text-stone-600 uppercase tracking-widest font-mono mb-1.5">
                  Specific Requirements or Notes:
                </label>
                <textarea
                  id="custom-notes-input"
                  placeholder="e.g., Please add dual drawers underneath the bed frame / or high crown carvings on the headboard..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  rows={2}
                  className="w-full bg-white text-stone-800 border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-sans resize-none"
                />
              </div>

            </div>
          </div>

          {/* Call to Actions Panel footer */}
          <div className="mt-8 pt-6 border-t border-stone-200 space-y-3">
            <div className="text-stone-400 text-[10px] text-center font-mono tracking-wider">
              INQUIRIES TRANSFERRED DIRECT TO ELDORET FURNITURE WORKSHOP MANAGER
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp direct compiled option */}
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                id="modal-whatsapp-action"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send WhatsApp Order Specs</span>
              </a>

              {/* Direct line Call */}
              <a
                href="tel:+254711507064"
                className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                id="modal-call-action"
              >
                <Phone className="w-5 h-5" />
                <span>Call Carpenter Directly</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
