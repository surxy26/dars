import SectionTitle from "../common/SectionTitle";
import projects from "../../data/projects";
import ProjectGrid from "../portfolio/ProjectGrid";

function FeaturedWorks() {
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Featured Works"
          title="Selected projects and visual design samples"
          text="A collection of sample works that reflect my style in graphic design, layout design, and video content."
        />
        <div className="mt-10">
          <ProjectGrid projects={featured} />
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorks;