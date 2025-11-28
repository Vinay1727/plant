import React from "react";

const galleryItems = [
  { emoji: "🌿", title: "Indoor Collection", count: "2,500+ Items" },
  { emoji: "🌸", title: "Flowering Plants", count: "1,200+ Items" },
  { emoji: "🌴", title: "Outdoor Plants", count: "800+ Items" },
  { emoji: "🪴", title: "Planters & Pots", count: "600+ Items" },
  { emoji: "🧴", title: "Plant Care Kits", count: "400+ Items" },
  { emoji: "📚", title: "Care Guides", count: "100+ Guides" },
];

const Gallery = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-b from-green-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Explore Our Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-green-900/40 to-black/50 border border-green-700 p-8 rounded-2xl backdrop-blur-md hover:border-green-500 hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
            >
              <div className="text-7xl mb-4 group-hover:scale-110 transition transform">{item.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-green-400 font-semibold">{item.count}</p>
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;