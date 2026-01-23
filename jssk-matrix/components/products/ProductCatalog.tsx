"use client";
import { useState } from 'react';
import { Droplets, Zap, Sun, Sparkles, Feather, Gem, Layers, Star, Box } from 'lucide-react';

// Product Data
const products = [
  {
    id: 1,
    categories: ['wet', 'matte'],
    icon: Droplets,
    color: 'text-blue-500',
    borderColor: 'hover:border-blue-500/30',
    tagColor: 'text-blue-500',
    tag: 'Wet Lamination',
    title: 'Matte Wet BOPP',
    desc: 'Clear co-extruded antistatic BOPP based film. One side matte & other side gloss.',
    features: ['Natural paper look', 'Excellent machinability', 'UV coating ready'],
    uses: ['Brochures & Folders', 'Carton Lamination', 'Rice Bags']
  },
  {
    id: 2,
    categories: ['thermal', 'matte'],
    icon: Zap,
    color: 'text-orange-500',
    borderColor: 'hover:border-orange-500/30',
    tagColor: 'text-orange-500',
    tag: 'Thermal Lamination',
    title: 'Matte Thermal BOPP',
    desc: 'Engineered for single/both sides high speed thermal lamination with natural matte look.',
    features: ['Aesthetic Matte Finish', 'High Durability', 'Foil Stamping Ready'],
    uses: ['Posters & Cartons', 'Diaries & Manuals', 'Photo Albums']
  },
  {
    id: 3,
    categories: ['wet', 'gloss'],
    icon: Sun,
    color: 'text-cyan-500',
    borderColor: 'hover:border-cyan-500/30',
    tagColor: 'text-blue-500',
    tag: 'Wet Lamination',
    title: 'Gloss Wet BOPP',
    desc: 'Clear co-extruded antistatic BOPP based both sides treated film.',
    features: ['Good Gloss & Clarity', 'Low Haze', 'High Machinability'],
    uses: ['Brochures & Posters', 'Magazines', 'Rice Bag Lamination']
  },
  {
    id: 4,
    categories: ['thermal', 'gloss'],
    icon: Sparkles,
    color: 'text-cyan-500',
    borderColor: 'hover:border-cyan-500/30',
    tagColor: 'text-orange-500',
    tag: 'Thermal Lamination',
    title: 'Gloss Thermal BOPP',
    desc: 'Superior gloss finish, engineered for single/both sides high speed thermal lamination.',
    features: ['Superior Gloss', 'High Clarity', 'Excellent Bonding'],
    uses: ['Brochures & Folders', 'Cartons & Books', 'Photo Albums']
  },
  {
    id: 5,
    categories: ['thermal', 'matte', 'specialty'],
    icon: Feather,
    color: 'text-indigo-500',
    borderColor: 'hover:border-indigo-500/30',
    tagColor: 'text-indigo-400',
    tag: 'Specialty Thermal',
    title: 'Silky Matte Thermal',
    desc: 'BOPP based film with a premium silky finish. Fingerprint resistant.',
    features: ['Silky Satin Finish', 'Fingerprint Resistant', 'Non-reflective'],
    uses: ['Premium Cartons', 'Diaries & Books', 'Photo Albums']
  },
  {
    id: 6,
    categories: ['wet', 'matte', 'specialty'],
    icon: Droplets,
    color: 'text-indigo-500',
    borderColor: 'hover:border-indigo-500/30',
    tagColor: 'text-indigo-400',
    tag: 'Specialty Wet',
    title: 'Silky Matte Wet BOPP',
    desc: 'Co-extruded antistatic BOPP based both sides treated film with silky finish.',
    features: ['Unique Optics', 'Embossing Ready', 'Hot Foil Stamping'],
    uses: ['Brochures & Folders', 'Magazines', 'Rice Bag Lamination']
  },
  {
    id: 7,
    categories: ['wet', 'specialty'],
    icon: Gem,
    color: 'text-slate-300',
    borderColor: 'hover:border-slate-300',
    tagColor: 'text-slate-400',
    tag: 'Specialty Metallic',
    title: 'Silver Wet BOPP',
    desc: 'Clear co-extruded BOPP based film, one side metalized, one side untreated.',
    features: ['Good Metal Anchorage', 'Twist Retention', 'Barrier Properties'],
    uses: ['Decorative Lamination', 'Twist Wrap', 'Packaging']
  },
  {
    id: 8,
    categories: ['thermal', 'gloss', 'specialty'],
    icon: Layers,
    color: 'text-teal-500',
    borderColor: 'hover:border-teal-500/30',
    tagColor: 'text-teal-500',
    tag: 'PET Thermal',
    title: 'Gloss Thermal PET',
    desc: 'PET based films with excellent gloss and good scuff resistance. Ideal for single side.',
    features: ['High Gloss & Stiffness', 'Ink Bonding', 'Scuff Resistance'],
    uses: ['Menu Cards & Maps', 'Certificates', 'Photo Albums']
  }
];

const filters = [
  { id: 'all', label: 'All Products' },
  { id: 'wet', label: 'Wet Lamination' },
  { id: 'thermal', label: 'Thermal Lamination' },
  { id: 'matte', label: 'Matte Finish' },
  { id: 'gloss', label: 'Gloss Finish' },
  { id: 'specialty', label: 'Specialty / PET' },
];

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="bg-black min-h-screen">
      {/* Filter Bar */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === btn.id
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-transparent text-slate-400 border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            
            return (
              <div 
                key={product.id}
                className={`group flex flex-col glass-panel rounded-2xl p-6 border border-white/10 hover:bg-white/[0.03] relative overflow-hidden transition-all duration-300 ${product.borderColor}`}
              >
                {/* Background Icon Fade */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <Icon className={`w-24 h-24 ${product.color}`} />
                </div>

                <div className="mb-4 relative z-10">
                  <span className={`text-xs font-semibold tracking-wider uppercase ${product.tagColor}`}>
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight mt-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* MICRON BUTTONS REMOVED HERE AS REQUESTED */}

                <div className="grid grid-cols-2 gap-4 mt-auto border-t border-white/5 pt-4 relative z-10">
                  <div>
                    <h4 className={`text-xs font-medium mb-2 flex items-center gap-1.5 ${product.color.replace('text-', 'text-opacity-80 text-')}`}>
                      <Star className="w-3 h-3" /> Features
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-none">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-xs font-medium mb-2 flex items-center gap-1.5 ${product.color.replace('text-', 'text-opacity-80 text-')}`}>
                      <Box className="w-3 h-3" /> Uses
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-none">
                      {product.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}