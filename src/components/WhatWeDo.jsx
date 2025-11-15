import './WhatWeDo.css';

function WhatWeDo() {
  const services = [
    {
      title: 'Predictive Procurement',
      description: 'We provide hospitals with subscription-based contracting that stabilizes cash flow and eliminates procurement delays, giving them predictable budgets and reliable access to essential medicines.',
      imageAlt: 'Healthcare worker in hospital room'
    },
    {
      title: 'Intelligent Forecasting',
      description: 'Our demand forecasting tools leverage hospital data to anticipate drug needs, preventing shortages and overstock by aligning procurement with real usage. We help hospitals reduce waste, cut costs, and ensure quality patient care.',
      imageAlt: 'Digital dashboard with graphs and data'
    },
    {
      title: 'Infrastructure Integration',
      description: 'We\'re building the rails for pharmaceutical supply in emerging markets by automating procurement and streamlining pharmacist workflows, making hospital operations smoother and more reliable.',
      imageAlt: 'Modern hospital building complex from aerial view'
    }
  ];

  return (
    <section id="what-we-do" className="what-we-do">
      <div className="what-we-do-container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-placeholder">
                <span>{service.imageAlt}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;

