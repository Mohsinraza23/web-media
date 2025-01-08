import React from "react";
import Link from "next/link";
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web & Media is a leading international company renowned for providing top-notch services in the IT industry. Our commitment to excellence and innovation sets us apart as a trusted global name in delivering cutting-edge solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing"].map(
                (service, index) => (
                  <li key={index}>
                    <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Resources</h4>
            <ul className="space-y-2">
              {["Webinars", "Ebooks", "Templates", "Tutorials"].map(
                (resource, index) => (
                  <li key={index}>
                    <Link href={`/resources/${resource.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {resource}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Company</h4>
            <ul className="space-y-2">
              {["Our Story", "Mission and Values", "Team", "Testimonials"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href={`/company/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay up to date with the latest news, updates, and exclusive offers. Join our community today!
            </p>
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
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Web & Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

