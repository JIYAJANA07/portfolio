function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h4>My Skills</h4>

      <h1>
        Technologies I’m <span>Learning & Working With</span>
      </h1>

      <div className="skills-container">

        {/* HTML */}

        <div className="skill-card">
          <h2>HTML</h2>

          <p>
            Used for creating the structure and layout
            of web pages with clean semantic elements.
          </p>
        </div>

        {/* CSS */}

        <div className="skill-card">
          <h2>CSS</h2>

          <p>
            Helps in styling websites with responsive
            layouts, animations and modern UI designs.
          </p>
        </div>

        {/* JavaScript */}

        <div className="skill-card">
          <h2>JavaScript</h2>

          <p>
            Adds interactivity and dynamic functionality
            to websites for better user experience.
          </p>
        </div>

        {/* React */}

        <div className="skill-card">
          <h2>React JS</h2>

          <p>
            A frontend library used to build fast,
            reusable and interactive user interfaces.
          </p>
        </div>

        {/* Python */}

        <div className="skill-card">
          <h2>Python</h2>

          <p>
            Used for problem solving, logic building
            and learning programming fundamentals.
          </p>
        </div>

        {/* GitHub */}

        <div className="skill-card">
          <h2>Git & GitHub</h2>

          <p>
            Used for version control, project management
            and collaboration in development projects.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Skills;