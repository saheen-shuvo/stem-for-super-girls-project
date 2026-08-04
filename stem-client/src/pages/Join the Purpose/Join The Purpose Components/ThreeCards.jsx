// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

const ThreeCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#c9e7ef] rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-105"
        >
          <p className="text-sm font-semibold tracking-wide mb-4">
            BE OUR PARTNER
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Join Hands to Empower Girls in STEM
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Partner with us to create systemic change. Whether you’re an
            educational institution, tech company, nonprofit, or creative
            studio, your expertise and resources can help us scale our impact.
            From content creation to training support or digital outreach, we
            welcome collaborations that unlock opportunities for the next
            generation of female STEM leaders.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-6 py-3 font-semibold rounded-md">
            PARTNER WITH US
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#4b5a2a] text-white rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-105"
        >
          <p className="text-sm font-semibold tracking-wide mb-4">
            DONATE FOR OUR CAUSE
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Support a Girl's Journey into Science and Innovation
          </h2>
          <p className="mb-8 leading-relaxed">
            Your donation fuels hands-on STEM experiences, mentorship, and
            learning kits for girls in under-resourced communities. Help us
            break cycles of exclusion and open doors to future careers in
            science, engineering, and technology. Every contribution—big or
            small—builds a more inclusive and inventive tomorrow.
          </p>
          <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors px-6 py-3 font-semibold rounded-md">
            CONTACT US
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#f7e36f] rounded-2xl p-8 transition-transform duration-300 ease-out hover:scale-105"
        >
          <p className="text-sm font-semibold tracking-wide mb-4">
            VOLUNTEER WITH US
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Share Your Time, Skills, and Passion for Change
          </h2>
          <p className="text-gray-800 mb-8 leading-relaxed">
            Whether you’re a student, educator, professional, or enthusiast—
            your time can spark lasting transformation. Support us in organizing
            STEM camps, facilitating sessions, mentoring girls, or building our
            online learning platforms. Every hour you contribute helps
            dismantle barriers and ignite curiosity.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-6 py-3 font-semibold rounded-md">
            BECOME A VOLTEER
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeCards;
