import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Globe, TrendingUp, Target, Heart, Briefcase, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-business-navy to-ocean-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
            About Maharashtra Global Trade Hub
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Your trusted partner in international trade since 2010, connecting Maharashtra's excellence to the world
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2010, Maharashtra Global Trade Hub started with a simple mission: to make international
              trade accessible and efficient for businesses across Maharashtra. What began as a small export
              consultancy has grown into a comprehensive import-export powerhouse serving 500+ clients worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Today, we pride ourselves on being more than just a logistics provider. We're your strategic partner
              in global trade, offering end-to-end solutions from product sourcing to final delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of 50+ trade experts brings decades of combined experience, helping businesses navigate
              the complexities of international trade with confidence and ease.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-maharashtra-saffron/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-maharashtra-saffron mb-2">15+</div>
              <div className="text-gray-700 font-semibold">Years in Business</div>
            </div>
            <div className="bg-ocean-blue/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-ocean-blue mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Happy Clients</div>
            </div>
            <div className="bg-success-green/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-success-green mb-2">152</div>
              <div className="text-gray-700 font-semibold">Countries Served</div>
            </div>
            <div className="bg-premium-gold/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-premium-gold mb-2">10K+</div>
              <div className="text-gray-700 font-semibold">Shipments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
            <Target className="w-12 h-12 text-maharashtra-saffron mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses across Maharashtra with seamless access to global markets through
              reliable, efficient, and cost-effective trade solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
            <Globe className="w-12 h-12 text-ocean-blue mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India's most trusted import-export partner, setting new standards in service quality,
              innovation, and customer satisfaction by 2030.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
            <Heart className="w-12 h-12 text-success-green mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-success-green rounded-full"></div>
                Integrity & Transparency
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-success-green rounded-full"></div>
                Customer First Approach
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-success-green rounded-full"></div>
                Innovation & Excellence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-steel-gray">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Rajesh Deshmukh", role: "Founder & CEO", expertise: "20+ years in international trade", image: "👨‍💼" },
            { name: "Priya Kulkarni", role: "COO", expertise: "Expert in logistics & operations", image: "👩‍💼" },
            { name: "Amit Patil", role: "Head of Customs", expertise: "Former Customs Officer", image: "👨‍💻" },
            { name: "Sneha Sharma", role: "Client Relations", expertise: "Customer success specialist", image: "👩‍🏫" },
          ].map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-maharashtra-saffron to-ocean-blue rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-ocean-blue font-semibold mb-2">{member.role}</div>
              <p className="text-sm text-steel-gray">{member.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Businesses Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "ISO Certified", desc: "Quality management system certified" },
            { icon: Shield, title: "100% Secure", desc: "Full insurance on all shipments" },
            { icon: Users, title: "Dedicated Manager", desc: "Personal relationship manager" },
            { icon: TrendingUp, title: "30% Faster", desc: "Quicker customs clearance" },
            { icon: Briefcase, title: "Expert Team", desc: "50+ trade professionals" },
            { icon: Globe, title: "Global Network", desc: "Partners in 150+ countries" },
          ].map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <IconComponent className="w-10 h-10 text-ocean-blue mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-steel-gray">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Certifications & Memberships
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "ISO 9001:2015",
            "ISO 14001:2015",
            "FIEO Member",
            "DGFT Licensed",
            "Customs Broker",
            "IATA Certified",
            "WCA Member",
            "AEO Certified"
          ].map((cert, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center font-semibold text-gray-900">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Go Global with Us?</h2>
        <p className="text-xl mb-8 opacity-90">Join 500+ businesses who trust us with their international trade</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Contact Us Today
          </Link>
          <Link
            href="/quote"
            className="bg-white/20 backdrop-blur-md border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ocean-blue transition-all"
          >
            Get Instant Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
