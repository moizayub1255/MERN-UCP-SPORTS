import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is GameOn?",
      answer: "GameOn is your ultimate destination for live sports streaming, delivering high-quality coverage of football, basketball, cricket, tennis, Formula 1, and more. We bring you closer to the game with exclusive content and expert analysis."
    },
    {
      question: "How much does GameOn cost?",
      answer: "We offer three flexible plans: GamePass Basic ($8.99/month) for single-sport access, GamePass Pro ($13.99/month) for multi-sport viewing, and GamePass Ultimate ($17.99/month) with 4K streaming, offline downloads, and access to all sports. Save 20% with annual billing."
    },
    {
      question: "Where can I watch GameOn?",
      answer: "Stream GameOn anywhere on our website, mobile apps (iOS/Android), smart TVs (Apple TV, Roku, Fire TV, Android TV), gaming consoles (PlayStation 5, Xbox Series X), and supported browsers. Available in 60+ countries with regional content."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Cancel anytime from your account dashboard. Go to 'My Account' → 'Subscription' → 'Cancel Plan'. Your access continues until the current billing period ends. No cancellation fees, no questions asked."
    },
    {
      question: "What sports content is available on GameOn?",
      answer: "We stream live matches from Premier League, NBA, NFL, ICC Cricket, Wimbledon, F1 Grand Prix, and more. Plus enjoy original shows, documentaries, classic matches, and daily highlights. New content added weekly!"
    },
    {
      question: "Is GameOn suitable for children?",
      answer: "Absolutely! GameOn Junior offers kid-friendly sports content, educational programs, and parental controls. Set viewing limits, restrict mature content, and ensure a safe, inspiring sports experience for young fans."
    },
    {
      question: "Can I watch on multiple devices at once?",
      answer: "Yes! Ultimate plan: 4 simultaneous streams. Pro plan: 3 streams. Basic plan: 1 stream. Watch different games on different devices with personalized profiles for each family member."
    },
    {
      question: "Do you offer offline viewing?",
      answer: "Download matches, documentaries, and highlights to watch offline with our mobile apps. Perfect for travel! Content stays available for 48 hours after starting playback or 30 days from download."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 text-dark mb-3">
              Frequently Asked Questions
            </h1>
            <p className="lead text-muted">
              Get quick answers to common questions about GameOn Sports Streaming
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item border-0 mb-3 shadow-sm" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${activeIndex === index ? '' : 'collapsed'} fw-semibold`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                    style={{
                      backgroundColor: activeIndex === index ? '#f8f9fa' : 'white',
                      fontSize: '1.1rem',
                      color: '#212529',
                      padding: '1.25rem 1.5rem'
                    }}
                  >
                    {faq.question}
                    <span className="ms-auto">
                      {activeIndex === index ? (
                        <i className="bi bi-dash-circle text-primary"></i>
                      ) : (
                        <i className="bi bi-plus-circle text-primary"></i>
                      )}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                >
                  <div className="accordion-body pt-3 pb-4 px-4 px-lg-5">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-info-circle-fill text-primary me-3 mt-1"></i>
                      <p className="mb-0 text-dark" style={{ lineHeight: '1.7' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="card border-0 shadow-lg mt-5" style={{ backgroundColor: '#f0f8ff' }}>
            <div className="card-body p-4 p-lg-5 text-center">
              <div className="row align-items-center">
                <div className="col-md-8 text-md-start mb-3 mb-md-0">
                  <h4 className="fw-bold text-dark mb-2">Need more help?</h4>
                  <p className="text-muted mb-0">
                    Our support team is available 24/7 to assist you with any questions.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary btn-lg px-4">
                      <i className="bi bi-headset me-2"></i>
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="row text-center mt-5 pt-4">
            <div className="col-md-4 mb-4">
              <div className="h2 fw-bold text-primary">24/7</div>
              <div className="text-muted">Support Available</div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h2 fw-bold text-primary">99.9%</div>
              <div className="text-muted">Streaming Uptime</div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h2 fw-bold text-primary">60+</div>
              <div className="text-muted">Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;