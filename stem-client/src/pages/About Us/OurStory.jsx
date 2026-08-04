import img from "../../assets/aboutUsImage/ourStoryImg.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-teal-500 uppercase font-semibold tracking-widest text-3xl mb-6">
            Our Story
          </h2>

          <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-5 leading-snug">
            Addressing Barriers and Creating Opportunities: Empowering Girls in
            Bangladesh to Pursue STEM Education and Careers
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            In the quiet corners of Bangladesh’s underserved communities, we saw
            a glaring injustice—brilliant young girls being overlooked in
            science, technology, engineering, and math simply because of who
            they are and where they come from. As bold educationists, we
            couldn’t turn away. We witnessed girls with curiosity, talent, and
            dreams being told that STEM wasn’t for them. So we set out to change
            that narrative.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            STEM for Supergirls was born from a belief that potential knows no
            gender, and every girl deserves the tools to explore her power. What
            began in one marginalized community is now a nationwide movement
            that has sparked curiosity and confidence in 6,000+ girls across
            Bangladesh. Through hands-on learning, digital access, role model
            mentorship, and inclusive curriculum, we’re not just teaching
            STEM—we’re building a future where girls lead in labs, boardrooms,
            and beyond. When girls are given the chance to learn, lead, and
            dream, they don’t just succeed—they soar.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <img
            src={img}
            alt="Girls learning STEM"
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
