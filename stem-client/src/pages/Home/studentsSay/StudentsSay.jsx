import studentsSayImg from "../../../assets/studentSayImage/studentsSayImg.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StudentsSay = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 items-center ">
      {/* LEFT CONTENT */}
      <div className="col-span-7">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What our Students Say About Us
        </h2>

        <p className="text-gray-900 leading-relaxed max-w-xl">
          “I never imagined I could learn coding with Makey Makey, do real
          science experiments, or explore the world through virtual reality.
          This camp showed me that girls like us can be scientists too.”
        </p>

        {/* STARS */}
        <div className="flex items-center gap-1 text-yellow-400 mt-6">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>

        {/* STUDENT INFO */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Atia Khanom</h4>
          <p className="text-sm text-gray-500">
            Class 9, Sonapara, Cox’s Bazar
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-span-5">
        <img
          src={studentsSayImg}
          alt="Student testimonial"
          className="ml-auto"
        />
      </div>
    </section>
  );
};

export default StudentsSay;
