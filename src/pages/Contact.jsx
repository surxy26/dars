import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import { SITE } from "../utils/constants";

function Contact() {
  return (
    <section className="section-padding">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s create something visually strong together"
          text="For design work, content support, or collaboration, feel free to reach out."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">Contact Details</h3>
            <div className="mt-6 space-y-4 text-neutral-300">
              <p>
                <span className="text-neutral-400">Email:</span> {SITE.email}
              </p>
              <p>
                <span className="text-neutral-400">Phone:</span> {SITE.phone}
              </p>
              <p>
                <span className="text-neutral-400">Location:</span> {SITE.location}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${SITE.email}`}>Send Email</Button>
              <Button href={SITE.portfolio} variant="outline">
                View Facebook Portfolio
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">Quick Message</h3>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-500"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-500"
              />
              <Button type="button">Send Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;