import './PartnerPerspectives.css';
import chuckPhoto from '../assets/partners/chuck.png';

function PartnerPerspectives() {
  const testimonials = [
    {
      quote: "I'm beyond grateful for the support provided by this organization. Their dedication and generosity have made a significant difference in my life. Thank you for everything that you do.",
      author: "Sample Person (Hospital)",
      imageAlt: "Young man with short dark hair and beard, smiling"
    },
    {
      quote: "With reliable medicines now guaranteed, I can focus my energy on responsible antibiotic use and providing pharmaceutical care my patients deserves.",
      author: "Chuck A. (Trust Hospital)",
      imageAlt: "Older man with grey hair and beard, smiling",
      image: chuckPhoto
    }
  ];

  return (
    <section id="partner-perspectives" className="partner-perspectives">
      <div className="partner-perspectives-container">
        <div className="partner-perspectives-content">
          <div className="partner-perspectives-text">
            <h2 className="section-title-light">Partner Perspectives</h2>
            <p>
              At Niora, our impact is measured through the trust of those who use our systems every day. 
              From hospital pharmacists to policymakers, our partners share how reliable procurement 
              transforms healthcare delivery and restores confidence in supply chains.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    className="testimonial-image"
                  />
                ) : (
                  <div className="testimonial-image-placeholder">
                    <span>{testimonial.imageAlt}</span>
                  </div>
                )}
                <div className="testimonial-quote-box">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-author">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerPerspectives;

