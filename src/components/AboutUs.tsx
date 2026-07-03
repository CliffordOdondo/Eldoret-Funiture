/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Award, ShieldCheck, Heart, Users, Trees } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-stone-50 py-16 sm:py-24 border-t border-stone-200 scroll-mt-[145px] lg:scroll-mt-[112px]" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-amber-800 font-mono">
            Rift Valley’s Premier Woodcraft Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-stone-900 tracking-tight mt-3">
            Bespoke Furniture Built For Generations
          </h2>
          <div className="w-16 h-1.5 bg-amber-700 mx-auto mt-4 rounded-full" />
          <p className="text-stone-600 text-sm font-sans mt-5 leading-relaxed">
            Spelled exactly as you requested—<strong>ELDORET FUNITURE</strong> is a fully homegrown Kenyan manufacturing brand. We blend traditional woodworking joinery with contemporary elegance.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-sans text-stone-900 tracking-tight">
              Honoring Eldoret's Rich Carpentry Heritage
            </h3>
            
            <p className="text-stone-600 text-sm font-sans leading-relaxed">
              For over a decade, our workshop near the Eldoret National Polytechnic has been the birthplace of Kenya’s finest solid wood and upholstered furniture. What started as a small, passionate group of local craftsmen has grown into a highly specialized manufacturer delivering luxury beds, majestic Chesterfield couches, and custom kitchen fittings countrywide.
            </p>
            
            <p className="text-stone-600 text-sm font-sans leading-relaxed">
              Unlike quick factory-made items that use particle boards and staples, every single piece in our showroom is meticulously hand-assembled. We are proud to source aged hardwoods—including Cypress, Mahogany, Mvule, Teak, and Oak—supporting sustainable forestry and local timber harvesters in East Africa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3.5">
                <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl h-fit">
                  <Trees className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-sans">100% Solid African Timbers</h4>
                  <p className="text-[11.5px] text-stone-500 mt-1 leading-normal">
                    We strictly construct frames with seasoned hardwoods. No cheap MDF or compression boards are allowed on load-bearing components.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl h-fit">
                  <Users className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-sans">Local Expert Artisans</h4>
                  <p className="text-[11.5px] text-stone-500 mt-1 leading-normal">
                    Our team consists of certified upholstery designers and master wood carvers proud of their Rift Valley heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-5 relative" id="about-image-collage">
            {/* Ambient accent square */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-stone-200 rounded-3xl -z-10" />
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 h-[380px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
                alt="Woodworking workshop crafting solid mahogany slab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-750"
                id="about-primary-photo"
              />
            </div>

            {/* Micro Badge floating on image */}
            <div className="absolute bottom-6 left-6 bg-stone-950/90 backdrop-blur-md text-stone-100 p-4 rounded-xl border border-white/10 max-w-xs shadow-lg">
              <span className="flex items-center gap-1 text-[10px] text-amber-400 font-bold uppercase font-mono tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Eldoret Pride</span>
              </span>
              <p className="text-[11px] text-stone-300 font-sans leading-relaxed">
                "Our beds do not creak; our sofa cushions do not sag. That is our lifelong promise to Eldoret homes."
              </p>
            </div>
          </div>

        </div>

        {/* Showroom Milestones / Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-xl">
          <div className="text-center space-y-1">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">100+</span>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-stone-400">Live Custom Designs</span>
          </div>
          <div className="text-center space-y-1 border-l border-stone-850">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">5-Years</span>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-stone-400">Full Structure Warranty</span>
          </div>
          <div className="text-center space-y-1 border-l border-stone-850">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">24/7</span>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-stone-400">WhatsApp Inquiries</span>
          </div>
          <div className="text-center space-y-1 border-l border-stone-850">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">100%</span>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-stone-400">Genuine Hardwood</span>
          </div>
        </div>

      </div>
    </section>
  );
}
