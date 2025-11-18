"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    company: "Patil Agro Exports, Nashik",
    role: "Founder & CEO",
    rating: 5,
    text: "They helped us export 500 tons of onions to Dubai. Professional, fast, and transparent throughout! The customs clearance was 40% faster than our previous logistics partner.",
    results: ["40% cost savings", "Zero delays", "Now exporting to 3 countries"],
    image: "👨‍💼",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Textiles, Solapur",
    role: "Export Manager",
    rating: 5,
    text: "Our textiles now reach Europe thanks to their excellent logistics support. The documentation was handled seamlessly, and we had real-time tracking throughout.",
    results: ["Expanded to EU market", "99% on-time delivery", "Reduced shipping costs by 25%"],
    image: "👩‍💼",
  },
  {
    name: "Amit Deshmukh",
    company: "Deshmukh Auto Parts, Pune",
    role: "Director",
    rating: 5,
    text: "Importing machinery from Germany was complex, but Maharashtra Trade Hub made it simple. They handled everything from documentation to customs to final delivery.",
    results: ["Smooth customs clearance", "Expert guidance", "Will use again"],
    image: "👨‍🔧",
  },
  {
    name: "Sneha Kulkarni",
    company: "Nashik Valley Wines",
    role: "Export Head",
    rating: 5,
    text: "Exporting wine requires special handling and compliance. They managed everything perfectly - from temperature-controlled containers to international certifications.",
    results: ["Temperature monitoring", "100% compliance", "Global reach achieved"],
    image: "👩‍🍳",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
          Client Success Stories
        </h2>
        <p className="text-xl text-steel-gray max-w-3xl mx-auto">
          Businesses growing with us - hear from our satisfied clients
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
          {/* Quote Icon */}
          <Quote className="absolute top-6 right-6 w-16 h-16 text-maharashtra-saffron opacity-20" />

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-premium-gold text-premium-gold" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
            "{currentTestimonial.text}"
          </p>

          {/* Results */}
          <div className="mb-8 p-6 bg-success-green/10 rounded-lg">
            <div className="font-semibold text-success-green mb-3">Results:</div>
            <ul className="space-y-2">
              {currentTestimonial.results.map((result, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-success-green rounded-full mr-3"></div>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-maharashtra-saffron to-ocean-blue rounded-full flex items-center justify-center text-3xl">
              {currentTestimonial.image}
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">{currentTestimonial.name}</div>
              <div className="text-steel-gray">{currentTestimonial.role}</div>
              <div className="text-sm text-maharashtra-saffron font-medium">
                {currentTestimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-maharashtra-saffron hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-maharashtra-saffron w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-maharashtra-saffron hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5.0 ⭐</div>
          <div className="text-steel-gray mb-6">Based on 847 reviews</div>
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium w-32">Satisfied</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-success-green h-full rounded-full" style={{ width: "98%" }}></div>
              </div>
              <span className="text-sm font-medium w-12">98%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium w-32">On-Time</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-ocean-blue h-full rounded-full" style={{ width: "97%" }}></div>
              </div>
              <span className="text-sm font-medium w-12">97%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium w-32">Recommend</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-maharashtra-saffron h-full rounded-full" style={{ width: "96%" }}></div>
              </div>
              <span className="text-sm font-medium w-12">96%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
