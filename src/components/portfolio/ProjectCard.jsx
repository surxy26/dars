import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animationVariants";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">{project.category}</p>
            <p className="text-sm text-neutral-500">{project.year}</p>
          </div>

          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 leading-7 text-neutral-300">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export default ProjectCard;