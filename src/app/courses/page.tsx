import Link from "next/link";

const courses = [
  {
    title: "Social Media Marketing",
    description: "Master the art of engaging audiences and driving growth through social platforms.",
    icon: "🚀",
  },
  {
    title: "WordPress Web Development",
    description: "Build professional, customizable websites with the world's most popular CMS.",
    icon: "🌐",
  },
  {
    title: "Shopify E-commerce Store Creation",
    description: "Launch and optimize online stores that convert visitors into customers.",
    icon: "🛍️",
  },
  {
    title: "Frontend Web Development",
    description: "Craft responsive, interactive web experiences with HTML, CSS, and TypeScript.",
    icon: "💻",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost website visibility and drive organic traffic with proven SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Python Programming",
    description: "Unlock the power of Python for data analysis, automation, and web development.",
    icon: "🐍",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="text-5xl font-extrabold text-center text-purple-300 mb-12">
          Elevate Your Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">
                  {course.title}
                </h2>
                <p className="text-gray-400 mb-6">{course.description}</p>
                <a
                  href="https://forms.gle/ePRRXKFhTs38pyho9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Explore Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
