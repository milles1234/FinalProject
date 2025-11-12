import React, { useState } from 'react';
import { Shield, ChevronDown, AlertTriangle, Camera, BarChart3, Clock } from 'lucide-react';

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);

  const partners = [
    "Shell", "BP", "ExxonMobil", "Chevron", "TotalEnergies", 
    "ConocoPhillips", "Valero", "Marathon"
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-black" />
              <span className="text-xl font-semibold text-black">Industry 2.0</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-black"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#stories" className="text-gray-700 hover:text-black">Customer Stories</a>
              <a href="#resources" className="text-gray-700 hover:text-black">Resources</a>
              <a href="#pricing" className="text-gray-700 hover:text-black">Pricing</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-black">
                Book A Demo
              </button>
              <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 pt-20 pb-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6 text-black">
              AI-Driven Corrosion Detection Right Away
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              From inspection to prevention — manage thousands of industrial assets seamlessly with intelligent corrosion monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition">
                Download Free App
              </button>
              <button className="border-2 border-black text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition">
                Get Started Free
              </button>
            </div>
          </div>

          {/* Visual Elements Grid */}
          <div className="relative max-w-6xl mx-auto h-[500px] mt-16">
            {/* Center Phone Mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-72 h-[520px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-linear-to-br from-orange-400 to-pink-500 rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="text-xs font-semibold">Plant Monitor</div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-white/40" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                    <div className="text-white text-sm font-medium">Pipeline Section A-7</div>
                    <div className="text-white/80 text-xs mt-1">Corrosion detected: Moderate severity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {/* Top Left - Product Card */}
            <div className="absolute top-0 left-8 w-56 bg-blue-100 rounded-3xl p-6 shadow-lg">
              <div className="bg-white rounded-2xl w-full h-32 mb-3 overflow-hidden flex items-center justify-center">
                <AlertTriangle className="w-16 h-16 text-orange-500" />
              </div>
              <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
                2:01
              </div>
            </div>

            {/* Top Right - Sales Card */}
            <div className="absolute top-0 right-8 w-52 bg-green-200 rounded-3xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-black mb-2">8 <span className="text-2xl font-normal">items</span></div>
              <div className="text-sm text-gray-700 mb-3">Sold this week</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-black">$12</div>
                <div className="w-16 h-16 bg-white/40 rounded-2xl"></div>
              </div>
            </div>

            {/* Bottom Left - Engagement Card */}
            <div className="absolute bottom-0 left-16 w-56 bg-yellow-200 rounded-3xl p-6 shadow-lg">
              <div className="text-sm text-gray-700 mb-3">Engagement</div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-12 h-12 text-black" />
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold text-black">40%</span>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-white rotate-180" />
                  </div>
                </div>
              </div>
            </div>

            {/* Purple Rating Badge */}
            <div className="absolute top-1/3 left-1/4 bg-purple-400 rounded-full px-5 py-3 shadow-lg">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-white text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Bottom Right - Video Card */}
            <div className="absolute bottom-0 right-16 w-52 bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="w-full h-40 bg-linear-to-br from-green-300 to-green-400 flex items-center justify-center">
                <Clock className="w-12 h-12 text-white/60" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white text-xs">❤</div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold">1.5k</span>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full px-6 py-16 bg-gray-50 border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-2xl font-semibold text-gray-800 tracking-tight">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-black mb-6">
              Intelligent Monitoring, <br />Simplified Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform detects corrosion early, prevents failures, and optimizes maintenance schedules across your entire facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Real-Time Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered visual inspection identifies corrosion patterns instantly with 98% accuracy across all asset types.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning forecasts corrosion progression and recommends optimal maintenance windows.
              </p>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">24/7 Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous monitoring with instant alerts ensures your critical infrastructure is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-20 bg-black">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif text-white mb-6">
            Ready to Transform Your Maintenance Operations?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join leading industrial plants using AI-powered corrosion detection to reduce costs and prevent failures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}