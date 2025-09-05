import { personalInfo } from '../../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hey, I'm <span className="text-gradient">{personalInfo.name}</span> 👋🏻
            </h1>
            <h2 className="hero-subtitle text-gradient">{personalInfo.title}</h2>
            <p className="hero-description text-large">{personalInfo.bio}</p>

            <div className="hero-actions">
              <button className="btn btn-primary">
                Get In Touch
              </button>
              <button className="btn btn-secondary">
                Browse Projects
              </button>
            </div>
          </div>

          <div className="hero-image">
            {personalInfo.avatarUrl ? (
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="avatar"
              />
            ) : (
              <div className="avatar-placeholder">
                <span>{personalInfo.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
