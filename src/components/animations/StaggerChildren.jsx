import { motion } from "framer-motion";
import { staggerParent } from "../../utils/animationVariants";

function StaggerChildren({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default StaggerChildren;