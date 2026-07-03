/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, CategoryInfo } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'beds',
    name: 'Beds & Bedrooms',
    description: 'Bespoke hand-crafted beds ranging from timeless solid woods to luxurious tufted Chesterfield designs.',
    bannerImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Wood Only Beds', 'Chester Beds']
  },
  {
    id: 'dining',
    name: 'Dining Tables',
    description: 'Sturdy, exquisite dining tables crafted for family gatherings and modern dining spaces.',
    bannerImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Solid Wood Dining', 'Glass Top Dining', 'Marble Finish Sets']
  },
  {
    id: 'sofas',
    name: 'Sofas & Living Room',
    description: 'High-comfort Chesterfields, modular L-shapes, and bespoke fabric sets for supreme relaxation.',
    bannerImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Chesterfield Sofas', 'Modular L-Shapes', 'Classic Fabric & Accent']
  },
  {
    id: 'tables',
    name: 'Tables & Coffee Tables',
    description: 'Centerpieces, coffee tables, nesting sets, and side tables designed with premium finishes.',
    bannerImage: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Coffee Tables', 'Nesting & Side Tables', 'Console Tables']
  },
  {
    id: 'shoeracks',
    name: 'Shoe Racks',
    description: 'Elegant, space-saving storage cabinetry and bench arrangements to organize your entryway beautifully.',
    bannerImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Wood Closed Cabinets', 'Entryway Benches', 'Slim Space-Savers']
  },
  {
    id: 'tvstands',
    name: 'TV Stands & Consoles',
    description: 'Floating modern consoles and solid wooden floor units designed for the perfect home theater setup.',
    bannerImage: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Floating Wall Units', 'Solid Wood Lowboards', 'Glass & LED Cabinets']
  },
  {
    id: 'kitchen',
    name: 'Kitchen Cabinets',
    description: 'Modular high-quality pantry arrays, islands, and custom heavy-duty storage for your ideal kitchen layout.',
    bannerImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Modular Kitchen Cabinets', 'Pantry & Larder Units', 'Classic Shaker Panels']
  }
];

