/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Drill, Flame, Award, Truck, Settings } from 'lucide-react';

export default function CraftsmanshipSection() {
  const pillars = [
    {
      icon: <Flame className="w-8 h-8 text-amber-700" />,
      title: "Kiln-Dried Timber Seasoning",
      description: "Our Oak, Mahogany, and Mvule boards are kiln-dried for 4 weeks. This draws out internal cell moisture and totally prevents twisting, warp-cracks, or split joins years down the line."
    },
    {
      icon: <Drill className="w-8 h-8 text-amber-700" />,
      title: "Traditional Mortise Joinery",
      description: "We strictly forbid weak screws or staples in load-bearing frames. All our premium beds, tables, and sofas use interlocking mortise and tenon wooden peg structures for multigenerational lifespan."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-700" />,
      title: "Active Anti-Insect Chambers",
      description: "Each plank undergoes a 24-hour heat treatment cycle followed by pressure mineral impregnation. This yields unmatched immunity against woodworms, termites, and dry boring pests."
    },
    {
      icon: <Settings className="w-8 h-8 text-amber-700" />,
      title: "Bespoke Size & Wood Tailoring",
      description: "Every home in Eldoret has unique dimensions. In our work modals, you can choose custom widths, customize matching headboard heights, or upgrade wood density choices instantly."
    },
    {
      icon: <Truck className="w-8 h-8 text-amber-700" />,
      title: "Insured Countrywide Delivery",
      description: "We package and wrap our creations thoroughly. We deliver right to your door in Eldoret, Nairobi, Nakuru, Kisumu, Mombasa and surrounding towns, fully insured against damage."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-700" />,
      title: "5-Year Showroom Guarantee",
      description: "We trust our expert joinery. If any solid wood bed frame, sofa foundation, or dining pedestal suffers structural sagging or splitting, we replace it completely with no argument."
    }
  ];

  return (
    <section className="bg-stone-900 text-stone-100 py-16 sm:py-20 border-t border-stone-800 relative overflow-hidden scroll-mt-[145px] lg:scroll-mt-[112px]" id="our-process">
      {/* Background soft ambient timber color spot */}
      <div className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-amber-750/10 blur-3xl -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500 font-mono">
            Artisanal Furniture Construction Woodwork
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight mt-3">
            Our Carpentry Standards Set Us Apart
          </h2>
          <div className="w-16 h-1.5 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm font-sans mt-5 leading-relaxed">
            Eldoret Furniture is built by skilled local carpenters specializing in solid hardwoods and premium upholstery. Here is how we craft timeless comfort.
          </p>
        </div>

        {/* Pillars GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50 hover:border-amber-600/55 transition-all duration-300"
              id={`craft-pillar-${i}`}
            >
              <div className="mb-4 bg-stone-700/45 p-3 rounded-xl w-fit">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-sans">{p.title}</h3>
              <p className="text-stone-400 text-xs font-sans mt-3 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic CTA box */}
        <div className="mt-16 bg-gradient-to-r from-amber-900/60 to-stone-800 border border-amber-800/40 p-8 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-xl font-bold font-sans text-white">Need a dynamic architectural fit or custom kitchen blueprint?</h3>
            <p className="text-stone-300 text-xs font-sans mt-2">
              Our master draftsmen are ready to model and construct cupboards, kitchen panelling, and unique Chester beds to fit your structural floor blueprints. Speak to our workshop manager directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+254711507064"
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors cursor-pointer"
              id="craftsmanship-call"
            >
              Consult Workshop (+254711507064)
            </a>
            <a
              href="https://wa.me/254711507064?text=Hello%20Eldoret%20Funiture!%20I%20would%20like%20to%20consult%20a%20master%20carpenter%20on%2520a%2520custom%2520furniture%2520project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              id="craftsmanship-whatsapp"
            >
              <span>Chat Custom Order specs</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
