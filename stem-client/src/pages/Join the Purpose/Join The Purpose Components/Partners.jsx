// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// import your sponsor logos here
import logo1 from "../../../assets/joinPurposeImage/jpSponsorImage/sp1.png";
import logo2 from "../../../assets/joinPurposeImage/jpSponsorImage/sp2.png";
import logo3 from "../../../assets/joinPurposeImage/jpSponsorImage/sp3.png";
import logo4 from "../../../assets/joinPurposeImage/jpSponsorImage/sp4.png";
import logo5 from "../../../assets/joinPurposeImage/jpSponsorImage/sp5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Partners = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Text */}
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold tracking-widest mb-2">
          MEET THE MOVEMENT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          People & Partners. Powering Possibility
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Every breakthrough in girls’ STEM education begins with someone—or
          some group—who dares to believe in equity. From inspiring mentors and
          passionate youth volunteers to visionary schools, nonprofits, and
          businesses, meet the changemakers who are powering our movement—one
          lesson, one project, one empowered girl at a time.
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* duplicated list for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-50"
            >
              <img
                src={logo}
                alt="partner logo"
                className="h-16 object-contain transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
