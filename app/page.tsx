const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

const projects = [
  {
    name: "TaskFlow",
    description: "A productivity dashboard for organizing work, deadlines, and team priorities.",
  },
  {
    name: "Pulse Commerce",
    description: "An e-commerce storefront focused on fast browsing, clear product discovery, and smooth checkout.",
  },
  {
    name: "Atlas Notes",
    description: "A collaborative notes app with real-time editing and structured knowledge capture.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <div className="hero-topline">
          <p className="eyebrow">Vikas Bek</p>
          <nav aria-label="Primary" className="hero-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <h1>Full Stack Developer building clean, reliable web experiences.</h1>
        <p className="lede">
          I design and ship modern applications with a focus on performance, usability, and maintainable code.
        </p>
      </section>

      <section className="panel" id="about">
        <h2>About</h2>
        <p>
          I build responsive interfaces and end-to-end web products that balance thoughtful design with practical
          engineering. My work spans frontend polish, backend APIs, and the details that make a product feel complete.
        </p>
      </section>

      <section className="panel" id="skills">
        <h2>Skills</h2>
        <ul className="chip-list">
          {skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="panel" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact" id="contact">
        <h2>Contact</h2>
        <p>Open to full stack roles, freelance projects, and product collaborations.</p>
        <a href="mailto:vikas.bek@example.com">vikas.bek@example.com</a>
      </section>
    </main>
  );
}
