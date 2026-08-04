import ct1 from "../../assets/aboutUsImage/coreTeamImg/ct1.jpg";
import ct2 from "../../assets/aboutUsImage/coreTeamImg/ct2.jpg";
import ct3 from "../../assets/aboutUsImage/coreTeamImg/ct3.jpg";
import ct4 from "../../assets/aboutUsImage/coreTeamImg/ct4.jpg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Shamsun Nahar",
    role: "Lead, Administration and Talent Development",
    desc: "Business Analyst, BRAC IT Solution Ltd.",
    img: ct1,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
  {
    name: "Farzana Yeasmin",
    role: "Lead, Product and curriculum development",
    desc: "Graduate Student, Wichita State University",
    img: ct2,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
  {
    name: "Debanjana Saha",
    role: "Lead, Training and skills Development Software",
    desc: "QA Engineer, Ecologix",
    img: ct3,
    linkedin: "https://www.linkedin.com/in/debanjana-saha-0b8250142/",
  },
  {
    name: "Asif Amer",
    role: "Lead, Product and curriculum development Ex-fellow",
    desc: "Teach for Bangladesh Development Practitioner",
    img: ct4,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
];

const CoreTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-24"
    >
      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          The Core Team
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Driving the company’s vision with leadership and innovation.
          Responsible for strategic decisions and overall direction.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-72 object-cover rounded transform transition-transform duration-300 hover:scale-105"
            />

            <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>

            <p className="text-sm text-gray-800 mt-1">{member.role}</p>

            <p className="text-sm text-gray-600 mt-1">{member.desc}</p>

            <a
              href={member.linkedin}
              className="inline-flex items-center gap-2 mt-3 text-sm text-teal-600 hover:underline"
            >
              <span className="font-semibold">in</span> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreTeam;
