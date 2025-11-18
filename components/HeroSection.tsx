"use client";

import { useState } from "react";
import { Ship, Plane, ArrowRight, Package, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="hero-container bg-gradient-to-br from-business-navy via-ocean-blue to-maharashtra-saffron">
      {/* Animated Background Particles */}
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Ships and Planes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <Ship className="absolute top-1/4 left-1/4 w-24 h-24 text-white animate-float" />
        <Plane className="absolute top-1/3 right-1/4 w-20 h-20 text-white animate-float" style={{ animationDelay: "1s" }} />
        <Package className="absolute bottom-1/4 left-1/3 w-16 h-16 text-white animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-6 animate-fade-in leading-tight">
          From Maharashtra to the World
          <br />
          <span className="bg-gradient-to-r from-premium-gold to-white bg-clip-text text-transparent">
            Your Trusted Import-Export Partner
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-inter">
          Connecting businesses globally with reliable, fast, and cost-effective trade solutions
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-sm text-gray-200">Countries Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-white mb-1">10,000+</div>
            <div className="text-sm text-gray-200">Shipments Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold text-white mb-1">₹500Cr+</div>
            <div className="text-sm text-gray-200">Trade Volume</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-full shadow-2xl p-2 flex items-center">
            <input
              type="text"
              placeholder="What do you want to import or export?"
              className="flex-1 px-6 py-3 rounded-full outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gradient-to-r from-maharashtra-saffron to-container-orange text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Search
            </button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/services/export"
            className="bg-gradient-to-r from-maharashtra-saffron to-container-orange text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group"
          >
            <TrendingUp className="w-5 h-5" />
            Start Exporting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services/import"
            className="bg-white/20 backdrop-blur-md text-white border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-business-navy flex items-center gap-2 group"
          >
            <Package className="w-5 h-5" />
            Start Importing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-16">
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-white text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
