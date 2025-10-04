import React from 'react';
import { Recycle, Package, Zap, Droplet, ArrowRight, Boxes, Factory, Cpu, FlaskConical, Users, Clock, TrendingUp, Download, Box, Wrench, Home, Microscope } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// Single-file React canvas that contains three visual pages in the same NASA-dark style:
// 1) Dashboard de métricas
// 2) Workflow visual con flechas y objetos reutilizables para 3 proyectos
// 3) Plan de negocios estilo Canva

const MATERIAL_BREAKDOWN = [
  { name: 'Plastics/Polymers', value: 3280, color: '#3b82f6' },
  { name: 'Textiles', value: 2670, color: '#8b5cf6' },
  { name: 'Metals', value: 1460, color: '#ef4444' },
  { name: 'Carbon Products', value: 1850, color: '#10b981' },
  { name: 'Foams', value: 890, color: '#f59e0b' },
  { name: 'Composites', value: 308, color: '#ec4899' }
];

const MONTHLY = [
  { month: 'M1', recovered: 280 },{ month: 'M3', recovered: 320 },{ month: 'M6', recovered: 355 },{ month: 'M9', recovered: 380 },{ month: 'M12', recovered: 400 },{ month: 'M18', recovered: 420 },{ month: 'M24', recovered: 445 },{ month: 'M30', recovered: 465 },{ month: 'M36', recovered: 485 }
];

const PRODUCTION = [
  { category: 'Structural', units: 19370, weight: 4200 },
  { category: 'Daily Use', units: 2890, weight: 850 },
  { category: 'Habitat', units: 1267, weight: 1850 },
  { category: 'Scientific', units: 1345, weight: 620 }
];

