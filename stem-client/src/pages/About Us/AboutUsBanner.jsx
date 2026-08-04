

const AboutUsBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-xl md:text-5xl font-bold">Empowering Communities.</h1>
          <h1 className="mb-5 text-xl md:text-5xl font-bold">Changing Livelihoods</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
