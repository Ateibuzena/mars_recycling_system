import React, { useState } from 'react';
import { Recycle, Package, Zap, Droplet, AlertCircle, CheckCircle, ArrowRight, Boxes, Shirt, FlaskConical, Clock, Users, Activity, Settings, PlayCircle, PauseCircle, Calendar, Shield } from 'lucide-react';

const MarsRecyclingVisualWorkflow = () => {
  const [activeTab, setActiveTab] = useState('visual');
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeProcess, setActiveProcess] = useState(null);

  const weeklySchedule = [
    {
      day: 'MONDAY',
      color: 'blue',
      tasks: [
        { time: '08:00-09:00', activity: 'Waste Collection', crew: 2, zone: 'All Habitat Zones', status: 'Collection' },
        { time: '09:00-10:00', activity: 'Material Sorting', crew: 2, zone: 'Recycling Bay', status: 'Sorting' }
      ],
      total: '2 hours',
      output: 'Sorted materials by category (6 streams)'
    },
    {
      day: 'TUESDAY',
      color: 'green',
      tasks: [
        { time: '10:00-11:00', activity: 'System Monitoring', crew: 1, zone: 'Control Station', status: 'Monitoring' },
        { time: 'Continuous', activity: 'Automated Processing', crew: 0, zone: 'All Processing Units', status: 'Processing' }
      ],
      total: '1 hour active',
      output: 'Materials in thermal & mechanical processing'
    },
    {
      day: 'WEDNESDAY',
      color: 'green',
      tasks: [
        { time: '10:00-11:00', activity: 'System Monitoring', crew: 1, zone: 'Control Station', status: 'Monitoring' },
        { time: 'Continuous', activity: 'Automated Processing', crew: 0, zone: 'All Processing Units', status: 'Processing' }
      ],
      total: '1 hour active',
      output: 'Fiber extraction & chemical dissolution active'
    },
    {
      day: 'THURSDAY',
      color: 'green',
      tasks: [
        { time: '10:00-11:00', activity: 'System Monitoring', crew: 1, zone: 'Control Station', status: 'Monitoring' },
        { time: '11:00-11:30', activity: 'Alert Response', crew: 1, zone: 'As Needed', status: 'Maintenance' },
        { time: 'Continuous', activity: 'Automated Processing', crew: 0, zone: 'All Processing Units', status: 'Processing' }
      ],
      total: '1.5 hours',
      output: 'Carbon processing & quality checks'
    },
    {
      day: 'FRIDAY',
      color: 'purple',
      tasks: [
        { time: '14:00-15:00', activity: 'Output Collection', crew: 2, zone: 'All Processing Units', status: 'Collection' },
        { time: '15:00-15:30', activity: 'Quality Control', crew: 2, zone: 'QC Lab', status: 'Testing' }
      ],
      total: '1.5 hours',
      output: 'Processed materials ready for manufacturing'
    },
    {
      day: 'SATURDAY',
      color: 'yellow',
      tasks: [
        { time: '09:00-10:00', activity: 'Additive Manufacturing', crew: 2, zone: 'Manufacturing Bay', status: 'Production' },
        { time: '10:00-10:30', activity: 'System Maintenance', crew: 1, zone: 'All Units', status: 'Maintenance' }
      ],
      total: '1.5 hours',
      output: '50-100 new products manufactured'
    },
    {
      day: 'SUNDAY',
      color: 'gray',
      tasks: [
        { time: 'All Day', activity: 'Automated Operations', crew: 0, zone: 'Background Processing', status: 'Processing' }
      ],
      total: '0 hours crew',
      output: 'Continuous automated processing'
    }
  ];

  const processDetails = [
    {
      id: 'thermal',
      name: 'Thermal Depolymerization',
      icon: '🔥',
      color: 'orange',
      location: 'Module A - North Section',
      inputs: ['Polyethylene packaging', 'Nylon fabrics', 'Polyester materials', 'Plastic resins', 'Nitrile gloves'],
      process: [
        '1. Materials fed into oxygen-free chamber',
        '2. Temperature raised to 300-450°C gradually',
        '3. Polymer chains break into monomers',
        '4. Separation of oils, gases, and solid residues',
        '5. Cooling and collection of products'
      ],
      outputs: ['3D printing pellets (2,560 kg)', 'Hydrocarbon oils (35 L)', 'Synthesis gas (120 L)', 'Waste heat (captured)'],
      duration: '18-24 hours per batch',
      automation: '98% automated',
      crew: 'Monitor only',
      safety: 'Sealed system, no combustion, pressure monitoring'
    },
    {
      id: 'mechanical',
      name: 'Mechanical Shredding',
      icon: '⚙️',
      color: 'gray',
      location: 'Module B - Central Section',
      inputs: ['Aluminum structures', 'Metal components', 'Foam packaging', 'Bubble wrap', 'Composite materials'],
      process: [
        '1. Pre-sorting by material density',
        '2. Primary shredding (50mm pieces)',
        '3. Magnetic separation for metals',
        '4. Secondary shredding (10mm pieces)',
        '5. Air classification for foam separation'
      ],
      outputs: ['Aluminum ingots (1,240 kg)', 'Foam particles (755 kg)', 'Separated fibers (265 kg)', 'Mixed dust (88 kg)'],
      duration: '4-6 hours per batch',
      automation: '95% automated',
      crew: 'Loading/unloading',
      safety: 'Dust collection, noise isolation, emergency stop'
    },
    {
      id: 'fiber',
      name: 'Fiber Extraction',
      icon: '🧵',
      color: 'blue',
      location: 'Module C - East Section',
      inputs: ['Cotton clothing', 'Cellulose wipes', 'Nomex bags', 'Polyester textiles', 'Mixed fabrics'],
      process: [
        '1. Cleaning and contamination removal',
        '2. Mechanical tearing and separation',
        '3. Fiber classification by type',
        '4. Carding and alignment',
        '5. Compression into batting or rolls'
      ],
      outputs: ['Insulation batting (1,922 kg)', 'Reinforcement fibers (545 kg)', 'Cleaning rags (155 kg)', 'Fiber dust (48 kg)'],
      duration: '6-8 hours per batch',
      automation: '85% automated',
      crew: 'Quality inspection',
      safety: 'Low-water process, dust masks recommended'
    },
    {
      id: 'chemical',
      name: 'Chemical Dissolution',
      icon: '🧪',
      color: 'purple',
      location: 'Module D - South Section',
      inputs: ['Multi-layer pouches', 'Aluminum-laminated packaging', 'Complex composites', 'Mixed polymer items'],
      process: [
        '1. Solvent bath for polymer dissolution',
        '2. Aluminum layer separation and washing',
        '3. Polymer precipitation from solution',
        '4. Solvent recovery via distillation',
        '5. Drying and forming of polymer sheets'
      ],
      outputs: ['Aluminum sheets (230 kg)', 'Pure polymer solution', 'Reformed plastic sheets (667 kg)', 'Recycled solvent (98%)'],
      duration: '12-16 hours per batch',
      automation: '90% automated',
      crew: 'Safety monitoring',
      safety: 'Closed-loop system, fume hood, solvent detection'
    },
    {
      id: 'carbon',
      name: 'Carbon Processing',
      icon: '⚫',
      color: 'green',
      location: 'Module E - West Section',
      inputs: ['Excess carbon from CO2 extraction', 'Carbon fiber remnants', 'Organic residues', 'Mars regolith (unlimited)'],
      process: [
        '1. Carbon powder preparation and sizing',
        '2. Mixing with Mars regolith simulant (MGS-1)',
        '3. Binder addition and homogenization',
        '4. Compression molding (high pressure)',
        '5. Curing and finishing'
      ],
      outputs: ['Regolith bricks - 18,500 units (3,700 kg)', 'Carbon electrodes (420 units)', 'Filtration media (95 kg)', 'Conductive paths (180 m)'],
      duration: '2-3 hours per batch (50 bricks)',
      automation: '92% automated',
      crew: 'Mold changes',
      safety: 'Dust control, pressure safety interlocks'
    },
    {
      id: 'additive',
      name: 'Additive Manufacturing',
      icon: '🖨️',
      color: 'yellow',
      location: 'Module F - Manufacturing Bay',
      inputs: ['Plastic pellets', 'Reformed polymers', 'Metal fragments', 'Composite materials', 'Design files'],
      process: [
        '1. Material preparation and drying',
        '2. 3D printer setup and calibration',
        '3. Layer-by-layer printing',
        '4. Post-processing and finishing',
        '5. Quality inspection and cataloging'
      ],
      outputs: ['Utensils (800 pieces)', 'Containers (450 units)', 'Tools (240 pieces)', 'Parts (680 items)', 'Custom components'],
      duration: '1-8 hours per item',
      automation: '88% automated',
      crew: 'Design and finishing',
      safety: 'Ventilation for fumes, temperature monitoring'
    }
  ];

  const systemOverview = {
    totalFootprint: '18.5 m³',
    powerAverage: '420 kWh/week',
    waterUse: '85 L/week',
    crewTime: '6 hours/week',
    recovery: '83%',
    uptime: '95%+',
    throughput: '350 kg/month'
  };

  const getColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-900 border-blue-500',
      green: 'bg-green-900 border-green-500',
      purple: 'bg-purple-900 border-purple-500',
      yellow: 'bg-yellow-900 border-yellow-500',
      gray: 'bg-gray-800 border-gray-600',
      orange: 'bg-orange-900 border-orange-500'
    };
    return colors[color] || 'bg-gray-800 border-gray-600';
  };

  const VisualConcept = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-orange-900 to-red-900 p-6 rounded-lg border-2 border-red-500">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Mars Waste Recycling System</h2>
        <p className="text-center text-red-200">Visual System Architecture - Jezero Crater Mission</p>
      </div>

      {/* Main Flow Diagram */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Complete Material Flow</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center mb-8">
          {/* Stage 1: Input */}
          <div className="bg-blue-900 bg-opacity-50 p-6 rounded-xl border-2 border-blue-400 shadow-lg shadow-blue-500/30">
            <Package className="w-16 h-16 mx-auto mb-3 text-blue-300" />
            <h4 className="font-bold text-center text-xl mb-3 text-blue-200">INPUT</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Residence:</span>
                <span className="font-bold">1,470 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Celebration:</span>
                <span className="font-bold">2,670 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Discovery:</span>
                <span className="font-bold">3,865 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Other:</span>
                <span className="font-bold">4,595 kg</span>
              </div>
            </div>
            <div className="text-center mt-4 pt-3 border-t border-blue-700">
              <div className="text-2xl font-bold text-blue-300">12,600 kg</div>
              <div className="text-xs text-gray-400">Total Waste</div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ArrowRight className="w-12 h-12 mx-auto text-gray-500" />
          </div>

          {/* Stage 2: Sorting */}
          <div className="bg-purple-900 bg-opacity-50 p-6 rounded-xl border-2 border-purple-400 shadow-lg shadow-purple-500/30">
            <Boxes className="w-16 h-16 mx-auto mb-3 text-purple-300" />
            <h4 className="font-bold text-center text-xl mb-3 text-purple-200">SORTING</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Plastics:</span>
                <span className="font-bold">3,280 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Textiles:</span>
                <span className="font-bold">2,670 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Metals:</span>
                <span className="font-bold">1,460 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Carbon:</span>
                <span className="font-bold">1,850 kg</span>
              </div>
              <div className="flex justify-between">
                <span>Other:</span>
                <span className="font-bold">3,340 kg</span>
              </div>
            </div>
            <div className="text-center mt-4 pt-3 border-t border-purple-700">
              <div className="text-sm font-bold text-purple-300">2 hrs/week</div>
              <div className="text-xs text-gray-400">Crew Time</div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ArrowRight className="w-12 h-12 mx-auto text-gray-500" />
          </div>

          {/* Stage 3: Processing */}
          <div className="bg-green-900 bg-opacity-50 p-6 rounded-xl border-2 border-green-400 shadow-lg shadow-green-500/30">
            <Recycle className="w-16 h-16 mx-auto mb-3 text-green-300" />
            <h4 className="font-bold text-center text-xl mb-3 text-green-200">PROCESSING</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Thermal:</span>
                <span className="font-bold">78%</span>
              </div>
              <div className="flex justify-between">
                <span>Mechanical:</span>
                <span className="font-bold">85%</span>
              </div>
              <div className="flex justify-between">
                <span>Fiber:</span>
                <span className="font-bold">72%</span>
              </div>
              <div className="flex justify-between">
                <span>Chemical:</span>
                <span className="font-bold">68%</span>
              </div>
              <div className="flex justify-between">
                <span>Carbon:</span>
                <span className="font-bold">92%</span>
              </div>
            </div>
            <div className="text-center mt-4 pt-3 border-t border-green-700">
              <div className="text-sm font-bold text-green-300">6 Systems</div>
              <div className="text-xs text-gray-400">Parallel Processing</div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ArrowRight className="w-12 h-12 mx-auto text-gray-500" />
          </div>

          {/* Stage 4: Output */}
          <div className="bg-yellow-900 bg-opacity-50 p-6 rounded-xl border-2 border-yellow-400 shadow-lg shadow-yellow-500/30">
            <CheckCircle className="w-16 h-16 mx-auto mb-3 text-yellow-300" />
            <h4 className="font-bold text-center text-xl mb-3 text-yellow-200">OUTPUT</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Recovered: <strong>10,458 kg</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Products: <strong>25,576 items</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Bricks: <strong>18,500 units</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span>Waste: <strong>2,142 kg</strong></span>
              </div>
            </div>
            <div className="text-center mt-4 pt-3 border-t border-yellow-700">
              <div className="text-2xl font-bold text-yellow-300">83%</div>
              <div className="text-xs text-gray-400">Recovery Rate</div>
            </div>
          </div>
        </div>

        {/* Processing Units Detail */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-4 text-red-400">Processing Units Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processDetails.map((process) => (
              <button
                key={process.id}
                onClick={() => setActiveProcess(activeProcess === process.id ? null : process.id)}
                className={`${getColorClass(process.color)} bg-opacity-30 p-4 rounded-lg border-2 text-left transition-all hover:bg-opacity-50 ${
                  activeProcess === process.id ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{process.icon}</span>
                  <div>
                    <h5 className="font-bold text-lg">{process.name}</h5>
                    <p className="text-xs text-gray-400">{process.location}</p>
                  </div>
                </div>
                <div className="text-sm space-y-1 text-gray-300">
                  <div>⚡ {process.automation}</div>
                  <div>⏱️ {process.duration}</div>
                  <div>👥 {process.crew}</div>
                </div>
                {activeProcess === process.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-300">
                    <p className="font-semibold mb-2">Click again to close details</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Expanded Process Detail */}
        {activeProcess && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg border-2 border-white">
            {processDetails.filter(p => p.id === activeProcess).map(process => (
              <div key={process.id}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{process.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{process.name}</h3>
                    <p className="text-gray-400">{process.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-400 mb-3">Input Materials:</h4>
                    <ul className="space-y-2">
                      {process.inputs.map((input, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                          <span>{input}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-green-400 mb-3">Output Products:</h4>
                    <ul className="space-y-2">
                      {process.outputs.map((output, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-yellow-400 mb-3">Process Steps:</h4>
                  <ol className="space-y-2">
                    {process.process.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 p-4 bg-red-900 bg-opacity-30 rounded-lg border border-red-700">
                  <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Safety Protocols:
                  </h4>
                  <p className="text-sm">{process.safety}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-500 text-center">
          <Droplet className="w-10 h-10 mx-auto mb-2 text-blue-400" />
          <div className="font-bold text-sm text-gray-300">Water Use</div>
          <div className="text-2xl font-bold text-blue-300">{systemOverview.waterUse}</div>
          <div className="text-xs text-gray-400">95% recycled</div>
        </div>

        <div className="bg-yellow-900 bg-opacity-40 p-4 rounded-lg border border-yellow-500 text-center">
          <Zap className="w-10 h-10 mx-auto mb-2 text-yellow-400" />
          <div className="font-bold text-sm text-gray-300">Energy</div>
          <div className="text-2xl font-bold text-yellow-300">{systemOverview.powerAverage}</div>
          <div className="text-xs text-gray-400">Average consumption</div>
        </div>

        <div className="bg-purple-900 bg-opacity-40 p-4 rounded-lg border border-purple-500 text-center">
          <Clock className="w-10 h-10 mx-auto mb-2 text-purple-400" />
          <div className="font-bold text-sm text-gray-300">Crew Time</div>
          <div className="text-2xl font-bold text-purple-300">{systemOverview.crewTime}</div>
          <div className="text-xs text-gray-400">Per week</div>
        </div>

        <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg border border-green-500 text-center">
          <Activity className="w-10 h-10 mx-auto mb-2 text-green-400" />
          <div className="font-bold text-sm text-gray-300">System Uptime</div>
          <div className="text-2xl font-bold text-green-300">{systemOverview.uptime}</div>
          <div className="text-xs text-gray-400">Target reliability</div>
        </div>
      </div>
    </div>
  );

  const OperationalWorkflow = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 p-6 rounded-lg border-2 border-purple-500">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Operational Workflow</h2>
        <p className="text-center text-purple-200">Weekly Operations Schedule & Process Flow</p>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-2xl font-bold mb-6 text-yellow-400">Weekly Operations Calendar</h3>
        
        <div className="space-y-4">
          {weeklySchedule.map((daySchedule, idx) => (
            <div key={idx}>
              <button
                onClick={() => setSelectedDay(selectedDay === daySchedule.day ? null : daySchedule.day)}
                className={`w-full ${getColorClass(daySchedule.color)} bg-opacity-40 p-4 rounded-lg border-2 text-left transition-all hover:bg-opacity-60 ${
                  selectedDay === daySchedule.day ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-lg">{daySchedule.day}</h4>
                      <p className="text-sm text-gray-400">{daySchedule.total} crew time</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Output:</div>
                    <div className="text-sm font-semibold">{daySchedule.output}</div>
                  </div>
                </div>
              </button>

              {selectedDay === daySchedule.day && (
                <div className="mt-4 ml-4 space-y-3">
                  {daySchedule.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="bg-gray-800 p-4 rounded-lg border-l-4 border-white">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 uppercase">Time</div>
                          <div className="font-bold text-white">{task.time}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase">Activity</div>
                          <div className="font-bold text-green-400">{task.activity}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase">Crew Required</div>
                          <div className="font-bold flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {task.crew} {task.crew === 1 ? 'person' : task.crew === 0 ? 'automated' : 'people'}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase">Location</div>
                          <div className="font-bold text-blue-400">{task.zone}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          task.status === 'Collection' ? 'bg-blue-900 text-blue-300' :
                          task.status === 'Sorting' ? 'bg-purple-900 text-purple-300' :
                          task.status === 'Monitoring' ? 'bg-green-900 text-green-300' :
                          task.status === 'Processing' ? 'bg-orange-900 text-orange-300' :
                          task.status === 'Maintenance' ? 'bg-red-900 text-red-300' :
                          task.status === 'Testing' ? 'bg-yellow-900 text-yellow-300' :
                          task.status === 'Production' ? 'bg-pink-900 text-pink-300' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Visual System Concept */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Visual System Concept</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Visual Concept */}
          <div className="space-y-4">
            {/* Visual Element 1 */}
            <div className="p-4 rounded-lg bg-blue-900 bg-opacity-50 border-2 border-blue-400">
              <h4 className="font-bold text-lg mb-2 text-blue-200">1. Waste Collection</h4>
              <p className="text-sm text-gray-300">Utilizing autonomous rovers for efficient waste collection across the habitat.</p>
            </div>

            {/* Visual Element 2 */}
            <div className="p-4 rounded-lg bg-purple-900 bg-opacity-50 border-2 border-purple-400">
              <h4 className="font-bold text-lg mb-2 text-purple-200">2. Material Sorting</h4>
              <p className="text-sm text-gray-300">Advanced sorting facilities for separating recyclables from waste.</p>
            </div>

            {/* Visual Element 3 */}
            <div className="p-4 rounded-lg bg-green-900 bg-opacity-50 border-2 border-green-400">
              <h4 className="font-bold text-lg mb-2 text-green-200">3. Processing Units</h4>
              <p className="text-sm text-gray-300">Thermal, mechanical, and chemical processing units for material recovery.</p>
            </div>
          </div>

          {/* Right Column - Flow Description */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800 border-2 border-white">
              <h4 className="font-bold text-lg mb-2 text-white">Material Flow Description</h4>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Waste is collected from various zones by autonomous rovers.</li>
                <li>Collected waste is transported to the recycling bay for sorting.</li>
                <li>In the recycling bay, waste is sorted into different material streams.</li>
                <li>Sorted materials are sent to respective processing units.</li>
                <li>Processing units recover valuable materials through thermal, mechanical, or chemical means.</li>
                <li>Recovered materials are either stored for future use or sent to manufacturing units.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === 'visual'
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
              onClick={() => setActiveTab('workflow')}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === 'workflow'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Operations
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'visual' && <VisualConcept />}
        {activeTab === 'workflow' && <OperationalWorkflow />}
      </div>
    </div>
  );
};

export default MarsRecyclingVisualWorkflow;