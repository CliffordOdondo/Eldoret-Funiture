/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, MessageSquare, Sparkles, Trees, Eye, Check, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onViewDetails: (product: Product) => void;
  onQuickInquire: (product: Product) => void;
  onCategoryClick?: (categoryId: string) => void;
  isAdminAuthenticated?: boolean;
  onDeleteProduct?: (product: Product) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
  onQuickInquire,
  onCategoryClick,
  isAdminAuthenticated = false,
  onDeleteProduct
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = React.useState(product.image);

  // Sync state if product.image changes
  React.useEffect(() => {
    setImgSrc(product.image);
  }, [product.image]);

  // Format Price in Kenyan Shillings
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('KES', 'KSh');
  };

  // Generate customized WhatsApp text for dynamic click through
  const getWhatsAppLink = (p: Product) => {
    const getAbsoluteImageUrl = (img: string) => {
      if (!img || img.startsWith('data:') || img.startsWith('blob:') || img.length > 500) return '';
      if (img.startsWith('http://') || img.startsWith('https://')) return img;
      return `https://eldoret-funiture.onrender.com${img.startsWith('/') ? '' : '/'}${img}`;
    };

    const liveLink = `https://eldoret-funiture.onrender.com?product=${p.id}`;
    const priceText = p.price && p.price > 0 ? formatPrice(p.price) : "Enquire for bespoke price";
    const imageUrl = getAbsoluteImageUrl(p.image);

    const text = encodeURIComponent(
      `Hello ELDORET FUNITURE! I am visiting your website showroom and I would like to inquire about the following item:\n\n` +
      `Product Name: ${p.name}\n` +
      `Item Code: ${p.id}\n` +
      `Price: ${priceText}\n` +
      `Dimensions: ${p.dimensions || "Customizable (Built to Order)"}\n` +
      (imageUrl ? `Product Image: ${imageUrl}\n` : '') +
      `Product Link: ${liveLink}\n\n` +
      `Is this item available? Do you deliver to my location and what is the bespoke price?`
    );
    return `https://wa.me/254711507064?text=${text}`;
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
      style={{ contentVisibility: 'auto' }}
      id={`product-card-${product.id}`}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            // High-quality, guaranteed luxury cedar texturing as fallback
            setImgSrc('https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80');
          }}
        />
        
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Wishlist Heart Icon absolute */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-md transition-all duration-200 border cursor-pointer ${
            isFavorite 
              ? 'bg-red-500 text-white border-red-500' 
              : 'bg-white/80 hover:bg-white text-stone-600 border-stone-200/50 hover:text-red-500'
          }`}
          title={isFavorite ? 'Remove from Shorlist' : 'Add to Shortlist'}
          id={`favorite-btn-${product.id}`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Owner Outdated Image Deletion button */}
        {isAdminAuthenticated && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onDeleteProduct) {
                onDeleteProduct(product);
              }
            }}
            className="absolute top-3 right-14 p-2.5 rounded-full backdrop-blur-md shadow-md bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:scale-105 transition-all cursor-pointer z-30"
            title="Remove Outdated Item"
            id={`admin-delete-btn-${product.id}`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}

        {/* Dynamic Badging based on type (Wood only vs Chester) */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.category === 'beds' && product.woodOnly && (
            <span className="inline-flex items-center gap-1 bg-amber-900/90 text-amber-50 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
              <Trees className="w-3 h-3 text-amber-300" />
              <span>Wood Only Bed</span>
            </span>
          )}
          {product.category === 'beds' && product.isChester && (
            <span className="inline-flex items-center gap-1 bg-purple-900/90 text-purple-50 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 text-purple-300" />
              <span>Chester Bed</span>
            </span>
          )}

          {/* Table Varieties */}
          {product.category === 'tables' && product.materials.includes('Genuine Solid Mahogany Wood') && (
            <span className="inline-flex items-center gap-1 bg-amber-900/90 text-amber-50 text-[10px] font-bold px-2 py-0.5 rounded-md">
              <span>Solid Mahogany</span>
            </span>
          )}
          {product.category === 'tables' && product.materials.includes('Organic Teak Timber Slab') && (
            <span className="inline-flex items-center gap-1 bg-yellow-950/90 text-yellow-50 text-[10px] font-bold px-2 py-0.5 rounded-md">
              <span>Live Edge Teak</span>
            </span>
          )}

          {/* Sofa Varieties */}
          {product.category === 'sofas' && product.isChester && (
            <span className="inline-flex items-center gap-1 bg-indigo-950/90 text-indigo-50 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-indigo-300" />
              <span>Chesterfield Sofa</span>
            </span>
          )}

          {/* Shoe rack Varieties */}
          {product.category === 'shoeracks' && product.woodOnly && (
            <span className="inline-flex items-center gap-1 bg-amber-900/90 text-amber-50 text-[10px] font-bold px-2 py-0.5 rounded-md">
              <span>Wood closed cabinet</span>
            </span>
          )}

          {/* Quick specs overlay on hover */}
          <button
            onClick={() => onViewDetails(product)}
            className="md:opacity-0 group-hover:opacity-100 absolute top-2 left-2 bg-stone-900/80 hover:bg-stone-900 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow cursor-pointer uppercase"
            id={`quick-view-btn-${product.id}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Card Metadata Details */}
      <div className="p-5 flex-grow flex flex-col justify-between" id={`card-body-${product.id}`}>
        <div>
          {/* Category breadcrumb */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onCategoryClick) {
                onCategoryClick(product.category);
              }
            }}
            className="text-[10px] uppercase tracking-widest font-bold text-amber-850 hover:text-amber-600 transition-colors font-mono cursor-pointer text-left block outline-none focus:underline"
            title={`View all ${product.category}`}
          >
            {product.category === 'beds' && 'Bedroom Comfort'}
            {product.category === 'dining' && 'Dining Collection'}
            {product.category === 'sofas' && 'Sofas & Living'}
            {product.category === 'tables' && 'Accent Tables'}
            {product.category === 'shoeracks' && 'Shoe Organizers'}
            {product.category === 'tvstands' && 'Media Consoles'}
            {product.category === 'kitchen' && 'Kitchen Hardware'}
          </button>

          <h3 className="text-base font-bold text-stone-900 font-sans group-hover:text-amber-800 transition-colors mt-1 line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 font-sans mt-2 line-clamp-2 h-8 leading-snug">
            {product.description}
          </p>

          <div className="mt-3 flex flex-col gap-1 text-[11px] text-stone-600 border-t border-stone-100 pt-3">
            <span className="flex justify-between">
              <span className="font-semibold text-stone-400">Dimensions:</span>
              <span className="text-stone-800">{product.dimensions || "Customizable"}</span>
            </span>
            <span className="flex justify-between">
              <span className="font-semibold text-stone-400">Main Timber:</span>
              <span className="text-stone-800 truncate max-w-[150px]">{product.materials[0]}</span>
            </span>
          </div>
        </div>

        {/* Pricing & Primary Action Controls */}
        <div className="mt-5 border-t border-stone-100 pt-4 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-xxs uppercase font-bold tracking-widest text-stone-400 font-mono">Bespoke pricing</span>
            <span className="text-sm font-bold text-amber-900 font-sans tracking-tight">
              {product.price && product.price > 0 ? formatPrice(product.price) : 'Enquire for Price'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* View detailed specs */}
            <button
              onClick={() => onViewDetails(product)}
              className="p-2.5 rounded-xl border border-stone-200 text-stone-700 hover:text-amber-800 hover:border-amber-400 hover:bg-amber-50/30 transition-all cursor-pointer"
              title="Specific Details & Finish builder"
              id={`details-action-${product.id}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium p-2.5 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center cursor-pointer"
              title="Direct Inquiry matching item details"
              id={`whatsapp-card-link-${product.id}`}
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
