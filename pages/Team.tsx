import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Code2, Briefcase, Users, Star, Award, ShieldCheck } from 'lucide-react';

// --- Types ---
type TeamCategory = 'owner' | 'dev_lead' | 'dev' | 'sales_lead' | 'sales_service';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamCategory;
  image: string;
  phone: string;
  whatsapp: string;
}

// --- Data ---
// Using a stable set of high-quality Unsplash portraits
const AVATARS = [
  'photo-1560250097-0b93528c311a', 'photo-1573496359-136d475583dc', 'photo-1519085360753-af0119f7cbe7',
  'photo-1580489944761-15a19d654956', 'photo-1539571696357-5a69c17a67c6', 'photo-1594744803329-e58b31de8bf5',
  'photo-1507003211169-0a1dd7228f2d', 'photo-1589156280159-27698a70f29e', 'photo-1500648767791-00dcc994a43e',
  'photo-1534528741775-53994a69daeb', 'photo-1506794778202-cad84cf45f1d', 'photo-1472099645785-5658abf4ff4e',
  'photo-1556157382-97eda2d62296', 'photo-1558222218-b7b54eede3f3', 'photo-1600878459196-4848040b942c',
  'photo-1544005313-94ddf0286df2', 'photo-1521119989659-a83eee488058', 'photo-1542909168-82c3e7fdca5c',
  'photo-1544717305-2782549b5136', 'photo-1522529599102-193c0d76b5b6', 'photo-1517841905240-472988babdf9',
  'photo-1521572163474-6864f9cf17ab', 'photo-1522075469751-3a3694c60e9e', 'photo-1508214751196-bcfd4ca60f91',
  'photo-1562788869-4ed32648eb72', 'photo-1438761681033-6461ffad8d80'
];

const getImage = (index: number) => `https://images.unsplash.com/${AVATARS[index % AVATARS.length]}?auto=format&fit=crop&q=80&w=600`;

