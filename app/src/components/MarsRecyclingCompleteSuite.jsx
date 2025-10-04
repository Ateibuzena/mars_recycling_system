import React, { useState } from 'react';
import { Recycle, Package, Zap, Droplet, AlertCircle, CheckCircle, ArrowRight, ArrowDown, Boxes, Shirt, FlaskConical, Download, TrendingUp, DollarSign, Users, Clock, Target, Lightbulb, Award, Globe, Factory, Cpu, Shield, Home, Wrench, Microscope } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';

const MarsRecyclingCompleteSuite = () => {
  const [activeView, setActiveView] = useState('pagina principal');

  // Data for charts
  const monthlyRecoveryData = [
    { month: 'M1', recovered: 280, target: 300, waste: 420 },
    { month: 'M3', recovered: 320, target: 320, waste: 430 },
    { month: 'M6', recovered: 355, target: 340, waste: 435 },
    { month: 'M9', recovered: 380, target: 360, waste: 440 },
    { month: 'M12', recovered: 400, target: 380, waste: 450 },
    { month: 'M18', recovered: 420, target: 400, waste: 455 },
    { month: 'M24', recovered: 445, target: 420, waste: 460 },
    { month: 'M30', recovered: 465, target: 440, waste: 465 },
    { month: 'M36', recovered: 485, target: 460, waste: 470 }
  ];

  const materialBreakdown = [
    { name: 'Plastics/Polymers', value: 3280, color: '#3b82f6' },
    { name: 'Textiles', value: 2670, color: '#8b5cf6' },
    { name: 'Metals', value: 1460, color: '#ef4444' },
    { name: 'Carbon Products', value: 1850, color: '#10b981' },
    { name: 'Foams', value: 890, color: '#f59e0b' },
    { name: 'Composites', value: 308, color: '#ec4899' }
  ];

  const processEfficiency = [
    { process: 'Thermal', efficiency: 78, energy: 85, time: 65 },
    { process: 'Mechanical', efficiency: 85, energy: 60, time: 80 },
    { process: 'Fiber', efficiency: 72, energy: 40, time: 70 },
    { process: 'Chemical', efficiency: 68, energy: 65, time: 55 },
    { process: 'Carbon', efficiency: 92, energy: 35, time: 90 },
    { process: 'Additive', efficiency: 95, energy: 70, time: 75 }
  ];

  const costSavingsData = [
    { year: 'Year 1', savings: 2.4, resupplyCost: 8.2, systemCost: 0.3 },
    { year: 'Year 2', savings: 5.8, resupplyCost: 16.4, systemCost: 0.3 },
    { year: 'Year 3', savings: 9.5, resupplyCost: 24.6, systemCost: 0.3 }
  ];

  const productionData = [
    { category: 'Structural', units: 19370, weight: 4200 },
    { category: 'Daily Use', units: 2890, weight: 850 },
    { category: 'Habitat', units: 1267, weight: 1850 },
    { category: 'Scientific', units: 1345, weight: 620 },
    { category: 'Recreation', units: 704, weight: 180 }
  ];

  const downloadDashboard = () => {
    const content = `MARS WASTE RECYCLING SYSTEM - DASHBOARD DATA EXPORT
Generated: ${new Date().toLocaleString()}
Mission: Jezero Crater | Duration: 3 Years | Crew: 8 persons

═══════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
• Total Waste Input: 12,600 kg
• Material Recovered: 10,458 kg (83%)
• Unusable Waste: 2,142 kg (17%)
• Energy Consumption: 420 kWh/week average
• Water Usage: 85 L/week (95% recycled)
• Crew Time Required: 6 hours/week
• Products Generated: 25,576 items
• Cost Savings: $9.5M over 3 years

═══════════════════════════════════════════════════════════

MATERIAL BREAKDOWN BY TYPE
${materialBreakdown.map(m => `• ${m.name}: ${m.value} kg`).join('\n')}

PROCESS EFFICIENCY METRICS
${processEfficiency.map(p => `• ${p.process}: ${p.efficiency}% efficient, Energy: ${p.energy}/100, Time: ${p.time}/100`).join('\n')}

MONTHLY RECOVERY PROGRESSION
${monthlyRecoveryData.map(m => `${m.month}: ${m.recovered} kg recovered (target: ${m.target} kg)`).join('\n')}

PRODUCTION OUTPUT BY CATEGORY
${productionData.map(p => `• ${p.category}: ${p.units} units (${p.weight} kg)`).join('\n')}

FINANCIAL PERFORMANCE
${costSavingsData.map(c => `• ${c.year}: $${c.savings}M net savings (avoided resupply: $${c.resupplyCost}M, system cost: $${c.systemCost}M)`).join('\n')}

═══════════════════════════════════════════════════════════
This data is provided for analysis and planning purposes.
For full system specifications, refer to technical documentation.
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mars_Recycling_Dashboard_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadBusinessPlan = () => {
    const plan = `╔═══════════════════════════════════════════════════════════════════════╗
║          MARS WASTE RECYCLING SYSTEM - BUSINESS PLAN                  ║
║                    Jezero Crater Mission                              ║
║              Generated: ${new Date().toLocaleDateString().padEnd(38)}║
╚═══════════════════════════════════════════════════════════════════════╝

1. EXECUTIVE SUMMARY
────────────────────────────────────────────────────────────────────────
Mission Statement: Establish a sustainable circular economy for Mars 
missions by converting 83% of waste into useful products, reducing Earth 
resupply dependency by 60% and enabling long-term habitat sustainability.

Key Performance Indicators:
├─ Total Waste Processed: 12,600 kg over 3 years
├─ Recovery Rate: 83% (10,458 kg recovered)
├─ Cost Avoidance: $9.5M over mission duration
├─ ROI: 340% vs. Earth resupply alternative
├─ System Uptime: 95%+ target
└─ Crew Time: Only 6 hours/week operational requirement

Investment Required: $30M (development & deployment)
Payback Period: 2.8 years
Net Present Value: $18M+ over 3-year mission

2. VALUE PROPOSITION
────────────────────────────────────────────────────────────────────────
For:        Mars missions & future planetary exploration programs
Who:        Require sustainable resource management solutions
Our System: Is an integrated waste-to-resource transformation platform
That:       Converts 83% of mission waste into useful products
Unlike:     Traditional disposal methods or expensive Earth resupply
We Provide: True mission sustainability with proven technology

Unique Value Drivers:
✓ 6 integrated processing systems (vs. competitors' single solutions)
✓ Industry-leading 83% recovery rate
✓ Minimal crew intervention (automated operations)
✓ Modular, scalable design for mission expansion
✓ Safety-first approach (no incineration, zero toxic emissions)
✓ Closed-loop resource utilization with byproduct capture

This technology will enable humanity's next giant leap.
Let's make it happen together.

═══════════════════════════════════════════════════════════════════════
Document Version: 1.0
Classification: Business Confidential
Date: ${new Date().toLocaleDateString()}
═══════════════════════════════════════════════════════════════════════`;

    const blob = new Blob([plan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mars_Recycling_Business_Plan_Complete.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Visual Concept Component
  const VisualConcept = () => {
    // Helper components for the workflow section
    const ProcessCard = ({ title, subtitle }) => {
      return (
        <div className="p-3 rounded-lg text-center w-48 bg-gradient-to-br from-indigo-600 to-purple-800 text-white shadow-lg">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs opacity-80 mt-1">{subtitle}</div>
        </div>
      );
    };

    const ProjectCard = ({ title, items = [], icon: Icon, colorStart = '#111827' }) => {
      return (
        <div className={`p-3 rounded-lg border border-gray-700 bg-gradient-to-br from-[${colorStart}] to-black`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-black/30">
              {Icon ? <Icon className="w-6 h-6 text-white/90" /> : <Boxes className="w-6 h-6 text-white/90" />}
            </div>
            <div className="text-sm font-semibold">{title}</div>
          </div>
          <ul className="mt-3 text-xs text-gray-300 space-y-1">
            {items.map((it, i) => (
              <li key={i}>• {it.name} {it.qty ? `— ${it.qty}` : ''}</li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-red-900 to-black p-6 rounded-lg border-2 border-red-500">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-300">Visual System Concept</h2>

          {/* New Workflow Section */}
          <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-gray-700">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Workflow — Input ↓ Process ↓ Output</h3>
            <p className="text-sm text-gray-400 mb-6">
              Vertical diagram with arrows showing what goes in and what comes out, mapped to 3 usable projects.
            </p>

            <div className="flex flex-col items-center gap-6">
              {/* INPUT */}
              <div className="w-full md:w-2/3">
                <div className="text-xs text-gray-300 font-semibold text-center">INPUT</div>
                <div className="mt-3 p-4 rounded-lg bg-black/20 border border-gray-700">
                  <div className="text-sm font-bold text-center">12,600 kg total</div>
                  <ul className="mt-2 text-xs text-gray-300 text-center">
                    <li>• Plastics: 3,280 kg</li>
                    <li>• Textiles: 2,670 kg</li>
                    <li>• Metals: 1,460 kg</li>
                    <li>• Carbon: 1,850 kg</li>
                  </ul>
                </div>
              </div>

              {/* Arrow ↓ */}
              <ArrowDown className="w-6 h-6 text-yellow-400" />

              {/* PROCESS STAGE 1 */}
              <ProcessCard title="Sorting" subtitle="Separates by type" />

              <ArrowDown className="w-6 h-6 text-yellow-400" />

              {/* PROCESS STAGE 2 */}
              <ProcessCard title="Processing (6 units)" subtitle="Transformation into useful materials" />

              <ArrowDown className="w-6 h-6 text-yellow-400" />

              {/* OUTPUT */}
              <ProcessCard title="Output" subtitle="Usable products" />

              {/* Mapping outputs */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <ProjectCard 
                  title="Project A • Habitat Build" 
                  icon={Home} 
                  items={[{name:'Regolith bricks', qty:18500},{name:'Wall panels', qty:85}]} 
                  colorStart="#065F46" 
                />
                <ProjectCard 
                  title="Project B • Tools & Daily Use" 
                  icon={Wrench} 
                  items={[{name:'Containers', qty:450},{name:'Utensils', qty:800},{name:'Tool handles', qty:240}]} 
                  colorStart="#B45309" 
                />
                <ProjectCard 
                  title="Project C • Science Kits" 
                  icon={Microscope} 
                  items={[{name:'Sample containers', qty:580},{name:'Electrodes', qty:420},{name:'Filtration media (kg)', qty:95}]} 
                  colorStart="#075985" 
                />
              </div>

              <div className="mt-4 text-xs text-gray-400 text-center">
                Note: the items shown are direct examples of the system outputs and can be assigned to each project for immediate implementation.
              </div>
            </div>
          </div>

          <footer className="mt-6 text-center text-xs text-gray-500">
            Made in NASA-dark style. Export each section for use in professional presentations.
          </footer>
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    // Mars Recycling Canva data
    const MATERIAL_BREAKDOWN = [
      { name: 'Plastics/Polymers', value: 3280, color: '#3b82f6' },
      { name: 'Textiles', value: 2670, color: '#8b5cf6' },
      { name: 'Metals', value: 1460, color: '#ef4444' },
      { name: 'Carbon Products', value: 1850, color: '#10b981' },
      { name: 'Foams', value: 890, color: '#f59e0b' },
      { name: 'Composites', value: 308, color: '#ec4899' }
    ];

    const PROCESS_UNITS = [
      { id: 'Thermal', eff: 78, icon: Zap, color: 'from-red-600 to-red-400' },
      { id: 'Mechanical', eff: 85, icon: Factory, color: 'from-amber-600 to-amber-400' },
      { id: 'Fiber', eff: 72, icon: Recycle, color: 'from-indigo-600 to-indigo-400' },
      { id: 'Chemical', eff: 68, icon: FlaskConical, color: 'from-purple-600 to-purple-400' },
      { id: 'Carbon', eff: 92, icon: Cpu, color: 'from-green-700 to-green-400' },
      { id: 'Additive', eff: 95, icon: Boxes, color: 'from-sky-600 to-sky-400' }
    ];

    const PRODUCTION = [
      { category: 'Structural', units: 19370, weight: 4200 },
      { category: 'Daily Use', units: 2890, weight: 850 },
      { category: 'Habitat', units: 1267, weight: 1850 },
      { category: 'Scientific', units: 1345, weight: 620 },
      { category: 'Recreation', units: 704, weight: 180 }
    ];

    // Helper components for the canvas
    const StageBox = ({ title, subtitle, color = 'bg-gray-800', icon: Icon, list = [] }) => {
      return (
        <div className={`p-3 rounded-lg border border-gray-700 ${color} bg-opacity-30 w-48`}> 
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black/30 rounded-md">
              <Icon className="w-6 h-6 text-white/90" />
            </div>
            <div>
              <div className="text-xs text-gray-300 font-semibold">{title}</div>
              <div className="text-lg font-extrabold mt-1">{subtitle}</div>
            </div>
          </div>
          <ul className="mt-3 text-xs text-gray-400 space-y-1">
            {list.slice(0,4).map((l, i) => <li key={i}>• {l}</li>)}
          </ul>
        </div>
      );
    };

    const BigStat = ({ label, value, sub, icon: Icon }) => {
      return (
        <div className="p-4 bg-black/30 rounded-lg border border-gray-700 flex items-center gap-3">
          <div className="p-3 bg-black/40 rounded-md">
            {Icon ? <Icon className="w-6 h-6 text-yellow-300" /> : <Zap className="w-6 h-6 text-yellow-300" />}
          </div>
          <div>
            <div className="text-xs text-gray-300">{label}</div>
            <div className="text-2xl font-extrabold">{value}</div>
            {sub && <div className="text-xs text-gray-400">{sub}</div>}
          </div>
        </div>
      );
    };

    const WeeklyCalendar = () => {
      const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
      const schedule = {
        Mon: [{time: '08:00-09:00', label: 'Material intake'}],
        Tue: [{time: '10:00-12:00', label: 'Processing QA'}],
        Wed: [],
        Thu: [{time: '14:00-15:00', label: 'Maintenance'}],
        Fri: [],
        Sat: [],
        Sun: []
      };

      return (
        <div>
          <div className="grid grid-cols-7 gap-2 text-xs">
            {days.map(d => (
              <div key={d} className="text-center text-gray-400">{d}</div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2">
            {days.map(d => (
              <div key={d} className="h-28 p-1 rounded-md bg-black/20 border border-gray-700">
                {schedule[d] && schedule[d].length === 0 && <div className="text-[10px] text-gray-500">—</div>}
                {schedule[d] && schedule[d].map((s,i) => (
                  <div key={i} className="mb-1 p-1 rounded text-[11px] bg-gradient-to-r from-yellow-600/20 to-yellow-400/10 border border-yellow-700 text-yellow-200">
                    <div className="font-semibold">{s.label}</div>
                    <div className="text-[10px] text-yellow-100">{s.time}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-3 text-xs text-gray-400">Duración destacada: <span className="font-semibold text-white">6 horas / semana</span></div>
        </div>
      );
    };

    const StatMini = ({ label, value }) => {
      return (
        <div className="p-2 bg-black/20 rounded text-center">
          <div className="text-xs text-gray-300">{label}</div>
          <div className="font-bold text-white">{value}</div>
        </div>
      );
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 p-8 space-y-8">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-red-800 rounded-md flex items-center justify-center shadow-lg">
              <Recycle className="w-8 h-8 text-red-200" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">Mars Waste Recycling — Visual Canva</h1>
              <p className="text-sm text-gray-400">4 slides listos para exportar como imágenes. Click derecho → "Guardar imagen como..."</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-400">Mission: Jezero Crater • Crew: 8 • Duration: 3 years</div>
        </header>

        {/* Slide 1 */}
        <section className="bg-gradient-to-br from-red-900/10 to-black/40 rounded-2xl p-8 border border-red-800 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:flex-1">
              <h2 className="text-xl font-bold text-yellow-300">Slide 1 — Sistema Completo · Flujo de Materiales</h2>

              <div className="mt-6 p-6 bg-gray-900 rounded-xl border border-gray-700">
                {/* Flow */}
                <div className="flex items-center justify-between gap-4">
                  <StageBox title="INPUT" subtitle="12,600 kg" color="bg-blue-900/40" icon={Package} list={["Residence: 1,470 kg","Celebration: 2,670 kg","Discovery: 3,865 kg","Other: 4,595 kg"]} />

                  <ArrowRight className="hidden md:block w-10 h-10 text-gray-400" />

                  <StageBox title="SORTING" subtitle="12,600 kg" color="bg-purple-900/40" icon={Boxes} list={["Plastics: 3,280 kg","Textiles: 2,670 kg","Metals: 1,460 kg","Carbon: 1,850 kg","Others: 3,340 kg"]} />

                  <ArrowRight className="hidden md:block w-10 h-10 text-gray-400" />

                  <StageBox title="PROCESSING" subtitle="6 units" color="bg-yellow-900/30" icon={Factory} list={["Thermal, Mechanical, Fiber","Chemical, Carbon, Additive"]} />

                  <ArrowRight className="hidden md:block w-10 h-10 text-gray-400" />

                  <StageBox title="OUTPUT" subtitle="25,576 items" color="bg-green-900/30" icon={Boxes} list={["7,700 kg useful output","Structural, Daily, Habitat, Scientific"]} />
                </div>

                {/* Key stats large */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <BigStat label="Recovery" value="83%" sub="(10,458 kg)" icon={TrendingUp} />
                  <BigStat label="Crew time" value="6 h / week" sub="operational" icon={Users} />
                  <BigStat label="Energy" value="420 kWh / week" sub="avg" icon={Zap} />
                  <BigStat label="Water" value="85 L / week" sub="95% recycled" icon={Droplet} />
                </div>
              </div>

            </div>

            {/* Right column - pie */}
            <aside className="md:w-80 bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">Material Breakdown</h3>
              <div className="h-48 mt-4">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie data={MATERIAL_BREAKDOWN} dataKey="value" outerRadius={70} innerRadius={28} paddingAngle={2}>
                      {MATERIAL_BREAKDOWN.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <ul className="mt-4 text-xs text-gray-300 space-y-1">
                  {MATERIAL_BREAKDOWN.map(m => (
                    <li key={m.name} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm" style={{ background: m.color }} />
                      <span className="flex-1">{m.name}</span>
                      <span className="font-bold">{m.value} kg</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="bg-gradient-to-br from-black/40 to-gray-900/40 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <h2 className="text-xl font-bold text-yellow-300">Slide 2 — Sistemas de Procesamiento</h2>
          <p className="text-sm text-gray-400 mt-2">Seis unidades en tarjetas con iconos, eficiencia y código de color para distinguir.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_UNITS.map(unit => (
              <div key={unit.id} className={`rounded-xl p-4 border border-gray-700 bg-gradient-to-b ${unit.color} bg-opacity-10`}> 
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5">
                    <unit.icon className="w-6 h-6 text-white/90" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-200 font-semibold">{unit.id}</div>
                    <div className="text-2xl font-extrabold mt-1">{unit.eff}%</div>
                    <div className="text-xs text-gray-300 mt-1">Eficiencia del proceso</div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-300">Detalles: footprint compacto, integración modular, operación automatizada.</div>
              </div>
            ))}
          </div>
        </section>

        {/* Slide 3 */}
        <section className="bg-gradient-to-br from-black/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <h2 className="text-xl font-bold text-yellow-300">Slide 3 — Flujo de Trabajo Operacional</h2>
          <p className="text-sm text-gray-400">Calendario semanal con actividades y duración total de tripulación destacada.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <WeeklyCalendar />
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Resumen de trabajo</h3>
                <p className="text-sm text-gray-400 mt-2">Total destacado: <span className="font-bold text-white">6 horas/semana</span> de trabajo de tripulación necesario para operaciones y mantenimiento.</p>

                <ul className="mt-4 text-sm text-gray-300 space-y-2">
                  <li>• 2h — Supervisión de sistema y carga de material</li>
                  <li>• 2h — Verificación de calidad & recolección de productos</li>
                  <li>• 1h — Mantenimiento preventivo</li>
                  <li>• 1h — Monitoreo remoto y reportes</li>
                </ul>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-black/20 border border-gray-700">
                <div className="text-sm text-gray-300">Tip para exportar:</div>
                <div className="text-xs text-gray-400">Haz click derecho sobre la sección y utiliza "Guardar imagen como..." o toma una captura para PowerPoint/Keynote.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4 */}
        <section className="bg-gradient-to-br from-green-900/10 to-black/30 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <h2 className="text-xl font-bold text-yellow-300">Slide 4 — Productos y Outputs</h2>
          <p className="text-sm text-gray-400 mt-2">Productos organizados por categoría, cantidades y pesos totales.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">Categorías</h3>
              <div className="mt-4 space-y-3">
                {PRODUCTION.slice(0,4).map(p => (
                  <div key={p.category} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-300">{p.category}</div>
                      <div className="text-xs text-gray-400">{p.units} units • {p.weight} kg</div>
                    </div>
                    <div className="font-bold text-white text-lg">{p.units}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">Resumen Final</h3>
              <div className="mt-4">
                <div className="text-4xl font-extrabold">25,576</div>
                <div className="text-sm text-gray-300 mt-1">items producidos</div>

                <div className="mt-6 text-sm text-gray-300">
                  <div>• Peso total útil: <span className="font-bold">7,700 kg</span></div>
                  <div>• Recuperación total: <span className="font-bold">83% (10,458 kg)</span></div>
                  <div>• Ahorro estimado: <span className="font-bold">$9.5M (3 años)</span></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-gray-300">
                <StatMini label="Footprint" value="18.5 m³" />
                <StatMini label="Power" value="420 kWh/wk" />
                <StatMini label="Crew time" value="6 h/wk" />
              </div>
            </div>
          </div>

        </section>

        <footer className="text-center text-xs text-gray-500">Exporta cada slide como imagen (click derecho) y úsalas en PowerPoint, Keynote o tu editor de vídeo.</footer>
      </div>
    );
  };

  // Business Plan Component
  const BusinessPlan = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-900 to-black p-6 rounded-lg border-2 border-green-500">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-300">Business Plan</h2>
          <button
            onClick={downloadBusinessPlan}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Plan
          </button>
        </div>

        {/* Executive Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Investment Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Development Cost:</span>
                <span className="font-bold text-red-400">$30M</span>
              </div>
              <div className="flex justify-between">
                <span>Mission Savings:</span>
                <span className="font-bold text-green-400">$9.5M</span>
              </div>
              <div className="flex justify-between">
                <span>Break-even:</span>
                <span className="font-bold text-blue-400">1.7 missions</span>
              </div>
              <div className="flex justify-between border-t border-gray-700 pt-3">
                <span>5-Mission ROI:</span>
                <span className="font-bold text-green-400">340%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Key Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Recovery Rate:</span>
                <span className="font-bold">83%</span>
              </div>
              <div className="flex justify-between">
                <span>System Uptime:</span>
                <span className="font-bold">95%+</span>
              </div>
              <div className="flex justify-between">
                <span>Crew Time:</span>
                <span className="font-bold">6 hrs/week</span>
              </div>
              <div className="flex justify-between border-t border-gray-700 pt-3">
                <span>Market Size:</span>
                <span className="font-bold text-purple-400">$12B</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Components */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4 text-red-400">System Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Thermal Depolymerization', icon: '🔥', efficiency: '78%', power: '15 kW' },
              { name: 'Mechanical Shredding', icon: '⚙️', efficiency: '85%', power: '8 kW' },
              { name: 'Fiber Extraction', icon: '🧵', efficiency: '72%', power: '5 kW' },
              { name: 'Chemical Dissolution', icon: '🧪', efficiency: '68%', power: '12 kW' },
              { name: 'Carbon Processing', icon: '⚫', efficiency: '92%', power: '6 kW' },
              { name: 'Additive Manufacturing', icon: '🖨️', efficiency: '95%', power: '18 kW' }
            ].map((component, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{component.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm">{component.name}</h4>
                    <p className="text-xs text-gray-400">{component.efficiency} efficient</p>
                  </div>
                </div>
                <div className="text-xs text-gray-300">Power: {component.power}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Market Opportunity</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Primary Markets:</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• NASA Mars Program: $200B+ (2030-2050)</li>
                  <li>• Commercial Mars ventures</li>
                  <li>• Lunar Gateway adaptation</li>
                  <li>• International space agencies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Competitive Advantages:</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• First integrated multi-process solution</li>
                  <li>• Industry-leading recovery rate</li>
                  <li>• Minimal crew intervention required</li>
                  <li>• Modular, scalable design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Implementation Timeline</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Year 1-2: Development</h4>
                <p className="text-sm text-gray-300">Design, prototyping, testing</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold">Year 3-4: Manufacturing</h4>
                <p className="text-sm text-gray-300">Hardware production, certification</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Year 5: Integration</h4>
                <p className="text-sm text-gray-300">Mission integration, launch</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Year 6-8: Operations</h4>
                <p className="text-sm text-gray-300">Mars deployment, optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Principal Plan Component (now contains the complete MarsRecyclingSystem)
  const PrincipalPlan = () => {
    const [activeScenario, setActiveScenario] = useState('all');
    const [selectedProcess, setSelectedProcess] = useState(null);

    const scenarios = {
      residence: {
        name: "Residence Renovations",
        icon: Package,
        color: "bg-blue-500",
        inputs: [
          "Aluminum structures and struts (est. 450 kg)",
          "Polymer matrix composites with carbon fiber (est. 280 kg)",
          "Plastic resin components (est. 150 kg)",
          "Foam packaging - Zotek F30 (est. 320 kg)",
          "Bubble wrap and air cushion bags (est. 180 kg)",
          "Plastazote foam sheets (est. 90 kg)"
        ]
      },
      celebration: {
        name: "Cosmic Celebrations",
        icon: Shirt,
        color: "bg-purple-500",
        inputs: [
          "Cotton clothing and textiles (est. 620 kg)",
          "Cellulose-based wipes and washcloths (est. 180 kg)",
          "Nylon fabrics (est. 240 kg)",
          "Polyester materials (est. 310 kg)",
          "Plastic food wrap (est. 420 kg)",
          "Rehydratable pouches - multilayer film (est. 290 kg)",
          "Drink pouches - aluminum/polyethylene (est. 340 kg)",
          "Thermal pouches - polyester/aluminum (est. 270 kg)"
        ]
      },
      discovery: {
        name: "Daring Discoveries",
        icon: FlaskConical,
        color: "bg-green-500",
        inputs: [
          "EVA waste - Nomex bags (est. 380 kg)",
          "EVA waste - nylon/polyester bags (est. 290 kg)",
          "Filter and mesh instruments - metal (est. 140 kg)",
          "Filter materials - polymer-based (est. 95 kg)",
          "Excess carbon from CO2 extraction (est. 1,850 kg)",
          "Resealable bags - polyethylene (est. 410 kg)",
          "Nitrile gloves (est. 520 kg)",
          "Laboratory containers - polypropylene (est. 180 kg)"
        ]
      }
    };

    const processes = [
      {
        id: "thermal",
        name: "Thermal Depolymerization & Reformation",
        description: "Breaks down plastics and polymers into monomers or simpler compounds using controlled heat (300-450°C) in oxygen-free environment",
        inputs: ["Polyethylene", "Polypropylene", "Nylon", "Polyester", "Plastic resin", "Nitrile gloves"],
        outputs: ["Plastic pellets for 3D printing", "Hydrocarbon oils", "Synthesis gas", "Waste heat"],
        efficiency: "78% material recovery",
        energyUse: "High",
        waterUse: "Minimal"
      },
      {
        id: "mechanical",
        name: "Mechanical Shredding & Separation",
        description: "Physical breakdown of materials into reusable components using shredders, grinders, and magnetic/density separators",
        inputs: ["Aluminum structures", "Metal filters", "Foam packaging", "Bubble wrap", "Composite materials"],
        outputs: ["Aluminum ingots (re-melted)", "Metal fragments", "Foam particles", "Separated fibers", "Dust for regolith mixing"],
        efficiency: "85% material recovery",
        energyUse: "Moderate",
        waterUse: "None"
      },
      {
        id: "fiber",
        name: "Fiber Extraction & Textile Processing",
        description: "Separates and processes textile fibers through mechanical cleaning, cutting, and fiber reclamation",
        inputs: ["Cotton clothing", "Cellulose wipes", "Nomex bags", "Polyester fabrics", "Mixed textiles"],
        outputs: ["Insulation batting", "Reinforcement fibers", "Cleaning materials", "Composite reinforcement", "Fiber dust"],
        efficiency: "72% material recovery",
        energyUse: "Low",
        waterUse: "Moderate (recycled)"
      },
      {
        id: "chemical",
        name: "Chemical Dissolution & Reformation",
        description: "Uses solvents to dissolve specific polymers, then reforms them through precipitation or casting",
        inputs: ["Multi-layer food pouches", "Aluminum-laminated packaging", "Complex composites", "Mixed polymer items"],
        outputs: ["Separated aluminum sheets", "Pure polymer solutions", "Reformed plastic sheets", "Solvent (recycled)", "Non-soluble residue"],
        efficiency: "68% material recovery",
        energyUse: "Moderate",
        waterUse: "Low (closed-loop)"
      },
      {
        id: "carbon",
        name: "Carbon Processing & Synthesis",
        description: "Processes excess carbon into useful forms through compaction, binding, or synthesis with regolith",
        inputs: ["Excess carbon from CO2 extraction", "Carbon fiber remnants", "Organic residues"],
        outputs: ["Carbon electrodes", "Carbon-reinforced regolith bricks", "Water filtration media", "Growth medium additive", "Conductive paths for circuits"],
        efficiency: "92% material recovery",
        energyUse: "Low",
        waterUse: "None"
      },
      {
        id: "additive",
        name: "Additive Manufacturing Station",
        description: "3D printing and molding station using recycled materials to create new tools and supplies",
        inputs: ["Plastic pellets", "Reformed polymers", "Metal fragments", "Composite materials"],
        outputs: ["Utensils and tools", "Storage containers", "Replacement parts", "Habitat fittings", "Custom components"],
        efficiency: "95% material utilization",
        energyUse: "Moderate",
        waterUse: "None"
      }
    ];

    const endProducts = [
      { category: "Structural & Construction", items: ["Carbon-reinforced regolith bricks (18,500 bricks)", "Aluminum repair panels (340 kg)", "Habitat insulation batting (280 kg)", "Floor mats and padding (150 kg)", "Structural reinforcement struts (890 kg)"] },
      { category: "Daily Use Items", items: ["Storage containers - various sizes (450 units)", "Utensils - forks, spoons, knives (800 pieces)", "Cups and bowls (320 pieces)", "Tool handles and grips (240 pieces)", "Cleaning cloths and rags (1,200 pieces)"] },
      { category: "Habitat Improvements", items: ["Interior wall panels (85 m²)", "Privacy screens and dividers (42 units)", "Equipment mounting brackets (680 pieces)", "Cable management systems (340 m)", "Ventilation duct components (120 pieces)"] },
      { category: "Scientific & Technical", items: ["Sample containers (580 units)", "Laboratory tool holders (145 pieces)", "Carbon electrodes for experiments (420 pieces)", "Water filtration media (95 kg)", "Conductive circuit pathways (180 m)"] },
      { category: "Recreation & Quality of Life", items: ["Party decorations (reusable banners, garlands)", "Game pieces and tokens (450 pieces)", "Art supplies (reformed plastic sheets)", "Personal item organizers (190 units)", "Exercise equipment grips (64 pieces)"] }
    ];

    const systemStats = {
      totalInput: "12,600 kg",
      totalRecovered: "10,458 kg",
      recoveryRate: "83%",
      unusableWaste: "2,142 kg",
      energyConsumption: "~420 kWh/week avg",
      waterUsage: "~85 L/week (95% recycled)",
      crewTime: "~6 hrs/week combined"
    };

    const wasteStreams = {
      unusable: [
        { material: "Multi-layer adhesive residues", amount: "385 kg", reason: "Cannot be separated chemically or mechanically" },
        { material: "Contaminated materials", amount: "620 kg", reason: "Biological or chemical contamination beyond safe recovery" },
        { material: "Ultra-fine particulates", amount: "445 kg", reason: "Too small to capture or process effectively" },
        { material: "Mixed composite degradation products", amount: "380 kg", reason: "Molecular breakdown prevents recovery" },
        { material: "Process residues and slag", amount: "312 kg", reason: "Byproducts from thermal and chemical processes" }
      ],
      byproducts: [
        { material: "Waste heat", usage: "Captured for habitat heating (saves ~85 kWh/week)", disposition: "Fully utilized" },
        { material: "Synthesis gas", usage: "Stored as backup fuel (120 L)", disposition: "Stored for emergency power" },
        { material: "Wastewater", usage: "95% recycled through life support", disposition: "Minimal loss to evaporation" },
        { material: "Hydrocarbon oils", usage: "Lubricants and sealants (35 L)", disposition: "Fully utilized" }
      ]
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-orange-900 to-black p-6 rounded-lg border-2 border-orange-500">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-center">Sistema Integrado de Reciclaje Marciano</h1>
            <p className="text-center text-orange-300 text-lg">Misión Cráter Jezero • Duración 3 Años • Tripulación 8 Personas</p>
          </div>

          {/* System Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg border border-red-500">
              <div className="text-2xl font-bold text-red-400">{systemStats.totalInput}</div>
              <div className="text-sm text-gray-400">Residuos Totales</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-green-500">
              <div className="text-2xl font-bold text-green-400">{systemStats.recoveryRate}</div>
              <div className="text-sm text-gray-400">Tasa de Recuperación</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500">
              <div className="text-2xl font-bold text-yellow-400">{systemStats.energyConsumption}</div>
              <div className="text-sm text-gray-400">Uso de Energía</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-blue-500">
              <div className="text-2xl font-bold text-blue-400">{systemStats.crewTime}</div>
              <div className="text-sm text-gray-400">Tiempo de Tripulación</div>
            </div>
          </div>

          {/* Scenario Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fuentes de Entrada por Escenario</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {Object.entries(scenarios).map(([key, scenario]) => {
                const Icon = scenario.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveScenario(activeScenario === key ? 'all' : key)}
                    className={`${scenario.color} p-6 rounded-lg transition-all transform hover:scale-105 ${
                      activeScenario === key ? 'ring-4 ring-white' : 'opacity-70'
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-2" />
                    <h3 className="font-bold text-lg">{scenario.name}</h3>
                    <p className="text-sm mt-2">{scenario.inputs.length} categorías de materiales</p>
                  </button>
                );
              })}
            </div>

            {/* Display Selected Scenario Inputs */}
            {activeScenario !== 'all' && (
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-red-400">Materiales de Entrada:</h3>
                <ul className="space-y-2">
                  {scenarios[activeScenario].inputs.map((input, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>{input}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeScenario === 'all' && (
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <p className="text-center text-gray-400">Selecciona un escenario arriba para ver los materiales detallados</p>
              </div>
            )}
          </div>

          {/* Processing Systems */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procesos de Reciclaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {processes.map((process) => (
                <div
                  key={process.id}
                  onClick={() => setSelectedProcess(selectedProcess === process.id ? null : process.id)}
                  className={`bg-gray-800 p-6 rounded-lg border cursor-pointer transition-all ${
                    selectedProcess === process.id ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-red-400">{process.name}</h3>
                    <Recycle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{process.description}</p>
                  
                  {selectedProcess === process.id && (
                    <div className="space-y-4 mt-4 pt-4 border-t border-gray-700">
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Entradas Procesadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {process.inputs.map((input, idx) => (
                            <span key={idx} className="bg-blue-900 px-3 py-1 rounded-full text-xs">{input}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Salidas Generadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {process.outputs.map((output, idx) => (
                            <span key={idx} className="bg-green-900 px-3 py-1 rounded-full text-xs">{output}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="bg-gray-900 p-2 rounded">
                          <div className="text-gray-400 text-xs">Eficiencia</div>
                          <div className="font-semibold">{process.efficiency}</div>
                        </div>
                        <div className="bg-gray-900 p-2 rounded">
                          <div className="text-gray-400 text-xs flex items-center gap-1">
                            <Zap className="w-3 h-3" /> Energía
                          </div>
                          <div className="font-semibold">{process.energyUse}</div>
                        </div>
                        <div className="bg-gray-900 p-2 rounded">
                          <div className="text-gray-400 text-xs flex items-center gap-1">
                            <Droplet className="w-3 h-3" /> Agua
                          </div>
                          <div className="font-semibold">{process.waterUse}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedProcess !== process.id && (
                    <div className="text-xs text-gray-500 mt-2">Haz clic para expandir detalles</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* End Products */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Productos Finales Generados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {endProducts.map((category, idx) => (
                <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Boxes className="w-6 h-6 text-yellow-400" />
                    <h3 className="font-bold text-lg text-yellow-400">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Waste Management */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Gestión de Residuos y Subproductos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Unusable Waste */}
              <div className="bg-red-950 p-6 rounded-lg border border-red-700">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <h3 className="font-bold text-lg text-red-400">Residuos No Utilizables ({systemStats.unusableWaste})</h3>
                </div>
                <div className="space-y-3">
                  {wasteStreams.unusable.map((waste, idx) => (
                    <div key={idx} className="bg-red-900 bg-opacity-30 p-3 rounded">
                      <div className="font-semibold text-sm">{waste.material}</div>
                      <div className="text-xs text-gray-400">{waste.amount}</div>
                      <div className="text-xs text-red-300 mt-1">{waste.reason}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-900 rounded text-sm">
                  <strong>Método de Disposición:</strong> Comprimido y sellado en unidades de contención, almacenado en área designada en la superficie marciana, alejado del hábitat y zonas de operación.
                </div>
              </div>

              {/* Valuable Byproducts */}
              <div className="bg-green-950 p-6 rounded-lg border border-green-700">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="font-bold text-lg text-green-400">Subproductos Valiosos</h3>
                </div>
                <div className="space-y-3">
                  {wasteStreams.byproducts.map((byproduct, idx) => (
                    <div key={idx} className="bg-green-900 bg-opacity-30 p-3 rounded">
                      <div className="font-semibold text-sm">{byproduct.material}</div>
                      <div className="text-xs text-green-300 mt-1">{byproduct.usage}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        <strong>Estado:</strong> {byproduct.disposition}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Flow Overview */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Resumen del Sistema Completo</h2>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded">
                  <h3 className="font-bold mb-2 text-blue-400">Etapa de Entrada</h3>
                  <p>Los materiales recolectados de los tres escenarios se clasifican por composición. Los miembros de la tripulación dedican ~2 hrs/semana a la clasificación inicial y preparación.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded">
                  <h3 className="font-bold mb-2 text-purple-400">Etapa de Procesamiento</h3>
                  <p>Seis sistemas de procesamiento paralelos manejan diferentes tipos de materiales. El monitoreo automatizado requiere ~3 hrs/semana de intervención de la tripulación para mantenimiento y ajustes.</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded">
                  <h3 className="font-bold mb-2 text-green-400">Etapa de Salida</h3>
                  <p>Los materiales procesados alimentan la fabricación aditiva. La tripulación dedica ~1 hr/semana al control de calidad y acabado de productos.</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="font-bold mb-2 text-yellow-400">Integración de Recursos</h3>
                <ul className="space-y-1 ml-4">
                  <li>• El calor residual de los procesos térmicos reduce las necesidades de calefacción del hábitat en un 20%</li>
                  <li>• Las aguas residuales del procesamiento de fibras se reciclan a través de los sistemas de soporte vital</li>
                  <li>• El carbono de la extracción de CO2 crea 18,500+ ladrillos de regolito para expansión</li>
                  <li>• Gas de síntesis almacenado como combustible de respaldo de emergencia (equivalente a 8 horas de energía)</li>
                  <li>• Los aceites de hidrocarburos reemplazan el 60% de las necesidades de reabastecimiento de lubricantes</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-4 rounded">
                <h3 className="font-bold mb-2 text-red-400">Protocolos de Seguridad</h3>
                <ul className="space-y-1 ml-4">
                  <li>• Sin incineración o quema abierta (previene emisiones tóxicas)</li>
                  <li>• Sistemas químicos de circuito cerrado previenen la generación de PFAS</li>
                  <li>• Los sistemas de filtración capturan &gt;99.7% de microplásticos de aguas residuales</li>
                  <li>• Los procesos térmicos operan en ambiente libre de oxígeno (previene combustión)</li>
                  <li>• Materiales contaminados aislados y almacenados por separado</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Sistema diseñado para las condiciones de la misión del Cráter Jezero • Escalable para expansión de tripulación • Modular para diferentes perfiles de misión</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveView('pagina principal')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeView === 'pagina principal'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Página Principal
              </div>
            </button>
            <button
              onClick={() => setActiveView('visual')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeView === 'visual'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Recycle className="w-5 h-5" />
                Visual System
              </div>
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeView === 'dashboard'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Dashboard
              </div>
            </button>
            <button
              onClick={() => setActiveView('business')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeView === 'business'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" />
                Business Plan
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeView === 'pagina principal' && <PrincipalPlan />}
        {activeView === 'visual' && <VisualConcept />}
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'business' && <BusinessPlan />}
      </div>
    </div>
  );
};

export default MarsRecyclingCompleteSuite;
