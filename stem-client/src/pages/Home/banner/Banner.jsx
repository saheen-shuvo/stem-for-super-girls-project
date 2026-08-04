import bannerImage from "../../../assets/bannerImage/Stem Banner.png";
import Stats from "./Stats";
import "./bannerAnimation.css";

const Banner = () => {
  return (
    <section className="bg-[#fff7f2] px-6 lg:px-16 pt-8 md:pt-20 pb-8 overflow-x-hidden min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="slide-in-left">
          <p className="text-sm font-medium text-gray-600 mb-3">
            🎓 STEM Education | Girls Empowerment | Bangladesh
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Girls <br />
            to Shape the Future <br />
            with <span className="text-[#1ca69a]">STEM</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            <span className="font-semibold">STEM for Super Girls</span> is a
            youth-led initiative championing STEM education for girls across
            Bangladesh. We aim to take science beyond classrooms and into
            communities—especially where access to STEM is limited. We believe
            that{" "}
            <span className="font-semibold">
              {" "}
              every student deserves the tools to innovate, lead, and thrive in
              a technology-driven world.
            </span>
          </p>

          {/* STATS */}
          <Stats></Stats>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center slide-in-right">
          <img
            src={bannerImage}
            alt="STEM Banner"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
