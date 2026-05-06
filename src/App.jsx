import React from 'react'
import heroBg from './assets/hero-bg.png'

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient" style={{ 
        backgroundImage: `url(${heroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: 0.4 
      }}></div>
      <div className="bg-gradient" style={{ zIndex: -2 }}></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            ABM<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </div>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span> of Web
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A premium starting point for your next big idea. Optimized for speed, 
            designed for elegance, and built with React & Vite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="btn-primary">Launch Project</button>
            <button className="px-8 py-3 rounded-xl glass glass-hover font-semibold transition-all">
              Documentation
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Lightning Fast', desc: 'Vite-powered build system ensures your development experience is near-instant.' },
            { title: 'Premium Design', desc: 'Modern aesthetics with glassmorphism and smooth animations out of the box.' },
            { title: 'Production Ready', desc: 'Pre-configured for optimal performance and scalable architecture.' }
          ].map((feature, i) => (
            <div key={i} className="glass glass-hover p-8 rounded-2xl animate-fade-in" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-text-muted text-sm">
          &copy; 2026 ABM Studio. Built with Antigravity.
        </div>
      </footer>
    </div>
  )
}

export default App
