import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animationVariants";

function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-neutral-300">{text}</p>}
    </motion.div>
  );
}

export default SectionTitle;