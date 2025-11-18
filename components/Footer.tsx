import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-business-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-maharashtra-saffron to-ocean-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <div className="font-montserrat font-bold text-lg">
                  Maharashtra Global Trade Hub
                </div>
                <div className="text-xs text-gray-300">
                  Your Gateway to Global Trade
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting Maharashtra to the world with reliable, fast, and cost-effective import-export solutions since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maharashtra-saffron transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maharashtra-saffron transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maharashtra-saffron transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maharashtra-saffron transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maharashtra-saffron transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/export" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Export Services</Link></li>
              <li><Link href="/services/import" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Import Services</Link></li>
              <li><Link href="/services/air-freight" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Air Freight</Link></li>
              <li><Link href="/services/sea-freight" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Sea Freight</Link></li>
              <li><Link href="/services/customs" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Customs Clearance</Link></li>
              <li><Link href="/services/warehousing" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Contact</Link></li>
              <li><Link href="/partners" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Partners</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-maharashtra-saffron transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-maharashtra-saffron flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Head Office</div>
                  <div className="text-gray-300 text-sm">
                    123 Trade Center<br />
                    Nashik - 422001<br />
                    Maharashtra, India
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-maharashtra-saffron flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-maharashtra-saffron flex-shrink-0" />
                <div>
                  <a href="mailto:info@maharashtratrade.com" className="text-gray-300 hover:text-white">
                    info@maharashtratrade.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-1 text-maharashtra-saffron flex-shrink-0" />
                <div>
                  <a href="https://www.maharashtratrade.com" className="text-gray-300 hover:text-white">
                    www.maharashtratrade.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Offices */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Branch Offices</h4>
              <p className="text-gray-300 text-sm">
                Mumbai | Pune | Aurangabad | Nagpur
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">International Offices</h4>
              <p className="text-gray-300 text-sm">
                Dubai | Singapore | Hamburg | New York
              </p>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-sm text-gray-300 mb-4">
            <strong>Legal Information:</strong><br />
            IEC Code: 0123456789 | DGFT License: DGFT/2010/12345 | GST: 27ABCDE1234F1Z5 | PAN: ABCDE1234F
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              © 2025 Maharashtra Global Trade Hub. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
              <Link href="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</Link>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-400">
            Made with 🧡 in Maharashtra, Serving the 🌍
          </div>
        </div>
      </div>
    </footer>
  );
}
