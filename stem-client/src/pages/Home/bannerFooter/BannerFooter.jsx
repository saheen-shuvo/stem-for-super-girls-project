import img1 from "../../../assets/bannerImage/bannerFooterImg1.webp";
const BannerFooter = () => {
  return (
    <div className="bg-[#1da69a] h-24">
      <div className="px-3 lg:px-16 pt-12 relative grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="shadow-lg border border-gray-300 flex bg-white rounded-3xl gap-4 px-2 pt-2">
          <img className="w-30" src={img1} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Invite Us to Your School</h1>
            <p className="text-xs">Host our STEM festival or a hands-on workshop at your campus.</p>
            <button className="btn w-32 rounded-3xl mt-2 bg-[#1da69a] text-white">More Info</button>
          </div>
        </div>
        <div className="shadow-lg border border-gray-300 flex bg-white rounded-3xl gap-4 px-2 pt-2">
          <img className="w-30" src={img1} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Partner With Us</h1>
            <p className="text-xs ">Collaborate on events, learning platforms, or mentorship programs.</p>
            <button className="btn w-32 rounded-3xl mt-2 bg-[#1da69a] text-white">More Info</button>
          </div>
        </div>
        <div className="shadow-lg border border-gray-300 flex bg-white rounded-3xl gap-4 px-2 pt-2">
          <img className="w-30" src={img1} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Become a Changemaker</h1>
            <p className="text-xs">Be part of a community of changemakers leading STEM education from the grassroots.</p>
            <button className="btn w-32 rounded-3xl mt-2 bg-[#1da69a] text-white">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFooter;
