import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

      <div className="max-w-xl space-y-6 bg-gradient-to-br from-green-900/30 to-black/50 p-8 rounded-3xl backdrop-blur-md border border-green-700 shadow-2xl">
        <div>
          <h2 className="text-5xl font-bold mb-2">🌱 Fresh Green Plants</h2>
          <p className="text-green-400 text-lg">Transform Your Home & Office</p>
        </div>
        
        <p className="text-gray-200 text-lg leading-relaxed">
          Bring nature closer with our premium collection of indoor and outdoor plants. Each plant is hand-selected and cared for to ensure the highest quality. Perfect for beginners and plant enthusiasts alike!
        </p>

        <div className="space-y-2">
          <p className="text-3xl font-bold text-green-400">$51.99</p>
          <p className="text-gray-400 text-sm">Free shipping on orders over $50</p>
        </div>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition transform hover:scale-105">
            Shop Now
          </button>
          <button className="px-8 py-3 border-2 border-green-500 hover:bg-green-500/20 text-white rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-72 md:w-96 h-96 bg-gradient-to-br from-green-600/20 to-emerald-700/30 rounded-3xl flex items-center justify-center border border-green-600 shadow-2xl">
        <div className="text-center">
          <div className="text-8xl mb-4">🌿</div>
          <p className="text-gray-300 text-lg">Premium Plant Collection</p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
