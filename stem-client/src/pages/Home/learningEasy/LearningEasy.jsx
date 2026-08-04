import easyLearningImg from "../../../assets/learningEasyImage/easyLearningImg.png";
import { Check } from "lucide-react";

const LearningEasy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-125 lg:mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 items-center">
      
      {/* LEFT IMAGE */}
      <div className="lg:col-span-5">
        <img
          src={easyLearningImg}
          alt="Easy Learning"
          className="w-full"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-7">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
          Learning should be easy
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          We know that not every student in Bangladesh has access to good
          learning opportunities. That’s why we’ve created fun, beginner-friendly
          learning opportunities both online and offline, using simple language
          and real-life examples.
        </p>

        {/* FEATURES LIST */}
        <ul className="space-y-3 lg:space-y-5 mb-10">
          {[
            "Explore coding through block-based programming with Makey Makey kits.",
            "Experience immersive Virtual Reality (VR) sessions to understand science and technology concepts.",
            "Conduct hands-on biology and physics experiments, such as building a human lung model from recycled materials.",
            "Participate in STEM movie screenings, puzzles, and logical games that sharpen critical thinking.",
            "Access our growing library of online courses, including Canva for Students, Fun with Arduino, and AI for Kids.",
          ].map((item, index) => (
            <li key={index} className="flex gap-4 items-start">
              <span className="bg-[#1da69a] text-white rounded-md p-1 mt-1">
                <Check size={16} />
              </span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <button className="bg-[#1da69a] hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition">
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default LearningEasy;
