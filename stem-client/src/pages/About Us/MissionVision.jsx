import img from "../../assets/aboutUsImage/missionVisionImg.png";
import imgSm from "../../assets/aboutUsImage/mvSmall.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const MissionVision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 mt-8 md:mt-24 md:pt-8 flex justify-center"
    >
      <img className="rounded-2xl hidden md:flex" src={img} alt="" />
      <img className="rounded-2xl flex md:hidden" src={imgSm} alt="" />
    </motion.div>
  );
};

export default MissionVision;
