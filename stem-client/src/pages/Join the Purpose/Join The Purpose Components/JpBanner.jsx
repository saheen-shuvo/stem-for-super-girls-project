// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import img1 from "../../../assets/joinPurposeImage/jpBannerImage/jpBanner1.png";
import img2 from "../../../assets/joinPurposeImage/jpBannerImage/jpBanner2.png";
import img3 from "../../../assets/joinPurposeImage/jpBannerImage/jpBanner3.png";

const JpBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-teal-500 font-semibold mb-2">
            Join the movement to
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 leading-tight">
            Spark <br /> STEM Dreams
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-500 mt-2">
            across Bangladesh
          </h2>

          <p className="text-gray-600 mt-6 max-w-xl">
            Every day, changemakers students, parents, educators, and youth
            allies—are helping to close the gender gap in STEM by volunteering,
            donating, and spreading awareness. These collective actions power a
            growing national movement. With your support, STEM for Supergirls
            has already reached over 6,000 girls, delivering hands-on
            workshops, digital courses, and community programs that ignite
            curiosity and build confidence in science, technology, engineering,
            and mathematics. Together, we’re transforming potential into
            possibility—one girl at a time.
          </p>
        </motion.div>

        {/* Right Images */}
        <motion.div
          className="flex gap-2 md:gap-6 justify-center lg:justify-end"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={img1}
            alt="banner-1"
            className="w-28 md:w-40 h-72 md:h-80 object-cover rounded-2xl"
          />
          <img
            src={img2}
            alt="banner-2"
            className="w-28 md:w-40 h-76 md:h-88 object-cover rounded-2xl"
          />
          <img
            src={img3}
            alt="banner-3"
            className="w-28 md:w-40 h-72 md:h-80 object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JpBanner;
