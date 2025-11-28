import React from "react";

const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free delivery on orders over $50 across the country"
  },
  {
    icon: "🎁",
    title: "Quality Guarantee",
    description: "100% healthy plants or money back guarantee"
  },
  {
    icon: "🌍",
    title: "Eco-Friendly",
    description: "Sustainable packaging and carbon-neutral shipping"
  },
  {
    icon: "📞",
    title: "Expert Support",
    description: "24/7 customer support and plant care guidance"
  },
];

const Features = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-b from-transparent to-green-950/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-green-900/30 to-black/40 border border-green-700 p-8 rounded-2xl backdrop-blur-md hover:border-green-500 transition-all text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
