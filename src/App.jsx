import React, { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import disinfectantImg from './assets/disinfectants.png'
import carCareImg from './assets/car-care.png'
import hygieneImg from './assets/personal-hygiene.png'

function App() {
  const [activeTab, setActiveTab] = useState('All')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const products = [
    { id: 1, name: 'Medical Grade Disinfectant', category: 'Disinfectants', image: disinfectantImg, desc: 'High-potency surface sanitizer.' },
    { id: 2, name: 'Premium Car Shampoo', category: 'Car Care', image: carCareImg, desc: 'Ph-neutral foam for ultimate shine.' },
    { id: 3, name: 'Antibacterial Hand Wash', category: 'Personal Hygiene', image: hygieneImg, desc: 'Gentle on skin, tough on germs.' },
    { id: 4, name: 'Industrial Floor Cleaner', category: 'Disinfectants', image: disinfectantImg, desc: 'Heavy-duty grime removal.' },
    { id: 5, name: 'Wheel & Rim Shine', category: 'Car Care', image: carCareImg, desc: 'Deep cleaning for alloy wheels.' },
    { id: 6, name: 'Luxury Liquid Soap', category: 'Personal Hygiene', image: hygieneImg, desc: 'Floral scented moisturizing soap.' }
  ]

  const filteredProducts = activeTab === 'All' ? products : products.filter(p => p.category === activeTab)

  // Intersection Observer for scroll animations
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass-nav">
        <div className="container nav-container">
          <div className="nav-brand">
            <img src="/logo.jpeg" alt="ABM Logo" className="nav-logo" />
            <span className="nav-title">ABM INDUSTRIES</span>
          </div>
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#products" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#why-us" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            {/* <button className="btn btn-primary nav-cta mobile-only">Inquire Now</button> */}
          </div>
          <div className="nav-right">
            {/* <button className="btn btn-primary nav-cta desktop-only">Inquire Now</button> */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-bg-wrapper">
          <img src={heroImg} alt="Hero" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content reveal">
          <div className="hero-text-box relative">

            <div className="relative z-10">
              <span className="badge">Pioneering Hygiene Solutions</span>
              <h1 className="hero-title">
                Powering <span className="text-primary">Clean, Safe,</span> and Fresh Environments
              </h1>
              <p className="hero-subtitle text-muted">
                ABM Industries specializes in high-performance cleaning and hygiene solutions
                for commercial and household use. Trust the experts in cleanliness.
              </p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">Shop Products</a>
                <a href="#contact" className="btn btn-outline">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding bg-subtle">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">Delivering Quality & Innovation</h2>
              <p className="section-desc text-muted">
                At ABM Industries, our mission is to deliver high-quality cleaning solutions
                that prioritize safety and hygiene. We focus on innovation to create
                formulations that are both effective and environmentally conscious.
              </p>
              <div className="about-cards">
                <div className="card feature-card border-primary">
                  <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h4 className="feature-title">Our Mission</h4>
                  <p className="feature-desc text-muted">High-quality cleaning solutions for everyone.</p>
                </div>
                <div className="card feature-card border-accent">
                  <div style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20M17 5l-10 14M15 22V2M5 17l14-10"></path></svg>
                  </div>
                  <h4 className="feature-title">Our Vision</h4>
                  <p className="feature-desc text-muted">Leading the way to cleaner, safer environments.</p>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img src={heroImg} alt="About Us" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="section-title">Our Product Range</h2>
            <p className="section-desc text-muted max-w-2xl mx-auto">
              From industrial-grade disinfectants to premium personal care, explore our range of solutions.
            </p>
          </div>

          <div className="products-filters flex justify-center gap-4 mb-12 flex-wrap reveal delay-100">
            {['All', 'Disinfectants', 'Car Care', 'Personal Hygiene'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn filter-btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className={`card product-card reveal delay-${(idx % 3) * 100}`}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category text-primary">{product.category}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc text-muted">{product.desc}</p>
                  <button className="product-link text-primary">Learn More &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="section-title text-white">Why Choose ABM Industries?</h2>
            <p className="section-desc text-muted-light max-w-2xl mx-auto">
              We stand by our commitment to quality, safety, and affordability.
            </p>
          </div>

          <div className="why-grid">
            {[
              { title: 'Quality Formulations', desc: 'Expertly crafted for maximum efficacy.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> },
              { title: 'Safe & Effective', desc: 'Rigorous testing for your safety.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
              { title: 'Affordable Pricing', desc: 'Premium quality at competitive rates.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
              { title: 'Trusted Globally', desc: 'Partnered with leading industries.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> }
            ].map((item, i) => (
              <div key={i} className={`why-card reveal delay-${i * 100}`}>
                <div className="why-icon-wrapper">
                  <span className="why-icon-number">{item.icon}</span>
                </div>
                <h4 className="why-title">{item.title}</h4>
                <p className="why-desc text-muted-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-subtle">
        <div className="container">
          <div className="card contact-card mx-auto max-w-4xl reveal">
            <div className="contact-info-panel">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-desc text-muted">
                Have questions about our products or need a bulk quote? We're here to help.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon text-primary">📞</div>
                  <div>
                    <div className="contact-label font-bold">Phone</div>
                    <div className="contact-value text-muted">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon text-primary">✉️</div>
                  <div>
                    <div className="contact-label font-bold">Email</div>
                    <div className="contact-value text-muted">contact@abm-industries.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer border-t border-border">
        <div className="container footer-container">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="Logo" className="footer-logo" />
            <span className="footer-title font-bold">ABM INDUSTRIES</span>
          </div>
          <div className="footer-links text-muted">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Sitemap</a>
          </div>
          <div className="footer-copy text-muted">
            &copy; 2026 ABM Industries. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
