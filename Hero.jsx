import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h3>Hello 👋</h3>

        <h1>
          I'm <span>Jiya Jana</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I build beautiful and responsive websites using
          React JS, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">
          <button>Hire Me</button>
          <button className="outline-btn">Projects</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;