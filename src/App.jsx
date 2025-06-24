import React, { useState, useRef, useEffect } from 'react';
import { 
  Calculator, 
  Mic, 
  MicOff, 
  Upload, 
  Download, 
  Settings, 
  Home, 
  FileText, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp,
  Send,
  Plus,
  Edit3,
  Trash2,
  Eye,
  ChevronRight,
  Building,
  Hammer,
  PaintBucket,
  Wrench
} from 'lucide-react';

const EstimationPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState('');
  const [estimates, setEstimates] = useState([
    {
      id: 1,
      title: 'Kitchen Remodel - Oak Street',
      description: 'Complete kitchen renovation with new cabinets, countertops, and appliances',
      totalCost: 45000,
      laborCost: 18000,
      materialCost: 27000,
      status: 'completed',
      date: '2024-06-20',
      client: 'Johnson Family'
    },
    {
      id: 2,
      title: 'Bathroom Renovation - Pine Ave',
      description: 'Master bathroom remodel with tile work and new fixtures',
      totalCost: 22000,
      laborCost: 8000,
      materialCost: 14000,
      status: 'in-progress',
      date: '2024-06-18',
      client: 'Smith Residence'
    },
    {
      id: 3,
      title: 'Deck Construction - Maple Drive',
      description: 'New composite deck with railing and lighting',
      totalCost: 15000,
      laborCost: 6000,
      materialCost: 9000,
      status: 'draft',
      date: '2024-06-15',
      client: 'Brown Family'
    }
  ]);

  const [currentEstimate, setCurrentEstimate] = useState(null);
  const [showEstimateDetails, setShowEstimateDetails] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop voice recording
  };

  const generateEstimate = () => {
    if (!inputText.trim()) return;

    // Simulate AI processing
    const newEstimate = {
      id: Date.now(),
      title: 'New Project Estimate',
      description: inputText,
      totalCost: Math.floor(Math.random() * 50000) + 10000,
      laborCost: Math.floor(Math.random() * 20000) + 5000,
      materialCost: Math.floor(Math.random() * 30000) + 5000,
      status: 'draft',
      date: new Date().toISOString().split('T')[0],
      client: 'New Client',
      breakdown: [
        { category: 'Materials', items: [
          { name: 'Lumber', quantity: '2000 sq ft', unitCost: 8, total: 16000 },
          { name: 'Hardware', quantity: '1 lot', unitCost: 2500, total: 2500 },
          { name: 'Paint & Supplies', quantity: '15 gal', unitCost: 45, total: 675 }
        ]},
        { category: 'Labor', items: [
          { name: 'Carpentry', hours: 120, rate: 65, total: 7800 },
          { name: 'Finishing', hours: 80, rate: 55, total: 4400 }
        ]}
      ]
    };

    setEstimates([newEstimate, ...estimates]);
    setCurrentEstimate(newEstimate);
    setShowEstimateDetails(true);
    setInputText('');
  };

  const Navigation = () => (
    <nav className="bg-white/80 backdrop-blur-xl border-r border-gray-200 w-64 h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">EstimateAI</h1>
            <p className="text-sm text-gray-500">Pro Estimates</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'new-estimate', icon: Plus, label: 'New Estimate' },
            { id: 'estimates', icon: FileText, label: 'All Estimates' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600 mt-1">Welcome back! Here's your project overview.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: DollarSign, label: 'Total Revenue', value: '$182,000', change: '+12%', color: 'green' },
          { icon: FileText, label: 'Active Projects', value: '8', change: '+3', color: 'blue' },
          { icon: Users, label: 'Clients', value: '24', change: '+5', color: 'purple' },
          { icon: TrendingUp, label: 'Success Rate', value: '94%', change: '+2%', color: 'orange' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}-50 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Estimates */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Estimates</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {estimates.slice(0, 3).map((estimate) => (
              <div key={estimate.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{estimate.title}</h4>
                    <p className="text-sm text-gray-600">{estimate.client}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${estimate.totalCost.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    estimate.status === 'completed' ? 'bg-green-100 text-green-700' :
                    estimate.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {estimate.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const NewEstimate = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Create New Estimate</h2>
        <p className="text-gray-600 mt-1">Describe your project using text or voice input</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Project Description
            </label>
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Describe your construction project... For example: 'I need to remodel a 200 sq ft kitchen with new cabinets, granite countertops, and stainless steel appliances'"
                className="w-full h-32 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleRecording}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                isRecording
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              <span>{isRecording ? 'Stop Recording' : 'Voice Input'}</span>
            </button>

            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200">
              <Upload className="w-5 h-5" />
              <span>Upload Plans</span>
            </button>
          </div>

          <button
            onClick={generateEstimate}
            disabled={!inputText.trim()}
            className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            <span className="font-medium text-lg">Generate AI Estimate</span>
          </button>
        </div>
      </div>

      {/* Sample Projects */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Start Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: PaintBucket, title: 'Kitchen Remodel', desc: 'Cabinets, countertops, appliances' },
            { icon: Hammer, title: 'Bathroom Renovation', desc: 'Tile, fixtures, plumbing' },
            { icon: Building, title: 'Room Addition', desc: 'New construction, framing, finishing' },
            { icon: Wrench, title: 'Deck Construction', desc: 'Materials, labor, permits' }
          ].map((template, idx) => (
            <button
              key={idx}
              onClick={() => setInputText(`I need a ${template.title.toLowerCase()} including ${template.desc.toLowerCase()}`)}
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 text-left"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <template.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{template.title}</h4>
                <p className="text-sm text-gray-600">{template.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const EstimatesList = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">All Estimates</h2>
          <p className="text-gray-600 mt-1">Manage and track your project estimates</p>
        </div>
        <button
          onClick={() => setActiveTab('new-estimate')}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Estimate</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option>All Status</option>
                <option>Draft</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {estimates.map((estimate) => (
            <div key={estimate.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{estimate.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{estimate.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">Client: {estimate.client}</span>
                        <span className="text-sm text-gray-500">Date: {estimate.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">${estimate.totalCost.toLocaleString()}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600">Labor: ${estimate.laborCost.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">Materials: ${estimate.materialCost.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      estimate.status === 'completed' ? 'bg-green-100 text-green-700' :
                      estimate.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {estimate.status.replace('-', ' ')}
                    </span>
                    
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => {
                          setCurrentEstimate(estimate);
                          setShowEstimateDetails(true);
                        }}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EstimateDetails = ({ estimate, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{estimate.title}</h2>
              <p className="text-gray-600 mt-1">{estimate.client} • {estimate.date}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Cost Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900">Total Cost</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">${estimate.totalCost.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900">Labor</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">${estimate.laborCost.toLocaleString()}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900">Materials</h3>
              <p className="text-3xl font-bold text-purple-600 mt-2">${estimate.materialCost.toLocaleString()}</p>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
            <p className="text-gray-700 bg-gray-50 rounded-xl p-4">{estimate.description}</p>
          </div>

          {/* Detailed Breakdown */}
          {estimate.breakdown && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
              <div className="space-y-6">
                {estimate.breakdown.map((category, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">{category.category}</h4>
                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900">{item.name}</span>
                            <span className="text-gray-600 ml-2">
                              {item.quantity && `(${item.quantity})`}
                              {item.hours && `(${item.hours} hrs @ $${item.rate}/hr)`}
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900">${item.total.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
              <Edit3 className="w-5 h-5" />
              <span>Edit Estimate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-estimate':
        return <NewEstimate />;
      case 'estimates':
        return <EstimatesList />;
      case 'settings':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="text-gray-600">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="ml-64 p-8">
        {renderContent()}
      </main>

      {showEstimateDetails && currentEstimate && (
        <EstimateDetails
          estimate={currentEstimate}
          onClose={() => {
            setShowEstimateDetails(false);
            setCurrentEstimate(null);
          }}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <EstimationPlatform />
    </div>
  );
}

export default App;