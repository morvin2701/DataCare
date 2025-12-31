import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Calendar, Check, User, ChevronRight, Loader2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_VERSIONS } from '../constants';

const Contact: React.FC = () => {
  // Scheduler State
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookerName, setBookerName] = useState('');
  const [bookerEmail, setBookerEmail] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Mock available slots
  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

  const faqs = [
    {
      question: "Is internet mandatory for the software to run?",
      answer: "No, our Standard and Pro versions support offline-first architecture. Internet is only required for cloud backups and mobile app synchronization."
    },
    {
      question: "Can I migrate data from my existing software?",
      answer: "Absolutely. Our 'Migration Wizard' supports importing data from Excel, Tally, and most legacy jewellery software with zero data loss."
    },
    {
      question: "How secure is my business data?",
      answer: "We use AES-256 encryption for local data and SSL/TLS for cloud transmission. You also have the option to lock data day-wise to prevent tampering."
    },
    {
      question: "Do you support RFID hardware?",
      answer: "Yes, our Enterprise edition has native support for RFID readers and tag printers, allowing you to audit thousands of items in minutes."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive support via phone, email, and remote desktop during business hours. Enterprise plans include a dedicated account manager."
    }
  ];

  const handleBook = () => {
    if (!bookerName || !bookerEmail) return;
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setBookingStep(4); // Success state
    }, 1500);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen pt-24 pb-0 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Whether you need a custom quote, a product demo, or technical support, our dedicated team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/60 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-full"></div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center relative z-10">
              <Send className="mr-3 text-amber-500" /> Send us a message
            </h2>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-1">Interested In</label>
                <select id="interest" className="w-full rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-colors">
                  <option>Standard Edition</option>
                  <option>Ultra Edition</option>
                  <option>Pro Edition</option>
                  <option>Advanced Edition</option>
                  <option>Enterprise Edition</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border transition-colors" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            {[
              { icon: Phone, title: "Phone Support", sub: "Direct line to our experts", val: "+91 98765 43210" },
              { icon: Mail, title: "Email Us", sub: "For quotes and queries", val: "support@datacaresoftech.com" },
              { icon: MapPin, title: "Headquarters", sub: "Visit our innovation center", val: "123 Jewel Tech Park, Zaveri Bazaar, Mumbai" },
              { icon: Clock, title: "Working Hours", sub: "Available for you", val: "Mon - Sat: 9:00 AM - 7:00 PM" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/60 flex items-center transition-all group"
              >
                <div className="bg-amber-100 p-4 rounded-xl mr-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.sub}</p>
                  <p className="text-slate-800 font-semibold mt-1">{item.val}</p>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 p-6 bg-amber-500 text-white rounded-2xl relative overflow-hidden group shadow-xl">
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 right-0 p-4 opacity-10"
               >
                 <Globe className="w-24 h-24" />
               </motion.div>
               <h3 className="text-xl font-bold mb-2 text-white">Global Reach</h3>
               <p className="text-amber-50 z-10 relative">
                 Serving clients across India, UAE, and USA. Remote installation and support available worldwide.
               </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Online Scheduler Section */}
      <section className="bg-slate-50 py-20 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">See It In Action</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Book a Live Demo</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                    Schedule a personalized walkthrough with our product specialists. We'll show you exactly how Datacare fits your business needs.
                </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row min-h-[500px]">
                {/* Left Panel: Steps */}
                <div className="md:w-1/3 bg-slate-50 border-r border-slate-100 p-8">
                    <div className="space-y-8">
                        {[
                            { step: 1, title: "Product & Date", desc: "Choose what you want to see" },
                            { step: 2, title: "Time Slot", desc: "Pick a time that works" },
                            { step: 3, title: "Your Details", desc: "Where should we send the invite?" }
                        ].map((s) => (
                            <div key={s.step} className={`flex items-start transition-opacity ${bookingStep >= s.step ? 'opacity-100' : 'opacity-40'}`}>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 ${
                                    bookingStep > s.step ? 'bg-green-500 text-white' : 
                                    bookingStep === s.step ? 'bg-amber-500 text-white ring-4 ring-amber-100' : 'bg-slate-200 text-slate-500'
                                }`}>
                                    {bookingStep > s.step ? <Check className="w-5 h-5"/> : s.step}
                                </div>
                                <div>
                                    <h4 className={`font-bold ${bookingStep === s.step ? 'text-slate-900' : 'text-slate-600'}`}>{s.title}</h4>
                                    <p className="text-xs text-slate-500">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {bookingStep === 4 && (
                        <div className="mt-12 p-4 bg-green-50 rounded-xl border border-green-100 text-center">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check className="w-6 h-6"/>
                            </div>
                            <h4 className="font-bold text-green-800">Booking Confirmed!</h4>
                            <p className="text-sm text-green-600 mt-1">Check your email for the meeting link.</p>
                        </div>
                    )}
                </div>

                {/* Right Panel: Interactive Area */}
                <div className="md:w-2/3 p-8 relative">
                    <AnimatePresence mode="wait">
                        {bookingStep === 1 && (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Select Edition & Date</h3>
                                
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Which edition are you interested in?</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {PRODUCT_VERSIONS.map(v => (
                                            <button 
                                                key={v.id}
                                                onClick={() => setSelectedProduct(v.id)}
                                                className={`p-3 text-left rounded-xl border transition-all ${
                                                    selectedProduct === v.id 
                                                    ? 'border-amber-500 bg-amber-50 text-amber-700 ring-2 ring-amber-200' 
                                                    : 'border-slate-200 hover:border-amber-300'
                                                }`}
                                            >
                                                <div className="font-bold text-sm">{v.name}</div>
                                                <div className="text-[10px] text-slate-500">{v.recommendedFor}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input 
                                            type="date" 
                                            min={getMinDate()}
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto flex justify-end">
                                    <button 
                                        disabled={!selectedProduct || !selectedDate}
                                        onClick={() => setBookingStep(2)}
                                        className="flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next Step <ChevronRight className="ml-2 w-4 h-4"/>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {bookingStep === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Select a Time Slot</h3>
                                <p className="text-slate-500 text-sm mb-6">Available slots for <span className="font-bold text-slate-900">{selectedDate}</span></p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    {timeSlots.map(slot => (
                                        <button
                                            key={slot}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center ${
                                                selectedSlot === slot
                                                ? 'bg-amber-500 text-white border-amber-500 shadow-lg scale-105'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-amber-300 hover:bg-amber-50'
                                            }`}
                                        >
                                            <Clock className="w-4 h-4 mr-2"/> {slot}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-between">
                                    <button 
                                        onClick={() => setBookingStep(1)}
                                        className="text-slate-500 font-medium hover:text-slate-800"
                                    >
                                        Back
                                    </button>
                                    <button 
                                        disabled={!selectedSlot}
                                        onClick={() => setBookingStep(3)}
                                        className="flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next Step <ChevronRight className="ml-2 w-4 h-4"/>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {bookingStep === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Confirm Booking</h3>
                                
                                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mb-6 space-y-2 text-sm text-slate-700">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Edition:</span>
                                        <span className="font-bold uppercase">{selectedProduct}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Date:</span>
                                        <span className="font-bold">{selectedDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Time:</span>
                                        <span className="font-bold">{selectedSlot}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input 
                                                type="text" 
                                                value={bookerName}
                                                onChange={(e) => setBookerName(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                                placeholder="Enter full name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input 
                                                type="email" 
                                                value={bookerEmail}
                                                onChange={(e) => setBookerEmail(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                                placeholder="Enter email address"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto flex justify-between">
                                    <button 
                                        onClick={() => setBookingStep(2)}
                                        className="text-slate-500 font-medium hover:text-slate-800"
                                    >
                                        Back
                                    </button>
                                    <button 
                                        disabled={!bookerName || !bookerEmail || isBooking}
                                        onClick={handleBook}
                                        className="flex items-center px-8 py-3 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-amber-200 hover:scale-105"
                                    >
                                        {isBooking ? <Loader2 className="animate-spin w-5 h-5"/> : "Confirm Booking"}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                        
                        {bookingStep === 4 && (
                            <motion.div 
                                key="step4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100">
                                    <Check className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">You're All Set!</h3>
                                <p className="text-slate-500 mb-8 max-w-sm">
                                    We have sent a calendar invitation to <span className="font-bold text-slate-800">{bookerEmail}</span>.
                                    <br/>We look forward to showing you Datacare Softech in action!
                                </p>
                                <button 
                                    onClick={() => {
                                        setBookingStep(1);
                                        setSelectedProduct('');
                                        setSelectedDate('');
                                        setSelectedSlot('');
                                        setBookerName('');
                                        setBookerEmail('');
                                    }}
                                    className="text-amber-600 font-bold hover:underline"
                                >
                                    Book Another Session
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/30 backdrop-blur-sm z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Expert Answers</h2>
             <p className="text-slate-600 mt-2">Common questions about implementing Datacare.</p>
           </div>
           
           <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200 overflow-hidden"
               >
                 <button 
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white/50 transition-colors"
                 >
                   <span className="font-bold text-slate-800">{faq.question}</span>
                   {activeAccordion === idx ? <Minus className="text-amber-500 w-5 h-5"/> : <Plus className="text-slate-400 w-5 h-5"/>}
                 </button>
                 <AnimatePresence>
                   {activeAccordion === idx && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden bg-slate-50/50"
                     >
                       <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50">
                         {faq.answer}
                       </p>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;