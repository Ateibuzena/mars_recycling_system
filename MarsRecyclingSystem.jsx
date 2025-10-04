import React, { useState } from 'react';
import { Recycle, Package, Zap, Droplet, AlertCircle, CheckCircle, ArrowRight, Boxes, Shirt, FlaskConical } from 'lucide-react';

const MarsRecyclingSystem = () => {
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
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-red-900 via-gray-900 to-black text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Integrated Mars Waste Recycling System</h1>
        <p className="text-center text-red-300 text-lg">Jezero Crater Mission • 3-Year Duration • 8-Person Crew</p>
      </div>

      {/* System Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg border border-red-500">
          <div className="text-2xl font-bold text-red-400">{systemStats.totalInput}</div>
          <div className="text-sm text-gray-400">Total Waste Input</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-green-500">
          <div className="text-2xl font-bold text-green-400">{systemStats.recoveryRate}</div>
          <div className="text-sm text-gray-400">Recovery Rate</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500">
          <div className="text-2xl font-bold text-yellow-400">{systemStats.energyConsumption}</div>
          <div className="text-sm text-gray-400">Energy Use</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500">
          <div className="text-2xl font-bold text-blue-400">{systemStats.crewTime}</div>
          <div className="text-sm text-gray-400">Crew Time Required</div>
        </div>
      </div>

      {/* Scenario Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Input Sources by Scenario</h2>
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
                <p className="text-sm mt-2">{scenario.inputs.length} material categories</p>
              </button>
            );
          })}
        </div>

        {/* Display Selected Scenario Inputs */}
        {activeScenario !== 'all' && (
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-red-400">Input Materials:</h3>
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
            <p className="text-center text-gray-400">Select a scenario above to view detailed input materials</p>
          </div>
        )}
      </div>

      {/* Processing Systems */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recycling Processes</h2>
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
                    <h4 className="font-semibold text-blue-400 mb-2">Inputs Processed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {process.inputs.map((input, idx) => (
                        <span key={idx} className="bg-blue-900 px-3 py-1 rounded-full text-xs">{input}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Outputs Generated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {process.outputs.map((output, idx) => (
                        <span key={idx} className="bg-green-900 px-3 py-1 rounded-full text-xs">{output}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-gray-900 p-2 rounded">
                      <div className="text-gray-400 text-xs">Efficiency</div>
                      <div className="font-semibold">{process.efficiency}</div>
                    </div>
                    <div className="bg-gray-900 p-2 rounded">
                      <div className="text-gray-400 text-xs flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Energy
                      </div>
                      <div className="font-semibold">{process.energyUse}</div>
                    </div>
                    <div className="bg-gray-900 p-2 rounded">
                      <div className="text-gray-400 text-xs flex items-center gap-1">
                        <Droplet className="w-3 h-3" /> Water
                      </div>
                      <div className="font-semibold">{process.waterUse}</div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedProcess !== process.id && (
                <div className="text-xs text-gray-500 mt-2">Click to expand details</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* End Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Final Products Generated</h2>
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
        <h2 className="text-2xl font-bold mb-4">Waste Management & Byproducts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Unusable Waste */}
          <div className="bg-red-950 p-6 rounded-lg border border-red-700">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <h3 className="font-bold text-lg text-red-400">Unusable Waste ({systemStats.unusableWaste})</h3>
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
              <strong>Disposal Method:</strong> Compressed and sealed in containment units, stored in designated waste storage area on Martian surface, away from habitat and operations zones.
            </div>
          </div>

          {/* Valuable Byproducts */}
          <div className="bg-green-950 p-6 rounded-lg border border-green-700">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="font-bold text-lg text-green-400">Valuable Byproducts</h3>
            </div>
            <div className="space-y-3">
              {wasteStreams.byproducts.map((byproduct, idx) => (
                <div key={idx} className="bg-green-900 bg-opacity-30 p-3 rounded">
                  <div className="font-semibold text-sm">{byproduct.material}</div>
                  <div className="text-xs text-green-300 mt-1">{byproduct.usage}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    <strong>Status:</strong> {byproduct.disposition}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Flow Overview */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Complete System Overview</h2>
        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-900 bg-opacity-30 p-4 rounded">
              <h3 className="font-bold mb-2 text-blue-400">Input Stage</h3>
              <p>Materials collected from all three scenarios are sorted by composition. Crew members spend ~2 hrs/week on initial sorting and preparation.</p>
            </div>
            <div className="bg-purple-900 bg-opacity-30 p-4 rounded">
              <h3 className="font-bold mb-2 text-purple-400">Processing Stage</h3>
              <p>Six parallel processing systems handle different material types. Automated monitoring requires ~3 hrs/week crew intervention for maintenance and adjustments.</p>
            </div>
            <div className="bg-green-900 bg-opacity-30 p-4 rounded">
              <h3 className="font-bold mb-2 text-green-400">Output Stage</h3>
              <p>Processed materials feed into additive manufacturing. Crew spends ~1 hr/week on quality control and product finishing.</p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold mb-2 text-yellow-400">Resource Integration</h3>
            <ul className="space-y-1 ml-4">
              <li>• Waste heat from thermal processes reduces habitat heating needs by 20%</li>
              <li>• Wastewater from fiber processing is recycled through life support systems</li>
              <li>• Carbon from CO2 extraction creates 18,500+ regolith bricks for expansion</li>
              <li>• Synthesis gas stored as emergency backup fuel (equivalent to 8 hours of power)</li>
              <li>• Hydrocarbon oils replace 60% of lubricant resupply needs</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold mb-2 text-red-400">Safety Protocols</h3>
            <ul className="space-y-1 ml-4">
              <li>• No incineration or open burning (prevents toxic emissions)</li>
              <li>• Closed-loop chemical systems prevent PFAS generation</li>
              <li>• Filtration systems capture &gt;99.7% of microplastics from wastewater</li>
              <li>• Thermal processes operate in oxygen-free environment (prevents combustion)</li>
              <li>• Contaminated materials isolated and stored separately</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>System designed for Jezero Crater mission conditions • Scalable for crew expansion • Modular for different mission profiles</p>
      </div>
    </div>
  );
};

export default MarsRecyclingSystem;