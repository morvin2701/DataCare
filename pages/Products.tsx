import React, { useState } from 'react';
import { Check, Star, Info, Package, Zap, BarChart, Database, Briefcase, Filter, ArrowRight, LayoutGrid, List, ChevronDown, Crown, Shield } from 'lucide-react';
import { COMMON_FEATURES, PRODUCT_VERSIONS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'retail' | 'wholesale' | 'chain'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Filter Logic
  const filteredProducts = PRODUCT_VERSIONS.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'retail') return ['standard', 'ultra', 'pro', 'enterprise'].includes(product.id);
    if (filter === 'wholesale') return ['advanced', 'enterprise'].includes(product.id);
    if (filter === 'chain') return ['enterprise'].includes(product.id);
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Editions' },
    { id: 'retail', label: 'For Retailers' },
    { id: 'wholesale', label: 'For Wholesalers' },
    { id: 'chain', label: 'Large Chains' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-amber-50/50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Powering 5000+ Businesses</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Growth Engine</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            From single-store startups to multi-national franchises. 
            Scalable architecture that grows with your ambition.
          </motion.p>
        </div>

        {/* Control Bar: Filter & View Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center bg-white/70 backdrop-blur-md border border-slate-200 p-2 rounded-2xl shadow-sm mb-12 sticky top-20 z-40"
        >
          {/* Filter Tabs */}
          <div className="flex space-x-1 p-1 bg-slate-100/50 rounded-xl overflow-x-auto w-full md:w-auto mb-4 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  filter === cat.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {filter === cat.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white shadow-sm border border-slate-200 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* View Toggles & Info */}
          <div className="flex items-center space-x-4 px-2">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
               Showing {filteredProducts.length} Editions
             </span>
             <div className="flex bg-slate-100 rounded-lg p-1">
               <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-amber-600' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 <LayoutGrid className="w-4 h-4" />
               </button>
               <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-amber-600' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 <List className="w-4 h-4" />
               </button>
             </div>
          </div>
        </motion.div>

        {/* Core Features Teaser (Hybrid Element) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full"></div>
           
           <div className="flex items-center space-x-4 relative z-10 mb-4 md:mb-0">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <Database className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">The Core Engine</h3>
                <p className="text-slate-400 text-sm">Every edition includes {COMMON_FEATURES.length}+ essential features.</p>
              </div>
           </div>
           
           <div className="flex flex-wrap gap-2 relative z-10 justify-center md:justify-end">
              {COMMON_FEATURES.slice(0, 5).map((f, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 flex items-center">
                  <Check className="w-3 h-3 mr-1 text-green-400" /> {f}
                </span>
              ))}
              <span className="px-3 py-1 bg-amber-500 text-slate-900 rounded-full text-xs font-bold">+ {COMMON_FEATURES.length - 5} More</span>
           </div>
        </motion.div>

        {/* Product Grid / List Hybrid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isEnterprise = product.id === 'enterprise';
              const isHovered = hoveredCard === product.id;
              
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    group relative bg-white rounded-3xl overflow-hidden transition-all duration-300
                    ${viewMode === 'list' ? 'flex flex-col md:flex-row' : 'flex flex-col'}
                    ${isEnterprise ? 'ring-2 ring-amber-400/50 shadow-amber-200/50' : 'border border-slate-200 hover:border-amber-200'}
                    ${isHovered ? 'shadow-2xl translate-y-[-4px]' : 'shadow-lg'}
                  `}
                >
                  {/* Decorative Gradient Header */}
                  <div className={`
                    absolute top-0 left-0 right-0 h-1 z-20
                    ${isEnterprise ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 animate-gradient-x' : 'bg-transparent'}
                  `}/>

                  {/* Card Content */}
                  <div className={`p-8 relative z-10 ${viewMode === 'list' ? 'md:w-2/5 border-b md:border-b-0 md:border-r border-slate-100' : ''}`}>
                    <div className="flex justify-between items-start mb-6">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-inner
                         ${isEnterprise ? 'bg-gradient-to-br from-amber-100 to-orange-50 text-amber-600' : 'bg-slate-50 text-slate-600'}
                       `}>
                          {isEnterprise ? <Crown className="w-7 h-7" /> : <Package className="w-7 h-7" />}
                       </div>
                       {isEnterprise && (
                         <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center">
                           <Star className="w-3 h-3 mr-1 fill-amber-400 text-amber-400" /> Top Tier
                         </span>
                       )}
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Best for {product.recommendedFor}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    {viewMode === 'list' && (
                       <div className="mt-8">
                          <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-lg w-full md:w-auto">
                            Request Demo
                          </button>
                       </div>
                    )}
                  </div>

                  {/* Features Section */}
                  <div className={`bg-slate-50/50 p-8 flex-1 flex flex-col ${viewMode === 'list' ? 'md:w-3/5' : ''}`}>
                    <div className="mb-6">
                      <h4 className="flex items-center text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                        <Briefcase className="w-4 h-4 mr-2 text-amber-500" />
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {product.uniqueFeatures.slice(0, isHovered || viewMode === 'list' ? 8 : 4).map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-start text-sm text-slate-700 font-medium"
                          >
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                        {product.uniqueFeatures.length > 4 && !isHovered && viewMode === 'grid' && (
                          <li className="text-xs text-amber-600 font-bold pl-6">
                            + {product.uniqueFeatures.length - 4} more features...
                          </li>
                        )}
                      </ul>
                    </div>

                    {viewMode === 'grid' && (
                      <div className="mt-auto pt-6 border-t border-slate-200/50">
                        <button className={`
                          w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center group/btn
                          ${isEnterprise 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200 hover:shadow-amber-300' 
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-300 hover:text-amber-600'}
                        `}>
                          View Full Details 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Feature Comparison Teaser */}
        <div className="mt-24 text-center">
           <div className="inline-block p-1 bg-slate-100 rounded-full mb-8">
              <span className="px-4 py-1 bg-white rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">
                Need a detailed breakdown?
              </span>
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Compare Editions Side-by-Side</h2>
           <p className="text-slate-500 max-w-2xl mx-auto mb-8">
             Download our comprehensive feature matrix PDF to see exactly what each version offers, from simple billing to complex chain management.
           </p>
           <a 
             href="https://drive.google.com/file/d/1RPLcQuxywrv0sm1TA2qHAHoKqmMLi434/view?usp=drive_link"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-amber-400 hover:text-amber-600 transition-colors shadow-sm"
           >
             <Info className="w-5 h-5 mr-2" />
             Download Feature Matrix
           </a>
        </div>

      </div>
    </div>
  );
};

export default Products;