export const PRODUCTS: Product[] = [
  // ==================== BEDS ====================
  {
    id: 'bed-01',
    name: 'Timeless Eldoret Oak Bed Frame',
    category: 'beds',
    price: 38000,
    description: 'Handcrafted utilizing 100% solid seasoned Oak wood. Elegant simplistic design focusing on clean grains and lasting durability.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Solid Oak Wood', 'Durable Slats'],
    woodOnly: true,
    features: ['100% Solid timber frame', 'No-creak construction', 'Vapor-treated against borers']
  },
  {
    id: 'bed-02',
    name: 'Royal Chesterfield Velvet Bed',
    category: 'beds',
    price: 68000,
    description: 'A luxurious Royal Chester Bed with deep diamond button tufting, premium high-density cushioning, and supreme royal-blue velvet upholstery.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Hardwood Skeleton', 'Premium Royal Blue Velvet', 'High-Density Foam'],
    isChester: true,
    features: ['Elegant button tufting', 'Sturdy solid wood internal support', 'Anti-dust mite backing fabric']
  },
  {
    id: 'bed-03',
    name: 'Classic Mahogany Sleigh Bed',
    category: 'beds',
    price: 52000,
    description: 'Exquisite curved headboard and footboard design handcrafted from thick mahogany planks. Finished with premium polyurethane gloss coat.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
    dimensions: '5ft x 6ft (Queen Size)',
    materials: ['Genuine Mahogany wood', 'Rich Amber Lacquer'],
    woodOnly: true,
    features: ['Ergonomic sleigh backrest', 'Double-reinforced bed joins', 'Exclusivity in wood pattern grains']
  },
  {
    id: 'bed-04',
    name: 'Deep Emerald Chester Bed Frame',
    category: 'beds',
    price: 72000,
    description: 'Grand tufted headboard standing at 1.5m tall, styled with executive Chesterfield accents. Wrapped in rich plush emerald green plush wool velvet.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Reinforced Blue-gum skeleton', 'Premium Emerald Fabric', 'Chrome Corner Legs'],
    isChester: true,
    features: ['High-rise visual presence', 'Double tufted scroll panels', 'Accommodates extra-heavy mattresses']
  },
  {
    id: 'bed-05',
    name: 'Minimalist Cypress Platform Bed',
    category: 'beds',
    price: 28000,
    description: 'Designed for the modern low-profile aesthetic. Constructed from kiln-dried cypress wood, yielding robust reliability at an economical point.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    dimensions: '4.5ft x 6ft (Double)',
    materials: ['Kiln-dried Cypress Wood', 'Semi-matte Timber Sealant'],
    woodOnly: true,
    features: ['Low height platform', 'Integrated micro-bedside ledges', 'Super simple structure']
  },
  {
    id: 'bed-06',
    name: 'Wingback Chester Tufted Bed',
    category: 'beds',
    price: 78000,
    description: 'Outstanding winged headboard architecture incorporating dual rows of shiny stud rivets and deep, meticulous hand-tied diamond Chesterfield folds.',
    image: 'https://images.unsplash.com/photo-1582582621959-a0a27ff040f1?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Treated Hardwood', 'Linen Blend Cushioning', 'Silver Accent Studs'],
    isChester: true,
    features: ['Wingback side wings padding', 'Polished silver riveted borders', 'Heavy-duty steel support beams']
  },
  {
    id: 'bed-07',
    name: 'Traditional Mvule Post Bed',
    category: 'beds',
    price: 64000,
    description: 'Superior craftsmanship from genuine East African Mvule wood. Features four solid vertical posts standing strong, providing classic heritage styling.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Authentic Mvule Hardwood', 'Wax Finish'],
    woodOnly: true,
    features: ['Heirloom furniture status', 'Exceptional tensile strength', 'Subtle, dark reddish-brown hue']
  },
  {
    id: 'bed-08',
    name: 'Contemporary Tufted Linen Bed',
    category: 'beds',
    price: 55000,
    description: 'Understated, neat elegant linen upholstery wrapping a fully cushioned frame. Ideal for bright minimalist bedrooms.',
    image: 'https://images.unsplash.com/photo-1617317840156-46dbda12cce4?auto=format&fit=crop&w=600&q=80',
    dimensions: '5ft x 6ft (Queen Size)',
    materials: ['Treated Softwood frame', 'Stitched woven linen fabric', 'Soft Polyfill'],
    isChester: true,
    features: ['Soft padding on all four corners', 'Highly breathable linen', 'Easy-clean fabric surface']
  },
  {
    id: 'bed-09',
    name: 'Solid Teak Heavy-Duty Bed',
    category: 'beds',
    price: 75000,
    description: 'The monarch of wood only beds. Forged from old-growth salvaged teak. Masterful mortise and tenon joint lines. Unrivaled weight-bearing.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6.5ft (Super King)',
    materials: ['A-Grade Teak Timber', 'Marine Satin Varnish'],
    woodOnly: true,
    features: ['Weatherproof oil layers', 'Indestructible joins', 'Natural termite rejection']
  },
  {
    id: 'bed-10',
    name: 'Majestic Tufted Leather Chester Bed',
    category: 'beds',
    price: 85000,
    description: 'Supreme-tier Chester bed wrapped entirely in authentic full-grain vintage tan leather. Features high wing panels and dense orthopedic support.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Size)',
    materials: ['Solid Camphor Internal Frame', 'Genuine Full-Grain Leather'],
    isChester: true,
    features: ['Matures beautifully with patina', 'Deep 3-inch tufting foam', 'Heavy-duty steel center track']
  },
  {
    id: 'bed-11',
    name: 'Spindle Oak Traditional Bed',
    category: 'beds',
    price: 45000,
    description: 'A charming retro-classic design featuring perfectly vertical turned-wood headboard spindles. Warm golden oak finishing.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    dimensions: '5ft x 6ft (Queen)',
    materials: ['Solid White Oak', 'Polyurethane Protection coat'],
    woodOnly: true,
    features: ['Airy, light design aesthetic', 'Smoothly hand-sanded spindles', 'Compact space footprint']
  },
  {
    id: 'bed-12',
    name: 'Diamond Stitch Charcoal Bed',
    category: 'beds',
    price: 58000,
    description: 'Clean geometry with diagonal diamond stitches. Padded with medium-density foam and clad in dark graphite heavy upholstery canvas.',
    image: 'https://images.unsplash.com/photo-1582582621959-a0a27ff040f1?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King)',
    materials: ['Kiln-dried Blue Gum Wood', 'Sturdy woven canvas', 'Fibre cushions'],
    isChester: true,
    features: ['Modern geometric tufts', 'Dirt-resistant dark shade fabric', 'Tough low-lying base frame']
  },
  {
    id: 'bed-13',
    name: 'Eldoret Poster Canopy Bed',
    category: 'beds',
    price: 82000,
    description: 'Stately high canopy frame in premium dark mahogany. Perfect for netting drapes and a dramatic interior architectural highlight.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    dimensions: '6ft x 6ft (King Canopy)',
    materials: ['Premium Mahogany Wood', 'High Solid lacquer'],
    woodOnly: true,
    features: ['Extended overhead canopy frame', 'Handcrafted cross-beams', 'Extreme heavy-duty load capacity']
  },
  {
    id: 'bed-14',
    name: 'Suede Cream Chesterfield Bed',
    category: 'beds',
    price: 69000,
    description: 'Bespoke design incorporating plush off-white cream suede. Delivers visual warmth and soft, welcoming touch points everywhere.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '5ft x 6ft (Queen Size)',
    materials: ['Cured Softwood structure', 'Ultra-soft Suede fabric', 'Plush fill'],
    isChester: true,
    features: ['High-density luxury padding', 'Integrated chrome bracket anchors', 'Rich plush texture']
  },
  {
    id: 'bed-15',
    name: 'Modern Pine Slatted Platform Bed',
    category: 'beds',
    price: 24000,
    description: 'Straightforward, utilitarian bed made of high-quality select pine wood. Features exposed joints and a natural clear-matte finish.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    dimensions: '3ft x 6ft (Single Bed)',
    materials: ['Select Grade Pine Wood', 'Eco Sealant'],
    woodOnly: true,
    features: ['Environmentally friendly varnish', 'Lightweight yet incredibly rigid', 'Affordable student/guest bedroom pick']
  },

  // ==================== DINING TABLES ====================
  {
    id: 'dining-01',
    name: 'Mahogany Family Dining Table',
    category: 'dining',
    price: 85000,
    description: 'Durable, expansive solid mahogany dining table, expertly seasoned and detailed with beveled edges to prevent injury. Seats 8 comfortable.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    dimensions: '240cm x 100cm x 76cm',
    materials: ['Premium Mahogany Solid Wood', 'Gloss Sealant'],
    features: ['Seats up to 8 guests', 'Heavy pedestal support bases', 'Comes with 6 matched timber chairs']
  },
  {
    id: 'dining-02',
    name: 'Tempered Glass dining Masterpiece',
    category: 'dining',
    price: 65000,
    description: 'Futuristic architectural style dining table utilizing a 12mm thick ultra-clear tempered glass top, mounted on interlocking angular mahogany legs.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 90cm x 75cm',
    materials: ['12mm Tempered Safety Glass', 'Intersecting Mahogany wood base'],
    features: ['Shatterproof safety glass', 'Modern sleek transparency', 'Non-scratch protective feet pads']
  },
  {
    id: 'dining-03',
    name: 'White-Marble Inlay Dining Set',
    category: 'dining',
    price: 110000,
    description: 'Premium MDF core with synthetic white-stone marble overlay. Extremely scratch/heat-resistant. Frame and legs are carved from black-stained Mvule wood.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80',
    dimensions: '200cm x 100cm x 76cm',
    materials: ['High-Gloss Synthetic Marble', 'Solid Mvule Wood base'],
    features: ['Stain and acidic juice resistant surface', 'Chic mid-century legs', 'Includes 6 luxury high-back padded chairs']
  },
  {
    id: 'dining-04',
    name: 'Circular Teak Conversation Table',
    category: 'dining',
    price: 55000,
    description: 'Perfect for cozy dining areas. Crafted from golden-brown seasoned Teak timber, featuring a central Lazy-Susan spinning dish tray.',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80',
    dimensions: '140cm Diameter circular top',
    materials: ['Treated Golden Teak Wood'],
    features: ['Space-saving central leg cluster', 'Fully interactive revolving tray', 'Smooth rounded child-friendly borders']
  },
  {
    id: 'dining-05',
    name: 'Rustic Long Farmhouse Dining Table',
    category: 'dining',
    price: 78000,
    description: 'Rugged charm utilizing reclaimed railway pine wood sleepers. Beautiful distress marks preserved in a super-tough matte epoxy finish.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f24?auto=format&fit=crop&w=600&q=80',
    dimensions: '260cm x 95cm x 78cm',
    materials: ['Reclaimed Heavy Pine sleepers', 'High-Strength structural rods'],
    features: ['Holds massive loads', 'Includes matched 2.4-meter dual benches', 'Waterproof outdoor-capable deck lacquer']
  },
  {
    id: 'dining-06',
    name: 'Minimalist Wood Ash Dining Table',
    category: 'dining',
    price: 48000,
    description: 'Sleek modern lines. Elegant light-amber ash wood veneer with sleek tapered legs, perfect for modern light interiors.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80',
    dimensions: '160cm x 80cm x 75cm',
    materials: ['Imported Ash wood', 'Premium MDF structure core'],
    features: ['Very light feel footprint', 'Quick bolt-assembly leg structure', 'Resistant to hot cups']
  },
  {
    id: 'dining-07',
    name: 'Classic Mvule Oval Dining Set',
    category: 'dining',
    price: 98000,
    description: 'Stately oval design sculpted entirely from premium density East African Mvule. Extremely rare grain details with heavy claw-foot legs.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    dimensions: '220cm x 110cm x 76cm',
    materials: ['A-Grade Mvule Wood', 'Rich Antique wax coat'],
    features: ['Classic oval aesthetic', 'Carved ornamental pedestals', 'Includes 6 high-backed cushioned seats']
  },
  {
    id: 'dining-08',
    name: 'Modernist Sleek Black Dining Table',
    category: 'dining',
    price: 62000,
    description: 'High-contrast jet black matte dining table with steel geometric legs. For the bold, dark-themed urban home.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 90cm x 75cm',
    materials: ['Baked enamel steel legs', 'Compressed hardwood carbon top'],
    features: ['Zero-fingerprint matte top', 'Highly industrial iron legs', 'Perfect dining/work desk hybrid']
  },
  {
    id: 'dining-09',
    name: 'The Eldoret Emperor 12-Seater',
    category: 'dining',
    price: 185000,
    description: 'A monument of master joinery. Three meters of continuous solid Mahogany planks with a double structural steel under-frame. Seats a whole gathering.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    dimensions: '320cm x 120cm x 78cm',
    materials: ['Seasoned Selected Mahogany Planks', 'Industrial steel beams'],
    features: ['A full 3.2-meter single span', 'Custom-cast steel leg systems', 'Ships with 10 matching upholstered chairs']
  },
  {
    id: 'dining-10',
    name: 'Glossy Walnut Veneer Dining Set',
    category: 'dining',
    price: 72000,
    description: 'Featuring warm, rich walnut patterns finished under reflective high-grade mirror gloss. Tapered brass-tipped executive legs.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80',
    dimensions: '190cm x 90cm x 75cm',
    materials: ['High density engineered core', 'Walnut Veneer', 'Brass caps'],
    features: ['Stunning high-reflection shine', 'Sleek luxury golden tips', 'Comes with 6 matched velvet chairs']
  },
  {
    id: 'dining-11',
    name: 'Industrial Metal & Wood Table',
    category: 'dining',
    price: 59000,
    description: 'Urban industrial dining architecture. Rough-sawn pine planks set across a heavy-weight powder-coated structural steel trestle base.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f24?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 85cm x 76cm',
    materials: ['Distressed Pine Planks', 'Matte black structural ironwork'],
    features: ['Fully weld-joined base frame', 'High scratch-immunity wood coating', 'Minimalist warehouse style']
  },
  {
    id: 'dining-12',
    name: 'Extendable Smart Dining Table',
    category: 'dining',
    price: 88000,
    description: 'Ingenious central leaf extension system. Expands seamlessly from a 6-seater to an 8-seater with a simple sliding lock pull mechanism.',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80',
    dimensions: '160cm to 220cm Extended length x 90cm x 75cm',
    materials: ['Premium Oak Hardwood structure', 'Heavy-duty steel gears'],
    features: ['Hidden double leaf panels', 'Smooth telescopic sliding rails', 'Tough lock stabilization']
  },
  {
    id: 'dining-13',
    name: 'Eldoret Heritage Carved Dining Set',
    category: 'dining',
    price: 130000,
    description: 'Baroque-inspired tribal relief carvings hand-sculpted into the mahogany side borders. Absolute traditional Kenyan statement art piece.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    dimensions: '220cm x 100cm x 76cm',
    materials: ['A-Grade Solid Carving Mahogany', 'Aromatic Cedar underlay'],
    features: ['Detailed traditional handcarvings', 'Massive lion-claw timber legs', 'Includes 8 beautifully carved high-back chairs']
  },
  {
    id: 'dining-14',
    name: 'Herringbone Pattern Oak Table',
    category: 'dining',
    price: 82000,
    description: 'Exquisitely arranged herringbone parquet blocks made of light oak, framed in solid borders on mid-century steel hairpin legs.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80',
    dimensions: '190cm x 90cm x 76cm',
    materials: ['Light Oak blocks', 'Black powder coated hairpin steel legs'],
    features: ['Fascinating geometric pattern top', 'Extremely light looking legs', 'Stain-resistant epoxy seal']
  },
  {
    id: 'dining-15',
    name: 'Compact Kitchen Breakfast Table',
    category: 'dining',
    price: 35000,
    description: 'High table styled for cozy apartments and corner kitchen breakfast setups. Handcrafted from sturdy cypress wood.',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 70cm x 92cm (Bar Height)',
    materials: ['Solid Cypress Wood', 'Fibre paint sealant'],
    features: ['Comfortable bar height', 'Includes 2 matching high wooden stools', 'Integrated undershelf space storage']
  },

  // ==================== SOFAS ====================
  {
    id: 'sofa-01',
    name: 'Royal Edward Chesterfield Sofa',
    category: 'sofas',
    price: 115000,
    description: 'Genuine luxury 3-seater Chesterfield sofa featuring tufted rolled arms, deep hand-anchored button diamond folds, and premium plush velvet fabric.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '230cm x 95cm x 78cm',
    materials: ['Bluegum Hardwood Frame', 'High Resilience Foam', 'Rich Velvet Upholstery'],
    isChester: true,
    features: ['Classic rolled tufted arms', 'Intricate brass stud rivets', 'Solid turned mahogany bun feet']
  },
  {
    id: 'sofa-02',
    name: 'The Great Rift L-Shape Sectional',
    category: 'sofas',
    price: 135000,
    description: 'Expansive family L-Shape sectional sofa offering massive seating density. High comfort level with luxury loose pocket springs cushions.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '280cm x 180cm (Chaise length) x 82cm',
    materials: ['Cured Blockboard Frame', 'Anti-stain heavy woven canvas', 'Pocket-spring core'],
    features: ['Reversible left/right chaise arrangement', 'High-density microfibre support', 'Includes 6 accent throw pillows']
  },
  {
    id: 'sofa-03',
    name: 'Executive Cognac Leather Chesterfield',
    category: 'sofas',
    price: 155000,
    description: 'A sovereign living room monument. Premium executive Chesterfield sofa wrapped in thick rich Cognac Brown leatherette. Stunning gloss finish.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '220cm x 100cm x 75cm',
    materials: ['Ironwood skeleton', 'Full-Grain Leatherette', 'Tough web support'],
    isChester: true,
    features: ['Classic vintage executive look', 'Deep button pleated folds', 'Resistant to water and spills']
  },
  {
    id: 'sofa-04',
    name: 'Modern Slate Single Accent Sofa',
    category: 'sofas',
    price: 32000,
    description: 'Clean mid-century modern accent armchair. Elegant slate gray upholstery on an exposed polished mahogany external wood frame.',
    image: 'https://images.unsplash.com/photo-1598191638104-c2c3660df1a5?auto=format&fit=crop&w=600&q=80',
    dimensions: '85cm x 80cm x 85cm',
    materials: ['Selected Mahogany structural exterior', 'High density foam pad', 'Slate textured linen'],
    woodOnly: false,
    features: ['Exposed architectural wood legs', 'Generous relaxation width', 'Tear-resistant canvas layer']
  },
  {
    id: 'sofa-05',
    name: 'Plush Emerald Chesterfield 2-Seater',
    category: 'sofas',
    price: 88000,
    description: 'Slightly compact cozy 2-seater Chesterfield layout, styled with deep emerald green plush velvet and gold-chromed luxury metal legs.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 95cm x 78cm',
    materials: ['Cured Bluegum wood', 'Premium Suede/Velvet', 'Chrome Gold supports'],
    isChester: true,
    features: ['Perfect luxury for smaller living spaces', 'Heavy button details', 'Anti-dustmite mesh bottom']
  },
  {
    id: 'sofa-06',
    name: 'The Safari Recliner Armchair',
    category: 'sofas',
    price: 45000,
    description: 'Ultimate personal sanctuary. Heavy-duty steel structural reclining system that goes down to 160 degrees, complete with plush side arm pockets.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '95cm x 100cm x 102cm',
    materials: ['Reinforced steel recline gears', 'Thick fiber fill layer', 'Soft microfibre fabric'],
    features: ['Manual pull mechanism reclining', 'Integrated thick neck pad support', 'Side mug holder pocket']
  },
  {
    id: 'sofa-07',
    name: 'Minimalist Ivory Daybed Sofa',
    category: 'sofas',
    price: 64000,
    description: 'Double duty modern sofa and quick single guest bed. Features standard flat daybed seating cushions with a single mahogany bolster wood backboard.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '200cm x 90cm x 65cm',
    materials: ['Solid Mahogany baseframe', 'Cream Ivory woven cloth'],
    woodOnly: false,
    features: ['Can act as a single bed', 'Extremely minimalist modern profile', 'Solid non-sag zig-zag spring lines']
  },
  {
    id: 'sofa-08',
    name: 'Traditional Carved-Arm Wood Sofa',
    category: 'sofas',
    price: 52000,
    description: 'Excellent solid mahogany structural sofa framework. Heavily hand-carved swirling wooden armrests with plush removable loose floral seat cushions.',
    image: 'https://images.unsplash.com/photo-1598191638104-c2c3660df1a5?auto=format&fit=crop&w=600&q=80',
    dimensions: '190cm x 88cm x 82cm',
    materials: ['100% Solid Mahogany body', 'High-density loose cushions'],
    woodOnly: true,
    features: ['Highly detailed wood carving panels', 'Washable zippered cushion covers', 'Generational life expectancy wood']
  },
  {
    id: 'sofa-09',
    name: 'Modular Velvet U-Shape Grand Sectional',
    category: 'sofas',
    price: 195000,
    description: 'The spectacular centerpiece of large living spaces. Massive modular U-shape arrangement that comfortably seats 10-12 family members.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '360cm x 220cm x 82cm',
    materials: ['Reinforced Wood-skeleton', 'Plush fabric layers', 'Stainless leg hinges'],
    features: ['Modular segments can be rearranged', 'Extremely deep comfort padding', 'Plush feather-mix overlay cushions']
  },
  {
    id: 'sofa-10',
    name: 'Minimalist Light-Oak Loveseat',
    category: 'sofas',
    price: 48000,
    description: 'Elegant dual seat sofa designed on high-standing light-colored Ash oak wood legs. Cozy, bright, and charming visual presence.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '150cm x 80cm x 80cm',
    materials: ['Light Ash Wood frames', 'Pastel soft cotton-linen fabric'],
    features: ['Compact elegant visual weight', 'Double stitched premium edges', 'High cleaning clearance beneath']
  },
  {
    id: 'sofa-11',
    name: 'Chesterfield Tufted Lounge Chaise',
    category: 'sofas',
    price: 68000,
    description: 'Outstanding luxury reclining day-lounge. Deep diamond tufts sweeping across an elegant curved single armrest, styled in gold velvet.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '175cm x 80cm x 82cm',
    materials: ['Cured hardwood block', 'Royal Amber Suede', 'High bounce polyfill'],
    isChester: true,
    features: ['Deep visual luxury aesthetic', 'Ergonomic sweeping body mold', 'Decorative brass upholstery buttons']
  },
  {
    id: 'sofa-12',
    name: 'Curved Modernist Bouclé Sofa',
    category: 'sofas',
    price: 95000,
    description: 'Exquisite modern wave design upholstered in highly textured cream white Bouclé cloth. Extremely fashionable global interior design piece.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '220cm x 100cm x 75cm',
    materials: ['Flexiwood frame core', 'Plush Bouclé loop fabric', 'Premium foam blocks'],
    features: ['Sweeping fluid curve lines', 'Incredibly textured soft touch', 'Hidden low-profile base legs']
  },
  {
    id: 'sofa-13',
    name: 'Deep-Ocean Blue Chesterfield 3-Seater',
    category: 'sofas',
    price: 110000,
    description: 'Dazzling Deep Ocean Blue variant of our Chesterfield furniture collection. Detailed with glossy chrome rivets and custom accent pillows.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '230cm x 95cm x 78cm',
    materials: ['Treated Hardwood', 'High density memory foam', 'Deep Blue Velvet'],
    isChester: true,
    features: ['Unmatched Chesterfield geometry', 'Reinforced spring suspension', 'Comfort density foam layers']
  },
  {
    id: 'sofa-14',
    name: 'Durable Canvas Office Reception Sofa',
    category: 'sofas',
    price: 58000,
    description: 'Structured, highly professional 3-seater sofa optimized for high-traffic office reception zones. Wrapped in industrial grade high-durability gray canvas.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '200cm x 85cm x 80cm',
    materials: ['Steel central core frame', 'Abrasion-proof industrial canvas'],
    features: ['High abrasion resistance class', 'Firm orthopedic support posture', 'Rustproof solid metal legs']
  },
  {
    id: 'sofa-15',
    name: 'Eldoret Comfort Single Lazy Chair',
    category: 'sofas',
    price: 25000,
    description: 'A deeply cushioned oversized living room accent chair. Stuffed with micro-balls and loose feathers for a cloud-like sinking seating sensation.',
    image: 'https://images.unsplash.com/photo-1598191638104-c2c3660df1a5?auto=format&fit=crop&w=600&q=80',
    dimensions: '90cm x 90cm x 90cm',
    materials: ['Treated pine internal skeleton', 'Soft plush fleece wrap'],
    features: ['Extremely deep sink sensation', 'Removable double sided back cushion', 'Scratchproof rubber feet']
  },
  {
    id: 'sofa-16',
    name: 'Presidential Full Leather Dual-Recliner Set',
    category: 'sofas',
    price: 195000,
    description: 'Bespoke Executive double-reclaiming 3-seater. Premium thick full-grain leatherette upholstery with smooth manual pull reclining levers and pocket spring support.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '225cm x 100cm x 102cm',
    materials: ['Bluegum Hardwood Core', 'Heavy-Duty Steel Recline Mechanism', 'Premium Full-Grain Leatherette'],
    features: ['Whisper-quiet dual-side recliners', 'Extra thick padded neck and armrests', 'Excellent lumbar memory foam support']
  },
  {
    id: 'sofa-17',
    name: 'Eldoret Luxury Leather L-Sit Sectional',
    category: 'sofas',
    price: 245000,
    description: 'Stunning premium L-sit sectional upholstered in rich caramel aniline leatherette. Perfect corner layout designed for ultimate family comfort.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
    dimensions: '310cm x 200cm (Chaise) x 85cm',
    materials: ['Seasoned Cypress Frame', 'Caramel Aniline Leatherette', 'High Density Foam Support'],
    features: ['Spacious lounge chaise orientation', 'Master-grade double-stitch seams', 'Scratchproof and water-resistant leather']
  },
  {
    id: 'sofa-18',
    name: 'Royal Heritage Leather Single Recliner Chair',
    category: 'sofas',
    price: 58000,
    description: 'Ultimate personal relaxation haven. Heavy duty reclining lazy chair wrapped in luxurious dark espresso leatherette featuring full 160-degree recline.',
    image: 'https://images.unsplash.com/photo-1598191638104-c2c3660df1a5?auto=format&fit=crop&w=600&q=80',
    dimensions: '95cm x 100cm x 102cm',
    materials: ['Steel central core framework', 'Dark Espresso Leatherette', 'High Bounce Polyfill Core'],
    features: ['Integrated cup-holders and side pouches', 'Smooth manual leg extension glide', 'Thick cloud-like neck support roll']
  },
  {
    id: 'sofa-19',
    name: 'The Sovereign Chesterfield Leather L-Sit',
    category: 'sofas',
    price: 280000,
    description: 'Magnificent deep-tufted Chesterfield L-shaped sectional in rich walnut brown leatherette. Perfect combination of traditional carving and modern comfort.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '290cm x 210cm (Chaise) x 78cm',
    materials: ['Solid Hardwood frame skeleton', 'Premium Walnut Leatherette', 'Pocket Springs'],
    isChester: true,
    features: ['Hand-pleated diamond Chesterfield folds', 'Shining solid brass upholstery rivets', 'Polished mahogany structural feet']
  },
  {
    id: 'sofa-20',
    name: 'Eldoret Comfort Duo Recliner Console',
    category: 'sofas',
    price: 135000,
    description: 'Double-seater premium leatherette recliner featuring a centralized console armrest with built-in storage and double beverage cup holders.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    dimensions: '175cm x 98cm x 105cm',
    materials: ['Solid Pine & Hardwood Frame', 'Abrasion-resistant Black Leatherette', 'German glides'],
    features: ['Central storage console armrest', 'Dual deep cup holder compartments', 'Silent pushback reclining options']
  },

  // ==================== TABLES ====================
  {
    id: 'table-01',
    name: 'Bespoke Mahogany Coffee Table',
    category: 'tables',
    price: 22000,
    description: 'Featuring a generous solid mahogany block with double storage drawers and soft-closing metal sliders. Highlighted with lovely natural grains.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 70cm x 46cm',
    materials: ['Genuine Solid Mahogany Wood', 'Rustproof aluminum pull handles'],
    features: ['Two fully functional utility drawers', 'Smooth chamfered safety edges', 'Moisture resistant poly-barrier coating']
  },
  {
    id: 'table-02',
    name: 'Hexagonal Geometric Coffee Table',
    category: 'tables',
    price: 18000,
    description: 'Striking modern honeycomb geometry. Constructed using interlocking mahogany boards with an expansive matte glass top overlay.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    dimensions: '95cm x 95cm x 42cm',
    materials: ['Selected Cedar timber panels', 'Smoked 8mm safety glass'],
    features: ['Unique hexagonal structural look', 'Smoked safety glass inlay top', 'Integrated bottom storage shelves']
  },
  {
    id: 'table-03',
    name: 'Teak Live Edge Slab Coffee Table',
    category: 'tables',
    price: 32000,
    description: 'A genuine cross-section organic slab of aged Teak. Natural contours of the timber are fully preserved under beautiful glass-like water-clear epoxy.',
    image: 'https://images.unsplash.com/photo-1622372738946-6acdc194611e?auto=format&fit=crop&w=600&q=80',
    dimensions: '130cm x 80cm organic contour x 48cm',
    materials: ['Organic Teak Timber Slab', 'Heavy Duty Black Iron Legs', 'Jewelry-Grade Clear Epoxy'],
    features: ['Each individual single model is entirely unique', 'Stunning natural live edge cracks filled with translucent resin', 'Industrial structural steel stand legs']
  },
  {
    id: 'table-04',
    name: 'Nesting Trio Wooden Tables',
    category: 'tables',
    price: 16500,
    description: 'Set of three interlocking nesting stools/tables. Easily slide together to save space, finished in durable warm honey-wood tone.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    dimensions: 'L: 55x55cm, M: 45x45cm, S: 35x35cm',
    materials: ['Seasoned Pine Solid Wood frame'],
    features: ['Space grouping efficiency design', 'Rounded anti-chip timber edges', 'Multi-use functions as side tables or stools']
  },
  {
    id: 'table-05',
    name: 'Exquisite Console Hallway Table',
    category: 'tables',
    price: 26000,
    description: 'Sleek, narrow console table tailored for entryways and behind-sofa placements. Carved sleek legs in solid Mvule.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    dimensions: '140cm x 35cm x 82cm',
    materials: ['Premium Mvule Hardwood', 'High gloss polyurethane'],
    features: ['Narrow sleek form profiles', 'Includes three top drawers for key organization', 'Slightly lifted rear frame bar']
  },
  {
    id: 'table-06',
    name: 'Terrazzo Circular Elegant Side Table',
    category: 'tables',
    price: 14000,
    description: 'Featuring a heavy cast composite terrazzo stone top containing gorgeous mineral flecks of jasper and quartz, supported by a tripod brass metal base.',
    image: 'https://images.unsplash.com/photo-1622372738946-6acdc194611e?auto=format&fit=crop&w=600&q=80',
    dimensions: '50cm Diameter circular x 55cm height',
    materials: ['Genuine Terrazzo concrete composite', 'Brass coated solid steel rods'],
    features: ['Stainproof polished mineral surface', 'Glamorous mid-century design', 'Tipped with soft non-scratch rubber bases']
  },
  {
    id: 'table-07',
    name: 'Classic Rustic Trunk Box Table',
    category: 'tables',
    price: 24500,
    description: 'Evoking ancient storage chest styling. A gorgeous flat top trunk containing massive internal hollow storage space and wrought-iron side drop handles.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    dimensions: '100cm x 100cm cube x 45cm',
    materials: ['Aged Cedar Timber Planks', 'Cast-iron brackets and locks'],
    features: ['Massive interior chest storage', 'Safety lid latch stabilizer hinges', 'Vintage rugged chest styling']
  },
  {
    id: 'table-08',
    name: 'Glass Circular Modernist Coffee Table',
    category: 'tables',
    price: 19000,
    description: 'Sophisticated modern living room coffee table comprising a bold interlocking black timber base under a tempered light smoked circular glass.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    dimensions: '90cm Diameter x 45cm height',
    materials: ['Tempered Glass top', 'Heavy ash wood base frames'],
    features: ['Thick safety tempered glass top', 'Elegant organic floating leg frame', 'Extremely easy cleaning surface']
  },
  {
    id: 'table-09',
    name: 'Low-Profile Zen Timber Table',
    category: 'tables',
    price: 15000,
    description: 'Styled for floor-seating dining or relaxed coffee hours. Hand-planed pine wood treated with organic flame-treated technique for charcoal patterns.',
    image: 'https://images.unsplash.com/photo-1622372738946-6acdc194611e?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm x 60cm x 32cm Low-Height',
    materials: ['Kiln burned pine timber', 'Natural Organic Wax layers'],
    features: ['Extreme low rise structure', 'Unique charcoal-grain finish aesthetic', 'Sturdy block legs']
  },
  {
    id: 'table-10',
    name: 'Sylvan Log Stump Side Table Set',
    category: 'tables',
    price: 12500,
    description: 'Single rustic solid round trunk trunks of Cyprus wood. Stripped of bark, fine sanded, and saturated in clear gloss lacquer.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    dimensions: '35cm Diameter circular x 45cm Height',
    materials: ['Solid Cyprus Wood tree trunk log'],
    features: ['100% Solid chunk timber weight', 'Exposed gorgeous annual ring lines', 'Multi-use as side table, or stool seat']
  },
  {
    id: 'table-11',
    name: 'Industrial Crank Adjustable Table',
    category: 'tables',
    price: 29000,
    description: 'Mechanical vintage design. Height can be wound dynamically from coffee table level to dining/work desk level via a beautifully cast iron hand crank.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm Diameter circular top x 50cm to 78cm dynamic height',
    materials: ['Cast-iron heavy-weight gear base', 'Rosewood thick top board'],
    features: ['Completely mechanical manual handcrank system', 'Extremely heavy iron stability', 'Perfect steampunk/industrial accent']
  },
  {
    id: 'table-12',
    name: 'Elegant White Minimalist Coffee Table',
    category: 'tables',
    price: 13500,
    description: 'Sleek visual breathability with a matte white lacquered oval top set against beautiful organic light-oak tripod legs.',
    image: 'https://images.unsplash.com/photo-1622372738946-6acdc194611e?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm x 55cm oval x 42cm height',
    materials: ['MDF core lacquered top sheet', 'Solid red oak legs'],
    features: ['Lovely oval mid-century outline', 'Ultra light weight build', 'Highly water and tea stain repellent']
  },
  {
    id: 'table-13',
    name: 'Rustic Slate-Stone Inlay Table',
    category: 'tables',
    price: 25000,
    description: 'Exceedingly tough coffee table incorporating fine-cut authentic natural dark slate stone tiles laid in a thick solid oak frame border.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 80cm x 46cm',
    materials: ['Natural Slate tiling', 'Solid white oak frames'],
    features: ['100% Heat proof center tiles', 'Earthy rustic country styling', 'Double underlying structural shelf grid']
  },
  {
    id: 'table-14',
    name: 'Floating Acrylic Illusion Side Table',
    category: 'tables',
    price: 17500,
    description: 'Extremely modern high design consisting of a thick solid mahogany drawer block suspended inside a crystal-clear acrylic high-strength side framework.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    dimensions: '45cm x 45cm x 55cm height',
    materials: ['A-Grade Cast Lucite/Acrylic', 'Premium Mahogany wood'],
    features: ['Spectacular floating drawer illusion', 'Extra high light transparency', 'Perfect premium futuristic nightstand']
  },
  {
    id: 'table-15',
    name: 'The Eldoret Block Cuboid Accent Table',
    category: 'tables',
    price: 21000,
    description: 'Pure brutalist geometric furniture. A perfect hollow cube constructed of thick interlocking blockboards finished in dark charcoal wood stain.',
    image: 'https://images.unsplash.com/photo-1622372738946-6acdc194611e?auto=format&fit=crop&w=600&q=80',
    dimensions: '60cm x 60cm x 60cm perfect cube',
    materials: ['Reinforced blockboards', 'Rich charcoal wood stain'],
    features: ['Extremely solid geometric outline', 'No-crease hidden join lines', 'Heavy-weight architectural presence']
  },

  // ==================== SHOE RACKS ====================
  {
    id: 'shoe-01',
    name: 'Royal Heritage Shoe Cabinet',
    category: 'shoeracks',
    price: 26000,
    description: 'Our top-tier premium wood closed shoe cabinet. Beautifully carved double doors open to reveal 6 angled breathable mahogany shelves. Holds up to 24 pairs.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '90cm x 35cm x 115cm',
    materials: ['Solid Seasoned Mahogany Wood', 'Brass hardware hinges'],
    features: ['Slat-vented doors for fresh airflow', 'Hidden design keeps shoes out of sight', 'Holds up to 24 pairs of adult shoes']
  },
  {
    id: 'shoe-02',
    name: 'Eldoret Velvet-Padded Shoe Bench',
    category: 'shoeracks',
    price: 19500,
    description: 'Highly functional entryway companion. Features a double-tier heavy wood open shoe storage, topped with a comfortable royal tufted deep velvet sitting pad.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm x 38cm x 52cm (Sway Height)',
    materials: ['Premium Mahogany wood', 'Deep Cushion Foam', 'Velvet fabric'],
    features: ['Enables comfortable sitting while wearing shoes', 'Holds up to 8 heavy pairs underneath', 'Deep tufted luxury accent styling']
  },
  {
    id: 'shoe-03',
    name: 'Slim Sliding Space-Saver Rack',
    category: 'shoeracks',
    price: 22000,
    description: 'Designed for narrow Eldoret apartment hallways. Brilliant drop-down drawer design. Measures only 24cm deep but holds 18 pairs vertically.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '80cm x 24cm (Narrow) x 120cm',
    materials: ['High Density Engineered Wood', 'Tough polymer rotating pivot gears'],
    features: ['Brilliant vertical storage drop drawers', 'Extremely slim footprint', 'Magnetic catch automatic locking shutters']
  },
  {
    id: 'shoe-04',
    name: 'The Grand Corridor 30-Pair Cabinet',
    category: 'shoeracks',
    price: 34000,
    description: 'Massive luxury storage. Heavy triple door configuration opening to spacious flat shelves with dynamic adjustable heights to accommodate tall boots.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '135cm x 36cm x 110cm',
    materials: ['Premium Solid Cypress Wood', 'Sleek steel handles'],
    features: ['Adjustable high shelf slots for boots', 'Scratchproof laminated interior', 'Integrated top key and letter tray box']
  },
  {
    id: 'shoe-05',
    name: 'Simple Cypress Slatted Slat-Rack',
    category: 'shoeracks',
    price: 12000,
    description: 'Open, breathable, functional, and durable. Forged entirely from Cypress, comprising four tiers of slatted wooden grids allowing light and ventilation.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '75cm x 30cm x 80cm',
    materials: ['100% Solid Cypress Timber', 'Clear wood seal'],
    woodOnly: true,
    features: ['Maximum aeration preventing odors', 'Incredibly lightweight and modular', 'Highly water and dirt repellent timber']
  },
  {
    id: 'shoe-06',
    name: 'Industrial Ironwood 4-Tier Bench',
    category: 'shoeracks',
    price: 18000,
    description: 'Rugged entryway bench. Featuring thick rustic pine wooden top and three underlying tiers made of thick black powder-coated iron mesh grids.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 35cm x 65cm',
    materials: ['Hard Pine Wood planks', 'Iron welded structural meshwork'],
    features: ['Holds up to 16 pairs easily', 'Bench holds up to 2 adult sitters', 'Rough-sawn classic texture']
  },
  {
    id: 'shoe-07',
    name: 'Rotary 360-degree Shoe Carousel',
    category: 'shoeracks',
    price: 38000,
    description: 'Luxurious tall rotating shoe storage cylinder. Spins effortlessly 360 degrees to browse shoes. Clad in premium wood grain mirrors.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '50cm Diameter Rotating Cylinder x 160cm Height',
    materials: ['Heavy-duty steel ball bearings pivot', 'Premium MDF structure panels', 'Dual mirror reflections'],
    features: ['Spins completely around 360 degrees', 'Incorporates 3 full-length dressing mirrors', 'Holds 36 shoes inside a tiny structural space']
  },
  {
    id: 'shoe-08',
    name: 'Classic Oak Shaker Shoe Cabinet',
    category: 'shoeracks',
    price: 29000,
    description: 'Charming country cottage aesthetic. Solid oak wood borders with neat shaker-style inset front panels. Beautiful oil-rubbed bronze handles.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '95cm x 35cm x 100cm',
    materials: ['Seasoned White Oak Wood', 'Bronze alloy handle bars'],
    features: ['Shaker style visual charm', 'Interior aromatic cedar wood panels to absorb odors', 'Comfortably houses 18-20 pairs']
  },
  {
    id: 'shoe-09',
    name: 'Floating Modernist Entryway Rack',
    category: 'shoeracks',
    price: 15500,
    description: 'Wall-mounted minimalistic shoe storage floating above the floor. Easy vacuum clearance beneath, styled in gorgeous matte graphite.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '100cm x 30cm suspended wall body',
    materials: ['Thick laminate coreboard', 'Steel wall anchoring anchors'],
    features: ['Leaves floor space fully blank', 'Easy-wipe dustproof matte top shelf', 'Holds 8-10 immediate high-frequency slippers']
  },
  {
    id: 'shoe-10',
    name: 'Linen Padded Flip-Top Bench',
    category: 'shoeracks',
    price: 21500,
    description: 'Dual compartment flip-top entryway bench. Standard linen comfort seat swings open to provide hidden deep shoe storage. Elegant design.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '115cm x 40cm x 48cm bench profile',
    materials: ['Solid birch wood outline frame', 'High durability natural woven linen'],
    features: ['Flip top lid with pneumatic hydraulic loops', 'Hidden separate sock organize chambers', 'Seats two adults comfortably']
  },
  {
    id: 'shoe-11',
    name: 'The Eldoret Corner Space-Tower',
    category: 'shoeracks',
    price: 17000,
    description: 'Perfect utilization of unused corner angles. Stands tall with 8 stacked triangular storage shelf levels handcrafted in rich pine wood.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '40cm x 40cm Corner x 170cm Height Tower',
    materials: ['Treated Prime Pine wood'],
    woodOnly: true,
    features: ['Utilizes vertical corner dead zones', 'Tapered outer lips to prevent shoes falling', 'Holds 8 pairs within a negligible footprint']
  },
  {
    id: 'shoe-12',
    name: 'Contemporary Glass-Front Cabinet',
    category: 'shoeracks',
    price: 31000,
    description: 'Elegant viewing shoe cabinet. Dual swinging doors with clear grid-toughened glass panels to display your prestigious sneaker compilation safely.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '90cm x 38cm x 120cm Cabinet',
    materials: ['High strength tempered gridglass', 'Polished black composite frames'],
    features: ['Perfect dustproof display cabinet', 'Soft closing silent door hinges', 'Holds up to 24 prime sneaker pairs']
  },
  {
    id: 'shoe-13',
    name: 'Classic Reed-Grass Ventilated Rack',
    category: 'shoeracks',
    price: 23000,
    description: 'Charming blend of solid mahogany skeleton and hand-woven reed-grass ventilation grilles across double cabinet doors. Natural tropical feel.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '85cm x 35cm x 105cm',
    materials: ['Genuine Mahogany wood', 'Locally woven Reed-Grass mesh'],
    features: ['High natural design ventilation', 'Elegant tropical organic textures', 'Accommodates 16 heavy footwear pairs']
  },
  {
    id: 'shoe-14',
    name: 'Heavy-Duty Timber Shed Storage',
    category: 'shoeracks',
    price: 27500,
    description: 'Built for heavy compound mudrooms or veranda settings. Heavy weatherproof cedar timbers, thick locked door to store garden boots.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '100cm x 42cm x 95cm',
    materials: ['Cured Red Cedar wood', 'Stainless anti-rust hinges'],
    woodOnly: true,
    features: ['Slam-proof heavy timber top board', 'Full weatherproof outdoor paint sealer', 'Slanted floor panels for quick dry mud runoffs']
  },
  {
    id: 'shoe-15',
    name: 'Minimalist 3-tier Cedar Rack',
    category: 'shoeracks',
    price: 9500,
    description: 'Extremely economic, simple, and beautifully crafted small shoe rack. Hand-built from rich fragrant cedar wood. Perfect for small spaces.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    dimensions: '60cm x 32cm x 55cm',
    materials: ['Aromatic Cedar timber wood'],
    woodOnly: true,
    features: ['Naturally repels insects and bugs', 'No assembly required - heavy solid build', 'Perfect fit inside closet wardrobes']
  },

  // ==================== TV STANDS ====================
  {
    id: 'tv-01',
    name: 'The Rift Floating TV Console',
    category: 'tvstands',
    price: 28000,
    description: 'An outstanding floating modern wall television console. Features hidden cable organization slots, a wide top surface, and dual open av drawers.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 35cm x 30cm Mounted Box',
    materials: ['Reinforced Cured Blockboard', 'Matte Oak veneer'],
    features: ['Saves critical living room floor space', 'Hidden heavy-duty brackets back anchor', 'Integrated dynamic cable routing channels']
  },
  {
    id: 'tv-02',
    name: 'Eldoret Grand Oak lowboard TV Stand',
    category: 'tvstands',
    price: 36000,
    description: 'Premium floor-standing TV stand carved from thick white oak. Comprises four soft-closing cabinet drawers and classic brass bracket feet highlights.',
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80',
    dimensions: '200cm x 40cm x 48cm Lowboard',
    materials: ['White Oak Timber Wood', 'Solid brass corner braces'],
    features: ['Extra-long structure accommodates up to 85" Screens', 'Plush soft-closing magnetic doors', 'Cable wire escape vents behind']
  },
  {
    id: 'tv-03',
    name: 'LED Backlit Floating Theater Console',
    category: 'tvstands',
    price: 45000,
    description: 'Brilliant high-tech look. Gloss-finished floating console featuring custom integrated RGB LED light track arrays underneath to deliver perfect mood ambient lighting.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    dimensions: '160cm x 35cm x 28cm Box',
    materials: ['High Gloss Acrylic MDF', 'Frosted glass shelf sections', 'LED strip'],
    features: ['Pre-installed remote controlled mood lighting', 'Stunning clean futuristic aesthetic', 'Removable glass shelf inserts']
  },
  {
    id: 'tv-04',
    name: 'Rustic Solid Mahogany TV Cabinet',
    category: 'tvstands',
    price: 32000,
    description: 'Solid, rugged, traditional elegance. Thick timber boards with heavy-duty metal rivets and corner plates. Perfect farmhouse living styling.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    dimensions: '160cm x 42cm x 55cm',
    materials: ['Seasoned Mahogany Planks', 'Industrial forged metal frames'],
    features: ['Ultra sturdy frame supports any weight', 'Beautifully antiqued dark wax stain', 'Double shelf cabinet storage chambers']
  },
  {
    id: 'tv-05',
    name: 'Minimalist Walnut TV Stand',
    category: 'tvstands',
    price: 24000,
    description: 'Understated organic minimal fusion design, constructed of lovely walnut sheets on slender angled dowel legs.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    dimensions: '140cm x 38cm x 50cm',
    materials: ['Engineered Pine core', 'Walnut sheet veneer'],
    features: ['Sleek tapered wooden legs', 'Slide-to-reveal sliding slatted doors', 'Chic mid-century silhouette']
  },
  {
    id: 'tv-06',
    name: 'Brutalist Concrete & Cedar TV Stand',
    category: 'tvstands',
    price: 38000,
    description: 'Architectural composite masterpiece. Massive cast slate-gray concrete look dividers framing thick planks of fragrant cedar wood.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 40cm x 42cm',
    materials: ['Concrete composite sheets', 'fragrant cedar wood panels'],
    features: ['Highly distinctive brutalist geometry', 'Incredibly solid structure', 'Waterproof composite finish']
  },
  {
    id: 'tv-07',
    name: 'Traditional Mvule High TV Cabinet',
    category: 'tvstands',
    price: 48000,
    description: 'Majestic taller console designed with high storage capabilities. Features two side display showcase glass cabinets and central slot arrays.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 40cm x 85cm Stand (Tall style)',
    materials: ['Premium African Mvule Wood', 'Tempered viewing glasses'],
    features: ['Comfortable viewing height for bed level', 'Dual display cabinets with internal micro led spots', 'Twelve spacious total shelves']
  },
  {
    id: 'tv-08',
    name: 'Industrial Mesh-Front Console',
    category: 'tvstands',
    price: 26500,
    description: 'Sleek dark design containing double swinging doors covered in black industrial metal mesh grids to allow IR remotes to interact with boxes seamlessly.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    dimensions: '150cm x 38cm x 50cm',
    materials: ['Baked enamel steel wire meshes', 'Charcoal stained blackwood'],
    features: ['Infrared IR remote signal flows through doors', 'Highly industrial mesh contrast', 'Airflow optimized for warm game consoles']
  },
  {
    id: 'tv-09',
    name: 'Compact Corner TV Console',
    category: 'tvstands',
    price: 19000,
    description: 'Ingenious angled rear profile matching corner living room placements perfectly, allowing space-efficient positioning.',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 50cm angled rear x 52cm',
    materials: ['Solid Cypress wood body'],
    features: ['Fits snugly in corner walls', 'Avoids awkward dead space corners', 'Two underlying storage shelves']
  },
  {
    id: 'tv-10',
    name: 'Luxurious Golden Arch Credenza',
    category: 'tvstands',
    price: 52000,
    description: 'High glam console featuring beautiful arched CNC carvings highlighted in premium gold leaf paint on a sleek dark forest-green cabinet body.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 40cm x 75cm Credenza',
    materials: ['Highly stable composite board', 'Gold leaf lining paint', 'Mahogany base'],
    features: ['Exclusive luxury aesthetic statement', 'Four spacious hidden compartments', 'Pre-bored cable exit points']
  },
  {
    id: 'tv-11',
    name: 'The Eldoret Blocky Cypress Stand',
    category: 'tvstands',
    price: 21000,
    description: 'Chunky, minimalist thick paneling constructed utilizing solid Cypress timber. Very raw, clean organic look prioritizing light sand visual qualities.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    dimensions: '150cm x 35cm x 40cm Low-rise',
    materials: ['Solid Cypress slabs', 'Clear ecological timber oil'],
    features: ['Very robust thick timbers panels', 'Excellent pale-gold timber coloration', 'Two massive open front cubby shelf compartments']
  },
  {
    id: 'tv-12',
    name: 'Rattan Accent Bohemian Credenza',
    category: 'tvstands',
    price: 34500,
    description: 'Earthy Bohemian styling featuring natural hand-spun rattan wicker panel inserts on circular sliding track cabinets. Elegant light wood.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80',
    dimensions: '160cm x 38cm x 55cm',
    materials: ['Light Ash Wood body frame', 'Natural Rattan weave webbing'],
    features: ['Exquisite organic boho texture', 'Sliding doors on hidden brass rails', 'Tough lacquer spill-guard coating']
  },
  {
    id: 'tv-13',
    name: 'Sleek High-Gloss White Lowboard',
    category: 'tvstands',
    price: 29000,
    description: 'Gleaming, bright minimalist TV lowboard utilizing executive white glass panelling and integrated pneumatic soft opening drawers.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    dimensions: '190cm x 40cm x 35cm extra-low height',
    materials: ['Mirror Gloss Acrylic board', 'Pneumatic push-to-open pistons'],
    features: ['Fingertip push-to-open drawer mechanisms', 'Sleek light-reflecting clinical shell', 'Accommodates extra massive flatscreens']
  },
  {
    id: 'tv-14',
    name: 'Triple Drawer Mahogany Media Rack',
    category: 'tvstands',
    price: 33000,
    description: 'A masterpiece comprising pure dark mahogany wood, featuring three bottom storage drawer boxes and a tall open slot for speakers and audio receivers.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80',
    dimensions: '170cm x 40cm x 58cm',
    materials: ['Genuine high grade Mahogany Wood'],
    features: ['Three massive discrete sliding drawers', 'Extra tall center shelf slot for heavy audio amplifiers', 'Intense deep chestnut coloring finish']
  },
  {
    id: 'tv-15',
    name: 'Rustic Driftwood Mini stand',
    category: 'tvstands',
    price: 15000,
    description: 'Compact rustic stand crafted utilizing reclaimed high-character weathered wood planking. Perfect for bedrooms or children study spaces.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80',
    dimensions: '100cm x 32cm x 42cm Compact',
    materials: ['Reclaimed weathered pine boards'],
    features: ['Very economical and space-efficient choice', 'Charming vintage distress highlights', 'Single full-length underlying utility compartment']
  },

  // ==================== KITCHEN CABINETS ====================
  {
    id: 'kit-01',
    name: 'Eldoret Imperial Kitchen Pantry',
    category: 'kitchen',
    price: 125000,
    description: 'Double doors swing open to reveal a massive classic larder assembly. Built-in mahogany spice door shelves, drawers, and heavy pullout preparation slabs.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 60cm x 210cm Tall Cabinet',
    materials: ['Selected Mahogany structural panels', 'Cedar internal shelving drawers'],
    features: ['High storage volume pantry', 'Integrated solid mahogany rotating spice carousels', 'Heavy heavy-duty soft closing door mechanisms']
  },
  {
    id: 'kit-02',
    name: 'Modular Shaker Wall Assembly Set',
    category: 'kitchen',
    price: 185000,
    description: 'A complete modular three-cabinet wall arrangement in executive midnight blue. Features beautiful shaker doors and elegant brushed brass pulls.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '240cm Continuous Length wall configuration',
    materials: ['High Density Moisture-Proof MDF', 'Midnight Blue Polyurethane coat'],
    features: ['Fully modular - panels can be swapped', 'Hydraulic lifting doors upper compartments', 'Elegant brass T-bar handles']
  },
  {
    id: 'kit-03',
    name: 'The Rift Kitchen Island Cart',
    category: 'kitchen',
    price: 68000,
    description: 'Premium standalone kitchen center cart. Solid block mahogany butcher chopping block top, underlying wire wine rack tiers and lockable rollers.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm x 65cm x 90cm Standard height',
    materials: ['Sturdy solid wood frame skeleton', '2-inch Mahogany butcher block', 'Lockable polyurethane wheels'],
    features: ['Heavy wood chopping top block surface', 'Friction-less locking caster wheels', 'Double underlying storage drawer arrays']
  },
  {
    id: 'kit-04',
    name: 'Classic Oak Glass Display Cabinet',
    category: 'kitchen',
    price: 95000,
    description: 'Warm country storage showcase cabinet. Triple tempered display glass panes to highlight special family dinnerware ceramics beautifully.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '130cm x 40cm x 185cm Tall Cabinet',
    materials: ['A-Grade White Oak Wood', 'Clear tempered grids safety-glass'],
    features: ['Display glass door panel arches', 'Comes with integrated vintage keylocks', 'Four wide linenlined inside compartments']
  },
  {
    id: 'kit-05',
    name: 'Sleek Minimalist Acrylic Island Cabinets',
    category: 'kitchen',
    price: 240000,
    description: 'Extremely luxurious hyper-modern continuous run layout. Matte slate gray cladding drawers offering supreme silent operation drawer glides.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '300cm Continuous long linear run',
    materials: ['High pressure acrylic panels core', 'Antiwear metallic interior frameworks'],
    features: ['Handleless touch-to-open drawers', 'Waterproof anti-swelling board layers', 'Elegant charcoal gray coloring']
  },
  {
    id: 'kit-06',
    name: 'Traditional Mahogany Cookware Rack',
    category: 'kitchen',
    price: 48000,
    description: 'Handcrafted wall mount wood pan rack featuring deep mahogany grain details and heavy solid brass hanging cookware hooks block.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '140cm x 30cm x 45cm Wall Frame',
    materials: ['Solid selected Mahogany Wood', 'Brass structural bars'],
    features: ['Heavy-duty top dish shelving grid', 'Includes ten solid brass cookware slide hooks', 'Secure lag-bolt structural wall anchors']
  },
  {
    id: 'kit-07',
    name: 'Rustic Cedar Hanging Breadbox Huth',
    category: 'kitchen',
    price: 32000,
    description: 'Charming vintage country kitchen wall accent box. Glass front panel, magnetic soft catcher lids, built matching fragrant cedar wood.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '80cm x 35cm x 65cm Small unit',
    materials: ['fragrant Cedar wood panels', 'Aromatic pine backing'],
    features: ['Naturally repels pantry moths', 'Beautiful classic scroll top edge', 'Provides dry clean space bread box']
  },
  {
    id: 'kit-08',
    name: 'Eldoret Standard 2-Door Sink Base',
    category: 'kitchen',
    price: 39000,
    description: 'Heavy duty, water-resistant solid timber cabinet carcass optimized to harbor underlying kitchen sink plumbing piping safely.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '90cm x 60cm x 85cm Ground Base',
    materials: ['Marine-Grade Treated Blockboard', 'Waterproof polyurethane layers'],
    features: ['Hollow open rear back panel for quick plumbing line routes', 'Heavy steel floor-standing leveling pegs', 'Moisture resistant design']
  },
  {
    id: 'kit-09',
    name: 'Contemporary Tall Oven Housing',
    category: 'kitchen',
    price: 85000,
    description: 'Executive vertical layout housing custom structural slots to seat a standard microwave oven, baking oven, and deep pans drawers.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '60cm x 60cm x 200cm tall tower shape',
    materials: ['Heat Shield lined MDF boards', 'Thick oak outer cladding sheets'],
    features: ['Pre-bored double electrical outlets pathways', 'Heat ventilation slots at the rear', 'Heavy double bottom pan storage drawers']
  },
  {
    id: 'kit-10',
    name: 'The Compact Studio Mini Kitchenette',
    category: 'kitchen',
    price: 110000,
    description: 'Brilliant all-in-one solution for tiny studio flats. Combines modular upper spice shelving, middle quartz marble block and base mini drawer.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm Width x 60cm Depth x 195cm Height Set',
    materials: ['White-granite synthetic marble top', 'Seasoned pine frame body'],
    features: ['Extremely spacesaving kitchen base', 'Comes pre-plubbed with mini single stainless faucet insert', 'Six smart separate storage slots']
  },
  {
    id: 'kit-11',
    name: 'Mvule Wood Classic L-Counter base',
    category: 'kitchen',
    price: 210000,
    description: 'Luxury continuous L-shape workspace structure carved entirely using genuine aged Mvule timber blocks. Incredible natural grain density.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '180cm x 150cm (L-Wing) x 60cm depth x 85cm height bases',
    materials: ['Authentic African Mvule Timber Blocks', 'Wax sealing gloss'],
    features: ['Extremely rigid heavy wood slab top', 'Comes with triple bottom cupboard compartments', 'Lifetime heavy timber stability']
  },
  {
    id: 'kit-12',
    name: 'Pastel Mint Spice Wall Rack',
    category: 'kitchen',
    price: 18000,
    description: 'Charming pastel mint-green small wall hanging shelf system, with four small integrated drawers for small items and herb bottles.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '70cm x 18cm narrow depth x 85cm height',
    materials: ['Cypress wood body', 'Antique enamel drawer pulls'],
    features: ['Aromatic light cypress construction', 'Four cute porcelain mini spice drawers', 'Quick lag-bolts installation brackets']
  },
  {
    id: 'kit-13',
    name: 'Industrial Hanging Pot-Rack Canopy',
    category: 'kitchen',
    price: 25000,
    description: 'Suspended ceiling grid frame. Hangs over your main kitchen island. Constructed from heavy mahogany frames and wrought-iron grids.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '120cm x 50cm rectangular grid frame',
    materials: ['Genuine Mahogany outline border', 'Solid hammered dark iron hangers'],
    features: ['Hangs directly from ceiling anchors', 'Includes twelve S-action iron hooks', 'Heavy weight structural rating']
  },
  {
    id: 'kit-14',
    name: 'Shabby Chic Reclaimed Sideboard',
    category: 'kitchen',
    price: 75000,
    description: 'Highly detailed, distressed farmhouse cupboard cabinet utilizing old cedar floorboards, featuring double wire-mesh door fronts.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '110cm x 40cm x 90cm sideboard',
    materials: ['Reclaimed distressed Cedar planks', 'Steel wire mesh grids'],
    features: ['Unique artistic distressed coloration', 'Twelve separate internal storage pockets', 'Perfect rustic pantry accent']
  },
  {
    id: 'kit-15',
    name: 'The Eldoret Basic Pine utility cabinet',
    category: 'kitchen',
    price: 32000,
    description: 'Sturdy, economic, and practical single vertical utility tall stand made of light seasoned pine. Ideal for laundry soaps and cleaning brooms.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    dimensions: '60cm x 40cm x 175cm Tall box stand',
    materials: ['100% Seasoned Pine wood'],
    woodOnly: true,
    features: ['Clean light-yellow timber highlights', 'Adjustable shelf plates configuration', 'Sturdy and functional']
  }
];

