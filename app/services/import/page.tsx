"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Package, Globe, TrendingDown, Shield, Search, FileText,
  Calculator, CheckCircle, AlertCircle, Upload, Download
} from "lucide-react";

export default function ImportServicesPage() {
  const [dutyCalculator, setDutyCalculator] = useState({
    productValue: "",
    hsCode: "",
    country: "",
    result: null as any
  });

  const calculateDuty = () => {
    const value = parseFloat(dutyCalculator.productValue);
    const bcd = value * 0.10; // 10% Basic Customs Duty (example)
    const swc = bcd * 0.10; // 10% Social Welfare Surcharge
    const igst = (value + bcd + swc) * 0.18; // 18% IGST
    const total = bcd + swc + igst;

    setDutyCalculator({
      ...dutyCalculator,
      result: {
        bcd: bcd.toFixed(2),
        swc: swc.toFixed(2),
        igst: igst.toFixed(2),
        total: total.toFixed(2),
        landedCost: (value + total).toFixed(2)
      }
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-ocean-blue via-business-navy to-sky-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📦 Import Services
              </div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
                Bringing the World to Maharashtra
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Complete import solutions including product sourcing, customs clearance,
                and door-to-door delivery from 150+ countries.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Product Sourcing",
                  "Customs Handling",
                  "Duty Management",
                  "Door Delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#sourcing-form"
                className="inline-block bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Request Product Sourcing
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">What Can We Import for You?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏭", name: "Machinery" },
                  { icon: "📱", name: "Electronics" },
                  { icon: "🔬", name: "Raw Materials" },
                  { icon: "🛢️", name: "Energy Products" },
                  { icon: "🍽️", name: "Food Products" },
                  { icon: "💊", name: "Medicines" },
                ].map((cat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-ocean-blue/10 transition-all cursor-pointer">
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <div className="text-sm font-semibold">{cat.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Process */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hassle-Free Import Process
          </h2>
          <p className="text-xl text-steel-gray">
            We handle everything from sourcing to your doorstep
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {[
            {
              step: 1,
              title: "Product Sourcing & Verification",
              desc: "We identify reliable suppliers worldwide and verify product quality",
              tasks: ["Supplier identification", "Price negotiation", "Quality verification", "Sample testing"],
              timeline: "3-7 days",
              color: "sky-blue"
            },
            {
              step: 2,
              title: "Documentation & Compliance",
              desc: "Handle all import paperwork and regulatory compliance",
              tasks: ["IEC verification", "Import license", "Bill of Entry", "SCOMET clearance"],
              timeline: "2-3 days",
              color: "ocean-blue"
            },
            {
              step: 3,
              title: "Shipping Coordination",
              desc: "Book cargo space and arrange insurance",
              tasks: ["Freight booking", "Insurance", "Shipping tracking", "Port coordination"],
              timeline: "15-45 days",
              color: "business-navy"
            },
            {
              step: 4,
              title: "Customs Clearance",
              desc: "Expert handling of Indian customs procedures",
              tasks: ["Document submission", "Duty calculation", "Assessment", "OOC release"],
              timeline: "24-48 hours",
              color: "maharashtra-saffron"
            },
            {
              step: 5,
              title: "Last Mile Delivery",
              desc: "From port to your warehouse",
              tasks: ["Container de-stuffing", "Storage (if needed)", "Transport", "Delivery confirmation"],
              timeline: "1-3 days",
              color: "success-green"
            }
          ].map((process) => (
            <div key={process.step} className="flex gap-6 items-start">
              <div className={`flex-shrink-0 w-16 h-16 bg-${process.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                {process.step}
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                    <p className="text-steel-gray mt-1">{process.desc}</p>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {process.timeline}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {process.tasks.map((task, tidx) => (
                    <span key={tidx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Duty Calculator */}
      <section id="duty-calculator" className="section-container bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-ocean-blue mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Import Duty Calculator
            </h2>
            <p className="text-xl text-steel-gray">
              Calculate estimated import duties and taxes instantly
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Value (₹) *
                </label>
                <input
                  type="number"
                  value={dutyCalculator.productValue}
                  onChange={(e) => setDutyCalculator({ ...dutyCalculator, productValue: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                  placeholder="Enter FOB value"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  HS Code (Optional)
                </label>
                <input
                  type="text"
                  value={dutyCalculator.hsCode}
                  onChange={(e) => setDutyCalculator({ ...dutyCalculator, hsCode: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                  placeholder="e.g., 8471.30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Origin Country *
                </label>
                <select
                  value={dutyCalculator.country}
                  onChange={(e) => setDutyCalculator({ ...dutyCalculator, country: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                >
                  <option value="">Select country</option>
                  <option value="china">China</option>
                  <option value="usa">USA</option>
                  <option value="germany">Germany</option>
                  <option value="japan">Japan</option>
                  <option value="uae">UAE</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateDuty}
              className="w-full bg-gradient-to-r from-ocean-blue to-business-navy text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all mb-6"
            >
              Calculate Duties & Taxes
            </button>

            {dutyCalculator.result && (
              <div className="bg-gray-50 rounded-xl p-6 space-y-4 animate-slide-up">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Calculation Result</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Basic Customs Duty (BCD):</span>
                    <span className="font-semibold">₹ {dutyCalculator.result.bcd}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Social Welfare Surcharge (SWC):</span>
                    <span className="font-semibold">₹ {dutyCalculator.result.swc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">IGST (18%):</span>
                    <span className="font-semibold">₹ {dutyCalculator.result.igst}</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3 flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Total Duties & Taxes:</span>
                    <span className="font-bold text-ocean-blue">₹ {dutyCalculator.result.total}</span>
                  </div>
                  <div className="bg-ocean-blue/10 rounded-lg p-4 flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Landed Cost:</span>
                    <span className="font-bold text-ocean-blue">₹ {dutyCalculator.result.landedCost}</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      This is an estimated calculation. Actual duties may vary based on product
                      category, origin, and current regulations. Contact us for accurate assessment.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Sourcing Form */}
      <section id="sourcing-form" className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Search className="w-16 h-16 text-maharashtra-saffron mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Sourcing Request
            </h2>
            <p className="text-xl text-steel-gray">
              Can't find what you need? We'll source it for you globally
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name/Description *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                  placeholder="e.g., Industrial CNC Machine"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Category
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none">
                    <option>Select category</option>
                    <option>Machinery & Equipment</option>
                    <option>Electronics & IT</option>
                    <option>Raw Materials</option>
                    <option>Chemicals</option>
                    <option>Food Products</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="e.g., 5 units"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Detailed Specifications/Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none resize-none"
                  placeholder="Describe your requirements in detail..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range (₹)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Min budget"
                  />
                  <input
                    type="number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Max budget"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Attach Reference (Specs/Drawing/Photo)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-ocean-blue transition-all cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, Images, CAD files (Max 10MB)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
              >
                Submit Sourcing Request
              </button>

              <p className="text-sm text-center text-steel-gray">
                We'll send you 3-5 vetted supplier options within 2-3 business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Import from Top Countries */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Import from Top Countries
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { country: "China", flag: "🇨🇳", popular: "Electronics, Machinery" },
            { country: "USA", flag: "🇺🇸", popular: "High-tech, Aircraft" },
            { country: "Germany", flag: "🇩🇪", popular: "Machinery, Auto" },
            { country: "Japan", flag: "🇯🇵", popular: "Electronics, Auto" },
            { country: "UAE", flag: "🇦🇪", popular: "Gold, Electronics" },
            { country: "UK", flag: "🇬🇧", popular: "Machinery, Pharma" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer">
              <div className="text-5xl mb-3">{item.flag}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.country}</h3>
              <p className="text-xs text-steel-gray">{item.popular}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
