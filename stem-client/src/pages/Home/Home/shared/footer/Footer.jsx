import logoImg from "../../../../../assets/navbarLogo/stem_logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <aside>
          <img
            src={logoImg}
            alt="STEM For Super Girls"
            className="w-28 mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            <span className="font-semibold text-white block mb-2">
              STEM FOR SUPER GIRLS
            </span>
            Never miss a beat in your learning journey. Our recorded classes are
            here.
          </p>
        </aside>

        {/* Main Menu */}
        <nav>
          <h6 className="mb-4 font-semibold text-lg">Main Menu</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-white" href="/">Home</a></li>
            <li><a className="hover:text-white" href="about-us">About Us</a></li>
            <li><a className="hover:text-white" href="/our-works">Our Works</a></li>
            <li><a className="hover:text-white" href="/courses">Courses</a></li>
            <li><a className="hover:text-white" href="/publications">Publications</a></li>
            <li><a className="hover:text-white" href="/join-the-purpose">Join the Purpose</a></li>
          </ul>
        </nav>

        {/* Useful Links */}
        <nav>
          <h6 className="mb-4 font-semibold text-lg">Useful Links</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-white" href="#blogs">Blogs</a></li>
            <li><a className="hover:text-white" href="#">News</a></li>
            <li><a className="hover:text-white" href="/our-works">Our Works</a></li>
            <li><a className="hover:text-white" href="/publications">Publications</a></li>
            <li><a className="hover:text-white" href="/courses">Courses</a></li>
            <li><a className="hover:text-white" href="/">Sign up</a></li>
          </ul>
        </nav>

        {/* Help */}
        <nav>
          <h6 className="mb-4 font-semibold text-lg">Help</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-white" href="#">Contact Us</a></li>
            <li><a className="hover:text-white" href="/about-us">About Us</a></li>
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Terms and conditions</a></li>
            <li><a className="hover:text-white" href="#">Refund Policy</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-10 py-6 text-sm text-gray-400">
          Copyright © 2025 – STEM Education in Bangladesh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
