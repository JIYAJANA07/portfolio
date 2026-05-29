function Contact() {
  return (
    <section className="contact-section" id="contact">

      <h4>Contact Me</h4>

      <h1>
        Let’s <span>Connect</span>
      </h1>

      <p className="contact-text">
        I’m always open to learning opportunities,
        collaborations and frontend development projects.
      </p>

      <div className="contact-container">

        {/* EMAIL */}

        <div className="contact-card">
          <h2>Email</h2>

          <a href="mailto:jiyajana456@gmail.com">
            jiyajana456@gmail.com
          </a>
        </div>

        {/* LINKEDIN */}

        <div className="contact-card">
          <h2>LinkedIn</h2>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;