import React, { useEffect, useState, useRef } from "react";

const Card = () => {
  const cards = [
    {
      title: "Admissions 24-25",
      content: [
        "Students of State Universities of Delhi",
        "Financial Assistance to the students Under EWS Scheme",
        "ACM-USICT",
        "USS Placement Coordinators",
        "Alumni Portal",
        "NCC Cadet Enrolment Drive",
      ],
      buttonText: "Apply Online",
    },
    {
      title: "Students",
      content: [
        "Students of State Universities of Delhi",
        "Financial Assistance to the students Under EWS Scheme",
        "ACM-USICT",
        "USS Placement Coordinators",
        "Alumni Portal",
        "NCC Cadet Enrolment Drive",
      ],
      buttonText: "Online Fee Services",
    },
    {
      title: "Important Links",
      content: [
        "Students of State Universities of Delhi",
        "Financial Assistance to the students Under EWS Scheme",
        "ACM-USICT",
        "USS Placement Coordinators",
        "Alumni Portal",
        "NCC Cadet Enrolment Drive",
      ],
      buttonText: "Online Portal",
    },
    {
      title: "Alerts & Circulars",
      content: [
        "Students of State Universities of Delhi",
        "Financial Assistance to the students Under EWS Scheme",
        "ACM-USICT",
        "USS Placement Coordinators",
        "Alumni Portal",
        "NCC Cadet Enrolment Drive",
      ],
      buttonText: "View Notices",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = entries.map((entry, index) =>
          entry.isIntersecting ? index : null
        );
        setVisibleCards(updatedVisibility.filter((i) => i !== null));
      },
      { threshold: 1.0 } // Fully visible
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Information Bulletin
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            <h3 className="text-xl font-semibold px-3 py-2 text-blue-800 border-b border-blue-200 text-center">
              {card.title}
            </h3>
            <div className="relative flex-grow overflow-hidden group">
              <div
                className={`p-2 ${
                  visibleCards.includes(index) ? "animate-scroll" : ""
                }`}
              >
                <ul className="space-y-2">
                  {[...card.content, ...card.content].map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:bg-blue-100 rounded py-1 px-2 transition-colors"
                    >
                      <a href="#" className="text-gray-700 hover:text-blue-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-2">
              <button className="w-full py-3 bg-blue-900 text-yellow-400 rounded text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors font-medium">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const style = `
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 10s linear infinite;
  }

  .group:hover .animate-scroll {
    animation-play-state: paused;
  }
`;

export default () => (
  <>
    <style>{style}</style>
    <Card />
  </>
);
