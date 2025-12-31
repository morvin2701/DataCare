import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Premium Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Subtle Animated Gradients */}
      <motion.div 
        animate={{ 
          x: [-50, 50, -50], 
          y: [-50, 50, -50], 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[100px]"
      />
      
      <motion.div 
        animate={{ 
          x: [50, -50, 50], 
          y: [50, -50, 50], 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[120px]"
      />
      
      <motion.div 
        animate={{ 
          x: [20, -20, 20], 
          y: [-20, 20, -20],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-indigo-100/30 rounded-full blur-[90px]"
      />

      {/* Grid Overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
    </div>
  );
};

export default GlobalBackground;