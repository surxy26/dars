import { motion } from "framer-motion";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import { SITE } from "../../utils/constants";

function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_22%)]" />
      <div className="container-shell relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-400"
          >
            Multimedia Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl"
          >
            Creating clean, modern, and engaging visual content that connects
            with people.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300"
          >
            I’m {SITE.name}, a designer specializing in graphic design, video
            editing, and digital content creation for marketing and visual
            communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05 }}
            className="mt-8 flex flex-wrap gap-4"
          >
<Button
  to="/portfolio"
  className="!text-black"
>
  View Portfolio
</Button>            <Button to="/contact" variant="outline">
              Let’s Work Together
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-[2rem] p-4 shadow-2xl"
        >
          <div className="overflow-hidden rounded-[1.5rem]">
<img
  src="/dars.png"
  alt="Darwin Canda"
  className="h-[520px] w-auto mx-auto object-contain"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;