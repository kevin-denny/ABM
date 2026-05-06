import React, { useState } from 'react'
import heroImg from './assets/hero.png'
import disinfectantImg from './assets/disinfectants.png'
import carCareImg from './assets/car-care.png'
import hygieneImg from './assets/personal-hygiene.png'

function App() {
  const [activeTab, setActiveTab] = useState('All')

  const products = [
    { id: 1, name: 'Medical Grade Disinfectant', category: 'Disinfectants', image: disinfectantImg, desc: 'High-potency surface sanitizer.' },
    { id: 2, name: 'Premium Car Shampoo', category: 'Car Care', image: carCareImg, desc: 'Ph-neutral foam for ultimate shine.' },
    { id: 3, name: 'Antibacterial Hand Wash', category: 'Personal Hygiene', image: hygieneImg, desc: 'Gentle on skin, tough on germs.' },
    { id: 4, name: 'Industrial Floor Cleaner', category: 'Disinfectants', image: disinfectantImg, desc: 'Heavy-duty grime removal.' },
    { id: 5, name: 'Wheel & Rim Shine', category: 'Car Care', image: carCareImg, desc: 'Deep cleaning for alloy wheels.' },
    { id: 6, name: 'Luxury Liquid Soap', category: 'Personal Hygiene', image: hygieneImg, desc: 'Floral scented moisturizing soap.' }
  ]

  const filteredProducts = activeTab === 'All' ? products : products.filter(p => p.category === activeTab)

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass-nav">
        <div className="container nav-container">
          <div className="nav-brand">
            <img src="/logo.jpeg" alt="ABM Logo" className="nav-logo" />
            <span className="nav-title">ABM INDUSTRIES</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn btn-primary nav-cta">Inquire Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-bg-wrapper">
          <img src={heroImg} alt="Hero" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content animate-up">
          <div className="hero-text-box">
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
      </header>

      {/* About Section */}
      <section id="about" className="section-padding bg-subtle">
        <div className="container">
          <div className="about-grid">
            <div className="about-text animate-up">
              <h2 className="section-title">Delivering Quality & Innovation</h2>
              <p className="section-desc text-muted">
                At ABM Industries, our mission is to deliver high-quality cleaning solutions 
                that prioritize safety and hygiene. We focus on innovation to create 
                formulations that are both effective and environmentally conscious.
              </p>
              <div className="about-cards">
                <div className="card feature-card border-primary">
                  <h4 className="feature-title">Our Mission</h4>
                  <p className="feature-desc text-muted">High-quality cleaning solutions for everyone.</p>
                </div>
                <div className="card feature-card border-accent">
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
          <div className="section-header text-center">
            <h2 className="section-title">Our Product Range</h2>
            <p className="section-desc text-muted max-w-2xl mx-auto">
              From industrial-grade disinfectants to premium personal care, explore our range of solutions.
            </p>
          </div>

          <div className="products-filters flex justify-center gap-4 mb-12 flex-wrap">
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
            {filteredProducts.map(product => (
              <div key={product.id} className="card product-card">
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
          <div className="section-header text-center">
            <h2 className="section-title text-white">Why Choose ABM Industries?</h2>
            <p className="section-desc text-muted-light max-w-2xl mx-auto">
              We stand by our commitment to quality, safety, and affordability.
            </p>
          </div>

          <div className="why-grid">
            {[
              { title: 'Quality Formulations', desc: 'Expertly crafted for maximum efficacy.' },
              { title: 'Safe & Effective', desc: 'Rigorous testing for your safety.' },
              { title: 'Affordable Pricing', desc: 'Premium quality at competitive rates.' },
              { title: 'Trusted Globally', desc: 'Partnered with leading industries.' }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon-wrapper">
                  <span className="why-icon-number">{i+1}</span>
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
          <div className="card contact-card mx-auto max-w-4xl">
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
            <div className="contact-newsletter-panel bg-primary">
              <h3 className="newsletter-title text-white">Newsletter</h3>
              <p className="newsletter-desc">
                Stay updated with our latest hygiene innovations and offers.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="newsletter-input" 
                />
                <button className="btn newsletter-btn">Subscribe</button>
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
