import React from 'react';
import { Recycle, Package, Zap, Droplet, ArrowRight, Boxes, Factory, Cpu, Shield, FlaskConical, TrendingUp, Users, Clock } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Mars Recycling - 4-slide visual canvas (single-file React component)
// Tailwind CSS assumed. Designed to be visual, large numbers, dark NASA-style theme.

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

export default function MarsRecyclingCanva() {
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
}


/* --------------------- Helper components --------------------- */
function StageBox({ title, subtitle, color = 'bg-gray-800', icon: Icon, list = [] }) {
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
}

function BigStat({ label, value, sub, icon: Icon }) {
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
}

function WeeklyCalendar() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  // example hour blocks that sum to 6h/week
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
}

function StatMini({ label, value }) {
  return (
    <div className="p-2 bg-black/20 rounded text-center">
      <div className="text-xs text-gray-300">{label}</div>
      <div className="font-bold text-white">{value}</div>
    </div>
  );
}

