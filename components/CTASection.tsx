"use client";

import Link from "next/link";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-maharashtra-saffron via-container-orange to-ocean-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white mb-6 leading-tight">
          Ready to Take Your Business Global?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Let's connect Maharashtra to the world, one shipment at a time
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            href="/contact"
            className="bg-white text-maharashtra-saffron px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group"
          >
            <Calendar className="w-5 h-5" />
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/quote"
            className="bg-business-navy text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group"
          >
            <Mail className="w-5 h-5" />
            Get Quote Instantly
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-8 text-white mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
            <span>Instant quote</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
            <span>No commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
            <span>Expert advice</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-white">
          <p className="text-lg mb-2">Or call us directly:</p>
          <a
            href="tel:+919876543210"
            className="text-3xl font-bold hover:text-white/80 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-8 h-8" />
            +91 98765 43210
          </a>
          <p className="text-sm mt-2 opacity-90">Available 24/7 for urgent shipments</p>
        </div>
      </div>
    </section>
  );
}
