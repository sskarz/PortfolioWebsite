import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My{" "}
            <span className="text-red hover:text-blue transition duration-500">
              Skills
            </span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            My skillset is diversified in all aspects of software engineering!
            From building full-stack web apps to fine-tuning AI models, and even
            configuring time-series databases!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
      {/* Skills Section */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Programming Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"></div>
          </div>
          <div className="mt-5">
            <LineGradient />
            <ul>
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>C#</li>
              <li>Java</li>
              <li>SQL</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>
        </motion.div>

        {/* Innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tools and Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          </div>
          <div className="mt-5">
            <LineGradient />
            <ul>
              <li>Github</li>
              <li>Docker</li>
              <li>JIRA</li>
              <li>Microsoft Azure</li>
              <li>Amazon Web Services</li>
              <li>Linux</li>
              <li>Agile Development</li>
            </ul>
          </div>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frameworks and Libraries
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
          </div>
          <div className="mt-5">
            <LineGradient />
            <ul>
              <li>React</li>
              <li>PyTorch</li>
              <li>NodeJS</li>
              <li>Tailwind CSS</li>
              <li>TensorFlow</li>
              <li>MongoDB</li>
              <li>Django</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