// Fully unique Unsplash photo IDs array to ensure absolutely ZERO image repetition and high category precision
const UNIQUE_UNSPLASH_IDS: Record<string, string[]> = {
  beds: [
    'photo-1505693416388-ac5ce068fe85',
    'photo-1598928506311-c55ded91a20c',
    'photo-1505691938895-1758d7feb511',
    'photo-1616594039964-ae9021a400a0',
    'photo-1582582621959-a0a27ff040f1',
    'photo-1617317840156-46dbda12cce4',
    'photo-1540518614846-7eded433c457',
    'photo-1615876234886-fd9a39fda97f',
    'photo-1522771739844-6a9f6d5f14af',
    'photo-1560185007-cde436f6a4d0',
    'photo-1560448204-e02f11c3d0e2',
    'photo-1531835551805-16d864c8d311',
    'photo-1584622650111-993a426fbf0a',
    'photo-1592595896551-12b371d546d5',
    'photo-1618219908412-a29a1bb7b86e'
  ],
  dining: [
    'photo-1615066390971-03e4e1c36ddf',
    'photo-1567538096630-e0c55bd6374c',
    'photo-1590794056226-79ef3a8147e1',
    'photo-1530018607912-eff2df114f24',
    'photo-1535409081156-a1e9b211a78d',
    'photo-1449247709967-d4461a6a6103',
    'photo-1513161455079-7dc1de15ef3e',
    'photo-1560448204-61dc36dc98c8',
    'photo-1519643381401-22c77e60520e',
    'photo-1503174971373-b1f69850bded',
    'photo-1520699049491-031e4064f26b',
    'photo-1544025162-d76694265947',
    'photo-1604578762246-41134e37f9cc',
    'photo-1617806118233-18e1db207fa6',
    'photo-1529180325603-9993ee6ec9a6'
  ],
  sofas: [
    'photo-1555041469-a586c61ea9bc',
    'photo-1493663284031-b7e3aefcae8e',
    'photo-1598191638104-c2c3660df1a5',
    'photo-1484101403633-562f891dc89a',
    'photo-1524758631624-e2822e304c36',
    'photo-1612151855475-877969f4e6cc',
    'photo-1549187774-b4e9b0b28f6e',
    'photo-1519710164239-da123dc03ef4',
    'photo-1631049307264-da0ec9d70304',
    'photo-1501183007986-d0d080b147f9',
    'photo-1580481072645-022f9a6dbf27',
    'photo-1512211534123-5744f84ee15a',
    'photo-1567016432779-094069958ea5',
    'photo-1600121848594-d8644e57abab',
    'photo-1511952502229-79a1f2f53d25',
    'photo-1579656338042-673685eed5a5',
    'photo-1506898667547-42e22a46884d',
    'photo-1618221381711-42ca8ab6e908',
    'photo-1506159904226-d2209e63d024',
    'photo-1550581190-9989a3d4f5b2'
  ],
  tables: [
    'photo-1533090161767-e6ffed986c88',
    'photo-1581428982868-e410dd047a90',
    'photo-1622372738946-6acdc194611e',
    'photo-1532372320978-9b4d8a32f23e',
    'photo-1611269150997-db7bf039c36d',
    'photo-1544457070-4cd964140023',
    'photo-1573808182121-787365855470',
    'photo-1565793298595-6a879b1d9492',
    'photo-15955105422-5b925b331f50',
    'photo-1519961655809-34fc156bcf36',
    'photo-1517805686688-47dd930554b2',
    'photo-1542838132-92c53300491e',
    'photo-1538688525198-9b88f6f53126',
    'photo-1551216223-37c8d1dbec5c',
    'photo-1565626424178-c73a7263e8a6'
  ],
  shoeracks: [
    'photo-1595428774223-ef52624120d2',
    'photo-1595515106969-1ce29566ff1c',
    'photo-1597072689227-8882273e8f6a',
    'photo-1512918728675-ed5a9ecdebfd',
    'photo-1601340621419-75a7b6b15886',
    'photo-1540555700478-4be289fbecef',
    'photo-1603006905003-be475563bc59',
    'photo-1506084868230-bb9d95c24759',
    'photo-1616486338812-3dadae4b4ace',
    'photo-1620626011161-00a8af6dfb5e',
    'photo-1596073410627-c11d044237d6',
    'photo-1616486038856-f21b329944d3',
    'photo-1577140917170-285929fb55b7',
    'photo-1594787318286-3d835c1d207f',
    'photo-1591123120675-6f7f1aae0e5b'
  ],
  tvstands: [
    'photo-1607473031853-11b9d8823db6',
    'photo-1593085512500-5d55148d6f0d',
    'photo-1502672260266-1c1ef2d93688',
    'photo-1586023492125-27b2c045efd7',
    'photo-1583847268964-b28dc8f51f92',
    'photo-1565726166189-e983ca1bfd72',
    'photo-1601050690597-df056fb4ce78',
    'photo-1598300042247-d088f8ab3a91',
    'photo-1499916078041-0758ae7deda3',
    'photo-1513694203232-719a280e022f',
    'photo-1434082033009-b81d41d32e1c',
    'photo-1572891212674-d2751ab04e21',
    'photo-1554995207-c18c203602cb',
    'photo-1595515143141-6101c51d53e0',
    'photo-1618221195710-dd6b41faaea6'
  ],
  kitchen: [
    'photo-1556911220-e15b29be8c8f',
    'photo-1588854337236-6889d631faa8',
    'photo-1600585154340-be6161a56a0c',
    'photo-1600607687939-ce8a6c25118c',
    'photo-1556909114-f6e7ad7d3136',
    'photo-1584622781564-1d987f7333c1',
    'photo-1600566753190-17f0baa2a6c3',
    'photo-1600573472591-ee6b68d14c68',
    'photo-1556912173-3bb406ef7e77',
    'photo-1565183997392-2f6f122e5912',
    'photo-1539922631499-0915a1110909',
    'photo-1600585154526-990dced4db0d',
    'photo-1595514535319-35718df8831b',
    'photo-1516880711640-ef7db81be3e1',
    'photo-1507089947368-19c1da9775ae'
  ]
};

