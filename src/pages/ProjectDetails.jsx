import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <section className="section-padding">
        <div className="container-shell">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-black"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-shell">
        <Link to="/portfolio" className="text-sm text-neutral-400 hover:text-white">
          ← Back to Portfolio
        </Link>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold">{project.title}</h1>
            <p className="mt-5 leading-8 text-neutral-300">{project.description}</p>

            <div className="mt-8 grid gap-6">
              <div>
                <h2 className="text-xl font-semibold">Challenge</h2>
                <p className="mt-2 text-neutral-300 leading-7">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Solution</h2>
                <p className="mt-2 text-neutral-300 leading-7">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Result</h2>
                <p className="mt-2 text-neutral-300 leading-7">{project.results}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-card rounded-3xl p-6">
              <p className="text-sm text-neutral-400">Year</p>
              <p className="mt-2 text-lg">{project.year}</p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <p className="text-sm text-neutral-400">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="h-80 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;