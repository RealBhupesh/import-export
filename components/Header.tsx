"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-maharashtra-saffron to-ocean-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="hidden md:block">
              <div className="font-montserrat font-bold text-xl text-gray-900">
                Maharashtra Global Trade Hub
              </div>
              <div className="text-xs text-steel-gray">
                Your Gateway to Global Trade
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services/export"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              Export
            </Link>
            <Link
              href="/services/import"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              Import
            </Link>
            <Link
              href="/tracking"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              Track Shipment
            </Link>
            <Link
              href="/quote"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              Get Quote
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-maharashtra-saffron font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-gray-700 hover:text-maharashtra-saffron"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm py-2 px-6"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                Home
              </Link>
              <Link
                href="/services/export"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                Export Services
              </Link>
              <Link
                href="/services/import"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                Import Services
              </Link>
              <Link
                href="/tracking"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                Track Shipment
              </Link>
              <Link
                href="/quote"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                Get Quote
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-maharashtra-saffron font-medium"
              >
                About Us
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@maharashtratrade.com"
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@maharashtratrade.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
