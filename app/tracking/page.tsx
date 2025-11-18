"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, MapPin, Package, Plane, Ship, Check, Clock } from "lucide-react";
import Link from "next/link";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-business-navy to-ocean-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
            Track Your Shipment
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Real-time visibility of your cargo with GPS tracking
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-3 flex items-center max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Enter tracking number (e.g., MGHT-2025-0001234)"
              className="flex-1 px-6 py-4 rounded-xl outline-none text-gray-700 text-lg"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTrack()}
            />
            <button
              onClick={handleTrack}
              className="bg-gradient-to-r from-maharashtra-saffron to-container-orange text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Track
            </button>
          </div>

          <div className="mt-4 text-sm opacity-80">
            Or track with: Bill of Lading | Container Number | Booking Reference
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {isTracking && (
        <section className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Shipment Details Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                  <div className="text-sm text-steel-gray mb-1">Tracking Number</div>
                  <div className="text-2xl font-bold text-gray-900">{trackingNumber || "MGHT-2025-0001234"}</div>
                </div>
                <div className="bg-success-green/10 px-6 py-3 rounded-full">
                  <div className="flex items-center gap-2 text-success-green font-semibold">
                    <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                    In Transit
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm text-steel-gray mb-1">Mode</div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Ship className="w-5 h-5 text-ocean-blue" />
                    Sea Freight (FCL)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-steel-gray mb-1">Origin</div>
                  <div className="font-semibold text-gray-900">Mumbai, India (JNPT)</div>
                </div>
                <div>
                  <div className="text-sm text-steel-gray mb-1">Destination</div>
                  <div className="font-semibold text-gray-900">Hamburg, Germany</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-steel-gray mb-1">Departure</div>
                  <div className="font-semibold text-gray-900">Jan 5, 2025</div>
                </div>
                <div>
                  <div className="text-sm text-steel-gray mb-1">ETA</div>
                  <div className="font-semibold text-gray-900">Feb 8, 2025</div>
                </div>
                <div>
                  <div className="text-sm text-steel-gray mb-1">Current Status</div>
                  <div className="font-semibold text-gray-900">15 days in transit</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipment Progress</h3>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-success-green to-ocean-blue rounded-full" style={{ width: "62%" }}></div>
                </div>
                <div className="mt-2 text-right text-sm font-semibold text-ocean-blue">62% Complete</div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Shipment Timeline</h3>

              <div className="space-y-6">
                {/* Completed Steps */}
                <TimelineItem
                  icon={<Check className="w-5 h-5" />}
                  status="completed"
                  title="Booking Confirmed"
                  date="Jan 3, 2025 | 10:30 AM"
                  description="Booking reference generated"
                />
                <TimelineItem
                  icon={<Package className="w-5 h-5" />}
                  status="completed"
                  title="Container Loaded"
                  date="Jan 4, 2025 | 2:15 PM"
                  description="Stuffed at warehouse, Nashik"
                  hasPhotos={true}
                />
                <TimelineItem
                  icon={<Check className="w-5 h-5" />}
                  status="completed"
                  title="Port Gate-In"
                  date="Jan 5, 2025 | 11:20 AM"
                  description="Container received at JNPT"
                />
                <TimelineItem
                  icon={<Check className="w-5 h-5" />}
                  status="completed"
                  title="Customs Cleared"
                  date="Jan 5, 2025 | 6:00 PM"
                  description="Export clearance completed, LEO issued"
                />
                <TimelineItem
                  icon={<Ship className="w-5 h-5" />}
                  status="completed"
                  title="Vessel Departed"
                  date="Jan 6, 2025 | 11:00 PM"
                  description="Departed from Mumbai Port - Vessel: MSC GULSUN"
                />

                {/* Current Status */}
                <TimelineItem
                  icon={<MapPin className="w-5 h-5" />}
                  status="current"
                  title="In Transit - Arabian Sea"
                  date="Jan 20, 2025 | Current"
                  description="On schedule, tracking via GPS. Next port: Colombo (ETA: Jan 22)"
                />

                {/* Pending Steps */}
                <TimelineItem
                  icon={<Clock className="w-5 h-5" />}
                  status="pending"
                  title="Arrive Hamburg Port"
                  date="Feb 6, 2025 | Expected"
                  description="Container discharge from vessel"
                />
                <TimelineItem
                  icon={<Clock className="w-5 h-5" />}
                  status="pending"
                  title="Customs Clearance"
                  date="Feb 7, 2025 | Expected"
                  description="Import customs at destination"
                />
                <TimelineItem
                  icon={<Clock className="w-5 h-5" />}
                  status="pending"
                  title="Delivered"
                  date="Feb 8, 2025 | Expected"
                  description="Final delivery to consignee"
                />
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentItem name="Bill of Lading" />
                <DocumentItem name="Commercial Invoice" />
                <DocumentItem name="Packing List" />
                <DocumentItem name="Certificate of Origin" />
                <DocumentItem name="Insurance Certificate" />
                <DocumentItem name="All Documents (ZIP)" />
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-gradient-to-r from-maharashtra-saffron to-ocean-blue rounded-2xl shadow-xl p-8 mt-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6">Your Relationship Manager: Priya Sharma</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919876543210" className="bg-white text-maharashtra-saffron px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Call: +91 98765 43210
                </a>
                <Link href="/contact" className="bg-white/20 backdrop-blur-md border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-ocean-blue transition-all">
                  Chat Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Demo Section (if not tracking) */}
      {!isTracking && (
        <section className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Try Demo Tracking
            </h2>
            <p className="text-steel-gray mb-8">
              Enter "MGHT-2025-0001234" to see a demo shipment tracking
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<MapPin className="w-8 h-8" />}
                title="Real-time GPS"
                description="Live location updates"
              />
              <FeatureCard
                icon={<Package className="w-8 h-8" />}
                title="Photo Proof"
                description="Visual checkpoints"
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8" />}
                title="ETA Updates"
                description="Accurate predictions"
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function TimelineItem({ icon, status, title, date, description, hasPhotos = false }: any) {
  const statusColors = {
    completed: "bg-success-green text-white",
    current: "bg-ocean-blue text-white animate-pulse",
    pending: "bg-gray-200 text-gray-400"
  };

  return (
    <div className="flex gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${statusColors[status as keyof typeof statusColors]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-gray-900">{title}</div>
        <div className="text-sm text-steel-gray">{date}</div>
        <div className="text-sm text-gray-700 mt-1">{description}</div>
        {hasPhotos && (
          <button className="text-sm text-ocean-blue font-semibold mt-2 hover:underline">
            View Photos (3)
          </button>
        )}
      </div>
    </div>
  );
}

function DocumentItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-ocean-blue hover:shadow-md transition-all">
      <span className="text-gray-900 font-medium">{name}</span>
      <button className="text-ocean-blue font-semibold hover:underline">
        Download
      </button>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="text-ocean-blue mb-4 flex justify-center">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-steel-gray">{description}</p>
    </div>
  );
}
