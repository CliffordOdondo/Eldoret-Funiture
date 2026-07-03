/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Phone, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Drill } from 'lucide-react';

interface HeroProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onExploreCatalog: () => void;
  quickCategorySelect: (catId: string) => void;
}

export default function Hero({
  searchText,
  onSearchChange,
  onExploreCatalog,
  quickCategorySelect
}: HeroProps) {
  const [localSearch, setLocalSearch] = useState(searchText);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
    onExploreCatalog();
  };

  const clearSearch = () => {
    setLocalSearch('');
    onSearchChange('');
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden" id="home">
      {/* 100% full-bleed background image with responsive parallax-style depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80"
          alt="Eldoret Furniture Luxury Showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-45 scale-105 transform hover:scale-100 transition-all duration-1000"
          id="hero-massive-bg-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-stone-950/90 md:hidden block" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Card (Glassmorphism/translucent overlay on left) */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left" id="hero-text-container">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-4 py-2 rounded-full text-xs font-bold text-amber-300 tracking-wider uppercase w-fit mb-6 animate-pulse">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Bespoke Handcrafted Furniture in Kenya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.1] mb-6">
              Empower Your Space With <br />
              <span className="text-amber-500 drop-shadow-sm">Eldoret Wood Masters</span>
            </h1>
            
            <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed max-w-2xl mb-8">
              Welcome to <strong>ELDORET FUNITURE</strong>, where premium timbers are seasoned, hand-carved, and upholstered to perfection. 
              Explore Kenya’s ultimate live showroom featuring bespoke wood-only beds, majestic Chesterfield beds, modular kitchens, and custom couches crafted to match your exact dimensions.
            </p>

            {/* Smart Search Bar */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 max-w-2xl flex flex-col sm:flex-row gap-2 mb-8" id="hero-search-form">
              <div className="relative flex-grow flex items-center px-3">
                <Search className="w-5 h-5 text-amber-400 absolute left-3" />
                <input
                  type="text"
                  placeholder="Search beds, sofas, TV consoles, modular shoe racks..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full bg-transparent border-none text-white placeholder-stone-400 focus:outline-none py-3.5 pl-10 text-sm font-sans"
                  id="hero-input-field"
                />
                {localSearch && (
                  <button 
                    type="button" 
                    onClick={clearSearch} 
                    className="text-stone-400 hover:text-white text-xs px-2 font-mono"
                  >
                    Clear
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-stone-950 font-extrabold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer text-sm tracking-wide"
                id="hero-search-submit"
              >
                <span>Browse Live Showroom</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
              </button>
            </form>

            {/* Quick Filter Suggestion tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 text-stone-400 text-xs">
              <span className="font-bold text-stone-300 font-mono">POPULAR:</span>
              <button 
                type="button"
                onClick={() => { setLocalSearch('Chester Beds'); onSearchChange('Chester Beds'); onExploreCatalog(); }}
                className="bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1 rounded-lg transition-colors font-medium text-stone-200 cursor-pointer"
              >
                Chester Beds 🛏️
              </button>
              <button 
                type="button"
                onClick={() => { setLocalSearch('Wood Only'); onSearchChange('Wood Only'); onExploreCatalog(); }}
                className="bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1 rounded-lg transition-colors font-medium text-stone-200 cursor-pointer"
              >
                Wood-Only Beds 🌲
              </button>
              <button 
                type="button"
                onClick={() => { setLocalSearch('Dining'); onSearchChange('Dining'); onExploreCatalog(); }}
                className="bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1 rounded-lg transition-colors font-medium text-stone-200 cursor-pointer"
              >
                Dining Tables 🍽️
              </button>
              <button 
                type="button"
                onClick={() => { setLocalSearch('Chesterfield'); onSearchChange('Chesterfield'); onExploreCatalog(); }}
                className="bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1 rounded-lg transition-colors font-medium text-stone-200 cursor-pointer"
              >
                Chesterfield Sofas 🛋️
              </button>
            </div>

            {/* Call / WhatsApp Primary Actions Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/254711507064?text=Hello%20Eldoret%20Funiture!%20I%20am%20browsing%20your%20website%20catalog%20and%20would%20like%20to%20place%20an%20order%20or%20make%20a%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-sm"
                id="hero-whatsapp-link"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Inquire on WhatsApp (Admin)</span>
              </a>

              <a
                href="tel:+254711507064"
                className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-sm"
                id="hero-tel-link"
              >
                <Phone className="w-5 h-5" />
                <span>Call Workshop Hotline</span>
              </a>
            </div>
          </div>

          {/* Secondary beautiful Floating Glass card with features */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 lg:flex hidden flex-col justify-center self-stretch" id="hero-floating-specifications">
            <h3 className="text-lg font-bold font-sans text-amber-400 flex items-center gap-2 border-b border-white/10 pb-3">
              <Drill className="w-5 h-5" />
              <span>Workshop Guarantee</span>
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase font-mono tracking-wider">Aged Hardwoods Only</h4>
                  <p className="text-stone-300 mt-1">We source high density Mahogany, Teak, and Cypress wood with guaranteed long-term core stability.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase font-mono tracking-wider">Kiln Moisture Dried</h4>
                  <p className="text-stone-300 mt-1">All boards undergo 4 weeks inside specialized seasoning chambers to completely eliminate cracks or warp.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase font-mono tracking-wider">Countrywide Insured Delivery</h4>
                  <p className="text-stone-300 mt-1">We wrap and transport custom pieces direct to your doorstep anywhere across Kenya, safely insured.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onExploreCatalog}
              className="w-full text-center py-3 border border-white/20 hover:bg-white/10 text-white font-bold text-xs rounded-xl tracking-wider uppercase font-mono transition-all hover:border-amber-400 hover:text-amber-400 cursor-pointer"
            >
              Explore 100+ Live Designs &darr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
