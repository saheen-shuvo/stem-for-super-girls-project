import leftImg from "../../../assets/publicationsImage/latestBlogImage/blogLeftImg.png";
import b1 from "../../../assets/publicationsImage/latestBlogImage/b1.png";
import b2 from "../../../assets/publicationsImage/latestBlogImage/b2.png";
import b3 from "../../../assets/publicationsImage/latestBlogImage/b3.png";
import b4 from "../../../assets/publicationsImage/latestBlogImage/b4.png";

const LatestBlog = () => {
  const blogs = [
    {
      link: "https://stemforsupergirls.com/emmanuelle-charpentier-the-nobel-winner-who-rewrote-dna/",
      image: b1,
      title: "Emmanuelle Charpentier: The Nobel Winner Who Rewrote DNA",
    },
    {
      link: "https://stemforsupergirls.com/elizabeth-blackwell-first-woman-doctor-in-modern-medicine/",
      image: b2,
      title: "Elizabeth Blackwell: First Woman Doctor in Modern Medicine",
    },
    {
      link: "https://stemforsupergirls.com/elizabeth-blackwell-first-woman-doctor-in-modern-medicine/",
      image: b3,
      title: "Marie Curie: Trailblazer Women in Science",
    },
    {
      link: "https://stemforsupergirls.com/elizabeth-blackwell-first-woman-doctor-in-modern-medicine/",
      image: b4,
      title: "Caroline Herschel: Leading Women in the Stars",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Latest Blogs
          </h2>
          <p className="text-gray-600">
            Stories and insights from the field and the future of STEM.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Featured Blog */}
          <a href="https://stemforsupergirls.com/vera-rubin-the-woman-who-unveiled-the-secrets-of-galaxies/" className="group lg:col-span-2 block">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={leftImg}
                alt="Featured Blog"
                className="w-full h-105 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <p className="text-gray-500 flex items-center gap-2 mb-2">
                📅 September 5, 2025
              </p>

              <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-teal-600">
                🌟 Vera Rubin: The Woman Who Unveiled the Secrets of Galaxies
              </h3>
            </div>
          </a>

          {/* Right Blog List */}
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                className="group flex gap-4 items-start p-3 rounded-lg transition-all duration-300 hover:bg-gray-50"
              >
                <div className="w-24 h-16 overflow-hidden rounded-md flex-shrink-0">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 leading-snug mb-1 transition-colors duration-300 group-hover:text-teal-600">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    📅 September 5, 2025
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://stemforsupergirls.com/posts/"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition"
          >
            Explore Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
