import React, { useState } from "react";

const plants = [
  { 
    id: 1,
    name: "Calathea Plant", 
    price: 35.99, 
    rating: 4.8,
    reviews: 156,
    emoji: "🌿",
    description: "Beautiful tropical plant with stunning patterned leaves",
    features: ["Low maintenance", "Air purifying", "Pet-friendly"]
  },
  { 
    id: 2,
    name: "Monstera Deliciosa", 
    price: 45.99, 
    rating: 4.9,
    reviews: 234,
    emoji: "🍃",
    description: "Popular Swiss cheese plant perfect for any room",
    features: ["Fast growing", "Statement plant", "Easy care"]
  },
  { 
    id: 3,
    name: "Snake Plant", 
    price: 29.99, 
    rating: 4.7,
    reviews: 189,
    emoji: "🌱",
    description: "Hardy succulent that thrives in any light condition",
    features: ["Very hardy", "Low water", "Oxygen producer"]
  },
  { 
    id: 4,
    name: "Fiddle Leaf Fig", 
    price: 55.99, 
    rating: 4.6,
    reviews: 142,
    emoji: "🍂",
    description: "Stunning floor plant that makes a bold statement",
    features: ["Elegant", "Statement piece", "Indoor tree"]
  },
  { 
    id: 5,
    name: "Pothos Plant", 
    price: 25.99, 
    rating: 4.9,
    reviews: 312,
    emoji: "🌲",
    description: "Climbing vine perfect for shelves and hanging baskets",
    features: ["Trainable", "Fast grower", "Air clean"]
  },
  { 
    id: 6,
    name: "Bird of Paradise", 
    price: 65.99, 
    rating: 4.8,
    reviews: 98,
    emoji: "🦜",
    description: "Exotic flowering plant with vibrant orange blooms",
    features: ["Exotic", "Blooming", "Tropical vibe"]
  },
];

const TopSelling = ({ addToCart }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="px-8 py-16 bg-gradient-to-b from-transparent to-green-950/10">
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-400">🏆 Our</span> Top Selling Plants
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">Choose from our premium collection of healthy, handpicked plants</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((p) => (
            <div 
              key={p.id} 
              className="group relative bg-gradient-to-br from-green-900/20 to-black/40 border border-green-700 p-6 rounded-3xl backdrop-blur-md hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                -15%
              </div>

              {/* Plant Icon */}
              <div className="w-full h-48 bg-gradient-to-b from-green-600/10 to-emerald-700/20 rounded-2xl flex items-center justify-center mb-6 text-7xl border border-green-600/30 group-hover:border-green-500/60 transition">
                {p.emoji}
              </div>

              {/* Plant Info */}
              <h3 className="text-2xl font-bold mb-2 text-white">{p.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{p.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">⭐ {p.rating}</span>
                <span className="text-gray-400 text-sm">({p.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="mb-4 flex flex-wrap gap-2">
                {p.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-green-700/30 text-green-300 px-3 py-1 rounded-full border border-green-600/50">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price and Button */}
              <div className="flex justify-between items-center pt-4 border-t border-green-700/50">
                <div>
                  <p className="text-gray-400 line-through text-sm">${(p.price * 1.15).toFixed(2)}</p>
                  <p className="text-2xl font-bold text-green-400">${p.price}</p>
                </div>
                <button
                  onClick={() => addToCart?.({ id: p.id, name: p.name, price: p.price, emoji: p.emoji })}
                  className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition transform hover:scale-110 shadow-lg"
                >
                  🛒 Add
                </button>
              </div>

              {/* Hover Effect */}
              {hoveredId === p.id && (
                <div className="absolute inset-0 bg-green-500/5 rounded-3xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TopSelling;
