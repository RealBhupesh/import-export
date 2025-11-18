"use client";

import { MessageCircle, FileText, CheckCircle, Package, Plane, Truck, Check } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Inquiry",
    description: "Share your requirements and get instant quote",
    details: ["Same day response", "Free consultation", "Expert guidance"],
    timeline: "Same day",
    color: "bg-sky-blue",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "We handle all paperwork and compliance",
    details: ["Licenses & permits", "Digital processing", "Compliance check"],
    timeline: "1-2 days",
    color: "bg-ocean-blue",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Product inspection and quality assurance",
    details: ["Inspection", "Photo/video proof", "Quality certification"],
    timeline: "1-3 days",
    color: "bg-success-green",
  },
  {
    icon: Package,
    title: "Packaging & Loading",
    description: "Professional packaging and container loading",
    details: ["Secure packaging", "Container stuffing", "Pre-shipment photos"],
    timeline: "2-4 days",
    color: "bg-container-orange",
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs handling and clearance",
    details: ["30% faster", "All duties managed", "Real-time updates"],
    timeline: "24-48 hours",
    color: "bg-maharashtra-saffron",
  },
  {
    icon: Plane,
    title: "Shipping",
    description: "Sea or air freight with GPS tracking",
    details: ["GPS tracking", "Insurance coverage", "Regular updates"],
    timeline: "15-45 days",
    color: "bg-business-navy",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Last-mile delivery to your destination",
    details: ["Final delivery", "Destination clearance", "Proof of delivery"],
    timeline: "1-3 days",
    color: "bg-premium-gold",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-steel-gray max-w-3xl mx-auto">
          From inquiry to delivery - Simple, fast, reliable
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative">
              {/* Connector Line */}
              {!isLast && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-maharashtra-saffron to-ocean-blue opacity-30"></div>
              )}

              {/* Step Card */}
              <div className="relative flex gap-6 mb-8">
                {/* Icon Circle */}
                <div className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm font-semibold text-maharashtra-saffron mb-1">
                        STEP {index + 1}
                      </div>
                      <h3 className="text-2xl font-montserrat font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {step.timeline}
                    </div>
                  </div>

                  <p className="text-steel-gray mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-success-green mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total Timeline */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-gradient-to-r from-success-green to-ocean-blue text-white px-8 py-4 rounded-full">
          <div className="text-sm mb-1">Total Time (Typical)</div>
          <div className="text-2xl font-bold">25-60 days</div>
        </div>
        <div className="mt-8">
          <a href="/quote" className="btn-primary">
            Start Your Shipment Today
          </a>
        </div>
      </div>
    </section>
  );
}