const RAW_DATA: TeamMember[] = [
  // 1. Owner (Fixed)
  { id: 'own1', name: 'Vikram Malhotra', role: 'Founder & CEO', category: 'owner', image: getImage(0), phone: '+91 98765 00001', whatsapp: '919876500001' },
  
  // 2. Developer Team Leaders (2)
  { id: 'dl1', name: 'Elena Rodriguez', role: 'CTO & Tech Lead', category: 'dev_lead', image: getImage(1), phone: '+91 98765 00002', whatsapp: '919876500002' },
  { id: 'dl2', name: 'David Okafor', role: 'Lead Architect', category: 'dev_lead', image: getImage(2), phone: '+91 98765 00003', whatsapp: '919876500003' },

  // 3. Developers (4)
  { id: 'd1', name: 'Sarah Chen', role: 'Frontend Developer', category: 'dev', image: getImage(3), phone: '+91 98765 00004', whatsapp: '919876500004' },
  { id: 'd2', name: 'James Wilson', role: 'Backend Engineer', category: 'dev', image: getImage(4), phone: '+91 98765 00005', whatsapp: '919876500005' },
  { id: 'd3', name: 'Amit Patel', role: 'Mobile App Developer', category: 'dev', image: getImage(5), phone: '+91 98765 00006', whatsapp: '919876500006' },
  { id: 'd4', name: 'Priya Sharma', role: 'Full Stack Developer', category: 'dev', image: getImage(6), phone: '+91 98765 00007', whatsapp: '919876500007' },

  // 4. Main Team Leads & Sales Executives (5)
  { id: 'sl1', name: 'Arjun Mehta', role: 'Head of Sales', category: 'sales_lead', image: getImage(7), phone: '+91 98765 00008', whatsapp: '919876500008' },
  { id: 'sl2', name: 'Anita Roy', role: 'VP of Operations', category: 'sales_lead', image: getImage(8), phone: '+91 98765 00009', whatsapp: '919876500009' },
  { id: 'sl3', name: 'Rahul Verma', role: 'Regional Manager (North)', category: 'sales_lead', image: getImage(9), phone: '+91 98765 00010', whatsapp: '919876500010' },
  { id: 'sl4', name: 'Mei Lin', role: 'Enterprise Accounts Lead', category: 'sales_lead', image: getImage(10), phone: '+91 98765 00011', whatsapp: '919876500011' },
  { id: 'sl5', name: 'Zain Ahmed', role: 'Implementation Head', category: 'sales_lead', image: getImage(11), phone: '+91 98765 00012', whatsapp: '919876500012' },

  // 5. Sales Executives & Service Personnel (13)
  { id: 'ss1', name: 'Rohan Gupta', role: 'Senior Sales Executive', category: 'sales_service', image: getImage(12), phone: '+91 98765 00013', whatsapp: '919876500013' },
  { id: 'ss2', name: 'Sneha Reddy', role: 'Client Success Manager', category: 'sales_service', image: getImage(13), phone: '+91 98765 00014', whatsapp: '919876500014' },
  { id: 'ss3', name: 'Vikram Singh', role: 'Technical Support', category: 'sales_service', image: getImage(14), phone: '+91 98765 00015', whatsapp: '919876500015' },
  { id: 'ss4', name: 'Pooja Malhotra', role: 'Sales Executive', category: 'sales_service', image: getImage(15), phone: '+91 98765 00016', whatsapp: '919876500016' },
  { id: 'ss5', name: 'Karthik Iyer', role: 'On-site Engineer', category: 'sales_service', image: getImage(16), phone: '+91 98765 00017', whatsapp: '919876500017' },
  { id: 'ss6', name: 'Aisha Khan', role: 'Business Development', category: 'sales_service', image: getImage(17), phone: '+91 98765 00018', whatsapp: '919876500018' },
  { id: 'ss7', name: 'Rajesh Kumar', role: 'Support Specialist', category: 'sales_service', image: getImage(18), phone: '+91 98765 00019', whatsapp: '919876500019' },
  { id: 'ss8', name: 'Jennifer D\'Souza', role: 'Sales Coordinator', category: 'sales_service', image: getImage(19), phone: '+91 98765 00020', whatsapp: '919876500020' },
  { id: 'ss9', name: 'Mohit Chawla', role: 'Implementation Officer', category: 'sales_service', image: getImage(20), phone: '+91 98765 00021', whatsapp: '919876500021' },
  { id: 'ss10', name: 'Sanya Mirza', role: 'Sales Executive', category: 'sales_service', image: getImage(21), phone: '+91 98765 00022', whatsapp: '919876500022' },
  { id: 'ss11', name: 'Deepak Chopra', role: 'Service Engineer', category: 'sales_service', image: getImage(22), phone: '+91 98765 00023', whatsapp: '919876500023' },
  { id: 'ss12', name: 'Ananya Pandey', role: 'Account Executive', category: 'sales_service', image: getImage(23), phone: '+91 98765 00024', whatsapp: '919876500024' },
  { id: 'ss13', name: 'Kabir Bedi', role: 'Hardware Specialist', category: 'sales_service', image: getImage(24), phone: '+91 98765 00025', whatsapp: '919876500025' }
];

// --- Utilities ---
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// --- Components ---

// Updated to React.FC to ensure proper type checking
const ContactButtons: React.FC<{ phone: string, whatsapp: string }> = ({ phone, whatsapp }) => (
  <div className="flex gap-3 mt-4 w-full">
    <a 
      href={`tel:${phone}`}
      className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300 group border border-slate-200 hover:border-slate-900"
    >
      <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
      <span className="text-xs font-bold uppercase tracking-wide">Call</span>
    </a>
    <a 
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-xl bg-green-50 hover:bg-green-600 text-green-700 hover:text-white transition-all duration-300 group border border-green-100 hover:border-green-600"
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      <span className="text-xs font-bold uppercase tracking-wide">Chat</span>
    </a>
  </div>
);

// Updated to React.FC to ensure proper type checking
const SectionHeader: React.FC<{ title: string, subtitle: string, icon: any }> = ({ title, subtitle, icon: Icon }) => (
  <div className="flex items-center space-x-4 mb-10">
    <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm">{subtitle}</p>
    </div>
    <div className="h-px bg-gradient-to-r from-slate-200 to-transparent flex-grow ml-4"></div>
  </div>
);

