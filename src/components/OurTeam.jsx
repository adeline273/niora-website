import './OurTeam.css';
import adelinePhoto from '../assets/team/adeline.png';
import clementPhoto from '../assets/team/clement.png';
import sylvesterPhoto from '../assets/team/sylvester.png';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Adeline Pinyu Liao',
      role: 'Researcher at Stanford University, Founder of Niora Systems',
      imageAlt: 'Young Asian woman with long dark hair, smiling',
      image: adelinePhoto
    },
    {
      name: 'Clement Danso',
      role: 'Technical Product Lead, Co-Founder of Niora Ghana',
      imageAlt: 'Team member photo placeholder',
      image: clementPhoto
    },
    {
      name: 'Sylvester Denyoh',
      role: 'Strategic Partnerships Lead, Co-Founder of Niora Ghana',
      imageAlt: 'Team member photo placeholder',
      image: sylvesterPhoto
    },
    {
      name: 'Nii Ofoli Quaye',
      role: 'Operations Lead, Co-Founder of Niora Ghana',
      imageAlt: 'Photo coming soon – joining December',
      joiningSoon: true
    }
  ];

  return (
    <section id="our-team" className="our-team">
      <div className="our-team-container">
        <div className="our-team-header">
          <h2 className="section-title">Our Team</h2>
          <p className="our-team-intro">
            Our team is a cross-continental collaboration between experts across Stanford and leading institutions, 
            blending global health research, supply-chain innovation, and real-world clinical experience.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              {member.image ? (
                <img src={member.image} alt={member.imageAlt} className="team-image" />
              ) : (
                <div className={`team-image-placeholder ${member.joiningSoon ? 'joining-soon' : ''}`}>
                  <span>{member.imageAlt}</span>
                  {member.joiningSoon && <span className="joining-badge">Joining December</span>}
                </div>
              )}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;

