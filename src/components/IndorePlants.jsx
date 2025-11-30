import React, { useState } from "react";
import { formatINRFromUSD } from "../utils/priceUtils";

const indorePlants = [
  { id: 1, name: "Calathea Orbifolia", price: 35.99, emoji: "🌿", desc: "Beautiful striped leaves, prefers humidity", details: "Grow in bright indirect light. Keep soil moist but not waterlogged. Loves humidity — mist regularly." },
  { id: 2, name: "Monstera Deliciosa", price: 45.99, emoji: "🍃", desc: "Iconic split-leaf beauty, grows tall", details: "Perfect for statement corners. Water weekly. Provide a moss pole for climbing. Tolerates low light." },
  { id: 3, name: "Snake Plant", price: 29.99, emoji: "🌱", desc: "Tough, low-water, air-purifying plant", details: "Almost indestructible! Water sparingly (every 3-4 weeks). Thrives in any light. Great for beginners." },
  { id: 4, name: "Fiddle Leaf Fig", price: 55.99, emoji: "🍂", desc: "Tall indoor tree, statement piece", details: "Needs bright, indirect light. Water when top inch is dry. Can grow 6+ feet tall indoors." },
  { id: 5, name: "Pothos", price: 25.99, emoji: "🌲", desc: "Trailing vine for shelves and tables", details: "Perfect for hanging baskets. Very forgiving. Can trail up to 40 feet! Tolerates low light." },
  { id: 6, name: "Bird of Paradise", price: 65.99, emoji: "🦜", desc: "Tropical statement plant with vibrant flowers", details: "Produces stunning orange and blue flowers. Needs bright light. Patient — may take 3-5 years to flower." },
  { id: 7, name: "Rubber Plant", price: 38.99, emoji: "🌳", desc: "Bold foliage, modern look", details: "Deep green glossy leaves. Bright indirect light preferred. Water when top inch is dry. Monthly feed during growth." },
  { id: 8, name: "ZZ Plant", price: 32.99, emoji: "🎋", desc: "Glossy leaves, very forgiving", details: "Extremely low-maintenance. Can survive neglect. Prefers dry soil. Perfect for offices." },
  { id: 9, name: "Philodendron", price: 28.99, emoji: "🍀", desc: "Heart-shaped leaves, easy care", details: "Climber or trailer. Loves humidity. Water weekly. Great air purifier. Very beginner-friendly." },
  { id: 10, name: "Peace Lily", price: 31.99, emoji: "🌸", desc: "Elegant white flowers, shade tolerant", details: "Produces beautiful white spathes. Tells you when thirsty by drooping. Tolerates low light well." },
  { id: 11, name: "Dracaena", price: 34.99, emoji: "📍", desc: "Striped leaves, architectural shape", details: "Dramatic striped foliage. Slow grower but architectural. Prefers bright indirect light. Water sparingly." },
  { id: 12, name: "Anthurium", price: 42.99, emoji: "💐", desc: "Red heart-shaped flowers, tropical vibes", details: "Long-lasting flowers (months!). Loves humidity & warmth. Keep soil moist. High-humidity lover." },
];

const IndorePlants = ({ addToCart }) => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="min-h-screen px-0 py-16 bg-gradient-to-b from-transparent to-green-950/10">
      <div className="max-w-full mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold mb-4">🌿 Indore Plants Collection</h2>
          <p className="text-xl text-gray-300 mb-2">Handpicked plants perfect for indoor living</p>
          <p className="text-gray-400">Fresh & healthy plants delivered to your doorstep</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {indorePlants.map((p) => (
            <div 
              key={p.id} 
              onClick={() => toggle(p.id)}
              className={`cursor-pointer bg-gradient-to-br from-green-900/20 to-black/40 border p-6 rounded-2xl backdrop-blur-md transition duration-300 transform group relative overflow-hidden ${
                expanded === p.id
                  ? 'border-green-500 shadow-lg shadow-green-500/20 -translate-y-1'
                  : 'border-green-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{
                backgroundImage: "radial-gradient(circle, #22c55e 1px, transparent 1px)",
                backgroundSize: "25px 25px"
              }}></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="text-4xl group-hover:scale-110 transition transform drop-shadow-lg">{p.emoji}</div>
                <div className="text-2xl text-green-400 font-bold">{expanded === p.id ? '−' : '+'}</div>
              </div>
              <h3 className="text-lg font-bold mb-2">{p.name}</h3>
              <p className="text-gray-300 mb-4 text-sm h-10">{p.desc}</p>

              {expanded === p.id && (
                <div className="mt-4 pt-4 border-t border-green-700/30 animate-in fade-in duration-300">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{p.details}</p>
                </div>
              )}

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-green-700/30 relative z-10">
                <p className="text-green-400 font-bold text-lg">{formatINRFromUSD(p.price)}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji });
                  }}
                  className="px-3 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3">Why Choose Our Indoor Plants?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="text-3xl mb-2">✅</p>
              <p className="text-gray-200 font-semibold">Healthy & Fresh</p>
              <p className="text-gray-400 text-sm">All plants are carefully grown & inspected</p>
            </div>
            <div>
              <p className="text-3xl mb-2">📦</p>
              <p className="text-gray-200 font-semibold">Easy Delivery</p>
              <p className="text-gray-400 text-sm">Safe packaging & quick delivery to Indore</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🎯</p>
              <p className="text-gray-200 font-semibold">Perfect Advice</p>
              <p className="text-gray-400 text-sm">Care guides included with every order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndorePlants;
