import './LearnMore.css';

const VIDEO_ID = 'vrVEfdFiZEs';

function LearnMore() {
  return (
    <section id="learn-more" className="learn-more">
      <div className="learn-more-container">
        <h2 className="section-title">Learn More</h2>
        <div className="video-container">
          <div className="video-frame">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="Niora Systems Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <p className="video-caption">
          Watch how Niora is ending drug stockouts globally.
        </p>
      </div>
    </section>
  );
}

export default LearnMore;

