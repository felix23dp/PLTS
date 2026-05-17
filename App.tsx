import React, { useState } from 'react';
import {
  Sun,
  Battery,
  Zap,
  Home,
  Link2,
  BarChart2,
  Settings,
  AlertTriangle,
  Moon,
  Plug,
  Wrench,
  FileText,
  Activity,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState<'siang' | 'malam' | 'pln' | 'semua'>('siang');
  const [activeTab, setActiveTab] = useState<'wiring' | 'bom' | 'specs' | 'notes'>('wiring');

  // Helper for generating dynamic classes based on active flow
  const pathClasses = (isActive: boolean, reverse = false) => {
    return isActive
      ? `animate-flow-dash${reverse ? '-reverse' : ''} opacity-100`
      : 'opacity-0';
  };

  return (
    <div className="min-h-screen bg-[#0B1121] text-slate-300 font-sans p-4 md:p-6 lg:p-8 selection:bg-blue-500/30">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Home className="text-white relative top-[-2px]" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">PLTS Rumah GS</h1>
            <p className="text-sm text-slate-400 mt-1">7.100 Wp • Dual MPPT • 48V LiFePO₄ • Hybrid</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SISTEM AKTIF
          </div>
          <button className="p-2 rounded-full bg-slate-800 border border-slate-700 text-amber-500 hover:bg-slate-700 transition-colors">
            <Sun size={20} />
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-slate-800 mb-8 overflow-x-auto pb-px">
        <button 
          onClick={() => setActiveTab('wiring')} 
          className={`px-6 py-2.5 text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-colors ${
            activeTab === 'wiring' ? 'border-blue-500 text-white bg-blue-500/5' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
           <Zap size={16} /> Wiring Interaktif
        </button>
        <button 
          onClick={() => setActiveTab('bom')}
          className={`px-6 py-2.5 text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-colors ${
             activeTab === 'bom' ? 'border-blue-500 text-white bg-blue-500/5' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
           <Wrench size={16} /> Bill of Material
        </button>
        <button 
          onClick={() => setActiveTab('specs')}
          className={`px-6 py-2.5 text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-colors ${
             activeTab === 'specs' ? 'border-blue-500 text-white bg-blue-500/5' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
           <FileText size={16} /> Spesifikasi
        </button>
        <button 
          onClick={() => setActiveTab('notes')}
          className={`px-6 py-2.5 text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-colors ${
             activeTab === 'notes' ? 'border-amber-500 text-amber-500 bg-amber-500/5' : 'border-transparent text-slate-400 hover:text-amber-500 hover:bg-slate-800/50'
          }`}
        >
           <AlertTriangle size={16} /> Catatan Instalasi
        </button>
      </div>

      {activeTab === 'wiring' && (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            <StatCard title="DAYA PV" value="7.100" unit="Wp peak" desc="10 panel × 710 Wp" icon={<Sun size={20} />} accent="border-t-amber-500" valueColor="text-amber-500" />
            <StatCard title="KAPASITAS BAT" value="19,2" unit="kWh total" desc="400Ah • 48V LiFePO₄" icon={<Battery size={20} />} accent="border-t-emerald-500" valueColor="text-emerald-500" />
            <StatCard title="OUTPUT INVERTER" value="5.000" unit="W cont." desc="Techfine 6.3KVA LF" icon={<Zap size={20} />} accent="border-t-cyan-400" valueColor="text-white" />
            <StatCard title="EST. PRODUKSI" value="28—35" unit="kWh/hari" desc="PSH Jakarta 4,5—5,5 jam" icon={<Home size={20} />} accent="border-t-sky-500" valueColor="text-sky-400" />
            <StatCard title="VOC STRING" value="235" unit="VDC" desc={<span className="text-amber-500 flex items-center gap-1"><AlertTriangle size={12}/> Bahaya sentuh!</span>} icon={<Link2 size={20} />} accent="border-t-purple-500" valueColor="text-white" />
            <StatCard title="EFISIENSI MPPT" value="≥99" unit="%" desc="PowMr Dual MPPT" icon={<BarChart2 size={20} />} accent="border-t-orange-500" valueColor="text-orange-400" />
          </div>

          {/* Interactive Diagram UI */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl flex flex-col shadow-2xl relative overflow-hidden">
            {/* Header toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-slate-800 gap-4 bg-slate-900/50">
              <div>
                <h2 className="text-lg flex items-center gap-2 font-semibold text-white">
                  <Activity className="text-amber-500" size={18} />
                  Wiring Diagram Interaktif — Single Line
                </h2>
                <p className="text-xs text-slate-400 mt-1">Klik komponen untuk detail • Pilih mode untuk melihat aliran energi • Hover untuk highlight</p>
              </div>
              
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
                <ModeBtn active={mode === 'siang'} onClick={() => setMode('siang')} icon={<Sun size={14}/>}>Siang</ModeBtn>
                <ModeBtn active={mode === 'malam'} onClick={() => setMode('malam')} icon={<Moon size={14}/>}>Malam</ModeBtn>
                <ModeBtn active={mode === 'pln'} onClick={() => setMode('pln')} icon={<Plug size={14}/>}>PLN</ModeBtn>
                <ModeBtn active={mode === 'semua'} onClick={() => setMode('semua')} icon={<Zap size={14}/>}>Semua</ModeBtn>
              </div>
            </div>

            {/* Diagram Area */}
            <div className="relative w-full overflow-x-auto overflow-y-hidden custom-scrollbar bg-[#0B1121] py-8 px-4" style={{ minHeight: '700px' }}>
              <div style={{ width: '1150px', height: '620px', position: 'relative', margin: '0 auto' }}>
            
            {/* SVG Lines Layer */}
            <svg 
              width="1150" 
              height="620" 
              viewBox="0 0 1150 620" 
              className="absolute inset-0 pointer-events-none z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow-orange"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="glow-green"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="glow-purple"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="glow-blue"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>

              {/* ===== PV LINES (ORANGE) ===== */}
              {/* String 1 to MCB 1 */}
              <EnergyPath 
                d="M 270 120 L 330 120" 
                color="#f59e0b" glow="glow-orange" 
                isActive={mode === 'siang' || mode === 'semua'} 
              />
              {/* String 2 to MCB 2 */}
              <EnergyPath 
                d="M 270 240 L 330 240" 
                color="#f59e0b" glow="glow-orange" 
                isActive={mode === 'siang' || mode === 'semua'} 
              />
              {/* MCB 1 to Junction & SPD */}
              <EnergyPath 
                d="M 410 120 L 450 120 L 450 180 L 470 180" 
                color="#f59e0b" glow="glow-orange" 
                isActive={mode === 'siang' || mode === 'semua'} 
              />
              {/* MCB 2 to Junction & SPD */}
              <EnergyPath 
                d="M 410 240 L 450 240 L 450 180" 
                color="#f59e0b" glow="glow-orange" 
                isActive={mode === 'siang' || mode === 'semua'} 
              />
              {/* SPD to PowMr */}
              <EnergyPath 
                d="M 540 180 L 590 180" 
                color="#f59e0b" glow="glow-orange" 
                isActive={mode === 'siang' || mode === 'semua'} 
              />

              {/* Dots for Orange Junctions */}
              <circle cx="450" cy="180" r="4" fill="#f59e0b" />
              <circle cx="270" cy="120" r="3" fill="#f59e0b" />
              <circle cx="270" cy="240" r="3" fill="#f59e0b" />
              <circle cx="330" cy="120" r="3" fill="#f59e0b" />
              <circle cx="330" cy="240" r="3" fill="#f59e0b" />
              <circle cx="410" cy="120" r="3" fill="#f59e0b" />
              <circle cx="410" cy="240" r="3" fill="#f59e0b" />
              <circle cx="470" cy="180" r="3" fill="#f59e0b" />
              <circle cx="540" cy="180" r="3" fill="#f59e0b" />
              <circle cx="590" cy="180" r="3" fill="#f59e0b" />


              {/* ===== BATTERY BUS LINES (GREEN) ===== */}
              {/* This specific line routes the battery correctly to the Techfine Inverter */}
              
              {/* Main routing hub dot: (680, 460) */}
              
              {/* Bus dot to PowMr (Charge/Discharge) */}
              <EnergyPath 
                d={mode === 'siang' ? "M 680 300 L 680 460" : "M 680 460 L 680 300"} 
                color="#10b981" glow="glow-green" 
                isActive={mode !== 'pln'} 
              />
              
              {/* Bus dot to Battery terminal */}
              <EnergyPath 
                d={mode === 'siang' ? "M 680 460 L 530 460" : "M 530 460 L 680 460"} 
                color="#10b981" glow="glow-green" 
                isActive={mode !== 'pln'} 
              />
              
              {/* 
                 THE FIX: 
                 Bus dot continuing rightwards and connecting to Techfine LF Inverter at (820, 340) 
              */}
              <EnergyPath 
                d="M 680 460 L 760 460 L 760 340 L 820 340" 
                color="#10b981" glow="glow-green" 
                isActive={mode !== 'pln'} 
              />

              {/* Dots for Green Junctions */}
              <circle cx="530" cy="460" r="3" fill="#10b981" />
              <circle cx="680" cy="460" r="5" fill="#10b981" className="animate-pulse" /> {/* Main Distribution Dot */}
              <circle cx="680" cy="300" r="3" fill="#10b981" />
              <circle cx="820" cy="340" r="3" fill="#10b981" />


              {/* ===== GRID LINES (PURPLE) ===== */}
              <EnergyPath 
                d="M 950 160 L 950 260" 
                color="#a855f7" glow="glow-purple" 
                isActive={mode === 'pln' || mode === 'semua'} 
              />
              <circle cx="950" cy="160" r="3" fill="#a855f7" />
              <circle cx="950" cy="260" r="3" fill="#a855f7" />

              {/* ===== AC LOAD LINES (CYAN/BLUE) ===== */}
              <EnergyPath 
                d="M 950 420 L 950 480" 
                color="#0ea5e9" glow="glow-blue" 
                isActive={true} 
              />
              <circle cx="950" cy="420" r="3" fill="#0ea5e9" />
              <circle cx="950" cy="480" r="3" fill="#0ea5e9" />

            </svg>

            {/* ZONES (Grid Outlines) */}
            {/* ZONA 1 PV */}
            <div className="absolute border border-dashed border-amber-500/30 rounded-xl" style={{ left: 40, top: 50, width: 520, height: 260 }}>
              <div className="absolute -top-3 left-6 bg-amber-500 rounded-full px-3 py-1 text-[10px] font-bold text-slate-900 tracking-wider">
                ZONA 1 — PV DC INPUT
              </div>
            </div>

            {/* ZONA 2 DC BUS */}
            <div className="absolute border border-dashed border-emerald-500/30 rounded-xl" style={{ left: 40, top: 380, width: 520, height: 130 }}>
              <div className="absolute -top-3 left-6 bg-emerald-500 rounded-full px-3 py-1 text-[10px] font-bold text-slate-900 tracking-wider">
                ZONA 2 — DC BUS 48V
              </div>
            </div>

            {/* ZONA 3 GRID */}
            <div className="absolute border border-dashed border-purple-500/30 rounded-xl" style={{ left: 800, top: 50, width: 300, height: 140 }}>
              <div className="absolute -top-3 left-6 bg-purple-400 rounded-full px-3 py-1 text-[10px] font-bold text-slate-900 tracking-wider">
                ZONA 3 — GRID INPUT
              </div>
            </div>

            {/* ZONA 4 AC SYS */}
            <div className="absolute border border-dashed border-sky-500/30 rounded-xl" style={{ left: 780, top: 230, width: 340, height: 350 }}>
              <div className="absolute -top-3 left-6 bg-sky-500 rounded-full px-3 py-1 text-[10px] font-bold text-slate-900 tracking-wider">
                ZONA 4 — AC SYSTEM
              </div>
            </div>


            {/* COMPONENTS HTML ON TOP OF SVG */}
            {/* PV String 1 */}
            <div className="absolute z-10" style={{ left: 70, top: 80, width: 200 }}>
               <DiagramBox title="STRING 1" icon={<Sun size={24} className="text-amber-400"/>} desc="5×710Wp seri" accent="border-amber-500" />
            </div>

            {/* PV String 2 */}
            <div className="absolute z-10" style={{ left: 70, top: 200, width: 200 }}>
               <DiagramBox title="STRING 2" icon={<Sun size={24} className="text-amber-400"/>} desc="5×710Wp seri" accent="border-amber-500" />
            </div>

            {/* MCB DC 1 */}
            <div className="absolute z-10" style={{ left: 330, top: 100, width: 80 }}>
               <SmallBox title="MCB DC" desc="25A/2P" accent="border-amber-600" />
            </div>

            {/* MCB DC 2 */}
            <div className="absolute z-10" style={{ left: 330, top: 220, width: 80 }}>
               <SmallBox title="MCB DC" desc="25A/2P" accent="border-amber-600" />
            </div>

            {/* SPD DC */}
            <div className="absolute z-10" style={{ left: 470, top: 160, width: 70 }}>
               <SmallBox title="SPD DC" desc="Type II 40kA" accent="border-amber-500" />
            </div>

            {/* PowMr 11KW MPPT */}
            <div className="absolute z-10 bg-[#162032] border border-slate-700/80 rounded-xl shadow-xl flex flex-col items-center justify-between p-4" 
                 style={{ left: 590, top: 80, width: 180, height: 220 }}>
               <div className="text-sm font-semibold text-white">PowMr 11KW</div>
               <div className="w-16 h-16 rounded-full border-[4px] border-blue-500/20 border-t-blue-500 flex items-center justify-center animate-[spin_4s_linear_infinite]">
                 {/* Decorative coil icon */}
                 <div className="w-8 h-8 rounded-full border-2 border-sky-400/50" />
               </div>
               <div className="text-[10px] text-slate-400 text-center">MPPT Dual 90-500VDC</div>
            </div>

            {/* Bank Baterai */}
            <div className="absolute z-10 bg-[#132B25] border-2 border-emerald-800/60 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.1)] flex flex-col items-center justify-between p-3" 
                 style={{ left: 70, top: 410, width: 460, height: 100 }}>
               <div className="w-full text-center py-1 bg-[#1A3830] rounded text-sm font-bold text-emerald-100 flex items-center justify-center gap-2">
                 Bank Baterai 48V LiFePO₄
               </div>
               <Battery size={32} className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
               <div className="text-[10px] text-emerald-300/70">4 unit paralel = 400Ah • 19,2 kWh</div>
            </div>

            {/* PLN Input */}
            <div className="absolute z-10 bg-[#251A38] border-2 border-purple-800/60 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.1)] flex flex-col items-center justify-between p-3" 
                 style={{ left: 820, top: 80, width: 260, height: 80 }}>
               <div className="w-full text-center py-1 bg-[#32234B] rounded text-sm font-bold text-purple-200">
                 PLN 230VAC
               </div>
               <div className="flex items-center gap-2">
                 <Plug size={20} className="text-purple-400" />
                 <span className="text-xs text-purple-300">Grid Input Backup</span>
               </div>
            </div>

            {/* Techfine Inverter */}
            <div className="absolute z-10 bg-[#162032] border border-blue-900/80 rounded-xl shadow-xl flex flex-col items-center justify-between p-4" 
                 style={{ left: 820, top: 260, width: 260, height: 160 }}>
               <div className="w-full text-center py-1 bg-[#1E293B] rounded-lg text-sm font-bold text-white border border-slate-700">
                 Techfine 6.3KVA LF
               </div>
               <Zap className="text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" size={48} />
               <div className="text-[10px] text-slate-400">Inverter Low Frequency • 5.000W</div>
            </div>

            {/* Panel Distribusi */}
            <div className="absolute z-10 bg-[#1A2633] border-2 border-slate-700/80 rounded-xl shadow-[0_0_15px_rgba(14,165,233,0.15)] flex flex-col items-center justify-between p-3" 
                 style={{ left: 820, top: 480, width: 260, height: 80 }}>
               <div className="w-full text-center py-1 bg-[#233342] rounded text-sm font-bold text-sky-200">
                 Panel Distribusi Rumah
               </div>
               <div className="flex items-center gap-2">
                 <Home size={20} className="text-orange-300" />
                 <span className="text-xs text-slate-400">Distribusi ke seluruh beban</span>
               </div>
            </div>

            {/* Legend inside Diagram directly at bottom left to mirror image correctly */}
            <div className="absolute z-20 bottom-0 left-0 bg-[#0F1523]/90 backdrop-blur border border-slate-800 rounded-lg p-3 flex gap-4 text-[10px] font-mono text-slate-400 shadow-xl">
               <div className="flex flex-col gap-1.5 items-center">
                 <div className="flex items-center gap-1">⬇ <span className="font-bold text-slate-300">Ground Bus</span></div>
                 <div className="text-[9px]">BCC 10mm² → Rod 1.5m</div>
               </div>
               <div className="w-px bg-slate-800 mx-2"/>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-0.5 bg-amber-500 rounded-full" />
                 <span>DC PV 4mm²</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-1 bg-emerald-500 rounded-full" />
                 <span>DC Bat 16mm²</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-0.5 bg-sky-500 rounded-full" />
                 <span>AC 10mm²</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-0.5 bg-purple-500 rounded-full" />
                 <span>PLN Input</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-0.5 bg-yellow-700 rounded-full" />
                 <span>Grounding</span>
               </div>
            </div>

          </div>
        </div>
      </div>
      </>
      )}

      {activeTab === 'bom' && <BomTab />}
      {activeTab === 'specs' && <SpecsTab />}
      {activeTab === 'notes' && <NotesTab />}

    </div>
  );
}

// ==== SUB-COMPONENTS ====

const bomData = [
  {cat:'☀️ Panel Surya',items:[
    {no:1,item:'Panel Surya Mono 710Wp',spec:'Voc 46,7V · Vmp 40,5V · Isc 17A',qty:10,sat:'Unit',tagColor:'text-amber-500 bg-amber-500/10',note:'2 string × 5 panel seri'},
    {no:2,item:'Konektor MC4',spec:'IP67 · 30A · UV-resistant',qty:20,sat:'Pasang',tagColor:'text-amber-500 bg-amber-500/10',note:'Per ujung kabel panel'},
    {no:3,item:'Kabel Solar 4mm²',spec:'UV resistant · tinned copper',qty:50,sat:'Meter',tagColor:'text-amber-500 bg-amber-500/10',note:'Panel → MCB → MPPT'},
    {no:4,item:'Mounting Bracket',spec:'Aluminium rail + klem',qty:1,sat:'Set',tagColor:'text-amber-500 bg-amber-500/10',note:'Sudut 10–15°'},
  ]},
  {cat:'⚡ MPPT Controller',items:[
    {no:5,item:'PowMr 11KW Dual MPPT',spec:'2 MPPT · 90–500VDC · 48V · 150A · WiFi',qty:1,sat:'Unit',tagColor:'text-orange-400 bg-orange-400/10',note:'LiFePO₄ compatible'},
  ]},
  {cat:'🔋 Baterai',items:[
    {no:6,item:'LiFePO₄ 48V 100Ah',spec:'BMS built-in · RS485/CAN · >4.000 siklus',qty:4,sat:'Unit',tagColor:'text-emerald-500 bg-emerald-500/10',note:'Paralel → 400Ah'},
    {no:7,item:'Kabel Baterai 16mm²',spec:'Tembaga fleksibel · merah/hitam',qty:5,sat:'Meter',tagColor:'text-emerald-500 bg-emerald-500/10',note:'Antar bat + ke inverter'},
    {no:8,item:'Busbar/Terminal 200A',spec:'Copper · pos & neg',qty:1,sat:'Set',tagColor:'text-emerald-500 bg-emerald-500/10',note:'Paralel 4 baterai'},
  ]},
  {cat:'🔄 Inverter',items:[
    {no:9,item:'Techfine 6.3KVA LF',spec:'48VDC · 230VAC · 5.000W · LF trafo · ATS',qty:1,sat:'Unit',tagColor:'text-blue-400 bg-blue-400/10',note:'Solar Priority + Grid'},
  ]},
  {cat:'🛡️ Proteksi',items:[
    {no:10,item:'MCB DC 25A/2P',spec:'600VDC · 2 pole',qty:2,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'1 per string PV'},
    {no:11,item:'SPD DC Type II',spec:'1000VDC · 40kA',qty:1,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'Jalur PV sebelum MPPT'},
    {no:12,item:'ANL Fuse 200A',spec:'200A + holder',qty:2,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'MPPT→Bat & Bat→Inv'},
    {no:13,item:'MCB AC 2P 32A',spec:'230VAC · PLN input',qty:1,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'Sebelum AC IN inverter'},
    {no:14,item:'ELCB/RCD 40A',spec:'40A · 30mA · 2P',qty:1,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'Panel distribusi'},
    {no:15,item:'SPD AC Type II',spec:'230VAC · 40kA',qty:1,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'Panel distribusi'},
    {no:16,item:'MCB Grup 1P',spec:'10–20A per sirkuit',qty:6,sat:'Unit',tagColor:'text-red-500 bg-red-500/10',note:'AC,pompa,kulkas,lampu'},
  ]},
  {cat:'🔌 Kabel & Aksesori',items:[
    {no:17,item:'Kabel NYY 3×10mm²',spec:'AC out inverter → panel',qty:10,sat:'Meter',tagColor:'text-cyan-400 bg-cyan-400/10',note:'230VAC'},
    {no:18,item:'Kabel NYM 3×6mm²',spec:'PLN → inverter AC IN',qty:5,sat:'Meter',tagColor:'text-cyan-400 bg-cyan-400/10',note:'230VAC'},
    {no:19,item:'Kabel BCC 10mm²',spec:'Grounding tembaga telanjang',qty:10,sat:'Meter',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Ke ground rod'},
    {no:20,item:'Ground Rod Cu',spec:'Ø15mm × 1,5m tembaga',qty:1,sat:'Batang',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Vertikal ke tanah'},
    {no:21,item:'Box Enclosure IP54',spec:'Untuk MPPT,MCB,SPD DC',qty:1,sat:'Unit',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Waterproof'},
    {no:22,item:'Conduit & Kabel Duct',spec:'UV-resistant',qty:1,sat:'Lot',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Rapi & terlindung'},
    {no:23,item:'Terminal Skun Set',spec:'Sesuai diameter kabel',qty:1,sat:'Set',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Crimping tool needed'},
    {no:24,item:'Label & Warning Sign',spec:'PVC · tahan UV',qty:1,sat:'Set',tagColor:'text-cyan-400 bg-cyan-400/10',note:'Tandai semua jalur'},
  ]},
];

const BomTab = () => {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 mb-4 shadow-sm">
        <h3 className="text-lg font-bold text-white mb-1">Bill of Material — Sistem PLTS 7.100 Wp</h3>
        <p className="text-xs text-slate-400">Klik kategori untuk expand • 24 komponen total</p>
      </div>
      
      {bomData.map((category, idx) => (
        <BomCategory key={idx} category={category} initialOpen={idx < 2} />
      ))}
    </div>
  );
};

const BomCategory = ({ category, initialOpen }: { category: any, initialOpen: boolean }) => {
  const [open, setOpen] = useState(initialOpen);
  
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-sm">
      <div 
        className="px-4 py-3 bg-slate-800/30 flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base">{category.cat.split(' ')[0]}</span>
        <span className="text-sm font-bold flex-1 text-slate-200">{category.cat.substring(category.cat.indexOf(' ') + 1)}</span>
        <span className="text-xs text-slate-400">{category.items.length} item</span>
        <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}>
           <ChevronDown size={16} />
        </span>
      </div>
      
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/40 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-y border-slate-800/50">
                <th className="px-4 py-2 w-10 text-center">#</th>
                <th className="px-4 py-2">Komponen</th>
                <th className="px-4 py-2 hidden md:table-cell">Spesifikasi</th>
                <th className="px-4 py-2 text-center w-16">Qty</th>
                <th className="px-4 py-2 w-20">Sat.</th>
                <th className="px-4 py-2">Catatan</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-800/50">
              {category.items.map((r: any) => (
                <tr key={r.no} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-4 py-3 text-slate-500 text-center">{r.no}</td>
                  <td className="px-4 py-3 font-semibold text-slate-200">
                    {r.item}
                    <div className="md:hidden text-[10px] text-slate-500 mt-1">{r.spec}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-400 hidden md:table-cell">{r.spec}</td>
                  <td className="px-4 py-3 text-center font-bold text-blue-400">{r.qty}</td>
                  <td className="px-4 py-3 text-slate-400">{r.sat}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${r.tagColor}`}>
                      {r.note}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const specsData = [
  {icon:'☀️',title:'Panel Surya',rows:{Konfigurasi:'2×5 panel seri','Daya total':'7.100 Wp','Per panel':'710 Wp','Voc string':'235 VDC','Vmp string':'202,5 VDC',Isc:'17 A',Tipe:'Mono PERC'}},
  {icon:'🌀',title:'PowMr 11KW MPPT',rows:{MPPT:'2 independen',Range:'90–500 VDC','Max charge':'150 A',Bat:'48 VDC',Kompatibel:'LiFePO₄',WiFi:'✅ App',Efisiensi:'≥99%'}},
  {icon:'🔋',title:'Bank Baterai',rows:{Tipe:'LiFePO₄',Sistem:'48 VDC',Total:'400Ah · 19,2kWh','Usable 80%':'~15,3kWh',Siklus:'>4.000',Umur:'>10 tahun'}},
  {icon:'⚡',title:'Techfine 6.3KVA LF',rows:{Kapasitas:'5.000W/6.3KVA',Trafo:'Low Frequency',Input:'48 VDC',Output:'230VAC 50Hz',Gelombang:'Pure Sine',Surge:'~10.000W',ATS:'≤20ms'}},
  {icon:'📐',title:'Kabel DC PV',rows:{Penampang:'4mm² MC4',Rating:'>30A',Konektor:'MC4 IP67',Jalur:'Panel→MCB→MPPT'}},
  {icon:'📐',title:'Kabel DC Baterai',rows:{Penampang:'16mm²',Fuse:'ANL 200A',Jalur:'MPPT↔Bat↔Inverter'}},
  {icon:'📐',title:'Kabel AC',rows:{'Inv→Panel':'NYY 3×10mm²','PLN→Inv':'NYM 3×6mm²',Ground:'BCC 10mm²',Rod:'Cu Ø15mm 1,5m'}},
  {icon:'📊',title:'Estimasi Produksi',rows:{PSH:'4,5–5,5 jam/hari',Harian:'28–35 kWh',Bulanan:'840–1.050 kWh',Backup:'~3–4 jam @5kW','Full solar':'08.00–16.00 WIB'}},
];

const SpecsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {specsData.map((spec, idx) => (
        <div key={idx} className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-xl hover:border-slate-700 transition-all">
          <div className="text-3xl mb-3">{spec.icon}</div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{spec.title}</h3>
          <div className="space-y-0.5 mt-2">
            {Object.entries(spec.rows).map(([k, v], i) => (
              <div key={i} className="flex justify-between py-1.5 border-b border-slate-800/50 last:border-0 text-xs text-slate-300">
                <span className="text-slate-500">{k}</span>
                <span className="font-semibold text-right max-w-[60%]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const NotesTab = () => {
  return (
    <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 flex gap-4">
        <div className="text-2xl mt-0.5">⚡</div>
        <div>
          <h3 className="font-bold text-sm text-red-500 mb-1">PERINGATAN TEGANGAN TINGGI — BAHAYA JIWA</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Sistem ini mengandung tegangan DC 235V yang mematikan.</strong> Tutup panel dengan kain gelap sebelum bekerja.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold flex items-center gap-2 mb-3">
          <span>🔴</span> Wajib Sebelum Instalasi
        </h2>
        <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 flex gap-4">
          <div className="text-2xl mt-0.5">🛑</div>
          <div>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 leading-relaxed">
              <li>Pasang <strong>MCB 2P 32A</strong> pada jalur input PLN ke inverter</li>
              <li>Pastikan sistem <strong>grounding</strong> terpasang sebelum menyalakan apapun</li>
              <li>Gunakan <strong>sarung tangan isolasi & sepatu karet</strong> di jalur DC</li>
              <li>Label <strong>⚡ HIGH VOLTAGE DC 235V</strong> di semua titik DC</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold flex items-center gap-2 mb-3">
          <span>🟡</span> Urutan Start-up Pertama
        </h2>
        <div className="bg-amber-500/10 border border-amber-500/50 rounded-xl p-4 flex gap-4">
          <div className="text-2xl mt-0.5">📋</div>
          <div>
            <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-300 leading-relaxed">
              <li>Sambung kabel <strong>ground</strong> → cek kontinuitas ke ground rod</li>
              <li>Hubungkan baterai ke Techfine (BAT IN) — inverter belum ON</li>
              <li>Sambung kabel PV ke PowMr (PV1 & PV2) — MCB DC masih OFF</li>
              <li>Setting PowMr: LiFePO₄ 48V, absorb 58,4V, float 53,6V</li>
              <li>Setting Techfine: Solar Priority, cutoff 44V</li>
              <li>ON inverter → cek AC OUT 230VAC → ON MCB DC satu per satu</li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold flex items-center gap-2 mb-3">
          <span>✅</span> Tips Operasional
        </h2>
        <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-xl p-4 flex gap-4">
          <div className="text-2xl mt-0.5">💡</div>
          <div>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 leading-relaxed">
              <li>Bersihkan panel setiap 2 minggu</li>
              <li>Cek tegangan baterai tiap pagi — idealnya &gt;52V</li>
              <li>Jangan biarkan SOC turun &lt;20% secara rutin</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold flex items-center gap-2 mb-3">
          <span>ℹ️</span> Ekspektasi Sistem
        </h2>
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-xl p-4 flex gap-4">
          <div className="text-2xl mt-0.5">📊</div>
          <div>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 leading-relaxed">
              <li>Produksi: <strong>28–35 kWh/hari</strong> saat cerah</li>
              <li>Baterai penuh → <strong>3–4 jam</strong> @ 5.000W</li>
              <li>Garansi panel 25 thn • Baterai LiFePO₄ &gt;10 thn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, unit, desc, icon, accent, valueColor }: any) => (
  <div className={`bg-[#131A2A] rounded-xl border border-slate-800 ${accent} border-t-2 p-4 flex flex-col justify-between hover:border-slate-700 transition-colors`}>
    <div className="flex items-start justify-between mb-2">
      {icon && <div className="text-slate-400">{icon}</div>}
    </div>
    <div className="mb-2">
       <div className="text-[10px] font-bold text-slate-500 tracking-wider mb-1 uppercase">{title}</div>
       <div className="flex items-baseline gap-1">
         <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
       </div>
    </div>
    <div className="text-xs text-slate-400 flex flex-col">
       <span className="mb-0.5 text-slate-300">{unit}</span>
       <span className="text-[10px] opacity-80">{desc}</span>
    </div>
  </div>
);

const ModeBtn = ({ active, children, onClick, icon }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
      active 
        ? 'bg-slate-800 text-white shadow shadow-black/50' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
    }`}
  >
    {icon} {children}
  </button>
);

const DiagramBox = ({ title, desc, icon, accent }: any) => (
  <div className={`bg-[#162032] rounded-xl border border-slate-700 shadow-lg ${accent} border-t-4 flex flex-col items-center p-3 h-full justify-between`}>
    <div className="text-xs font-bold text-slate-300 w-full text-center bg-slate-800/50 py-1 rounded mb-2">{title}</div>
    {icon}
    <div className="text-[10px] text-slate-400 mt-2">{desc}</div>
  </div>
);

const SmallBox = ({ title, desc, accent }: any) => (
  <div className={`bg-[#162032] rounded border border-slate-700 shadow flex flex-col items-center justify-center p-1.5 ${accent} border-l-4`}>
     <span className="text-[9px] font-bold text-slate-300 leading-tight">{title}</span>
     <span className="text-[8px] text-slate-500">{desc}</span>
  </div>
);

const EnergyPath = ({ d, color, glow, isActive }: { d: string, color: string, glow: string, isActive: boolean }) => (
  <g>
    {/* Background fat line */}
    <path 
      d={d} 
      stroke={color} 
      strokeWidth="4" 
      fill="none" 
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-20"
    />
    
    {/* Core solid line */}
    <path 
      d={d} 
      stroke={color} 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isActive ? 'opacity-80' : 'opacity-30'}
    />

    {/* Glowing Animated Dashes */}
    {isActive && (
      <path
        d={d}
        stroke="#ffffff"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 12"
        className="animate-flow-dash transition-opacity"
        filter={`url(#${glow})`}
      />
    )}
  </g>
);

