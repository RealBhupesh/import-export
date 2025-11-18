"use client";

import { Zap, Shield, DollarSign, Users, Globe, Award } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "30% Faster Clearance",
    description: "Our expert customs team and digital documentation system ensures your shipments clear in record time.",
    stats: ["24-48 hours average", "Industry leading speed"],
    color: "text-container-orange",
    bgColor: "bg-container-orange/10",
  },
  {
    icon: Shield,
    title: "100% Secure & Insured",
    description: "Every shipment fully insured and tracked with GPS monitoring and secure packaging.",
    stats: ["Full insurance coverage", "24/7 monitoring"],
    color: "text-ocean-blue",
    bgColor: "bg-ocean-blue/10",
  },
  {
    icon: DollarSign,
    title: "20% Cost Savings",
    description: "Optimized routes, bulk negotiation, and strategic partnerships mean better prices for you.",
    stats: ["Competitive rates", "No hidden charges"],
    color: "text-success-green",
    bgColor: "bg-success-green/10",
  },
  {
    icon: Users,
    title: "Dedicated Relationship Manager",
    description: "Your personal trade expert available 24/7 to handle every detail of your shipments.",
    stats: ["Personal attention", "Expert guidance"],
    color: "text-business-navy",
    bgColor: "bg-business-navy/10",
  },
  {
    icon: Globe,
    title: "150+ Country Network",
    description: "Established partnerships worldwide ensuring smooth customs, local handling, and on-time delivery.",
    stats: ["Global coverage", "Local expertise"],
    color: "text-sky-blue",
    bgColor: "bg-sky-blue/10",
  },
  {
    icon: Award,
    title: "Maharashtra Quality",
    description: "Representing the best of Maharashtra's manufacturing excellence globally.",
    stats: ["ISO certified", "Quality assured"],
    color: "text-maharashtra-saffron",
    bgColor: "bg-maharashtra-saffron/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
          Why Maharashtra Global Trade Hub?
        </h2>
        <p className="text-xl text-steel-gray max-w-3xl mx-auto">
          The Maharashtra Advantage - Combining global standards with local expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => {
          const IconComponent = advantage.icon;
          return (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 transition-all duration-300 hover:border-maharashtra-saffron hover:shadow-xl"
            >
              {/* Icon */}
              <div className={`${advantage.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <IconComponent className={`w-8 h-8 ${advantage.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-steel-gray mb-4 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="space-y-2">
                {advantage.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-1.5 h-1.5 ${advantage.bgColor} rounded-full mr-2`}></div>
                    <span className="text-sm font-medium text-gray-700">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Banner */}
      <div className="mt-16 bg-gradient-to-r from-maharashtra-saffron to-ocean-blue rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          Trusted by 500+ Businesses Worldwide
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Join the growing family of successful exporters and importers
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          <div>
            <div className="text-4xl font-bold mb-2">4.9/5.0</div>
            <div className="text-sm opacity-90">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.8%</div>
            <div className="text-sm opacity-90">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
