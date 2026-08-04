import img from "../../../assets/ourWorksImage/ourWorksBannerImg.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OurWorksBanner = () => {
  return (
    <section className="bg-[#FFF7F3] py-8 lg:py-20 lg:px-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-500 tracking-[0.3em] text-sm font-semibold mb-3">
            STEM FOR SUPER GIRLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-xl mb-8">
            From classrooms in rural villages to virtual labs online, our
            projects bring science, technology, and innovation to young
            minds—especially girls who are often left behind. Explore our
            initiatives, services, and events that are shaping a more inclusive,
            curious, and empowered generation.
          </p>

          <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Our Projects
            <span className="text-lg">↓</span>
          </button>
        </motion.div>

        {/* Right image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[360px] h-[360px] bg-lime-400 rounded-[40%] -z-10"></div>
          </div>

          <img
            src={img}
            alt="Our Work"
            className="max-w-sm w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorksBanner;
