import React, { useEffect, useRef } from 'react';

const featuresData = [
  {
    id: 1,
    title: "VTO (Virtual Try-On)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 4.5 L12 6.5 L17 4.5 L21 7.5 L18.5 10 L17 9 V20 H7 V9 L5.5 10 L3 7.5 L7 4.5 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M10 6.2 C10.8 7.2 13.2 7.2 14 6.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "See it on before you buy. Our realistic VTO lets you experiment with styles risk-free from the comfort of your home."
  },
  {
    id: 2,
    title: "Wardrobe Management",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
      </svg>
    ),
    description: "Digitize your closet. We'll help you rediscover old favourites and see how new items fit with what you already own."
  },
  {
    id: 3,
    title: "Recommendation Engine",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Your personal AI Stylist. Get hyper-personalized outfit recommendations based on your style, body type and the occasion."
  },
  {
    id: 4,
    title: "Human Stylist Access",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg>
    ),
    description: "Need a human touch? Connect with professional stylists for expert advice, event styling, or a complete wardrobe overhaul."
  },
  {
    id: 5,
    title: "Budget-Friendly Shopping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
      </svg>
    ),
    description: "Look great without breaking the bank. Our AI finds the best deals and stylish alternatives that match your budget."
  },
  {
    id: 6,
    title: "Trend Engine",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    description: "Stay ahead of the curve. We analyze runway, street style and social media trends to show you what's next in fashion."
  },
  {
    id: 7,
    title: "Comparometer",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3V21M7 21L4 18M7 21L10 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17 21V3M17 3L14 6M17 3L20 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Compare products across multiple brands in one place. Analyse price, material and reviews to make the smartest choice."
  },
  {
    id: 8,
    title: "Inspiration Feed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
      </svg>
    ),
    description: "A shoppable feed of style inspiration, curated just for you. See a look you love? Find out where to get it instantly."
  },
  {
    id: 9,
    title: "Occasion Search Modes",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="11"
          cy="11"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M20 20L16.5 16.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Searching for a specific event? Use modes like Wedding Guest or Job Interview to get perfectly appropriate suggestions."
  }
];

function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const isActive = card.classList.contains('active');

    // Close all cards
    cardsRef.current.forEach((c) => {
      if (c) c.classList.remove('active', 'ripple');
    });

    // If it wasn't active, open it and add ripple
    if (!isActive) {
      card.classList.add('active');
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--ripple-x', `${x}px`);
      card.style.setProperty('--ripple-y', `${y}px`);
      card.classList.add('ripple');
      
      setTimeout(() => {
        card.classList.remove('ripple');
      }, 800);
    }
  };

  return (
    <section className="features" id="features">
      <h2 className="features-title">The Future of Fashion is Here !</h2>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card"
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={(e) => handleCardClick(e, index)}
          >
            <div className="feature-header">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
            </div>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;