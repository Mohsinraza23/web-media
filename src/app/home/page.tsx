import Image from "next/image";
import Link from "next/link";
import { Code, Palette, Rocket, Users, Zap, Star, Megaphone, Video } from "lucide-react";
import logo from "../../../public/logo.png";

const services =[
  {
    title: "Web Development",
    description: "Custom websites tailored to your business needs, built with the latest technologies.",
    icon: Code,
    duration: "2-8 weeks",
    level: "Customized",
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc4qe1fBKfBfRi6zMUpJQOsKLoPdRKxlWAWUJGg1OfZdxLQQQ/viewform'
  },
  {
    title: "Social Media Management",
    description: "Engage your audience and grow your brand with our expert social media strategies.",
    icon: Users,
    duration: "Ongoing",
    level: "All levels",
    link: 'https://forms.gle/zYUv1FrLdjUcutb79'
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more organic traffic to your website.",
    icon: Rocket,
    duration: "3-6 months",
    level: "Intermediate",
    link: "https://forms.gle/8nAQZnwYV3FxMGNG7"
  },
  {
    title: "Graphic Designing",
    description: "Compelling content that resonates with your audience and drives engagement.",
    icon: Palette,
    duration: "Weekly/Monthly",
    level: "All levels",
    link: 'https://forms.gle/WCV6YegM8nBDqSTn6'
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and reach your target audience.",
    icon: Megaphone,
    duration: "3-6 months",
    level: "All levels",
    link: 'https://forms.gle/zYUv1FrLdjUcutb79'
  },
  {
    title: "Video Editing",
    description: "Professional video editing services to create compelling visual content for your brand.",
    icon: Video,
    duration: "1-4 weeks",
    level: "Customized",
    link: 'https://forms.gle/Ama9MHnRQg9HMSs98'
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white text-[15px]">
      <div className="relative w-full h-screen bg-no-repeat bg-cover bg-center">
        <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-1">
          <div className="pt-32 pb-16">
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-extrabold text-purple-300 mb-6 md:leading-[80px]">
              Web and Media Services
            </h1>
            <p className="text-base text-white font-semibold mb-8">
              Elevate your online presence with our expert web development and digital marketing solutions.
            </p>
            <div className="flex justify-center items-center">
              <Image
                src={logo}
                alt="logo"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10">
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl text-center mx-auto">
            <h2 className="md:text-5xl text-4xl font-bold md:!leading-[60px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Our Services
            </h2>
            <p className="text-white text-lg">
              Discover our range of services designed to boost your digital presence and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition duration-300"
              >
                <div className="p-6">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{service.duration}</span>
                    <span>{service.level}</span>
                  </div>
                  <Link
                    href={service.link}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative">
              <Image
                src="/graphic.jpg"
                alt="About Our Company"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl shadow-blue-500/10"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-lg text-white font-medium leading-relaxed">
              With over a decade of experience, our team of experts combines cutting-edge technology with creative design to deliver exceptional web and media solutions tailored to your unique needs.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <div className="relative bg-blue-950/50 p-3 rounded-lg border border-blue-500/20">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  Innovative solutions for modern businesses
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <div className="relative bg-purple-950/50 p-3 rounded-lg border border-purple-500/20">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  Client-focused approach with personalized service
                </p>
              </div>
            </div>
            <Link href="/contact" className="relative group inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
              <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100 font-semibold text-lg">
                  Get in Touch
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center px-4 sm:px-10 pb-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Why Choose Our Services?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl">
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">Our professionals have years of industry experience and expertise.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl">
            <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-400">Tailored approaches to meet your specific business requirements.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-400">Ongoing assistance to ensure your project&apos;s success and growth.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl">
            <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-400">Track record of delivering successful projects and driving growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}









