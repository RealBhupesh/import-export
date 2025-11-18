"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, Plane, Ship, Package, ArrowRight } from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    serviceType: "export",
    shippingMode: "sea-fcl",
    origin: "Nashik, Maharashtra, India",
    destination: "",
    containerType: "20ft",
    weight: "",
    cargoValue: "",
  });

  const [quote, setQuote] = useState<any>(null);

  const handleCalculate = () => {
    // Simulate quote calculation
    const baseRates: any = {
      "sea-fcl": 85000,
      "sea-lcl": 45000,
      "air": 150000,
      "express": 200000,
    };

    const oceanFreight = baseRates[formData.shippingMode];
    const originCharges = 12000;
    const customsClearance = 8000;
    const destinationCharges = 15000;
    const insurance = parseInt(formData.cargoValue) * 0.02 || 4000;
    const documentation = 3000;
    const total = oceanFreight + originCharges + customsClearance + destinationCharges + insurance + documentation;

    setQuote({
      oceanFreight,
      originCharges,
      customsClearance,
      destinationCharges,
      insurance,
      documentation,
      total,
      transitTime: formData.shippingMode.startsWith("sea") ? "28-32 days" : "3-7 days",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-maharashtra-saffron to-ocean-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Calculator className="w-20 h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
            Instant Quote Calculator
          </h1>
          <p className="text-xl opacity-90">
            Get shipping estimate in 30 seconds - Free and instant
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Step 1: Service Type */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Service Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, serviceType: "export" })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.serviceType === "export"
                      ? "border-maharashtra-saffron bg-maharashtra-saffron/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-lg">Export</div>
                  <div className="text-sm text-steel-gray">From India to World</div>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, serviceType: "import" })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.serviceType === "import"
                      ? "border-ocean-blue bg-ocean-blue/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-lg">Import</div>
                  <div className="text-sm text-steel-gray">From World to India</div>
                </button>
              </div>
            </div>

            {/* Step 2: Shipping Mode */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Shipping Mode</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "sea-fcl", icon: Ship, label: "Sea FCL", desc: "Full Container" },
                  { id: "sea-lcl", icon: Ship, label: "Sea LCL", desc: "Less Container" },
                  { id: "air", icon: Plane, label: "Air Freight", desc: "Fast Delivery" },
                  { id: "express", icon: Package, label: "Express", desc: "Fastest" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setFormData({ ...formData, shippingMode: mode.id })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.shippingMode === mode.id
                        ? "border-ocean-blue bg-ocean-blue/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <mode.icon className="w-8 h-8 mx-auto mb-2 text-ocean-blue" />
                    <div className="font-semibold text-sm">{mode.label}</div>
                    <div className="text-xs text-steel-gray">{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Route */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Route</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Origin city/port"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="Destination city/port"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Cargo Details */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Cargo Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {formData.shippingMode === "sea-fcl" ? (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Container Type</label>
                    <select
                      value={formData.containerType}
                      onChange={(e) => setFormData({ ...formData, containerType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    >
                      <option value="20ft">20ft Container</option>
                      <option value="40ft">40ft Container</option>
                      <option value="40ft-hc">40ft High Cube</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                      placeholder="Enter weight"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Value (₹)</label>
                  <input
                    type="number"
                    value={formData.cargoValue}
                    onChange={(e) => setFormData({ ...formData, cargoValue: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ocean-blue outline-none"
                    placeholder="For insurance"
                  />
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-6 h-6" />
              Calculate Quote
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Quote Result */}
          {quote && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mt-8 animate-slide-up">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Your Estimated Quote
              </h3>

              <div className="space-y-4 mb-6">
                <QuoteLineItem label="Ocean Freight" amount={quote.oceanFreight} />
                <QuoteLineItem label="Origin Charges" amount={quote.originCharges} />
                <QuoteLineItem label="Customs Clearance" amount={quote.customsClearance} />
                <QuoteLineItem label="Destination Charges" amount={quote.destinationCharges} />
                <QuoteLineItem label="Insurance (2%)" amount={quote.insurance} />
                <QuoteLineItem label="Documentation" amount={quote.documentation} />
              </div>

              <div className="border-t-2 border-gray-200 pt-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">Total Estimate</span>
                  <span className="text-3xl font-bold text-maharashtra-saffron">
                    ₹ {quote.total.toLocaleString()}
                  </span>
                </div>
                <div className="text-center mt-4 text-steel-gray">
                  Transit Time: {quote.transitTime}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  ⚠️ This is an estimated quote. Final pricing subject to actual shipment details and market rates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-success-green to-ocean-blue text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Email Quote
                </button>
                <button className="flex-1 bg-gradient-to-r from-maharashtra-saffron to-container-orange text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Book Shipment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function QuoteLineItem({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-gray-900">₹ {amount.toLocaleString()}</span>
    </div>
  );
}
