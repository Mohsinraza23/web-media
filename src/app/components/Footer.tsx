import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#111] px-4 sm:px-10 py-12 mt-32">
        <div className="lg:max-w-[50%] mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold md:!leading-[50px] mb-6 text-white tracking-wider">
            Newsletter
          </h2>
          <p className="text-white font-light text-lg leading-relaxed">
            Subscribe to our newsletter and stay up to date with the latest
            news updates and exclusive offers. Get valuable insights Join our
            community today !
          </p>
          <div className="bg-[#444] flex px-2 py-1 rounded-md text-left mt-10 shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent pl-2 text-white placeholder-gray-300"
            />
            <button
              type="button"
              className="px-6 py-3 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all ml-auto font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
        <hr className="border-gray-400 my-12" />
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 tracking-wide">
              About Us
            </h4>
            <p className="text-white text-sm leading-relaxed font-light">
              Web & Media is a leading international company registered and
              renowned for providing top-notch services in the IT industry Our
              commitment to excellence and innovation sets us apart as a trusted
              global name in delivering cutting-edge solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-4">
              {["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing"].map(
                (service, index) => (
                  <li key={index}>
                    <a
                      href="javascript:void(0)"
                      className="text-white hover:text-blue-600 transition-all font-medium"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-4">
              {["Webinars", "Ebooks", "Templates", "Tutorials"].map(
                (resource, index) => (
                  <li key={index}>
                    <a
                      href="javascript:void(0)"
                      className="text-white hover:text-blue-600 transition-all font-medium"
                    >
                      {resource}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 tracking-wide">
              About Us
            </h4>
            <ul className="space-y-4">
              {["Our Story", "Mission and Values", "Team", "Testimonials"].map(
                (about, index) => (
                  <li key={index}>
                    <a
                      href="javascript:void(0)"
                      className="text-white hover:text-blue-600 transition-all font-medium"
                    >
                      {about}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
