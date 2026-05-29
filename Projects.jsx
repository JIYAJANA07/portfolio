function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h4>My Projects</h4>

      <h1>
        Featured <span>Projects</span>
      </h1>

      <div className="projects-container">

        {/* Expense Tracker */}

        <div className="project-card">

          <h2>Expense Tracker</h2>

          <p>
            A React JS based expense management application
            where users can add and organize expenses into
            “Needs” and “Wants” categories.
          </p>

          <p>
            The project helps users track spending habits
            with a clean interface, responsive design and
            simple expense management features.
          </p>

          <div className="project-tech">
            <span>React JS</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

        </div>

        {/* LendPeer Dashboard */}

        <div className="project-card">

          <h2>LendPeer Dashboard</h2>

          <p>
            A modern dashboard UI designed for a peer-to-peer
            lending platform with an attractive and responsive
            user interface.
          </p>

          <p>
            The dashboard includes sections for analytics,
            transactions, financial insights and user-friendly
            navigation to improve overall user experience.
          </p>

          <div className="project-tech">
            <span>React JS</span>
            <span>Frontend UI</span>
            <span>Responsive Design</span>
          </div>

        </div>

        {/* Portfolio */}

        <div className="project-card">

          <h2>Personal Portfolio</h2>

          <p>
            A responsive personal portfolio website created
            to showcase my skills, projects and frontend
            development journey.
          </p>

          <p>
            Designed with modern UI principles, smooth layouts
            and interactive sections for a professional look.
          </p>

          <div className="project-tech">
            <span>React JS</span>
            <span>CSS</span>
            <span>UI Design</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;