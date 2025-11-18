"use client";

import Link from "next/link";
import { Package, Plane, Ship, FileText, Factory, Warehouse, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Export Services",
    description: "From India to the world - comprehensive export solutions",
    features: ["Documentation", "Quality Check", "Customs Clearance", "Global Shipping"],
    link: "/services/export",
    gradient: "from-maharashtra-saffron to-container-orange",
  },
  {
    icon: TrendingUp,
    title: "Import Services",
    description: "Bringing the world to Maharashtra efficiently",
    features: ["Product Sourcing", "Customs Handling", "Duty Management", "Delivery"],
    link: "/services/import",
    gradient: "from-ocean-blue to-business-navy",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services",
    features: ["Quick Transit", "Secure Handling", "Real-time Tracking", "Global Network"],
    link: "/services/air-freight",
    gradient: "from-sky-blue to-ocean-blue",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping solutions",
    features: ["FCL & LCL", "Port-to-Port", "Competitive Rates", "Container Tracking"],
    link: "/services/sea-freight",
    gradient: "from-business-navy to-steel-gray",
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs brokerage and compliance",
    features: ["30% Faster", "All Documentation", "Duty Calculation", "Compliance"],
    link: "/services/customs",
    gradient: "from-success-green to-premium-gold",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage and distribution services",
    features: ["Secure Facilities", "Inventory Management", "Distribution", "24/7 Access"],
    link: "/services/warehousing",
    gradient: "from-steel-gray to-business-navy",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-steel-gray max-w-3xl mx-auto">
          End-to-end solutions for your global trade needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-steel-gray mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-maharashtra-saffron rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={service.link}
                className="flex items-center text-maharashtra-saffron font-semibold group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-block btn-primary"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
