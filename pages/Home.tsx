import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, BarChart3, Smartphone, Users, Zap, Globe, Lock, Code, Database, Server, Cpu, Cloud, TrendingUp, Printer, Scale, ScanBarcode, Fingerprint, CheckCircle2, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Floating Diamond Particles Configuration
  const particles = Array.from({ length: 20 });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-sans text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        
        {/* 1. Animated Background Gradients (The "Atmosphere") */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-transparent"></div>
        </div>

        {/* 2. Perspective Grid (The "Tech Foundation") */}
        <div className="absolute inset-0 z-0 overflow-hidden perspective-1000 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[-20%] left-[-50%] right-[-50%] h-[100%] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)] origin-bottom"
          >
             {/* Moving grid effect */}
             <motion.div 
                animate={{ y: [0, 64] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
             />
          </motion.div>
        </div>

        {/* 3. Floating Diamonds (The "Jewellery" Element) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-amber-300/40 to-amber-500/20 border border-amber-500/30 shadow-sm"
              style={{
                width: Math.random() * 40 + 10 + 'px',
                height: Math.random() * 40 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + 10 + '%',
                borderRadius: '4px',
                transform: 'rotate(45deg)'
              }}
              animate={{
                y: [0, -100 - Math.random() * 200],
                rotate: [45, 45 + Math.random() * 90],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* 4. Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-slate-700 text-xs font-bold tracking-wide uppercase">Trusted by 5,000+ Jewellers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              The Gold Standard in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 animate-gradient-x drop-shadow-sm">
                Jewellery ERP
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
            >
              From raw metal to retail masterpiece. Orchestrate your inventory, accounts, and customer loyalty with software built specifically for the brilliance of your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
               <Link to="/products" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  Explore Solutions <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm border border-slate-200 px-8 py-4 rounded-full text-slate-700 font-bold text-lg hover:border-slate-400 hover:text-slate-900 transition-all shadow-lg"
                >
                  Book Live Demo
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Marquee Section */}
      <section className="py-10 bg-white/50 border-y border-slate-200 overflow-hidden relative z-20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest">Powered By Modern Architecture</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex space-x-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center space-x-2 text-slate-600"><Code className="w-6 h-6 text-blue-500"/> <span className="text-xl font-bold">React Native</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Database className="w-6 h-6 text-green-500"/> <span className="text-xl font-bold">PostgreSQL</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Cloud className="w-6 h-6 text-cyan-500"/> <span className="text-xl font-bold">AWS Cloud</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Server className="w-6 h-6 text-purple-500"/> <span className="text-xl font-bold">Node.js</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><ShieldCheck className="w-6 h-6 text-amber-500"/> <span className="text-xl font-bold">OAuth 2.0</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Smartphone className="w-6 h-6 text-indigo-500"/> <span className="text-xl font-bold">Android</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Cpu className="w-6 h-6 text-red-500"/> <span className="text-xl font-bold">AI Analytics</span></div>
                <div className="flex items-center space-x-2 text-slate-600"><Globe className="w-6 h-6 text-teal-500"/> <span className="text-xl font-bold">REST API</span></div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hardware Integration Ecosystem */}
      <section className="py-24 bg-white/40 backdrop-blur-md relative overflow-hidden z-20">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Seamless Ecosystem</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Plug-and-Play Hardware Integration</h2>
               <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                  We don't just sell software; we provide a connected environment. Datacare Softech integrates natively with top-tier hardware to eliminate manual data entry.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { 
                   icon: Scale, 
                   title: "Precision Weighing Scales", 
                   desc: "Eliminate manual errors entirely. Our system integrates directly with high-precision digital balances from Mettler Toledo, Sartorius, and local brands, ensuring that the exact weight is captured instantly on the billing screen with zero latency." 
                 },
                 { 
                   icon: Printer, 
                   title: "Industrial Barcode Printers", 
                   desc: "Design and print custom jewellery tags with ease. We support native command languages for TSC, Zebra, and Citizen printers, allowing for complex layouts including QR codes, Hallmarking logos, and pricing details without third-party drivers." 
                 },
                 { 
                   icon: ScanBarcode, 
                   title: "RFID & Fast Scanning", 
                   desc: "Revolutionize your stock audits. Our RFID integration allows you to scan trays of 100+ items in seconds, instantly updating inventory status. Perfect for high-volume wholesalers who need to track consignment goods moving in and out." 
                 },
                 { 
                   icon: Fingerprint, 
                   title: "Biometric Security", 
                   desc: "Secure your data with physical verification. replace passwords with fingerprint authentication for staff login, sales authorization, and accessing sensitive financial reports, ensuring complete accountability in your showroom." 
                 }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col sm:flex-row bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 hover:border-amber-300 transition-colors shadow-lg hover:shadow-xl group"
                 >
                    <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-amber-500 border border-slate-100 shadow-inner group-hover:bg-amber-50 transition-colors">
                         <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Highlights Section - 3D Hover Cards */}
      <section className="py-24 bg-transparent relative overflow-hidden z-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900"
            >
              Why Industry Leaders Choose Datacare
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-600 text-lg"
            >
              We don't just build software; we engineer success for the jewellery ecosystem.
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, color: "amber", title: "100% GST Compliant", text: "Navigate complex tax regulations effortlessly. Automated e-invoicing and real-time reporting keep you ahead of the curve." },
              { icon: BarChart3, color: "blue", title: "Deep Analytics", text: "Transform raw data into actionable insights. Track profitability per gram, employee efficiency, and customer buying patterns." },
              { icon: Smartphone, color: "green", title: "Mobile Freedom", text: "Your business in your pocket. Monitor stock, approve orders, and view sales dashboards from anywhere in the world." },
              { icon: Users, color: "purple", title: "Omni-Channel", text: "Seamlessly unify your retail, wholesale, and manufacturing units under one robust digital roof." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, rotateX: 5, rotateY: 5, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-2xl transition-all duration-300 group perspective-1000"
              >
                <div className={`w-14 h-14 bg-${feature.color}-50 text-${feature.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-${feature.color}-100`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Client Success Stories (Replaces Testimonials Marquee) */}
      <section className="py-24 bg-white/20 backdrop-blur-sm border-y border-slate-200/50 overflow-hidden z-20">
         <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Real Results</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Client Success Stories</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              How leading jewellers are using Datacare Softech to transform their operations.
            </p>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "90% Faster Audits",
                sector: "Retail Chain",
                desc: "A multi-branch retailer implemented our RFID solution and reduced their stock taking time from 2 days to just 3 hours per branch.",
                stat: "Time Saved"
              },
              {
                title: "Zero Data Discrepancy",
                sector: "Wholesale",
                desc: "By utilizing our centralized cloud synchronization, a wholesaler with 50+ traveling salesmen achieved real-time stock visibility across all territories.",
                stat: "Accuracy"
              },
              {
                title: "Manufacturing Precision",
                sector: "Production House",
                desc: "Automated metal loss calculation helped a factory identify and plug gold leakage points, resulting in a significant boost to the bottom line.",
                stat: "Efficiency"
              }
            ].map((caseStudy, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-200/50 relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                   <TrendingUp className="w-24 h-24 text-amber-500" />
                 </div>
                 <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase mb-4 border border-amber-100">
                   {caseStudy.sector}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">{caseStudy.title}</h3>
                 <p className="text-slate-600 leading-relaxed mb-6">{caseStudy.desc}</p>
                 <div className="pt-6 border-t border-slate-100 flex items-center text-slate-900 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>Proven {caseStudy.stat}</span>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Deployment Process Section - Animated Line */}
      <section className="py-24 bg-transparent relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Journey with Us</h2>
              <p className="mt-4 text-slate-600">From the first hello to a fully optimized digital workflow.</p>
            </div>
            
            <div className="relative">
               {/* Connecting Line with animating Gradient */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0 overflow-hidden rounded-full">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                  />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { title: "Consultation", desc: "Understanding your specific business model and pain points." },
                    { title: "Configuration", desc: "Tailoring the software modules to fit your workflow." },
                    { title: "Deployment", desc: "Seamless installation and data migration on your systems." },
                    { title: "Training", desc: "On-site or remote training for your staff to ensure mastery." }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 text-center relative"
                    >
                      <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ring-4 ring-slate-100 shadow-xl relative overflow-hidden">
                        <span className="relative z-10">{idx + 1}</span>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-transparent"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Feature Deep Dive Section - REMASTERED "Digital Transformation" */}
      <section className="py-24 bg-white/30 backdrop-blur-sm overflow-hidden z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Visual Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-gradient-to-br from-amber-50 to-white p-6 rounded-3xl border border-amber-100 shadow-xl">
                   <div className="flex items-center justify-between mb-4">
                      <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><TrendingUp className="w-6 h-6"/></div>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded text-xs">+24% Growth</span>
                   </div>
                   <h4 className="font-bold text-slate-900 text-lg">Sales Efficiency</h4>
                   <p className="text-slate-500 text-sm mt-1">Faster billing cycles leading to higher customer retention.</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex flex-col justify-between">
                   <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
                   <div>
                     <h4 className="font-bold text-slate-900">Zero Loss</h4>
                     <p className="text-slate-500 text-xs mt-1">Precise metal accounting.</p>
                   </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-between text-white">
                   <Layers className="w-8 h-8 text-amber-400 mb-4" />
                   <div>
                     <h4 className="font-bold">Full Stack</h4>
                     <p className="text-slate-400 text-xs mt-1">Inventory to Balance Sheet.</p>
                   </div>
                </div>

                <div className="col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 shadow-xl flex items-center justify-between">
                   <div>
                      <h4 className="font-bold text-slate-900 text-lg">5K+ Jewellers</h4>
                      <p className="text-slate-500 text-sm">Trust us daily.</p>
                   </div>
                   <div className="flex -space-x-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-indigo-50 flex items-center justify-center text-xs font-bold text-slate-400 shadow-sm">
                          U{i}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-amber-200 to-blue-200 blur-3xl -z-10 opacity-20"></div>
            </motion.div>
            
            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider">
                Future-Ready ERP
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                The Digital Transformation Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Deserves.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                In an industry built on trust and precision, your software should be your strongest asset. Datacare Softech eliminates manual errors, reduces theft through strict inventory controls, and enhances customer relationships through smart loyalty management.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time gold & silver rate integration with market updates",
                  "Advanced biometric security & granular user role management",
                  "Automated WhatsApp notifications for bills & birthdays",
                  "Seamless Omni-channel experience for retail & wholesale"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center text-slate-900 font-bold hover:text-amber-600 transition-colors">
                  Schedule a Consultation <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-slate-100 text-slate-900 border-t border-slate-200 relative overflow-hidden z-20">
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Lock className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Your data is your most valuable asset. We protect it with daily automated backups, 
              encrypted databases, and granular user permission controls.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-600 font-medium">
            <div className="flex items-center"><Globe className="w-5 h-5 mr-2 text-amber-500" /> Cloud Sync</div>
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-amber-500" /> Fraud Prevention</div>
            <div className="flex items-center"><Lock className="w-5 h-5 mr-2 text-amber-500" /> Data Encryption</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-amber-400">
           <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-400 mix-blend-multiply"
           />
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 md:p-16 text-center border border-white/50 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready to upgrade your business?</h2>
            <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of successful jewelers who trust Datacare Softech for their daily operations.
            </p>
            <Link to="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-slate-800 transition-colors"
              >
                View Plans & Pricing
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;