// Fixed: Typed as React.FC to correctly handle the 'key' prop when used in array mapping
const MemberCard: React.FC<{ member: TeamMember, large?: boolean }> = ({ member, large = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${large ? 'md:flex-row p-6' : 'p-5'}`}
  >
    <div className={`${large ? 'w-full md:w-1/3 mb-6 md:mb-0 md:mr-8' : 'w-24 h-24 mb-4'} mx-auto relative`}>
      <div className={`rounded-2xl overflow-hidden ${large ? 'aspect-[3/4] shadow-lg' : 'w-full h-full shadow-md'}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
        />
      </div>
      {!large && <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-1.5 rounded-lg text-xs font-bold border-2 border-white">
        DS
      </div>}
    </div>
    
    <div className={`flex flex-col ${large ? 'justify-center flex-1' : 'items-center text-center'}`}>
      <h4 className={`${large ? 'text-3xl' : 'text-lg'} font-bold text-slate-900 mb-1`}>{member.name}</h4>
      <p className={`${large ? 'text-lg' : 'text-xs'} text-amber-600 font-bold uppercase tracking-widest mb-4`}>{member.role}</p>
      
      {large && (
        <p className="text-slate-600 mb-8 max-w-lg leading-relaxed">
          Leading Datacare Softech with a vision to modernize the jewellery industry through innovative technology and customer-centric service. Committed to excellence since 2005.
        </p>
      )}

      <div className={large ? 'w-full max-w-md' : 'w-full'}>
        <ContactButtons phone={member.phone} whatsapp={member.whatsapp} />
      </div>
    </div>
  </motion.div>
);

const Team: React.FC = () => {
  // State for shuffled lists
  const [devLeads, setDevLeads] = useState<TeamMember[]>([]);
  const [devs, setDevs] = useState<TeamMember[]>([]);
  const [salesLeads, setSalesLeads] = useState<TeamMember[]>([]);
  const [salesService, setSalesService] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Shuffle on mount
    setDevLeads(shuffleArray(RAW_DATA.filter(m => m.category === 'dev_lead')));
    setDevs(shuffleArray(RAW_DATA.filter(m => m.category === 'dev')));
    setSalesLeads(shuffleArray(RAW_DATA.filter(m => m.category === 'sales_lead')));
    setSalesService(shuffleArray(RAW_DATA.filter(m => m.category === 'sales_service')));
  }, []);

  const owner = RAW_DATA.find(m => m.category === 'owner');

  return (
    <div className="min-h-screen bg-slate-50 relative font-sans overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-amber-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              Meet The Force
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">People</span>, <br />
              Powered by Technology
            </h1>
          </motion.div>
        </div>

        {/* 1. Founder Section (Fixed) */}
        {owner && (
          <div className="mb-24 max-w-4xl mx-auto">
             <MemberCard member={owner} large />
          </div>
        )}

        {/* 2. Executive Leaders & Team Leads */}
        <div className="mb-24">
          <SectionHeader 
            title="Executive Leadership" 
            subtitle="Strategizing growth and customer success" 
            icon={Award} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {salesLeads.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* 3. Technology Division (Dev Leads + Devs) */}
        <div className="mb-24">
          <SectionHeader 
            title="Technology & Engineering" 
            subtitle="Building the core of our innovation" 
            icon={Code2} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dev Leads first (shuffled amongst themselves) */}
            {devLeads.map(member => (
              <div key={member.id} className="relative">
                 <div className="absolute -top-3 -right-3 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                   <ShieldCheck className="w-4 h-4" />
                 </div>
                 <MemberCard member={member} />
              </div>
            ))}
            {/* Developers (shuffled amongst themselves) */}
            {devs.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* 4. Sales & Service Force */}
        <div className="mb-12">
          <SectionHeader 
            title="Sales & Service Force" 
            subtitle="Dedicated to your daily operations" 
            icon={Briefcase} 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesService.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 text-center border-t border-slate-200 pt-16">
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to join this dynamic team?</h3>
           <p className="text-slate-600 mb-8">We are always looking for talent in sales and development.</p>
           <a href="#/contact" className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
             View Careers <Users className="ml-2 w-4 h-4" />
           </a>
        </div>

      </div>
    </div>
  );
};

export default Team;