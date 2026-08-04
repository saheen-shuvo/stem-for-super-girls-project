import faqImg from "../../../assets/commonFaqsImage/commonFaqsImage.png";

const CommonFaqs = () => {
  return (
    <section className="bg-[#FBF3EE] py-8 mt-16 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Left Image */}
          <div className="col-span-6">
            <div className="">
              <img
                src={faqImg}
                alt="FAQs"
                className=""
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-6">
            <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary">
              FAQs
            </span>

            <h2 className="text-4xl font-bold mb-4">
              Common Questions About STEM
            </h2>

            <p className="text-gray-600 mb-8">
              Find answers to your questions and learn more about our STEM courses.
            </p>

            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  What is STEM for SuperGirls?
                </div>
                <div className="collapse-content text-sm">
                  STEM for SuperGirls is an initiative focused on empowering girls
                  through science, technology, engineering, and mathematics education.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  How can I get involved?
                </div>
                <div className="collapse-content text-sm">
                  You can get involved by enrolling in our programs, volunteering,
                  or participating in community STEM events.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  What programs do you offer?
                </div>
                <div className="collapse-content text-sm">
                  We offer coding bootcamps, robotics workshops, mentorship programs,
                  and hands-on STEM projects.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  How can I donate to the cause?
                </div>
                <div className="collapse-content text-sm">
                  Donations can be made through our official website to support
                  scholarships, events, and learning resources.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonFaqs;
