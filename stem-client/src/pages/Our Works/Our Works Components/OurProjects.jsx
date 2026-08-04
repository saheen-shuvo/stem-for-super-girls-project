import op1 from "../../../assets/ourWorksImage/ourProjectImage/op1.jpg";
import op2 from "../../../assets/ourWorksImage/ourProjectImage/op2.jpg";
import op3 from "../../../assets/ourWorksImage/ourProjectImage/op3.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "STEM Outreach Events",
    description:
      "Community-based events designed to raise awareness and excitement around science, technology, engineering, and mathematics.",
    image: op1,
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
  {
    id: 2,
    title: "STEM School Camp",
    description:
      "Hands-on science camps bringing interactive experiments and tech tools directly to rural and underserved schools.",
    image: op2,
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 3,
    title: "Programming with Makey Makey",
    description:
      "Creative coding sessions using Makey Makey kits to teach programming through play and invention.",
    image: op3,
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
  },
];

const OurProjects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
          <p className="mt-3 text-gray-600">
            Explore the Work That Defines Who We Are
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#f7efe8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <a href="https://stemforsupergirls.com/projects/food-collect-for-child/">
                  {" "}
                  <button
                    className={`px-5 py-2 text-white font-medium rounded-md transition ${project.buttonColor}`}
                  >
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProjects;
