import SectionTitle from "../common/SectionTitle";
import skills from "../../data/skills";

function Skills() {
  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Skills"
          title="Tools and capabilities"
          text="My skill set covers graphic design, digital content, editing tools, and basic technical support."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;