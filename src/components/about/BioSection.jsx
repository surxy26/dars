import SectionTitle from "../common/SectionTitle";
import { SITE } from "../../utils/constants";

function BioSection() {
  return (
    <section className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-[2rem] p-4">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Designer workspace"
            className="h-full min-h-[400px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div>
          <SectionTitle
            eyebrow="Profile"
            title="Darwin John L. Canda"
            text="Creative Multimedia Designer with hands-on experience in graphic design, video editing, and digital content creation."
          />

          <div className="mt-6 space-y-4 text-neutral-300">
            <p>
              I focus on creating clean and engaging visuals that help brands
              and teams communicate clearly. My work includes social media
              content, posters, digital graphics, layout design, and simple
              video editing.
            </p>
            <p>
              I also have practical experience supporting technical tasks such
              as software setup and basic troubleshooting, which helps me stay
              flexible in creative and workplace environments.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <p className="text-sm text-neutral-400">Location</p>
              <p className="mt-1">{SITE.location}</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-sm text-neutral-400">Email</p>
              <p className="mt-1">{SITE.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioSection;