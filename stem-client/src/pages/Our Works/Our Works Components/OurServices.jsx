import os1 from "../../../assets/ourWorksImage/ourServicesImage/os.jpg";
import os2 from "../../../assets/ourWorksImage/ourServicesImage/os1.jpeg";
import os3 from "../../../assets/ourWorksImage/ourServicesImage/os2.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Innovative Learning Design",
    description:
      "We create interactive virtual courses, tailored curricula, and engaging learning materials to make education impactful.",
    image: os1,
    tag: "#Hands-on-Activity",
    link: "https://stemforsupergirls.com/services/innovative-learning-design/",
  },
  {
    id: 2,
    title: "Skills for Future Leaders",
    description:
      "Our training programs build leadership, facilitation, and subject-matter skills to empower the next generation.",
    image: os2,
    link: "https://stemforsupergirls.com/services/skills-for-future-leaders/",
  },
  {
    id: 3,
    title: "STEM Experiences in Schools",
    description:
      "We design and deliver hands-on STEM camps and outreach events that spark curiosity in classrooms.",
    image: os3,
    link: "https://stemforsupergirls.com/services/stem-experiences-in-schools/",
  },
];

const OurServices = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600">
            Explore the Work That Defines Who We Are
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                {service.tag && (
                  <span className="inline-block mb-3 text-sm text-blue-600 font-medium">
                    {service.tag}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-700 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices;
