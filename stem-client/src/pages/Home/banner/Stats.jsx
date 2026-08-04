import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex gap-10 mt-10">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
          <CountUp start={0} end={12000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm">Students Empowered</p>
      </div>

      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
          <CountUp start={0} end={4000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm">Virtual Learners</p>
      </div>

      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
          <CountUp start={0} end={30} duration={2} />+
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm">Programs</p>
      </div>
    </div>
  );
};

export default Stats;
