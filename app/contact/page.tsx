"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Globe, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you within 2 hours.");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-ocean-blue to-business-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
            Get in Touch
          </h1>
          <p className="text-xl opacity-90">
            Let's discuss how we can help grow your business globally
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              {/* Head Office */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-maharashtra-saffron" />
                  Head Office
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Trade Center<br />
                  Nashik - 422001<br />
                  Maharashtra, India
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-steel-gray">Phone</div>
                      <a href="tel:+919876543210" className="font-semibold text-gray-900 hover:text-maharashtra-saffron">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-maharashtra-saffron/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-maharashtra-saffron" />
                    </div>
                    <div>
                      <div className="text-sm text-steel-gray">Email</div>
                      <a href="mailto:info@maharashtratrade.com" className="font-semibold text-gray-900 hover:text-maharashtra-saffron">
                        info@maharashtratrade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-success-green" />
                    </div>
                    <div>
                      <div className="text-sm text-steel-gray">Website</div>
                      <a href="https://www.maharashtratrade.com" className="font-semibold text-gray-900 hover:text-maharashtra-saffron">
                        www.maharashtratrade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-premium-gold/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-premium-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-steel-gray">Working Hours</div>
                      <div className="font-semibold text-gray-900">
                        24/7 Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Branch Offices
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">Mumbai</div>
                    <div className="text-steel-gray">Andheri East</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pune</div>
                    <div className="text-steel-gray">Hinjewadi</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Aurangabad</div>
                    <div className="text-steel-gray">MIDC</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Nagpur</div>
                    <div className="text-steel-gray">Civil Lines</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    International Offices
                  </h4>
                  <div className="text-sm text-steel-gray">
                    Dubai • Singapore • Hamburg • New York
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all"
                    >
                      <option value="">Select service</option>
                      <option value="export">Export Services</option>
                      <option value="import">Import Services</option>
                      <option value="air">Air Freight</option>
                      <option value="sea">Sea Freight</option>
                      <option value="customs">Customs Clearance</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-sm text-center text-steel-gray">
                    We'll respond within 2 hours during business hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-200 h-96 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
          <p className="text-sm text-gray-500">Visit us at 123 Trade Center, Nashik</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
