/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageSquare, Compass, Award, ShieldCheck, Heart } from 'lucide-react';

interface HeaderProps {
  favoritesCount: number;
  onNavigateToCategory: (categoryId: string) => void;
  activeCategory: string;
  onOpenFavorites: () => void;
  onOpenInquiryGeneral: () => void;
}

export default function Header({
  favoritesCount,
  onNavigateToCategory,
  activeCategory,
  onOpenFavorites,
  onOpenInquiryGeneral
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* Top micro-banner */}
      <div className="bg-stone-900 text-stone-100 text-xs py-2 px-4 flex justify-between items-center tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>5-Year Structural Wood Warranty</span>
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Premium Aged Hardwood Only</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+254711507064"
            className="flex items-center gap-1 hover:text-amber-400 transition-colors font-medium font-mono"
            id="top-phone-link"
          >
            <Phone className="w-3 h-3 text-amber-500" />
            <span>+254 711 507 064</span>
          </a>
          <span className="hidden sm:inline text-stone-400">|</span>
          <span className="hidden sm:inline">Deliveries Countrywide</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center" id="main-navigation">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none" 
          onClick={() => {
            onNavigateToCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="brand-logo"
        >
          <img 
            src={new URL('../assets/images/dark_premium_logo_1783072476284.jpg', import.meta.url).href} 
            alt="Eldoret Furniture Emblem" 
            className="w-11 h-11 rounded-xl object-cover border border-stone-900/10 shadow-xs shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-sans leading-none">
              ELDORET <span className="text-amber-700">FUNITURE</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-stone-500 font-mono mt-1 font-semibold leading-none">
              Bespoke African Carving & Comfort
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-[11px] font-bold text-stone-700 font-mono uppercase tracking-widest">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="hover:text-amber-700 transition-all cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            id="nav-link-home"
          >
            Home
          </button>
          <button 
            onClick={() => { document.getElementById('catalog-showroom')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
            className="hover:text-amber-700 transition-all cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            id="nav-link-showroom"
          >
            Showroom
          </button>
          <button 
            onClick={() => { document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
            className="hover:text-amber-700 transition-all cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            id="nav-link-about"
          >
            About Us
          </button>
          <button 
            onClick={() => { document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
            className="hover:text-amber-700 transition-all cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            id="nav-link-process"
          >
            Our Process
          </button>
          <button 
            onClick={() => { document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
            className="hover:text-amber-700 transition-all cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            id="nav-link-contact"
          >
            Contact
          </button>
        </nav>

        {/* Quick Utility Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Wishlist button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2.5 rounded-full text-stone-600 hover:bg-stone-100 hover:text-red-500 transition-all border border-stone-200"
            title="View Showroom Shortlist"
            id="wishlist-btn"
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-stone-50 animate-bounce">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Dynamic WhatsApp quick call */}
          <a
            href="https://wa.me/254711507064?text=Hello%20Eldoret%20Funiture!%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20about%20custom%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
            id="whatsapp-header-btn"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Inquiry</span>
          </a>

          {/* Tel call */}
          <a
            href="tel:+254711507064"
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
            id="call-header-btn"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">Call Workshop</span>
            <span className="md:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Sub-navigation Row */}
      <div className="lg:hidden flex items-center justify-around border-t border-stone-200 bg-stone-100/95 py-3 px-4 text-[10px] font-bold text-stone-600 font-mono uppercase tracking-wider">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="hover:text-amber-800 active:text-amber-800 transition-colors cursor-pointer"
          id="mobile-nav-home"
        >
          Home
        </button>
        <button 
          onClick={() => { document.getElementById('catalog-showroom')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
          className="hover:text-amber-800 active:text-amber-800 transition-colors cursor-pointer"
          id="mobile-nav-showroom"
        >
          Showroom
        </button>
        <button 
          onClick={() => { document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
          className="hover:text-amber-800 active:text-amber-800 transition-colors cursor-pointer"
          id="mobile-nav-about"
        >
          About Us
        </button>
        <button 
          onClick={() => { document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
          className="hover:text-amber-800 active:text-amber-800 transition-colors cursor-pointer"
          id="mobile-nav-process"
        >
          Process
        </button>
        <button 
          onClick={() => { document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} 
          className="hover:text-amber-800 active:text-amber-800 transition-colors cursor-pointer"
          id="mobile-nav-contact"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
