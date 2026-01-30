import React, { useState } from 'react';
import { 
  User, 
  Play, 
  Shield, 
  Crown, 
  Settings, 
  Search, 
  MessageSquare, 
  Heart, 
  ChevronRight,
  Zap,
  Star,
  LayoutGrid,
  List,
  MessageCircle,
  Repeat2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Nodes');
  const [proMode, setProMode] = useState(true); 
  const [viewMode, setViewMode] = useState('nodos'); 

  // Nodes Data
  const nodos = [
    { id: 1, title: 'Antology Goals', count: 12, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=500&auto=format&fit=crop' },
    { id: 2, title: 'Tactics & Vision', count: 8, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop' },
    { id: 3, title: 'Elite Training', count: 15, image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=500&auto=format&fit=crop' },
    { id: 4, title: 'Behind the Scenes', count: 24, image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=500&auto=format&fit=crop' },
  ];

  // Individual Videos
  const allVideos = [
    { id: 101, title: 'Bicycle Kick vs Atleti', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300' },
    { id: 102, title: 'UCL Through Ball', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=300' },
    { id: 103, title: '35km/h Sprint', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=300' },
    { id: 104, title: 'Bernabéu Celebration', image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=300' },
    { id: 105, title: '30m Free Kick', image: 'https://images.unsplash.com/photo-1431324155629-1a6eda1f46a9?q=80&w=300' },
    { id: 106, title: 'Chest Control', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=300' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans transition-colors duration-500">
      <div className="relative w-full max-w-[400px] h-[844px] bg-[#0a0a0a] rounded-[55px] overflow-hidden shadow-2xl border-[8px] border-[#1a1a1a]">
        
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-12 flex justify-between items-center px-10 z-50">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/20"></div>
            <div className="w-4 h-4 rounded-full border border-white/20"></div>
          </div>
        </div>

        {/* Header */}
        <div className="pt-14 px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setProMode(!proMode)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                proMode 
                ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-black shadow-[0_0_15px_rgba(251,191,36,0.4)]' 
                : 'bg-white/5 text-amber-500 border border-amber-500/30'
              }`}
            >
              <Zap size={18} fill={proMode ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="p-2 bg-white/5 rounded-full border border-white/10">
            <Settings size={20} className="text-white/70" />
          </div>
        </div>

        {/* Profile */}
        <div className="mt-8 px-6 flex flex-col items-center">
          <div className="relative">
            <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-tr ${proMode ? 'from-amber-500 via-yellow-200 to-amber-600' : 'from-gray-600 to-gray-800'}`}>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                <img 
                  src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=300&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>
            {proMode && (
              <div className="absolute -bottom-1 -right-1 bg-amber-500 p-1.5 rounded-full border-2 border-black">
                <Crown size={14} className="text-black" />
              </div>
            )}
          </div>
          
          <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">
            Frederick David
          </h1>
          <p className="text-white/40 text-sm font-medium">Center Forward | Real Madrid CF</p>
          
          <div className="flex gap-8 mt-6 w-full justify-center">
            <div className="text-center">
              <p className="text-white font-bold">128</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Videos</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10 self-center"></div>
            <div className="text-center">
              <p className="text-white font-bold">4.5M</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Followers</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10 self-center"></div>
            <div className="text-center">
              <p className="text-white font-bold">850</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Following</p>
            </div>
          </div>
        </div>

        {/* Tabs - Swapped Reposts and Comments positions */}
        <div className="mt-10 px-6">
          <div className="flex border-b border-white/5">
            {[
              { label: 'Nodes', icon: null },
              { label: 'Reposts', icon: <Repeat2 size={10} className="inline mr-1" /> },
              { label: 'Comments', icon: <MessageCircle size={10} className="inline mr-1" /> }
            ].map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex-1 pb-4 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center ${
                  activeTab === tab.label ? 'text-white border-b-2 border-amber-500' : 'text-white/20'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-6 px-6 h-[340px] overflow-y-auto no-scrollbar pb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white/80 text-sm font-semibold">
              {activeTab === 'Nodes' ? (viewMode === 'nodos' ? 'Video Nodes' : 'All Videos') : activeTab}
            </h2>
            {activeTab === 'Nodes' && (
              <button 
                onClick={() => setViewMode(viewMode === 'nodos' ? 'videos' : 'nodos')}
                className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] text-amber-500 font-bold uppercase transition-all active:scale-95"
              >
                {viewMode === 'nodos' ? <><List size={12} /> Only Videos</> : <><LayoutGrid size={12} /> View Nodes</>}
              </button>
            )}
          </div>

          {activeTab === 'Nodes' ? (
            <div className="grid grid-cols-2 gap-4">
              {(viewMode === 'nodos' ? nodos : allVideos).map((item) => (
                <div key={item.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer active:scale-95 transition-transform">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-[11px] font-bold leading-tight mb-1">{item.title}</p>
                    <div className="flex items-center gap-1">
                      <Play size={10} className="text-amber-500 fill-amber-500" />
                      <span className="text-[9px] text-white/50">{item.count || ''} {viewMode === 'nodos' ? 'clips' : ''}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-white/20 italic text-xs">
              <p>No {activeTab.toLowerCase()} yet...</p>
            </div>
          )}
        </div>

        {/* Navbar */}
        <div className="absolute bottom-0 w-full h-24 bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-6 pb-4">
          <button className="text-amber-500"><User size={24} /></button>
          <button className="text-white/30"><Search size={24} /></button>
          <div className="relative -mt-12 bg-gradient-to-b from-amber-400 to-yellow-600 p-4 rounded-[24px] shadow-lg shadow-amber-600/20">
            <Play size={28} fill="black" className="ml-1 text-black" />
          </div>
          <button className="text-white/30"><MessageSquare size={24} /></button>
          <button className="text-white/30"><Heart size={24} /></button>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default App;
