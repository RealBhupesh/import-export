"use client";

import { useState } from "react";
import { Search, Calculator, Phone } from "lucide-react";
import Link from "next/link";

export default function QuickActionBar() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      window.location.href = `/tracking?number=${trackingNumber}`;
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-white shadow-lg border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Track Shipment */}
          <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-ocean-blue flex-shrink-0" />
            <input
              type="text"
              placeholder="Enter tracking number"
              className="flex-1 bg-transparent outline-none text-sm"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTrack()}
            />
            <button
              onClick={handleTrack}
              className="text-ocean-blue font-semibold text-sm hover:text-maharashtra-saffron transition-colors"
            >
              Track
            </button>
          </div>

          {/* Get Quote */}
          <Link
            href="/quote"
            className="flex items-center space-x-2 bg-gradient-to-r from-maharashtra-saffron to-container-orange rounded-lg px-4 py-3 text-white hover:shadow-lg transition-all group"
          >
            <Calculator className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 text-sm font-semibold">Get Instant Quote</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Contact */}
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-2 bg-gradient-to-r from-ocean-blue to-business-navy rounded-lg px-4 py-3 text-white hover:shadow-lg transition-all group"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 text-sm font-semibold">24/7 Support: +91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
