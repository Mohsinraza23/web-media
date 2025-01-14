"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-10 mt-1">
      <div className="max-w-7xl mx-auto">
        {/* Footer Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              About Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web & Media is a leading international company renowned for providing top-notch services in the IT industry. Our commitment to excellence and innovation sets us apart as a trusted global name in delivering cutting-edge solutions.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Digital Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={`mailto:webandmediaagency007@gmail.com?subject=${encodeURIComponent(
                      service
                    )}&body=I am interested in your ${encodeURIComponent(
                      service
                    )} services.`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "Project", "Team", "Courses"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Subscribe to Our Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Web & Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

