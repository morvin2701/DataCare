import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DatacareLogo = () => (
  <svg viewBox="0 0 100 100" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top Left - Red */}
    <path d="M44 10 L30 10 A20 20 0 0 0 10 30 L10 44 L36 44 A8 8 0 0 0 44 36 Z" fill="#DC2626" />
    {/* Top Right - Green */}
    <path d="M56 10 L70 10 A20 20 0 0 1 90 30 L90 44 L64 44 A8 8 0 0 1 56 36 Z" fill="#16A34A" />
    {/* Bottom Left - Yellow/Amber */}
    <path d="M44 90 L30 90 A20 20 0 0 1 10 70 L10 56 L36 56 A8 8 0 0 1 44 64 Z" fill="#F59E0B" />
    {/* Bottom Right - Blue */}
    <path d="M56 90 L70 90 A20 20 0 0 0 90 70 L90 56 L64 56 A8 8 0 0 0 56 64 Z" fill="#2563EB" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Robust native scroll listener to ensure state updates correctly
  useEffect(() => {
    const handleScroll = () => {
      // Trigger transition slightly earlier (10px) to prevent mixing as soon as user starts scrolling
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // In the light theme, we keep the navbar transparent at the top but text is always dark
  const isTransparent = isHome && !scrolled;

  // --- Styles ---

  // Navbar Background
  const navBackgroundClass = isTransparent
    ? "bg-transparent py-5"
    : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3";

  // Text Colors - Always dark in light theme
  const inactiveTextColorClass = 'text-slate-600 group-hover:text-slate-900';
  const logoTextClass = 'text-slate-900';
  
  // Active Pill Logic
  const activePillTextClass = 'text-white';
  const activePillBg = 'bg-slate-900'; 
  
  // Hover Pill (Ghost)
  const hoverPillClass = 'bg-slate-100';

  // Mobile Menu Styles
  const mobileBtnClass = "text-slate-600 hover:text-slate-900 hover:bg-slate-100";
  const mobileMenuBgClass = "bg-white text-slate-600 border-t border-slate-200 shadow-xl";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Subtle Glow Effect */}
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute inset-0 blur-xl rounded-full bg-white/50`}
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <DatacareLogo />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-wide transition-colors leading-none ${logoTextClass} group-hover:text-amber-500`}>
                  DATACARE
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase leading-none">
                  Softech
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors group overflow-hidden"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive(link.path) ? activePillTextClass : inactiveTextColorClass
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Active Background Pill */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${activePillBg}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover Background Pill (if not active) */}
                  {!isActive(link.path) && (
                    <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverPillClass}`} />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${mobileBtnClass}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${mobileMenuBgClass}`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-amber-50 text-amber-600 border border-amber-200 pl-6'
                      : 'hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;