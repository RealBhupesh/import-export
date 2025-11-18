"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Package, Ship, Plane, FileText, CheckCircle, TrendingUp,
  Globe, Shield, Clock, DollarSign, Award, ArrowRight, Upload,
  Download, Phone
} from "lucide-react";
import Link from "next/link";

export default function ExportServicesPage() {
  const [bookingStep, setBookingStep] = useState(0);
  const [formData, setFormData] = useState({
    productType: "",
    hsCode: "",
    quantity: "",
    destination: "",
    frequency: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleBooking = () => {
    alert("Booking request submitted! Our team will contact you within 2 hours.");
    setBookingStep(0);
    setFormData({
      productType: "", hsCode: "", quantity: "", destination: "",
      frequency: "", name: "", email: "", phone: ""
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-maharashtra-saffron via-container-orange to-premium-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 Export Services
              </div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
                Take "Made in Maharashtra" to the World
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Comprehensive export solutions from documentation to delivery.
                We handle everything so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setBookingStep(1)}
                  className="bg-white text-maharashtra-saffron px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Package className="w-5 h-5" />
                  Start Exporting Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+919876543210"
                  className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-maharashtra-saffron transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Expert Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Export With Us?</h3>
                <ul className="space-y-4">
                  {[
                    "30% Faster Customs Clearance",
                    "End-to-End Documentation",
                    "150+ Country Network",
                    "Competitive Freight Rates",
                    "Quality Inspection & Packaging",
                    "Real-time Tracking",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
            Complete Export Process
          </h2>
          <p className="text-xl text-steel-gray">
            From inquiry to delivery - we handle every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FileText,
              title: "Documentation",
              steps: ["IEC Verification", "Commercial Invoice", "Packing List", "Certificate of Origin", "Export License"],
              color: "ocean-blue"
            },
            {
              icon: CheckCircle,
              title: "Quality Check",
              steps: ["Product Inspection", "Photo/Video Proof", "Quality Certificate", "Compliance Check", "Pre-shipment Test"],
              color: "success-green"
            },
            {
              icon: Package,
              title: "Packaging & Loading",
              steps: ["Professional Packaging", "Container Selection", "Stuffing & Loading", "Seal & Lock", "Documentation Photos"],
              color: "container-orange"
            },
            {
              icon: Ship,
              title: "Shipping & Delivery",
              steps: ["Customs Clearance", "Vessel Booking", "GPS Tracking", "Destination Handling", "Final Delivery"],
              color: "business-navy"
            }
          ].map((process, idx) => {
            const IconComponent = process.icon;
            return (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className={`w-16 h-16 bg-${process.color}/10 rounded-full flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-8 h-8 text-${process.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <ul className="space-y-2">
                  {process.steps.map((step, sidx) => (
                    <li key={sidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 bg-${process.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products We Export */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Products We Export from Maharashtra
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: "Agricultural Products", items: ["Onions", "Grapes", "Pomegranates", "Rice", "Spices"], icon: "🌾", destinations: "UAE, UK, USA" },
            { category: "Textiles & Garments", items: ["Cotton Fabrics", "Sarees", "Ready-made Garments", "Home Textiles"], icon: "👕", destinations: "Europe, USA, Canada" },
            { category: "Wine & Beverages", items: ["Nashik Wine", "Fruit Juice", "Processed Foods"], icon: "🍷", destinations: "Europe, Asia, Australia" },
            { category: "Auto Components", items: ["Engine Parts", "Transmission Parts", "Electrical Parts"], icon: "⚙️", destinations: "USA, Germany, Japan" },
            { category: "Pharmaceuticals", items: ["Generic Medicines", "APIs", "Medical Equipment"], icon: "💊", destinations: "Africa, Asia, Latin America" },
            { category: "Engineering Goods", items: ["Machinery", "Tools", "Equipment", "Industrial Parts"], icon: "🔧", destinations: "Middle East, Africa, Asia" },
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-maharashtra-saffron">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.category}</h3>
              <ul className="space-y-2 mb-4">
                {product.items.map((item, iidx) => (
                  <li key={iidx} className="text-sm text-gray-700 flex items-center gap-2">
                    <div className="w-1 h-1 bg-maharashtra-saffron rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-steel-gray">
                <strong>Top Destinations:</strong> {product.destinations}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Benefits */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Government Benefits & Incentives
            </h2>
            <p className="text-lg text-steel-gray mb-8">
              We help you maximize benefits from government export schemes
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "RoDTEP / MEIS Benefits",
                  desc: "Claim duty remission on exported products",
                  value: "Up to 5%"
                },
                {
                  title: "Duty Drawback",
                  desc: "Refund of customs duties paid on imported inputs",
                  value: "2-10%"
                },
                {
                  title: "Export Credit",
                  desc: "Lower interest rates on export financing",
                  value: "4-6%"
                },
                {
                  title: "ECGC Insurance",
                  desc: "Protection against payment defaults",
                  value: "90%+ Cover"
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-success-green" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-steel-gray mb-2">{benefit.desc}</p>
                    <div className="text-xs font-semibold text-success-green">{benefit.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-maharashtra-saffron to-ocean-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Export Success Calculator</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Product Value (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg text-gray-900"
                  placeholder="Enter product value"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Destination Country</label>
                <select className="w-full px-4 py-3 rounded-lg text-gray-900">
                  <option>Select country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>UAE</option>
                  <option>Germany</option>
                </select>
              </div>
              <button className="w-full bg-white text-maharashtra-saffron py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Calculate Profit Margin
              </button>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-sm mb-1">Estimated Net Profit</div>
                <div className="text-3xl font-bold">₹ —</div>
                <div className="text-xs mt-2 opacity-80">After all costs & benefits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Wizard Modal */}
      {bookingStep > 0 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Export Service - Step {bookingStep}/2
                </h3>
                <button
                  onClick={() => setBookingStep(0)}
                  className="text-gray-400 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-maharashtra-saffron to-ocean-blue transition-all"
                    style={{ width: `${(bookingStep / 2) * 100}%` }}
                  ></div>
                </div>
              </div>

              {bookingStep === 1 && (
                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Product & Shipping Details</h4>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Type</label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    >
                      <option value="">Select product category</option>
                      <option value="agricultural">Agricultural Products</option>
                      <option value="textiles">Textiles & Garments</option>
                      <option value="wine">Wine & Beverages</option>
                      <option value="auto">Auto Components</option>
                      <option value="pharma">Pharmaceuticals</option>
                      <option value="engineering">Engineering Goods</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">HS Code (if known)</label>
                    <input
                      type="text"
                      value={formData.hsCode}
                      onChange={(e) => setFormData({ ...formData, hsCode: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                      placeholder="e.g., 0703.10"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity (kg/units)</label>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Destination Country</label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                        placeholder="e.g., USA"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Export Frequency</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["One-time", "Regular", "Seasonal"].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setFormData({ ...formData, frequency: freq })}
                          className={`px-4 py-3 rounded-lg border-2 transition-all ${
                            formData.frequency === freq
                              ? "border-ocean-blue bg-ocean-blue/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setBookingStep(2)}
                    className="w-full bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue to Contact Details →
                  </button>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Your Contact Information</h4>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Order Summary</h5>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>Product: {formData.productType || "—"}</div>
                      <div>Quantity: {formData.quantity || "—"}</div>
                      <div>Destination: {formData.destination || "—"}</div>
                      <div>Frequency: {formData.frequency || "—"}</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleBooking}
                      className="flex-1 bg-gradient-to-r from-success-green to-ocean-blue text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Submit Booking Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Download Resources */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Free Export Resources
          </h2>
          <p className="text-steel-gray">Download helpful guides and documents</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Export Checklist", desc: "Complete step-by-step checklist", icon: CheckCircle },
            { title: "Document Templates", desc: "All required export documents", icon: FileText },
            { title: "HS Code Finder", desc: "Find your product HS code", icon: Globe }
          ].map((resource, idx) => {
            const IconComponent = resource.icon;
            return (
              <button
                key={idx}
                className="bg-white p-6 rounded-xl hover:shadow-xl transition-all text-left group"
              >
                <IconComponent className="w-10 h-10 text-ocean-blue mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-steel-gray mb-4">{resource.desc}</p>
                <div className="flex items-center gap-2 text-ocean-blue font-semibold group-hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Download PDF
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