const categoryCounters: Record<string, number> = {};

PRODUCTS.forEach((product) => {
  const cat = product.category;
  if (categoryCounters[cat] === undefined) {
    categoryCounters[cat] = 0;
  }
  const index = categoryCounters[cat];
  categoryCounters[cat]++;

  // Overwrite premier slots with gorgeous custom generated local image paths (fully resolved using new URL for Vite production compatibility)
  if (product.id === 'bed-02') {
    product.image = new URL('./assets/images/tufted_double_bed_1781312916344.jpg', import.meta.url).href;
  } else if (product.id === 'bed-06') {
    product.image = new URL('./assets/images/cushion_tufted_double_bed_1781309711410.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-01') {
    product.image = new URL('./assets/images/blush_chesterfield_sofa_1781312901031.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-02') {
    product.image = new URL('./assets/images/l_shape_grey_sofa_1781312887247.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-05') {
    product.image = new URL('./assets/images/blush_velvet_chesterfield_sofa_1781309698936.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-06') {
    product.image = new URL('./assets/images/brown_leather_recliner_chair_1781313809818.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-15') {
    product.image = new URL('./assets/images/grey_fabric_lounge_recliner_1781313825545.jpg', import.meta.url).href;
  } else if (product.id === 'sofa-17') {
    product.image = new URL('./assets/images/l_shape_grey_sectional_sofa_1781309688053.jpg', import.meta.url).href;
  } else if (product.id === 'tv-01') {
    product.image = new URL('./assets/images/white_oak_modern_tv_stand_1781313854892.jpg', import.meta.url).href;
  } else if (product.id === 'tv-02') {
    product.image = new URL('./assets/images/solid_mahogany_tv_stand_1781313839932.jpg', import.meta.url).href;
  } else if (product.id === 'table-01') {
    product.image = new URL('./assets/images/heart_cutout_table_1781312875428.jpg', import.meta.url).href;
  } else if (product.id === 'table-02') {
    product.image = new URL('./assets/images/heart_cutout_coffee_table_1781309672352.jpg', import.meta.url).href;
  } else if (product.id === 'shoe-01') {
    product.image = new URL('./assets/images/white_shoe_rack_1781312928606.jpg', import.meta.url).href;
  } else if (product.id === 'shoe-03') {
    product.image = new URL('./assets/images/butterfly_beauty_chest_1781312942118.jpg', import.meta.url).href;
  } else if (product.id === 'shoe-04') {
    product.image = new URL('./assets/images/tall_white_shoe_rack_tower_1781309722862.jpg', import.meta.url).href;
  } else if (product.id === 'shoe-05') {
    product.image = new URL('./assets/images/butterfly_beauty_chest_1781309739010.jpg', import.meta.url).href;
  } else {
    // Other items assigned unique signatures of Unsplash IDs
    const uniqueIds = UNIQUE_UNSPLASH_IDS[cat] || [];
    const photoId = uniqueIds[index % uniqueIds.length] || 'photo-1555041469-a586c61ea9bc';
    
    // Add unique signature parameters so the browser loads different variations or de-duplicates completely
    const busterValue = `cabinet-catalog-${cat}-${product.id}`;
    product.image = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=600&q=80&sig=${encodeURIComponent(busterValue)}`;
  }
});

