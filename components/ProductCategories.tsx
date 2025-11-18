"use client";

import Link from "next/link";
import { Wheat, Shirt, Wine, Cog, Pill, Cpu, Palette, Building, Gem, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Wheat,
    name: "Agriculture & Food",
    products: ["Grains", "Spices", "Fruits", "Vegetables"],
    color: "from-success-green to-green-600",
  },
  {
    icon: Shirt,
    name: "Textiles & Garments",
    products: ["Cotton", "Fabrics", "Apparel", "Home Textiles"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wine,
    name: "Food & Beverages",
    products: ["Wine", "Snacks", "Sweets", "Processed Foods"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Cog,
    name: "Machinery & Auto Parts",
    products: ["Equipment", "Auto Components", "Tools", "Spare Parts"],
    color: "from-steel-gray to-business-navy",
  },
  {
    icon: Pill,
    name: "Pharma & Chemicals",
    products: ["Medicines", "APIs", "Chemicals", "Lab Equipment"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    name: "Electronics & IT",
    products: ["Hardware", "Components", "Devices", "Software"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Palette,
    name: "Handicrafts & Art",
    products: ["Warli Art", "Handicrafts", "Traditional Items", "Artifacts"],
    color: "from-maharashtra-saffron to-premium-gold",
  },
  {
    icon: Building,
    name: "Construction Materials",
    products: ["Cement", "Steel", "Tiles", "Building Materials"],
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Gem,
    name: "Jewelry & Gems",
    products: ["Gold Jewelry", "Gems", "Precious Stones", "Ornaments"],
    color: "from-premium-gold to-yellow-600",
  },
];

export default function ProductCategories() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 mb-4">
          Product Categories
        </h2>
        <p className="text-xl text-steel-gray max-w-3xl mx-auto">
          Quality products from Maharashtra to the world
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={index}
              href={`/products/${category.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 transition-all duration-300 hover:border-maharashtra-saffron hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-2 group-hover:text-maharashtra-saffron transition-colors">
                    {category.name}
                  </h3>
                  <ul className="space-y-1 text-sm text-steel-gray">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-maharashtra-saffron rounded-full mr-2"></span>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-maharashtra-saffron group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/products"
          className="btn-primary text-center"
        >
          View All Categories
        </Link>
        <Link
          href="/sourcing"
          className="btn-secondary text-center"
        >
          Request Product Sourcing
        </Link>
      </div>
    </section>
  );
}
