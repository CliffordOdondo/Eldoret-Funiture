/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldAlert, Award, ChevronRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onQuickCategory: (catId: string) => void;
}

export default function Footer({ onQuickCategory }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-stone-800 pt-16 pb-8 scroll-mt-[145px] lg:scroll-mt-[112px]" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-stone-800">
        
        {/* Branch 1: Brand & Bio */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 select-none">
            <img 
              src={new URL('../assets/images/dark_premium_logo_1783072476284.jpg', import.meta.url).href} 
              alt="Eldoret Furniture Emblem" 
              className="w-10 h-10 rounded-xl object-cover border border-stone-800 shadow-md shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-sans">
                ELDORET <span className="text-amber-500 font-bold">FUNITURE</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-stone-500 font-mono">
                The Wood & Comfort Masters
              </span>
            </div>
          </div>
          
          <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
            Based in Eldoret, Kenya, we specialize in hand-crafted furniture using fully seasoned Oak, Teak, Mahogany, Mvule, and premium fabrics. We build solid wood beds, sofas, luxurious Chesterfield headboards, TV consoles, and kitchen fittings tailored to your custom specifications.
          </p>
          
          <div className="space-y-2.5 text-xs text-stone-300">
            <a 
              href="mailto:info@eldoretfuniture.com" 
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
              id="footer-email-link"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>info@eldoretfuniture.com</span>
            </a>
            
            <a 
              href="tel:+254711507064" 
              className="flex items-center gap-2 hover:text-amber-500 transition-colors font-mono"
              id="footer-phone-link"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+254 711 507 064</span>
            </a>
            
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="leading-snug">
                Eldoret Furniture Showroom & Workshop,<br />
                Airport Road (Near Eldoret National Polytechnic),<br />
                Eldoret, Kenya
              </span>
            </div>
          </div>
        </div>

        {/* Branch 2: Categories Shortcuts Link List */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-black text-white font-mono">
            Showroom Categories
          </h4>
          <ul className="space-y-2 text-xs text-stone-400 font-sans">
            {[
              { id: 'beds', name: 'Bespoke & Chester Beds' },
              { id: 'dining', name: 'Family Dining Tables' },
              { id: 'sofas', name: 'Chesterfield & Fabric Sofas' },
              { id: 'tables', name: 'Coffee & Nesting Tables' },
              { id: 'shoeracks', name: 'Durable Shoe Racks' },
              { id: 'tvstands', name: 'Floating TV Consoles' },
              { id: 'kitchen', name: 'Modular Kitchen Cabinets' }
            ].map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onQuickCategory(cat.id)}
                  className="flex items-center gap-1 hover:text-amber-500 transition-colors text-left font-medium cursor-pointer"
                  id={`footer-cat-link-${cat.id}`}
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
                  <span>{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Branch 3: Workshop Hours & Live Eldoret Map Rendering */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-black text-white font-mono">
            Workshop Information
          </h4>
          
          <div className="bg-stone-900 border border-stone-800 p-3.5 rounded-2xl flex items-start gap-3 text-xs text-stone-300">
            <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-white">Opening Hours:</span>
              <p className="mt-0.5 text-stone-400 font-sans">Monday to Sunday: 7:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* Interactive Showroom Map Visual representation */}
          <div className="relative h-28 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 bg-cover bg-center flex items-center justify-center p-4 shadow-inner" id="footer-map-representation">
            {/* Overlay grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-stone-900/45" />

            {/* Stylized custom UI map layout */}
            <div className="relative z-10 text-center space-y-1.5">
              <span className="inline-flex items-center gap-1 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                <MapPin className="w-3 h-3 text-stone-950" />
                <span>Eldoret Town Workshop</span>
              </span>
              <p className="text-[10px] text-stone-400 font-sans leading-none">
                Near Eldoret National Polytechnic, Airport Rd, Eldoret
              </p>
              <a 
                href="https://wa.me/254711507064?text=Hello%20Eldoret%20Funiture!%20Can%20you%20please%20send%20me%20your%20exact%2520workshop%2520location%2525location%2520pin?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-amber-500 hover:text-amber-400 underline font-medium block"
              >
                Request Current Location Pin via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Under-Footer Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500 text-[10.5px] font-sans">
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 select-none">
          <span>
            &copy; {currentYear} <strong>ELDORET FUNITURE</strong>. All Rights Reserved.
          </span>
          <span className="hidden sm:inline">|</span>
          <span>Spelled exactly as requested ("ELDORET FUNITURE").</span>
        </div>
        
        <div className="flex gap-4">
          <a href="tel:+254711507064" className="hover:text-stone-300 transition-colors">Call: +254711507064</a>
          <span>&middot;</span>
          <a 
            href="https://wa.me/254711507064" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-stone-300 transition-colors flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3 text-emerald-500 fill-current" />
            <span>WhatsApp Admin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
