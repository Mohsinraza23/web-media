import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions",
    },
    { title: "Quality", description: "Delivering excellence in every project" },
    { title: "Integrity", description: "Building trust through transparency" },
    {
      title: "Collaboration",
      description: "Working together to achieve greatness",
    },
  ];

  const carouselImages = [
    { src: "/carousel1.jpg", alt: "Team Collaboration" },
    { src: "/carousel2.jpg", alt: "Innovative Solutions" },
    { src: "/carousel3.jpg", alt: "Client Success" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-purple-300 mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering businesses with innovative solutions and unparalleled
            expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At our core, we are driven by a passion for innovation and a
            commitment to excellence. Our mission is to empower businesses
            through cutting-edge digital solutions that exceed modern needs.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-300 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-8">
              Why Choose Us
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-purple-300 text-2xl mr-4">✔</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                  <p className="text-gray-400">
                    Our team consists of industry veterans with deep knowledge
                    across various technologies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 text-2xl mr-4">✔</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Tailored Solutions
                  </h3>
                  <p className="text-gray-400">
                    We design custom solutions to meet your unique challenges
                    and goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 text-2xl mr-4">✔</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-400">
                    We have a history of delivering successful projects across
                    various industries.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <Image
                    src="/web.png"
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-6">
          Ready to Transform Your Vision?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