export default function ThreeAssetsCanvas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 p-8 space-y-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-800 rounded-md flex items-center justify-center shadow">
            <Recycle className="w-7 h-7 text-red-200" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold">Mars Recycling — Kit: Dashboard, Workflow & Business Plan</h1>
            <div className="text-xs text-gray-400">Mismo estilo visual oscuro y datos originales.</div>
          </div>
        </div>
        <div className="text-xs text-gray-400">Exporta cada sección como imagen para usar en presentaciones.</div>
      </header>

      {/* 1) DASHBOARD */}
      <section className="rounded-2xl p-6 border border-gray-700 bg-gradient-to-br from-black/30 to-gray-900/20">
        <h2 className="text-lg font-bold text-yellow-300">1. Dashboard de métricas</h2>
        <p className="text-sm text-gray-400">Vista rápida con KPIs, tendencias y desglose de materiales.</p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-300">Recovery trend</div>
                <div className="text-2xl font-extrabold">83% • 10,458 kg</div>
                <div className="text-xs text-gray-400 mt-1">Unusable: 2,142 kg</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-300">Energy</div>
                <div className="font-bold text-xl">420 kWh/wk</div>
                <div className="text-xs text-gray-400">Water 85 L/wk (95% rec)</div>
              </div>
            </div>

            <div className="mt-4 h-40">
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={MONTHLY} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line type="monotone" dataKey="recovered" stroke="#60A5FA" strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-300">
              <div className="p-3 bg-black/20 rounded">Products: <div className="font-bold">25,576</div></div>
              <div className="p-3 bg-black/20 rounded">Useful weight: <div className="font-bold">7,700 kg</div></div>
              <div className="p-3 bg-black/20 rounded">Crew time: <div className="font-bold">6 h/wk</div></div>
            </div>
          </div>

          <aside className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-200">Material breakdown</h3>
            <div className="h-44 mt-3">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={MATERIAL_BREAKDOWN} dataKey="value" outerRadius={60} innerRadius={24} paddingAngle={2}>
                    {MATERIAL_BREAKDOWN.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <ul className="mt-3 text-xs text-gray-300 space-y-1">
              {MATERIAL_BREAKDOWN.map(m => (
                <li key={m.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{ background: m.color }} />{m.name}</div>
                  <div className="font-bold">{m.value} kg</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 2) WORKFLOW */}
      <section className="rounded-2xl p-6 border border-gray-700 bg-gradient-to-br from-black/25 to-gray-900/10">
        <h2 className="text-lg font-bold text-yellow-300">2. Workflow — Entrada → Proceso → Salida (objetos reales)</h2>
        <p className="text-sm text-gray-400">Diagrama con flechas que muestra qué entra y qué sale, mapeado a 3 proyectos utilizables.</p>

        <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-gray-700">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* INPUT */}
            <div className="w-full lg:w-1/4">
              <div className="text-xs text-gray-300 font-semibold">INPUT</div>
              <div className="mt-3 p-4 rounded-lg bg-black/20 border border-gray-700">
                <div className="text-sm font-bold">12,600 kg total</div>
                <ul className="mt-2 text-xs text-gray-300">
                  <li>• Plastics: 3,280 kg</li>
                  <li>• Textiles: 2,670 kg</li>
                  <li>• Metals: 1,460 kg</li>
                  <li>• Carbon: 1,850 kg</li>
                </ul>
              </div>
            </div>

            {/* ARROWS + PROCESS BLOCK */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <ProcessCard title="Sorting" subtitle="Separa por tipo" />
                <ArrowRight className="w-12 h-6 text-gray-400" />
                <ProcessCard title="Processing (6 units)" subtitle="Transformación en materiales útiles" />
                <ArrowRight className="w-12 h-6 text-gray-400" />
                <ProcessCard title="Output" subtitle="Productos usables" />
              </div>

              {/* Mapping outputs to 3 projects */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <ProjectCard title="Project A • Habitat Build" icon={Home} items={[{name:'Regolith bricks', qty:18500},{name:'Wall panels', qty:85}]} colorStart="#065F46" />
                <ProjectCard title="Project B • Tools & Daily Use" icon={Wrench} items={[{name:'Containers', qty:450},{name:'Utensils', qty:800},{name:'Tool handles', qty:240}]} colorStart="#B45309" />
                <ProjectCard title="Project C • Science Kits" icon={Microscope} items={[{name:'Sample containers', qty:580},{name:'Electrodes', qty:420},{name:'Filtration media (kg)', qty:95}]} colorStart="#075985" />
              </div>

              <div className="mt-4 text-xs text-gray-400">Nota: los objetos mostrados son ejemplos directos de los outputs del sistema y pueden asignarse a cada proyecto para implementación inmediata.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) PLAN DE NEGOCIOS */}
      <section className="rounded-2xl p-6 border border-gray-700 bg-gradient-to-br from-green-900/5 to-black/20">
        <h2 className="text-lg font-bold text-yellow-300">3. Plan de Negocios — Estilo Canva</h2>
        <p className="text-sm text-gray-400">Resumen ejecutivo, KPIs, modelo financiero resumido y call-to-action.</p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-900 p-5 rounded-lg border border-gray-700">
            <h3 className="text-base font-semibold text-gray-200">Resumen Ejecutivo</h3>
            <p className="text-sm text-gray-300 mt-2">Sistema integrado de reciclaje para misiones Mars (Jezero). Convierte 83% de residuos en 25,576 productos útiles — reduce dependencia de resupply y ahorra estimado $9.5M en 3 años.</p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-black/20 rounded">Investment required: <div className="font-bold">$30M</div></div>
              <div className="p-3 bg-black/20 rounded">3-year savings: <div className="font-bold">$9.5M</div></div>
              <div className="p-3 bg-black/20 rounded">Products: <div className="font-bold">25,576 items</div></div>
              <div className="p-3 bg-black/20 rounded">Recovery: <div className="font-bold">83%</div></div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-200">Revenue model (high level)</h4>
              <ul className="text-xs text-gray-300 mt-2 space-y-1">
                <li>• Year 1: $2.4M net savings</li>
                <li>• Year 2: $5.8M net savings</li>
                <li>• Year 3: $9.5M net savings</li>
                <li>• Break-even: ~Mission 1.7</li>
              </ul>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="px-3 py-2 rounded bg-yellow-500 text-black font-semibold">Download One-pager</button>
              <button className="px-3 py-2 rounded border border-gray-600 text-gray-200">Request Tech Spec</button>
            </div>
          </div>

          <aside className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-200">KPIs & Roadmap</h3>
            <div className="mt-3 text-xs text-gray-300 space-y-2">
              <div>• Target recovery ≥83%</div>
              <div>• System uptime ≥95%</div>
              <div>• Crew time ≤6 h/wk</div>
              <div>• Footprint: 18.5 m³</div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-200">Roadmap (high level)</h4>
              <ol className="text-xs text-gray-300 mt-2 space-y-1 list-decimal list-inside">
                <li>PoC & Earth testing (Months 1-12)</li>
                <li>Development & Certification (Months 13-48)</li>
                <li>First deployment (Months 49-60)</li>
              </ol>
            </div>
          </aside>
        </div>

        <div className="mt-6 text-xs text-gray-400">Exporta esta sección como imagen para usar como slide de Plan de Negocios en tu presentación.</div>
      </section>

      <footer className="text-center text-xs text-gray-500">Hecho en estilo NASA-dark. Dime si quieres: versiones en fondo claro, exportación en PNG/PDF, o añadir diapositivas adicionales.</footer>
    </div>
  );
}

/* ---- Helper Components ---- */
function ProcessCard({ title, subtitle }) {
  return (
    <div className="p-3 bg-black/20 rounded-lg border border-gray-700 text-center w-48">
      <div className="text-sm font-semibold text-gray-200">{title}</div>
      <div className="text-xs text-gray-400 mt-1">{subtitle}</div>
    </div>
  );
}

function ProjectCard({ title, items = [], icon: Icon, colorStart = '#111827' }) {
  return (
    <div className="p-3 rounded-lg border border-gray-700 bg-black/20">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded bg-black/30">
          {Icon ? <Icon className="w-6 h-6 text-white/90" /> : <Box className="w-6 h-6 text-white/90" />}
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
}

