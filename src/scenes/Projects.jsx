import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, project_title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{project_title}</p>
        <p className="mt-7">{subtitle}</p>
        <a href={link} className="mt-7" target="_blank" rel="noreferrer">
          <u>Link</u>
        </a>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red hover:text-blue transition duration-500">
              Pro
            </span>
            jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Always focused on exploring unexplored avenues in software!<br></br>{" "}
          Full-stack development and AI are my forte!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red hover:bg-blue transition duration-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Fullstack Development & Artificial Intelligence
          </div>
          <Project
            title="Project-1"
            subtitle="A website where users can find books, post books, write reviews, and engage in discussions on a message board!"
            project_title="Book Exchange Website"
            link="https://github.com/sskarz/Book-Store-Web-Project"
          />
          <Project
            title="Project-2"
            subtitle="A custom fine-tuned GPT-2 model that imitates user input to generate text!"
            project_title="GPT-2 AI User Imitation"
            link="https://github.com/sskarz/GPT-2-AI-User-Imitation"
          />

          <Project
            title="Project-3"
            subtitle="My Portfolio website built using React, TailwindCSS, and Framer Motion!"
            project_title="Portfolio Website"
            link="https://github.com/sskarz/PortfolioWebsite"
          />

          <Project
            title="Project-4"
            subtitle="A pizza menu website inspired by the design of California Pizza Kitchen, built using React and custom CSS!"
            project_title="Pizza React Menu Website"
            link="https://github.com/sskarz/pizza-menu"
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue hover:bg-yellow transition duration-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Smooth User Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
