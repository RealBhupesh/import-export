"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does Maharashtra Global Trade Hub provide?",
        a: "We provide complete import-export solutions including product sourcing, customs clearance, documentation, sea & air freight, warehousing, and door-to-door delivery across 150+ countries."
      },
      {
        q: "How long have you been in business?",
        a: "We've been serving businesses since 2010, with over 15 years of experience in international trade and logistics."
      },
      {
        q: "Which countries do you serve?",
        a: "We have established partnerships in 150+ countries worldwide including USA, UK, UAE, Germany, China, Japan, and more."
      }
    ]
  },
  {
    category: "Export Services",
    questions: [
      {
        q: "What documents are required for exporting?",
        a: "Typical export documents include: Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Certificate of Origin, Export License (if applicable), and product-specific certificates. We handle all documentation for you."
      },
      {
        q: "How long does the export process take?",
        a: "The complete export process typically takes 25-60 days depending on the destination and shipping mode (sea/air). Air freight is faster (3-7 days transit) while sea freight takes 15-45 days."
      },
      {
        q: "Can you help with product quality inspection?",
        a: "Yes! We provide comprehensive quality inspection services with photo/video documentation before shipment to ensure your products meet specifications."
      },
      {
        q: "How do you ensure faster customs clearance?",
        a: "Our expert customs team and digital documentation system, combined with AEO certification, enables 30% faster clearance compared to industry average."
      }
    ]
  },
  {
    category: "Import Services",
    questions: [
      {
        q: "Can you help me find suppliers in other countries?",
        a: "Absolutely! Our product sourcing service helps identify reliable suppliers worldwide. We verify quality, negotiate prices, and handle sample testing before you commit."
      },
      {
        q: "How are import duties calculated?",
        a: "Import duties include Basic Customs Duty (BCD), Social Welfare Surcharge, and IGST. The rates vary by product category (HS Code) and origin country. Use our Import Duty Calculator for estimates."
      },
      {
        q: "Do you handle all customs formalities?",
        a: "Yes, we manage all import customs procedures including documentation, duty payment, assessment, examination, and final clearance."
      },
      {
        q: "What is the minimum order quantity for importing?",
        a: "There's no minimum - we handle both small LCL (Less than Container Load) shipments and full container loads (FCL) based on your requirements."
      }
    ]
  },
  {
    category: "Shipping & Tracking",
    questions: [
      {
        q: "How can I track my shipment?",
        a: "Use your tracking number on our website's tracking page for real-time GPS updates, or contact your dedicated relationship manager for detailed status."
      },
      {
        q: "What's the difference between sea and air freight?",
        a: "Sea freight is cost-effective for large volumes (15-45 days transit), while air freight is faster (3-7 days) but more expensive. We help you choose based on urgency and budget."
      },
      {
        q: "Are shipments insured?",
        a: "Yes, all our shipments come with comprehensive insurance coverage. We also offer additional coverage options based on cargo value."
      },
      {
        q: "What happens if there's a delay?",
        a: "We provide real-time updates for any delays. Your dedicated manager proactively communicates issues and works on solutions. We maintain 99.8% on-time delivery rate."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Costs vary based on service type, destination, cargo volume, and mode of transport. Use our Quote Calculator for instant estimates or contact us for detailed pricing."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, letters of credit (LC), and online payments. Payment terms can be discussed based on your relationship with us."
      },
      {
        q: "Are there any hidden charges?",
        a: "No hidden charges - we provide complete transparent pricing upfront including all documentation, handling, and clearance fees."
      },
      {
        q: "Do you offer any discounts?",
        a: "Yes, we offer volume discounts for regular shipments and special rates for long-term partnerships. Contact us to discuss."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I start using your services?",
        a: "Simply contact us via phone, email, or website. We'll assign you a dedicated relationship manager who will guide you through the entire process."
      },
      {
        q: "Do I need any special licenses to import/export?",
        a: "You'll need an IEC (Import Export Code) from DGFT. Some products may require additional licenses. We help you understand and obtain all necessary permits."
      },
      {
        q: "How quickly can you respond to my inquiry?",
        a: "We respond to all inquiries within 2 hours during business hours. For urgent matters, call our 24/7 hotline: +91 98765 43210"
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-ocean-blue to-business-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Find answers to common questions about our import-export services
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-2xl p-2 flex items-center">
            <Search className="w-5 h-5 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full outline-none text-gray-700"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-steel-gray">
                No FAQs found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          ) : (
            filteredFAQs.map((category, catIdx) => (
              <div key={catIdx} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-maharashtra-saffron rounded-full"></div>
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => {
                    const itemId = `${catIdx}-${qIdx}`;
                    const isOpen = openItems.includes(itemId);

                    return (
                      <div
                        key={qIdx}
                        className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-all"
                        >
                          <span className="font-semibold text-lg text-gray-900 pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-ocean-blue flex-shrink-0 transition-transform ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-5 text-gray-700 leading-relaxed animate-slide-up">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-container bg-gradient-to-r from-maharashtra-saffron to-ocean-blue text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-xl mb-8 opacity-90">
          Our team is here to help you 24/7
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Call: +91 98765 43210
          </a>
          <a
            href="/contact"
            className="bg-white/20 backdrop-blur-md border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ocean-blue transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
