import Reveal from "../animations/Reveal";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionTitle
            eyebrow="About Me"
            title="A creative designer with practical experience in design and digital content."
            text="I create visuals that are simple, polished, and engaging. My work covers social media design, posters, layout design, and basic video editing using Adobe tools, Canva, and CapCut."
          />
          <div className="mt-6">
            <Button to="/about" variant="outline">
              More About Me
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-3xl p-6">
              <p className="text-4xl font-semibold">3+</p>
              <p className="mt-2 text-neutral-300">Core creative areas</p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <p className="text-4xl font-semibold">10+</p>
              <p className="mt-2 text-neutral-300">Design-related skills</p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <p className="text-4xl font-semibold">Modern</p>
              <p className="mt-2 text-neutral-300">Visual style approach</p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <p className="text-4xl font-semibold">Clear</p>
              <p className="mt-2 text-neutral-300">Content communication</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutPreview;