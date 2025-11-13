import React from "react";

const PortfolioCards = () => {
  const cards = [
    { id: 1, image: "/roket-squred.png", title: "Rocket Squared", subtitle: "Web Design" },
    { id: 2, image: "/mars.png", title: "Mars", subtitle: "Mobile App" },
    { id: 3, image: "/panda-logo.png", title: "Panda", subtitle: "Branding" },
    { id: 4, image: "/mars.png", title: "Nebula Holdings", subtitle: "E-commerce" },
    { id: 5, image: "/humans.png", title: "Everyday Humans", subtitle: "UI/UX Design" },
    { id: 6, image: "/cozycasa.png", title: "Cozy Casa", subtitle: "Landing Page" },
    { id: 7, image: "/roket-squred.png", title: "InnovateX Ventures", subtitle: "Web Development" },
    { id: 8, image: "/panda-logo.png", title: "Summit Partners", subtitle: "SEO Optimization" },
    { id: 9, image: "/mars.png", title: "Appex Strategies", subtitle: "Marketing Campaign" },
    { id: 10, image: "/cozycasa.png", title: "Cozycasa", subtitle: "Graphic Design" },
  ];

  return (
    <section className="bg-[#081738] px-4 py-20 sm:py-24 md:py-20 lg:py-20">
      <div className="mycontainer2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {cards.map((card, idx) => {
          // Zig-zag for all cards
          const zigZagClass = idx % 2 !== 0 ? "lg:mt-15" : "";

          // Last 2 cards: center row
          let centerLastRowClass = "";
          if (idx >= 8) {
            centerLastRowClass = zigZagClass;
            if (idx === 8) centerLastRowClass += " lg:col-start-2";
            if (idx === 9) centerLastRowClass += ""; // Second card just next to first
          }

          return (
            <div
              key={card.id}
              className={`overflow-hidden p-4 transition-transform duration-300 hover:scale-105 ${idx >= 8 ? centerLastRowClass : zigZagClass}`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover rounded-lg transition-transform duration-500 hover:-translate-y-4"
                />
              </div>
              <h3 className="text-white text-xl font-semibold mt-4">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.subtitle}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default PortfolioCards;
