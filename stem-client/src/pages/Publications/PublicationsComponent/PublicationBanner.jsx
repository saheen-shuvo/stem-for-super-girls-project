import img from "../../../assets/publicationsImage/publicationBannerImg.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PublicationBanner = () => {
  return (
    <section className="bg-[#f3fbf7] py-8 lg:py-20 lg:px-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-600 tracking-[0.3em] uppercase text-sm mb-4">
            Empower Educate Evolve
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            STEM Education for Future <br /> Innovators
          </h1>

          <p className="text-gray-700 max-w-xl leading-relaxed">
            Dedicated to providing young minds across Bangladesh with the tools,
            knowledge, and confidence to excel in science, technology,
            engineering, and math. Our mission is to create a supportive
            environment where curiosity thrives, barriers are broken, and the
            next generation of leaders in STEM is born.
          </p>
        </motion.div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Decorative shapes */}
          <div className="absolute -z-10 bg-yellow-300/60 w-72 h-72 rounded-[40%] right-16 top-20"></div>
          <div className="absolute -z-10 border-2 border-gray-900 rounded-3xl w-64 h-80 right-8 top-12"></div>

          <img
            src={img}
            alt="STEM Education Banner"
            className="w-[320px] md:w-[360px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationBanner;
