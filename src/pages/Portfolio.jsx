import { useMemo, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import projects from "../data/projects";

function Portfolio() {
  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Portfolio"
          title="Creative works and sample projects"
          text="Explore selected works in graphic design, posters, layouts, and digital content."
        />

        <div className="mt-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="mt-10">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;