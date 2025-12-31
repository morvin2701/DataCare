import React, { useRef } from 'react';
import { Store, Package, Factory, Gem, ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Layers, BarChart, Smartphone, Search, Award, ChevronDown, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SECTOR_DETAILS = [
  {
    id: 'retailers',
    title: 'Retail Showrooms',
    tagline: 'Speed, Service, and Compliance',
    description: "In the fast-paced world of retail jewellery, customer experience is everything. Datacare transforms your showroom into a digital fortress, enabling lightning-fast billing during festivals, managing complex loyalty schemes, and ensuring 100% GST compliance without the headache. We bridge the gap between traditional hospitality and modern efficiency.",
    icon: Store,
    color: 'amber',
    gradient: 'from-amber-400 to-orange-600',
    stats: [
      { label: 'Faster Billing', value: '40%' },
      { label: 'Retention Rate', value: '85%' },
    ],
    features: [
      { title: 'POS Acceleration', desc: 'Generate GST bills in under 3 clicks with integrated weighing scale support.', icon: Zap },
      { title: 'Smart Loyalty', desc: 'Automated points calculation, kitty schemes, and birthday notifications.', icon: Award },
      { title: 'Inventory Control', desc: 'Real-time tray stock tracking and dead-stock alerts to optimize capital.', icon: Layers },
      { title: 'Try-on Tracking', desc: 'Monitor items taken out for trial to prevent shrinkage and theft.', icon: Shield }
    ]
  },
  {
    id: 'wholesalers',
    title: 'Wholesale & Distribution',
    tagline: 'Volume Management with Precision',
    description: "Wholesalers deal with thin margins and massive volumes. Our solution focuses on inventory velocity—tracking consignment goods (Jangad) sent to retailers, managing salesman travel stocks, and ensuring that your capital isn't tied up in stagnant inventory. Gain visibility across all your territories in real-time.",
    icon: Package,
    color: 'blue',
    gradient: 'from-blue-400 to-indigo-600',
    stats: [
      { label: 'Stock Accuracy', value: '99.9%' },
      { label: 'Audit Speed', value: '10x' },
    ],
    features: [
      { title: 'Approval (Jangad)', desc: 'Track goods sent on approval and process returns effortlessly.', icon: CheckCircle2 },
      { title: 'RFID Audits', desc: 'Scan thousands of tagged items in minutes using handheld readers.', icon: Zap },
      { title: 'Travel Packs', desc: 'Mobile app for salesmen to showcase live stock and book orders remotely.', icon: Smartphone },
      { title: 'Multi-Branch', desc: 'Centralized control for warehouses across different cities and states.', icon: Layers }
    ]
  },
  {
    id: 'manufacturers',
    title: 'Manufacturing Units',
    tagline: 'From Raw Metal to Masterpiece',
    description: "Manufacturing is where the profit is made—or lost. Our system tracks the transformation of metal through every stage: melting, casting, filing, setting, and polishing. We help you identify 'invisible' losses and ensure every milligram of gold is accounted for, optimizing your production capability.",
    icon: Factory,
    color: 'emerald',
    gradient: 'from-emerald-400 to-teal-600',
    stats: [
      { label: 'Loss Recovery', value: '15%' },
      { label: 'Process Visibility', value: '100%' },
    ],
    features: [
      { title: 'Metal Accounting', desc: 'Granular tracking of gross weight, net weight, and pure weight.', icon: BarChart },
      { title: 'Job Worker Mgmt', desc: 'Track issued gold vs. received ornaments per artisan (Karigar).', icon: Users },
      { title: 'Cost Analysis', desc: 'Calculate exact landing cost including labor, wastage, and stone costs.', icon: TrendingUp },
      { title: 'Purity Control', desc: 'Integrate touch/testing reports directly into the batch history.', icon: Shield }
    ]
  },
  {
    id: 'antique',
    title: 'Antique & Jadau',
    tagline: 'Preserving Unique Value',
    description: "Standard inventory systems fail with Antique and Jadau jewellery because no two pieces are alike. We offer a specialized module that treats every item as a unique asset, allowing for detailed attribute tracking, history logging, and high-resolution visual cataloging.",
    icon: Gem,
    color: 'purple',
    gradient: 'from-purple-400 to-fuchsia-600',
    stats: [
      { label: 'Cataloging Speed', value: '2x' },
      { label: 'Sales Conversion', value: '30%' },
    ],
    features: [
      { title: 'Visual Inventory', desc: 'Store multiple HD angles for every unique piece in the cloud.', icon: Search },
      { title: 'Attribute Matrix', desc: 'Track period, origin, karigari style, and certification details.', icon: Layers },
      { title: 'Certificate Printing', desc: 'Generate authenticity certificates with embedded QR codes.', icon: Award },
      { title: 'Valuation History', desc: 'Track value appreciation of pieces over time with market rates.', icon: TrendingUp }
    ]
  }
];

const Sectors: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-amber-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              Tailored Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Software That Speaks <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Your Language</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We understand that a manufacturer's needs are vastly different from a retailer's. 
              Discover the specialized modules we've built for your specific sector.
            </p>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400"
            >
              <div className="text-xs uppercase tracking-widest mb-2">Scroll to Explore</div>
              <ChevronDown className="w-6 h-6 mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        {/* Sectors Display */}
        <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
          {SECTOR_DETAILS.map((sector, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={sector.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-5/12 sticky top-32">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative aspect-[4/5] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col items-center justify-center p-8">
                       
                       {/* Abstract Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className={`w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-from),transparent)] text-${sector.color}-500`}></div>
                       </div>
                       
                       <motion.div 
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         transition={{ type: "spring", stiffness: 300 }}
                         className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center shadow-lg mb-8 relative z-10`}
                       >
                         <sector.icon className="w-16 h-16 text-white" />
                       </motion.div>

                       <h3 className="text-3xl font-bold text-slate-900 text-center mb-2">{sector.title}</h3>
                       <p className={`text-${sector.color}-600 font-bold uppercase tracking-widest text-xs mb-8`}>{sector.tagline}</p>

                       {/* Mini Stats Grid */}
                       <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-slate-100">
                          {sector.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className={`text-3xl font-extrabold text-${sector.color}-600`}>{stat.value}</div>
                              <div className="text-xs text-slate-400 font-bold uppercase mt-1">{stat.label}</div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 lg:pt-8">
                   <div className="flex items-center space-x-3 mb-6">
                     <span className={`h-px w-12 bg-${sector.color}-500`}></span>
                     <span className={`text-${sector.color}-600 font-bold uppercase tracking-widest text-sm`}>
                       Sector {index + 1}
                     </span>
                   </div>
                   
                   <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                     {sector.title} Solutions
                   </h2>
                   
                   <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                     {sector.description}
                   </p>

                   {/* Features Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {sector.features.map((feature, fIndex) => (
                       <motion.div 
                         key={fIndex}
                         whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.9)' }}
                         className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300"
                       >
                         <div className={`w-10 h-10 rounded-lg bg-${sector.color}-50 flex items-center justify-center mb-4 text-${sector.color}-600`}>
                           <feature.icon className="w-5 h-5" />
                         </div>
                         <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                         <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                       </motion.div>
                     ))}
                   </div>
                   
                   <div className="mt-10 pt-6 border-t border-slate-200/50">
                     <a href="#/contact" className={`inline-flex items-center text-sm font-bold text-${sector.color}-600 hover:text-${sector.color}-700 transition-colors group`}>
                       Schedule a {sector.title} Demo 
                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </a>
                   </div>
                </div>

              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Not sure where you fit?</h2>
             <p className="text-xl text-slate-400 mb-8">
               Most businesses are hybrids. We configure mixed-modules to suit your exact operational model perfectly.
             </p>
             <a href="#/contact" className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg shadow-amber-500/30">
               Talk to a Solution Architect
             </a>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Sectors;