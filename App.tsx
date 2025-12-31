import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CustomCursor from './components/CustomCursor';
import GlobalBackground from './components/GlobalBackground';
import Home from './pages/Home';
import Products from './pages/Products';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Team from './pages/Team';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 cursor-none relative">
        <GlobalBackground />
        <CustomCursor />
        <Navbar />
        
        <main className="flex-grow cursor-auto relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ChatWidget />
        <Footer />
      </div>
    </Router>
  );
};

export default App;