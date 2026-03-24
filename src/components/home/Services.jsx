import Reveal from "../animations/Reveal";
import SectionTitle from "../common/SectionTitle";
import services from "../../data/services";

function Services() {
  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Services"
          title="What I can help you with"
          text="Creative support for visuals, promotional materials, and content assets."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="glass-card h-full rounded-3xl p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;