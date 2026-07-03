/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './lib/firebase';
import { CATEGORIES, PRODUCTS } from './data';
import { Product } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import AdminPortal from './components/AdminPortal';
import AboutUs from './components/AboutUs';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import Footer from './components/Footer';
import { 
  SlidersHorizontal, 
  Trash2, 
  MessageSquare, 
  X, 
  Heart, 
  Sparkles, 
  Trees, 
  Grid2X2, 
  Grid3X3, 
  HelpCircle,
  Phone,
  Filter,
  AlertTriangle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function App() {
  // Navigation & Filtering States
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchText, setSearchText] = useState<string>('');
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>('all'); // e.g. 'woodOnly', 'chester', 'all'
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  
  // Custom & Hidden Showroom States
  const [customProducts, setCustomProducts] = useState<Product[]>([]);
  const [hiddenProductIds, setHiddenProductIds] = useState<Set<string>>(new Set());
  const [permanentlyDeletedIds, setPermanentlyDeletedIds] = useState<Set<string>>(new Set());
  
  // Custom non-blocking alert / confirmation modal states
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Auto-dismiss Toast Notification
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Lifted authentication state of the workshop owner (cached inside localStorage for a smooth workspace experience)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('eldoret_owner_authenticated') === 'true';
    }
    return false;
  });

  // Sync custom products from Firestore on mount so visitors see custom images immediately
  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: Product[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          name: data.name,
          category: data.category,
          price: Number(data.price),
          description: data.description,
          image: data.image,
          dimensions: data.dimensions,
          materials: data.materials || [],
          features: data.features || [],
          isChester: data.isChester || false,
          woodOnly: data.woodOnly || false
        } as Product);
      });
      setCustomProducts(items);
    }, (error) => {
      console.error("Firestore loading error: ", error);
    });

    return () => unsubscribe();
  }, []);

  // Sync hidden standard product IDs from Firestore on mount
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'hidden_products'), (snapshot) => {
      const ids = new Set<string>();
      const permIds = new Set<string>();
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.permanentlyDeleted) {
          permIds.add(doc.id);
        } else {
          ids.add(doc.id);
        }
      });
      setHiddenProductIds(ids);
      setPermanentlyDeletedIds(permIds);
    }, (error) => {
      console.error("Firestore loading hidden products error: ", error);
    });

    return () => unsubscribe();
  }, []);

  // Handler to permanently remove outdated images / products (custom or standard)
  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
  };

  // Actual deletion after owner confirms in our custom dialog
  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;
    const currentProduct = productToDelete;
    const isCustom = currentProduct.id.startsWith('custom-');
    
    // Reset state first to close modal
    setProductToDelete(null);

    try {
      if (isCustom) {
        await deleteDoc(doc(db, 'products', currentProduct.id));
        setToast({ 
          message: `"${currentProduct.name}" was permanently deleted from your showroom.`, 
          type: 'success' 
        });
      } else {
        await setDoc(doc(db, 'hidden_products', currentProduct.id), {
          id: currentProduct.id,
          name: currentProduct.name,
          category: currentProduct.category,
          image: currentProduct.image,
          hiddenAt: Date.now()
        });
        setToast({ 
          message: `"${currentProduct.name}" was hidden from the showroom as an outdated item.`, 
          type: 'success' 
        });
      }
    } catch (err: any) {
      console.error("Error removing product: ", err);
      setToast({ 
        message: `Failed to remove product: ${err.message || err}`, 
        type: 'error' 
      });
    }
  };

  // Handler to restore hidden standard products back to showroom
  const handleRestoreProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, 'hidden_products', productId));
      setToast({ 
        message: "Product image successfully restored back to your showroom!", 
        type: 'success' 
      });
    } catch (err: any) {
      console.error("Error restoring product: ", err);
      setToast({ 
        message: `Failed to restore product: ${err.message || err}`, 
        type: 'error' 
      });
    }
  };

  // Handler to completely/permanently delete a standard product from showroom and manager
  const handlePermanentlyDeleteStandardProduct = async (productId: string) => {
    try {
      const product = PRODUCTS.find(p => p.id === productId);
      const name = product ? product.name : "Product";

      await setDoc(doc(db, 'hidden_products', productId), {
        id: productId,
        name: name,
        permanentlyDeleted: true,
        deletedAt: Date.now()
      });

      setToast({ 
        message: `"${name}" has been permanently deleted from your showroom.`, 
        type: 'success' 
      });
    } catch (err: any) {
      console.error("Error permanently deleting product: ", err);
      setToast({ 
        message: `Failed to permanently delete: ${err.message || err}`, 
        type: 'error' 
      });
    }
  };

  // List of hidden standard products for admin restoration
  const hiddenProductsList = useMemo(() => {
    return PRODUCTS.filter(p => hiddenProductIds.has(p.id));
  }, [hiddenProductIds]);

  // Combine hardcoded PRODUCTS (filtered of hidden or permanently deleted ones) with custom products from Firestore
  const allProducts = useMemo(() => {
    const visibleStandardProducts = PRODUCTS.filter(p => !hiddenProductIds.has(p.id) && !permanentlyDeletedIds.has(p.id));
    return [...customProducts, ...visibleStandardProducts];
  }, [customProducts, hiddenProductIds, permanentlyDeletedIds]);

  // Detail Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Track if "Manage Showroom" admin entry point is visible (Option A)
  const [isAdminVisible, setIsAdminVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('eldoret_admin_visible');
      if (stored === 'true') return true;
      
      const params = new URLSearchParams(window.location.search);
      const isParamAdmin = params.get('admin') === 'true' || params.get('manage') === 'true' || params.get('owner') === 'true';
      if (isParamAdmin) {
        localStorage.setItem('eldoret_admin_visible', 'true');
        return true;
      }
    }
    return false;
  });

  // Watch for explicit URL changes to disable or enable
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('admin') === 'false') {
        localStorage.removeItem('eldoret_admin_visible');
        setIsAdminVisible(false);
      } else if (params.get('admin') === 'true' || params.get('manage') === 'true' || params.get('owner') === 'true') {
        localStorage.setItem('eldoret_admin_visible', 'true');
        setIsAdminVisible(true);
      }
    }
  }, []);

  // Layout View State: 3 items grid or 4 items grid density
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);

  // Toggle Favorite callback
  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Quick select category handler (from header/footer)
  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setSubCategoryFilter('all'); // reset sub-category variety filters
    
    // Scroll smoothly to catalog section
    const catalogEl = document.getElementById('catalog-showroom');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Clear state filters
  const resetAllFilters = () => {
    setActiveCategoryId('all');
    setSearchText('');
    setSubCategoryFilter('all');
  };

  // Selected Category Info Object
  const currentCategoryInfo = useMemo(() => {
    return CATEGORIES.find(c => c.id === activeCategoryId);
  }, [activeCategoryId]);

  // Dynamic filter products pipeline
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // 1. Core Category Filter
      if (activeCategoryId !== 'all' && product.category !== activeCategoryId) {
        return false;
      }

      // 2. Search Text Query (Names, Materials, Specs, Category)
      if (searchText.trim().length > 0) {
        const query = searchText.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesMaterials = product.materials.some(m => m.toLowerCase().includes(query));
        const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
        const matchesCatName = product.category.toLowerCase().includes(query);

        if (!matchesName && !matchesDesc && !matchesMaterials && !matchesFeatures && !matchesCatName) {
          return false;
        }
      }

      // 3. Sub-category & Variety Filters (Wood Only beds vs Chester Beds, etc.)
      if (subCategoryFilter === 'woodOnly' && !product.woodOnly) {
        return false;
      }
      if (subCategoryFilter === 'chester' && !product.isChester) {
        return false;
      }

      return true;
    });
  }, [activeCategoryId, searchText, subCategoryFilter, allProducts]);

  // Favorites items list
  const favoriteProductsList = useMemo(() => {
    return allProducts.filter(p => favorites.includes(p.id));
  }, [favorites, allProducts]);

  // Bulk Whatsapp Favorite Quote builder
  const handleBulkFavoriteWhatsApp = () => {
    if (favoriteProductsList.length === 0) return;
    
    const countText = favoriteProductsList.length;
    let message = `Hello ELDORET FUNITURE! I have shortlisted ${countText} bespoke items from your website and I would like to get a quote and delivery estimate:\n\n`;
    
    favoriteProductsList.forEach((p, idx) => {
      message += `${idx + 1}. ${p.name} (Code: ${p.id})\n`;
      message += `   Dimensions: ${p.dimensions || "Customizable (Built to Order)"}\n\n`;
    });
    
    message += `I would love to know if these are in stock or if you can craft them for me. Thank you!`;
    const url = `https://wa.me/254711507064?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans select-none selection:bg-amber-100 selection:text-amber-800">
      
      {/* 1. Sticky Header Header */}
      <Header
        favoritesCount={favorites.length}
        activeCategory={activeCategoryId}
        onNavigateToCategory={handleCategorySelect}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenInquiryGeneral={() => {
          const firstProduct = allProducts[0];
          setSelectedProduct(firstProduct || null);
        }}
      />

      {/* Admin Mode Banner */}
      {isAdminAuthenticated && (
        <div className="bg-amber-900 text-amber-50 px-4 py-3 text-xs flex flex-wrap items-center justify-between gap-3 z-40 border-b border-amber-800 font-sans shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              <strong>Owner Showroom Manager Mode Active</strong> — Click the red trash icon <Trash2 className="w-3.5 h-3.5 inline text-red-300" /> on any product card below to remove outdated images, or click the bottom-right <strong>@</strong> sign to post new bespoke designs.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="bg-amber-950 hover:bg-stone-900 text-amber-100 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Manage / Post Items
            </button>
            <button
              onClick={() => {
                setIsAdminAuthenticated(false);
                localStorage.removeItem('eldoret_owner_authenticated');
              }}
              className="text-amber-300 hover:text-white underline font-semibold cursor-pointer"
            >
              Logout (Exit Admin)
            </button>
          </div>
        </div>
      )}

      {/* 2. Top Banner Hero Section */}
      <Hero
        searchText={searchText}
        onSearchChange={setSearchText}
        onExploreCatalog={() => {
          const el = document.getElementById('catalog-showroom');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        quickCategorySelect={handleCategorySelect}
      />

      {/* 3. Catalog & Showroom Hub */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[145px] lg:scroll-mt-[112px]" id="catalog-showroom">
        
        {/* Hub Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-stone-200">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-800 font-mono">
              Live Showroom Catalog
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1 font-sans">
              {activeCategoryId === 'all' ? 'Exquisite Showroom Varieties' : currentCategoryInfo?.name}
            </h2>
            <p className="text-xs text-stone-500 font-sans mt-2 max-w-xl leading-normal">
              {activeCategoryId === 'all' 
                ? 'We offer an extensive selection of exquisite bespoke furniture. Each category is packed with premium options handcrafted to give you maximum design choice.' 
                : currentCategoryInfo?.description
              }
            </p>
          </div>

          {/* Grid Density controllers with results count summary */}
          <div className="flex items-center gap-3 self-start md:self-auto text-xs text-stone-500 font-sans">
            <span className="font-semibold">{filteredProducts.length} Match{filteredProducts.length !== 1 && 'es'} found</span>
            <span className="stone-200">|</span>
            {/* 3 Columns selector */}
            <button
              onClick={() => setGridColumns(3)}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                gridColumns === 3 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
              }`}
              title="Wide grid layout"
              id="grid-cols-3-btn"
            >
              <Grid2X2 className="w-4 h-4" />
            </button>
            {/* 4 Columns selector */}
            <button
              onClick={() => setGridColumns(4)}
              className={`p-2 rounded-lg border transition-all hidden lg:block cursor-pointer ${
                gridColumns === 4 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
              }`}
              title="Compact grid layout (Desktop only)"
              id="grid-cols-4-btn"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4. Filter Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Side Control block for categories (Desktop/Mobile unified) */}
          <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-6" id="filters-panel">
            
            {/* Categorization header */}
            <div>
              <h3 className="text-xs font-bold text-stone-700 uppercase tracking-widest font-mono flex items-center gap-1.5 border-b border-stone-100 pb-2 mb-3">
                <Filter className="w-3.5 h-3.5 text-amber-800" />
                <span>Shop Categories</span>
              </h3>
              
              <div className="flex flex-col gap-1.5" id="category-selectors-list">
                {/* All items shortcut */}
                <button
                  type="button"
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    activeCategoryId === 'all'
                      ? 'bg-amber-900 text-amber-50 shadow-sm font-bold'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/40'
                  }`}
                  id="cat-selector-all"
                >
                  <span>All Collections</span>
                </button>

                {/* Sub category iterators */}
                {CATEGORIES.map((cat) => {
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer ${
                        activeCategoryId === cat.id
                          ? 'bg-amber-900 text-amber-50 shadow-sm border-amber-900 font-bold'
                          : 'bg-stone-50/50 text-stone-700 hover:bg-stone-100 border-stone-200'
                      }`}
                      id={`cat-selector-${cat.id}`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Variety Subcategory toggler - essential forbeds & sofas varieties */}
            <div className="border-t border-stone-100 pt-5">
              <h3 className="text-xs font-bold text-stone-700 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-3">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-800" />
                <span>Variety & Wood Sort</span>
              </h3>

              <div className="flex flex-col gap-1.5" id="variety-options-list">
                {/* 1. Show all */}
                <button
                  onClick={() => setSubCategoryFilter('all')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    subCategoryFilter === 'all'
                      ? 'bg-stone-100 border-l-2 border-stone-900 text-stone-900 font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                  }`}
                  id="variety-opt-all"
                >
                  <span className="w-2 h-2 rounded-full bg-stone-400" />
                  <span>All Items Combined</span>
                </button>

                {/* 2. Solid Wood Only Option */}
                <button
                  onClick={() => setSubCategoryFilter('woodOnly')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    subCategoryFilter === 'woodOnly'
                      ? 'bg-amber-55/60 border-l-2 border-amber-700 text-amber-900 font-bold'
                      : 'text-stone-600 hover:text-amber-800 hover:bg-amber-50/20'
                  }`}
                  id="variety-opt-wood"
                >
                  <Trees className="w-3.5 h-3.5 text-amber-750" />
                  <span>100% Solid Wood Only</span>
                </button>

                {/* 3. Chester Upholstery Option */}
                <button
                  onClick={() => setSubCategoryFilter('chester')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    subCategoryFilter === 'chester'
                      ? 'bg-purple-55/60 border-l-2 border-purple-700 text-purple-900 font-bold'
                      : 'text-stone-600 hover:text-purple-800 hover:bg-purple-50/20'
                  }`}
                  id="variety-opt-chester"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Chesterfield/Padded</span>
                </button>
              </div>

              {/* Helpful dynamic helper tip text depending on active category */}
              <div className="mt-4 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50 text-[10.5px] text-amber-900 font-sans leading-relaxed">
                {activeCategoryId === 'beds' && (
                  <span>💡 <strong>Beds Tip:</strong> Wood-only beds feature premium solid grains. Chester beds offer Chesterfield-tufted headboards wrapped in luxurious velvet colors!</span>
                )}
                {activeCategoryId === 'all' && (
                  <span>💡 Browse our collections. Customize any choice by tapping "Details".</span>
                )}
                {activeCategoryId === 'tables' && (
                  <span>💡 <strong>Tables Tip:</strong> Variety includes sleek mahogany drawer models, geometric styles, and high-end natural live edge teak slabs!</span>
                )}
                {activeCategoryId === 'sofas' && (
                  <span>💡 <strong>Sofas Tip:</strong> Chesterfield deep-button sofas can be upholstered in heavy cloth, velvet, or glossy leatherette!</span>
                )}
                {activeCategoryId === 'shoeracks' && (
                  <span>💡 <strong>Racks Tip:</strong> Varieties include slatted open-air pinewood levels, vertical space savers, and plush velvet entryway bench racks!</span>
                )}
                {activeCategoryId === 'tvstands' && (
                  <span>💡 <strong>TV Stands:</strong> Choose space-saving floating wall consoles or stately floor stand assemblies in solid Cypress.</span>
                )}
                {activeCategoryId === 'kitchen' && (
                  <span>💡 <strong>Kitchen Cabinets:</strong> Heavy-duty modular frameworks and spacious solid pantries with integrated drawer rails.</span>
                )}
              </div>
            </div>

            {/* Quick stats / Carpenter Direct panel */}
            <div className="border-t border-stone-100 pt-5 space-y-3.5">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-widest font-mono">
                Workshop Contact
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+254711507064"
                  className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-2.5 px-4 rounded-xl text-center justify-center text-xs transition-colors cursor-pointer"
                  id="side-call-btn"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Dial +254711507064</span>
                </a>
                <a
                  href="https://wa.me/254711507064?text=Hello%20Eldoret%20Funiture!%20I%20am%20viewing%20your%20showroom%20website%2520and%20would%20like%20to%2520discuss%2520pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-center justify-center text-xs transition-colors cursor-pointer"
                  id="side-wa-btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Manager</span>
                </a>
              </div>
            </div>

          </div>

          {/* 5. Ultimate Products Grid */}
          <div className="lg:col-span-9 space-y-8" id="catalog-products-section">
            
            {/* Active search parameters alert banner */}
            {(searchText.trim().length > 0 || subCategoryFilter !== 'all') && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center justify-between text-xs text-amber-900 font-sans" id="filters-alert-panel">
                <div className="flex flex-wrap items-center gap-2">
                  <span>Currently showing results matching:</span>
                  {searchText.trim().length > 0 && (
                    <span className="bg-white border border-amber-300 px-2 py-0.5 rounded font-mono font-bold font-semibold text-amber-950">
                      Query: "{searchText}"
                    </span>
                  )}
                  {subCategoryFilter === 'woodOnly' && (
                    <span className="bg-amber-900 text-white px-2 py-0.5 rounded font-mono font-bold font-semibold">
                      🌲 Solid Wood Only
                    </span>
                  )}
                  {subCategoryFilter === 'chester' && (
                    <span className="bg-purple-900 text-white px-2 py-0.5 rounded font-mono font-bold font-semibold">
                      ✨ Chesterfield
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-amber-900 hover:text-amber-700 underline font-bold cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Zero matching items fallback interface */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center max-w-lg mx-auto" id="no-products-fallback">
                <HelpCircle className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-stone-900 font-sans">No matching items found</h3>
                <p className="text-stone-500 text-xs mt-2 font-sans leading-relaxed">
                  We have multiple premium designs for each of our tables, beds, sofas, and racks. 
                  Try turning off your current 'Variety Filter' or searching for shorter keywords (e.g. "oak", "mahogany").
                </p>
                <button
                  onClick={resetAllFilters}
                  className="mt-6 bg-stone-950 hover:bg-stone-800 text-white font-semibold text-xs py-2.5 px-5 rounded-xl transition-all cursor-pointer"
                  id="reset-filters-btn"
                >
                  Show All Items
                </button>
              </div>
            ) : (
              // Active Product Grid
              <div 
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridColumns === 3 
                    ? 'lg:grid-cols-3' 
                    : 'lg:grid-cols-4'
                } gap-6 md:gap-8`}
                id="active-products-grid"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onViewDetails={setSelectedProduct}
                    onQuickInquire={(p) => setSelectedProduct(p)}
                    onCategoryClick={handleCategorySelect}
                    isAdminAuthenticated={isAdminAuthenticated}
                    onDeleteProduct={handleDeleteProduct}
                  />
                ))}
              </div>
            )}

          </div>

        </div>

      </main>

      {/* 5. About Us Legacy & Heritage */}
      <AboutUs />

      {/* 6. Elaborate manufacturing stories & assurances */}
      <CraftsmanshipSection />

      {/* 7. Showroom Location & Operating Hours Footer */}
      <Footer 
        onQuickCategory={handleCategorySelect} 
      />

      {/* 8. Showroom Customizer Dialog Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* 9. Shortlist Drawer HUD overlay */}
      {isFavoritesOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex justify-end" id="favorites-shortlist-overlay">
          <div 
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
            id="favorites-drawer-container"
          >
            {/* Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                <h3 className="text-lg font-black text-stone-900 font-sans tracking-tight">
                  Your Showroom Shortlist
                </h3>
              </div>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors cursor-pointer"
                title="Close Shortlist"
                id="close-favorites-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List entries */}
            <div className="flex-grow p-5 overflow-y-auto space-y-4" id="favorites-items-list">
              {favoriteProductsList.length === 0 ? (
                <div className="text-center py-16 text-stone-400 space-y-3">
                  <Heart className="w-12 h-12 mx-auto text-stone-300 border border-stone-200 p-2.5 rounded-full" />
                  <p className="text-xs font-sans">No items added to shortlist yet.</p>
                  <p className="text-[10px] text-stone-500 font-sans leading-relaxed">
                    Navigate our categories and tap the heart icon on any product card to create a direct quote shortlist.
                  </p>
                </div>
              ) : (
                favoriteProductsList.map((p) => (
                  <div 
                    key={p.id} 
                    className="flex gap-4 p-3 rounded-xl border border-stone-200 hover:border-amber-400/50 bg-stone-50/50 transition-all items-center justify-between"
                    id={`fav-item-${p.id}`}
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        src={p.image}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-12 object-cover rounded-lg border border-stone-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 line-clamp-1">{p.name}</h4>
                        <span className="text-[11px] font-sans text-amber-800 font-extrabold block">
                          Bespoke On Request
                        </span>
                        <span className="text-[9px] text-stone-400 font-mono">Code: {p.id}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleToggleFavorite(p.id)}
                      className="p-1.5 rounded-full hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                      title="Remove item"
                      id={`remove-fav-${p.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Quote Action parameters at the bottom */}
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              {favoriteProductsList.length > 0 && (
                <>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 font-mono">
                    <span>Selected Items count:</span>
                    <span>{favoriteProductsList.length}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1 border-t border-stone-200/50 pt-2">
                    <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                      All products are fully customizable using solid mahogany slabs or premium luxury fabrics. We will compile a bundled quote matching your exact layout specifications.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {/* Clear all favorites button */}
                    <button
                      onClick={() => setFavorites([])}
                      className="w-full text-center py-2 border border-stone-250 hover:bg-stone-200 rounded-xl text-xs font-medium text-stone-600 transition-colors cursor-pointer"
                      id="clear-all-favorites"
                    >
                      Clear Showroom shortlist
                    </button>

                    {/* Submit list quotes WhatsApp */}
                    <button
                      onClick={handleBulkFavoriteWhatsApp}
                      className="w-full text-center py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow flex items-center justify-center gap-1.5 cursor-pointer"
                      id="bulk-inquiry-favorites-btn"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Request Shortlist Quote</span>
                    </button>
                  </div>
                </>
              )}
              
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="w-full text-center py-2 text-stone-500 hover:text-stone-950 font-bold text-[10.5px] cursor-pointer"
                id="close-drawer-bottom-link"
              >
                Continue Showroom Browsing
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 10. Showroom Manager Admin Panel */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        customProducts={customProducts}
        onDeleteProduct={handleDeleteProduct}
        isAdminAuthenticated={isAdminAuthenticated}
        setIsAdminAuthenticated={setIsAdminAuthenticated}
        hiddenProducts={hiddenProductsList}
        onRestoreProduct={handleRestoreProduct}
        onPermanentlyDeleteStandardProduct={handlePermanentlyDeleteStandardProduct}
      />

      {/* Custom Toast Notification */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full px-4">
          <div className={`p-4 rounded-xl shadow-lg border flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 ${
            toast.type === 'success' 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
              : toast.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-900'
              : 'bg-stone-50 border-stone-200 text-stone-900'
          }`}>
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            )}
            <div className="text-xs font-semibold flex-1 leading-normal">{toast.message}</div>
            <button 
              onClick={() => setToast(null)}
              className="text-stone-400 hover:text-stone-700 font-mono text-sm leading-none cursor-pointer p-0.5"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Custom React-Based Delete Confirmation Dialog */}
      {productToDelete && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-2xl max-w-md w-full border border-stone-200 shadow-xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="p-5 border-b border-stone-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-stone-900 font-sans flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Confirm Removal</span>
              </h3>
              <button 
                onClick={() => setProductToDelete(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100 text-xs text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  {productToDelete.id.startsWith('custom-') 
                    ? `You are about to permanently delete this custom product "${productToDelete.name}" from your database.`
                    : `You are about to hide the default catalog item "${productToDelete.name}". It will be marked as outdated and hidden from visitors.`}
                </p>
              </div>

              <div className="flex items-center gap-3 p-2 bg-stone-50 rounded-xl border border-stone-100">
                <img 
                  src={productToDelete.image} 
                  alt={productToDelete.name} 
                  className="w-12 h-12 object-cover rounded-lg border border-stone-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{productToDelete.name}</h4>
                  <span className="text-[10px] text-stone-400 capitalize font-mono">{productToDelete.category}</span>
                </div>
              </div>
            </div>

            <div className="px-5 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setProductToDelete(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteProduct}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer shadow flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Confirm Removal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tiny @ symbol at the bottom-right corner of the website */}
      <div 
        className="fixed bottom-2 right-2 z-50 text-[10px] text-stone-500/30 hover:text-stone-500/90 font-mono cursor-pointer select-none transition-colors p-1"
        onClick={() => setIsAdminOpen(true)}
        title="Click to manage showroom"
        id="admin-at-trigger"
      >
        @
      </div>

    </div>
  );
}
