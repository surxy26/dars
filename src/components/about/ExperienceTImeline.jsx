import SectionTitle from "../common/SectionTitle";

function ExperienceTimeline() {
  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Experience"
          title="Work and education"
          text="A short overview of my professional background and education."
        />

        <div className="mt-10 space-y-6">
          <div className="glass-card rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Work Experience
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Creative Assistant / Graphic Designer / IT Staff
            </h3>
            <p className="mt-2 text-neutral-400">
              On-site | Confidential Company
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Handled multimedia design tasks including graphics and basic video editing.</li>
              <li>Assisted in creating digital content for marketing and internal use.</li>
              <li>Supported technical tasks related to software setup and basic troubleshooting.</li>
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Education
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              BS in Information Technology
            </h3>
            <p className="mt-2 text-neutral-300">Access Computer College | 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;