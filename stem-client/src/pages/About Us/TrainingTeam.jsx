import tt1 from "../../assets/aboutUsImage/trainingTeamImg/tt1.jpg";
import tt2 from "../../assets/aboutUsImage/trainingTeamImg/tt2.jpg";
import tt3 from "../../assets/aboutUsImage/trainingTeamImg/tt3.jpg";
import tt4 from "../../assets/aboutUsImage/trainingTeamImg/tt4.jpg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Md Syful Islam",
    role: "Lead, Administration and Talent Development",
    desc: "Business Analyst, BRAC IT Solution Ltd.",
    img: tt1,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
  {
    name: "Mahmudul Hasan Dipu",
    role: "Lead, Product and curriculum development",
    desc: "Graduate Student, Wichita State University",
    img: tt2,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
  {
    name: "Khan Md. Omar Faruk",
    role: "Associate Trainer, SFSG Training Program Undergraduate Student, DIU",
    desc: "QA Engineer, Ecologix",
    img: tt3,
    linkedin: "https://www.linkedin.com/in/debanjana-saha-0b8250142/",
  },
  {
    name: "Afoda Akter Nirjona",
    role: "Lead, Product and curriculum development Ex-fellow",
    desc: "Teach for Bangladesh Development Practitioner",
    img: tt4,
    linkedin: "https://www.linkedin.com/in/shamsun2021/",
  },
];

const TrainingTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 md:px-8 my-8 md:my-24"
    >
      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Training Team
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Dedicated to developing talent through expert guidance and support.
          Equipping individuals with skills for long-term success.
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
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TrainingTeam;
