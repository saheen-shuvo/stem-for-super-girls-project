const Leadership = () => {
  return (
    <section className="w-full bg-teal-500 mt-8 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT TITLE */}
          <div className="lg:col-span-3">
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              Leadership
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-9">
            <p className="text-white text-sm md:text-base leading-relaxed">
              STEM for Supergirls is guided by a passionate leadership team with
              deep expertise in STEM education, gender advocacy, youth
              mentorship, and nonprofit management. Our board members and
              advisors work tirelessly to foster innovation, inclusivity, and
              empowerment for the next generation of female leaders in
              science, technology, engineering, and math.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
