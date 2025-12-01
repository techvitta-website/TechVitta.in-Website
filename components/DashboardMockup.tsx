import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Wallet, ArrowUpRight, Activity, PieChart as PieIcon, Settings, Bell } from 'lucide-react';

const data = [
  { name: 'Mon', value: 14000 },
  { name: 'Tue', value: 18500 },
  { name: 'Wed', value: 16000 },
  { name: 'Thu', value: 21000 },
  { name: 'Fri', value: 19500 },
  { name: 'Sat', value: 23400 },
  { name: 'Sun', value: 22193 },
];

const pieData = [
  { name: 'Bitcoin', value: 45 },
  { name: 'Ethereum', value: 30 },
  { name: 'Tether', value: 25 },
];

// Updated Palette: Royal Blue (#2563eb), Tech Blue (#1B2A4A), Aqua Mint (#1DD6C3)
const COLORS = ['#2563eb', '#1B2A4A', '#1DD6C3'];

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 lg:mt-20 perspective-1000">
      {/* Glassmorphic Container */}
      <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex space-x-4 text-slate-400">
            <Bell className="w-5 h-5 hover:text-brand-500 cursor-pointer" />
            <Settings className="w-5 h-5 hover:text-brand-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[600px]">
          {/* Sidebar */}
          <div className="hidden lg:flex flex-col w-64 border-r border-slate-100 bg-slate-50/50 p-4 space-y-2">
            <div className="flex items-center space-x-3 px-4 py-3 bg-brand-50 text-brand-600 rounded-xl font-medium">
              <Wallet className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer">
              <Activity className="w-5 h-5" />
              <span>Market</span>
            </div>
             <div className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
              <span>Trade</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer">
              <PieIcon className="w-5 h-5" />
              <span>Portfolio</span>
            </div>
            
            <div className="mt-auto bg-gradient-to-br from-navy-800 to-navy-900 p-4 rounded-2xl text-white">
              <p className="text-sm font-medium opacity-90">Unlock Techvitta AI</p>
              <p className="text-xs opacity-75 mt-1">Smart trading analysis</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-8 bg-slate-50/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              
              {/* Chart Section */}
              <div className="lg:col-span-2 flex flex-col space-y-6">
                {/* Balance Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-slate-500 text-sm font-medium">Total Balance</p>
                      <h2 className="text-4xl font-bold text-navy-900 mt-1">€22,193.05</h2>
                    </div>
                    <span className="px-3 py-1 bg-accent-400/10 text-accent-500 rounded-full text-sm font-semibold">+47.3%</span>
                  </div>
                  
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Assets */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
                  <h3 className="font-semibold text-navy-900 mb-4">Assets</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Bitcoin', sym: 'BTC', val: '€17,378', change: '+13.5%' },
                      { name: 'Ethereum', sym: 'ETH', val: '€3,208', change: '+2.7%' },
                      { name: 'Tether', sym: 'USDT', val: '€475', change: '-0.01%' },
                    ].map((asset, i) => (
                      <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">{asset.sym}</div>
                          <div>
                            <p className="font-medium text-slate-900">{asset.name}</p>
                            <p className="text-xs text-slate-500">0.45 {asset.sym}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-slate-900">{asset.val}</p>
                          <p className={`text-xs ${asset.change.startsWith('+') ? 'text-accent-500' : 'text-red-500'}`}>{asset.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Widgets */}
              <div className="flex flex-col space-y-6">
                {/* Quick Swap */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                   <h3 className="font-semibold text-navy-900 mb-4">Quick Swap</h3>
                   <div className="space-y-2">
                     <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                       <span className="text-slate-500 text-sm">Pay</span>
                       <span className="font-medium text-slate-900">0.5 BTC</span>
                     </div>
                     <div className="flex justify-center -my-3 relative z-10">
                       <div className="bg-white p-1.5 rounded-full shadow-md border border-slate-100">
                         <ArrowUpRight className="w-4 h-4 text-slate-400 transform rotate-180" />
                       </div>
                     </div>
                     <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                       <span className="text-slate-500 text-sm">Receive</span>
                       <span className="font-medium text-slate-900">14.2 ETH</span>
                     </div>
                     <button className="w-full mt-4 bg-navy-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-navy-800 transition-colors">Execute Swap</button>
                   </div>
                </div>

                {/* Distribution */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
                   <h3 className="font-semibold text-navy-900 mb-4">Distribution</h3>
                   <div className="h-[200px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                     </ResponsiveContainer>
                   </div>
                   <div className="flex justify-center space-x-4 text-xs text-slate-500 mt-2">
                     <div className="flex items-center"><div className="w-2 h-2 bg-brand-500 rounded-full mr-1"></div> BTC</div>
                     <div className="flex items-center"><div className="w-2 h-2 bg-navy-900 rounded-full mr-1"></div> ETH</div>
                     <div className="flex items-center"><div className="w-2 h-2 bg-accent-400 rounded-full mr-1"></div> USDT</div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};