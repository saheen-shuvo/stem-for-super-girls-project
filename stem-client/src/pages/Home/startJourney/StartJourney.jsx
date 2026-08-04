import fullImg from "../../../assets/startJourneyImage/image.png";
import part1 from "../../../assets/startJourneyImage/part1.png";
import part2 from "../../../assets/startJourneyImage/part2.png";
const StartJourney = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 md:mt-24">
      <img className="rounded-2xl hidden md:flex" src={fullImg} alt="" />
      <div className="flex flex-col md:hidden">
        <img className="rounded-t-xl" src={part1} alt="" />
        <img className="rounded-b-xl" src={part2} alt="" />
      </div>
    </div>
  );
};

export default StartJourney;
