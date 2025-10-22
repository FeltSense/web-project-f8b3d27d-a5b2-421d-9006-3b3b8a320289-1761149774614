'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl">
  {/* Top Bar with Contact Info */}
  <div className="border-b border-purple-500/30 bg-black/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-2 text-xs text-gray-300">
        <span className="flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          info@nexusailabs.com
        </span>
        <span className="hidden sm:block">AI-Powered Marketing Solutions</span>
      </div>
    </div>
  </div>

  {/* Main Navigation */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo Centered - Desktop */}
    <div className="flex flex-col items-center py-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Nexus AI Labs
          </h1>
          <p className="text-xs text-gray-400 tracking-wider">INTELLIGENT MARKETING</p>
        </div>
      </div>

      {/* Desktop Navigation Links - Centered Below Logo */}
      <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-purple-500/30">
        <a href="#home" className="px-6 py-2 text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 font-medium">
          Home
        </a>
        <a href="#services" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 font-medium">
          Services
        </a>
        <a href="#about" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 font-medium">
          About
        </a>
        <a href="#pricing" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 font-medium">
          Pricing
        </a>
        <a href="#contact" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 font-medium">
          Contact
        </a>
        <button className="ml-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden absolute top-20 right-4 p-2 text-white hover:bg-purple-500/20 rounded-lg transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-black/40 backdrop-blur-lg border-t border-purple-500/30">
    <div className="px-4 py-4 space-y-2">
      <a href="#home" className="block px-4 py-3 text-white bg-purple-500/20 rounded-lg font-medium">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all">
        Contact
      </a>
      <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold mt-2">
        Get Started
      </button>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/ai-neural-network.mp4" type="video/mp4" />
  </video>
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-violet-950/95"></div>
  
  {/* Animated Grid Pattern Overlay */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }}></div>
  </div>
  
  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
    
    {/* Floating Badge */}
    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm animate-pulse">
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
      <span className="text-sm font-medium text-violet-200 tracking-wide">AI-Powered Marketing Intelligence</span>
    </div>
    
    {/* Main Headline */}
    <h1 className="max-w-5xl mb-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
      <span className="block text-white mb-2">Transform Marketing</span>
      <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
        With Neural Precision
      </span>
    </h1>
    
    {/* Description */}
    <p className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl lg:text-2xl text-violet-100 leading-relaxed font-light">
      Nexus AI Labs deploys advanced machine learning algorithms to predict consumer behavior, 
      optimize campaign performance, and deliver <span className="text-fuchsia-300 font-semibold">10x ROI</span> through 
      intelligent automation.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/50">
        <span className="relative z-10 flex items-center gap-2">
          Start Free AI Audit
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      
      <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch Demo
        </span>
      </button>
    </div>
    
    {/* Trust Indicators */}
    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-violet-200/80 text-sm">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>500+ Brands Optimized</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>$2B+ Ad Spend Managed</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>98% Client Retention</span>
      </div>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
    <svg className="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-white mb-4">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers end-to-end AI development with proven Fortune 500 results
      </p>
    </div>

    {/* Vertical Timeline */}
    <div className="relative">
      {/* Central Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

      {/* Timeline Items */}
      <div className="space-y-24">
        {/* Service 1 - Left Side */}
        <div className="relative flex items-center">
          <div className="w-1/2 pr-12 text-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="flex justify-end mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Marketing Strategy & Consulting</h3>
              <p className="text-purple-200 mb-4">
                Expert AI researchers and data scientists analyze your marketing challenges. Nexus AI Labs provides custom solutions with transparent ROI measurement and industry-specific compliance knowledge.
              </p>
              <div className="flex justify-end gap-2 flex-wrap">
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm text-purple-200">Fortune 500 Proven</span>
                <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm text-pink-200">Custom Solutions</span>
              </div>
            </div>
          </div>
          {/* Center Node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-purple-500/50"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Service 2 - Right Side */}
        <div className="relative flex items-center">
          <div className="w-1/2"></div>
          {/* Center Node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-pink-500/50"></div>
          <div className="w-1/2 pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="flex justify-start mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Predictive Analytics & Customer Insights</h3>
              <p className="text-purple-200 mb-4">
                Cutting-edge technology stack powered by Nexus AI Labs engineers. Transform customer data into actionable insights with measurable results and ongoing optimization support.
              </p>
              <div className="flex justify-start gap-2 flex-wrap">
                <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm text-pink-200">Data Scientists</span>
                <span className="px-3 py-1 bg-rose-500/30 rounded-full text-sm text-rose-200">Measurable ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 - Left Side */}
        <div className="relative flex items-center">
          <div className="w-1/2 pr-12 text-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="flex justify-end mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Content Generation & Personalization</h3>
              <p className="text-purple-200 mb-4">
                Nexus AI Labs deploys intelligent content systems tailored to your business challenges. Industry-specific expertise ensures brand consistency with automated personalization at scale.
              </p>
              <div className="flex justify-end gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm text-blue-200">Cutting-Edge Tech</span>
                <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm text-cyan-200">Automated Scale</span>
              </div>
            </div>
          </div>
          {/* Center Node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-blue-500/50"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Service 4 - Right Side */}
        <div className="relative flex items-center">
          <div className="w-1/2"></div>
          {/* Center Node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-emerald-500/50"></div>
          <div className="w-1/2 pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
              <div className="flex justify-start mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Deployment & Continuous Optimization</h3>
              <p className="text-purple-200 mb-4">
                End-to-end AI development from consulting to deployment. Nexus AI Labs provides ongoing support, transparent processes, and continuous optimization to maximize your marketing performance.
              </p>
              <div className="flex justify-start gap-2 flex-wrap">
                <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-sm text-emerald-200">Ongoing Support</span>
                <span className="px-3 py-1 bg-teal-500/30 rounded-full text-sm text-teal-200">Full Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-20">
      <p className="text-purple-200 mb-6 text-lg">
        Trusted by Fortune 500 companies for transparent, results-driven AI solutions
      </p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
        Start Your AI Journey with Nexus AI Labs
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Trusted by Marketing Leaders
      </h2>
      <p className="text-xl text-purple-200">
        See how Nexus AI Labs transforms marketing strategies
      </p>
    </div>

    {/* Featured Large Quote */}
    <div className="mb-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Quote Content - Takes up more space */}
          <div className="md:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
            <svg className="w-16 h-16 text-purple-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              Nexus AI Labs revolutionized our content strategy. We've seen a 340% increase in engagement and cut our campaign planning time in half. Their AI-powered insights are simply unmatched in the industry.
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
                alt="Sarah Mitchell"
                className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-purple-100"
              />
              <div>
                <div className="font-bold text-lg text-gray-900">Sarah Mitchell</div>
                <div className="text-purple-600 font-medium">Chief Marketing Officer</div>
                <div className="text-gray-600">BrandForge Digital</div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="md:col-span-2 relative min-h-[300px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Marketing team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Secondary Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Testimonial 2 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-start mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt="Marcus Chen"
            className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-purple-400"
          />
          <div className="flex-1">
            <div className="font-bold text-lg text-white">Marcus Chen</div>
            <div className="text-purple-300 text-sm font-medium">Director of Growth Marketing</div>
            <div className="text-purple-200 text-sm">Velocity Media Group</div>
          </div>
        </div>
        <p className="text-white/90 text-lg leading-relaxed">
          The predictive analytics from Nexus AI Labs helped us identify our highest-value customer segments. Our ROI improved by 215% in just three months. It's like having a crystal ball for marketing decisions.
        </p>
        <div className="flex mt-6 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-start mb-6">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt="Elena Rodriguez"
            className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-purple-400"
          />
          <div className="flex-1">
            <div className="font-bold text-lg text-white">Elena Rodriguez</div>
            <div className="text-purple-300 text-sm font-medium">VP of Marketing Operations</div>
            <div className="text-purple-200 text-sm">Innovate Marketing Co.</div>
          </div>
        </div>
        <p className="text-white/90 text-lg leading-relaxed">
          Nexus AI Labs transformed how we approach A/B testing and personalization. Their AI recommendations are incredibly accurate, and we've reduced our customer acquisition costs by 45% while scaling our campaigns.
        </p>
        <div className="flex mt-6 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Nexus AI Labs <span className="text-purple-400">Pro Plan</span>
      </h2>
      <p className="text-xl text-gray-300">
        Transform your marketing with AI-powered insights
      </p>
    </div>

    {/* Detailed Table Layout */}
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Price Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-purple-200 text-2xl font-semibold line-through">$149</span>
          <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
            LAUNCH OFFER
          </span>
        </div>
        <div className="flex items-baseline justify-center">
          <span className="text-6xl font-bold text-white">$79</span>
          <span className="text-2xl text-purple-200 ml-2">/month</span>
        </div>
        <p className="text-purple-100 mt-3">Billed monthly • Cancel anytime</p>
      </div>

      {/* Features Table */}
      <div className="divide-y divide-gray-200">
        {/* Feature Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Campaign Analytics</h3>
            <p className="text-gray-600">Real-time performance tracking with predictive insights and automated optimization recommendations for all your marketing campaigns.</p>
          </div>
        </div>

        {/* Feature Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Audience Segmentation AI</h3>
            <p className="text-gray-600">Advanced machine learning algorithms identify and segment your target audiences with 95% accuracy for hyper-personalized messaging.</p>
          </div>
        </div>

        {/* Feature Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Content Generation Suite</h3>
            <p className="text-gray-600">Generate high-converting ad copy, email campaigns, and social media content in seconds with Nexus AI Labs' proprietary language models.</p>
          </div>
        </div>

        {/* Feature Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Automated A/B Testing</h3>
            <p className="text-gray-600">Run unlimited split tests simultaneously with AI-powered statistical analysis that identifies winning variations 3x faster than traditional methods.</p>
          </div>
        </div>

        {/* Feature Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">ROI Prediction Engine</h3>
            <p className="text-gray-600">Forecast campaign performance and budget allocation with 89% accuracy using historical data and market trend analysis powered by Nexus AI Labs.</p>
          </div>
        </div>

        {/* Feature Row 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 hover:bg-purple-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Priority Support</h3>
            <p className="text-gray-600">Dedicated account manager, live chat support, and exclusive access to Nexus AI Labs marketing strategy workshops and training resources.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 px-8 py-10">
        <div className="text-center mb-6">
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
          >
            Start Your Free Trial
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="text-gray-600 mt-4 text-sm">14-day free trial • No credit card required</p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-sm font-medium">⚡ Powered by Stripe</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <p className="text-center text-gray-400 mt-8 text-sm">
      Join 5,000+ marketing teams using Nexus AI Labs to scale their campaigns
    </p>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmU1ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
  
  <div className="container mx-auto px-4 py-20 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
      
      {/* Sticky Sidebar */}
      <div className="lg:sticky lg:top-24 space-y-8">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Marketing with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            Join leading brands leveraging Nexus AI Labs to revolutionize their marketing strategies. Let's discuss how we can accelerate your growth.
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 pt-4">
          {[
            { icon: '🚀', text: 'AI-Powered Campaign Optimization' },
            { icon: '📊', text: 'Real-Time Analytics & Insights' },
            { icon: '🎯', text: 'Precision Audience Targeting' },
            { icon: '⚡', text: 'Automated Content Generation' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-3xl">{benefit.icon}</span>
              <span className="text-lg font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-slate-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-2xl font-bold text-white/40">BRAND</div>
            <div className="text-2xl font-bold text-white/40">CORP</div>
            <div className="text-2xl font-bold text-white/40">MEDIA</div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:pt-8">
        <ContactForm />
      </div>
    </div>
  </div>
</section>

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    marketingGoal: '',
    monthlyBudget: '',
    message: ''
  });
  
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          company_name: 'Nexus AI Labs',
          industry: 'marketing',
          submitted_at: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus({
        type: 'success',
        message: '🎉 Thank you! Our AI marketing experts will contact you within 24 hours.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        marketingGoal: '',
        monthlyBudget: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: '❌ Oops! Something went wrong. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">
          Start Your AI Journey
        </h3>
        <p className="text-slate-600">
          Fill out the form and our team will reach out within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
            placeholder="john@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
            placeholder="Your Company"
          />
        </div>

        {/* Marketing Goal */}
        <div>
          <label htmlFor="marketingGoal" className="block text-sm font-semibold text-slate-700 mb-2">
            Primary Marketing Goal
          </label>
          <select
            id="marketingGoal"
            name="marketingGoal"
            value={formData.marketingGoal}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
          >
            <option value="">Select a goal</option>
            <option value="lead-generation">Lead Generation</option>
            <option value="brand-awareness">Brand Awareness</option>
            <option value="customer-retention">Customer Retention</option>
            <option value="conversion-optimization">Conversion Optimization</option>
            <option value="content-marketing">Content Marketing</option>
            <option value="social-media">Social Media Growth</option>
          </select>
        </div>

        {/* Monthly Budget */}
        <div>
          <label htmlFor="monthlyBudget" className="block text-sm font-semibold text-slate-700 mb-2">
            Monthly Marketing Budget
          </label>
          <select
            id="monthlyBudget"
            name="monthlyBudget"
            value={formData.monthlyBudget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-slate-900"
            placeholder="Share your marketing challenges and goals..."
          ></textarea>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {status.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Get Your Free AI Marketing Consultation'
          )}
        </button>

        <p className="text-xs text-slate-500 text-center">
          By submitting this form, you agree to Nexus AI Labs' privacy policy and terms of service.
        </p>
      </form>
    </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
  <div className="container mx-auto px-6 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Side - Company Info & Links */}
      <div className="space-y-8">
        {/* Logo & Description */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Nexus AI Labs
          </h3>
          <p className="text-slate-300 max-w-md leading-relaxed">
            Transforming marketing through artificial intelligence. We deliver cutting-edge AI solutions that drive engagement, optimize campaigns, and maximize ROI.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-cyan-400 transition">AI Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Content Generation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Predictive Marketing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:hello@nexusailabs.com" className="hover:text-cyan-400 transition">hello@nexusailabs.com</a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+15551234567" className="hover:text-cyan-400 transition">+1 (555) 123-4567</a>
          </div>
        </div>
      </div>

      {/* Right Side - Interactive Map */}
      <div className="relative">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
          <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Our Location
          </h4>
          
          {/* Map Placeholder with Grid Pattern */}
          <div className="relative h-64 bg-slate-900 rounded-lg overflow-hidden mb-4">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
                <svg className="w-16 h-16 text-cyan-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-slate-300 text-sm space-y-1">
            <p className="font-semibold text-white">Nexus AI Labs Headquarters</p>
            <p>350 Innovation Drive, Suite 200</p>
            <p>San Francisco, CA 94107</p>
            <p className="text-slate-400 mt-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-slate-700/50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Nexus AI Labs. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 transition">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}