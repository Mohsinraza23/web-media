'use client'
import Image from "next/image";
import Link from "next/link"
import { Code, Palette, Rocket, Users, Zap, Star  } from 'lucide-react'
import graphic from '../../../public/graphic.jpg'
import video from '../../../public/video.jpg'
import dir from '../../../public/dir.jpg'
import ceo from '../../../public/ceo.webp'
import fro from '../../../public/fro.jpeg'
import social from '../../../public/social.jpg'

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechVision Inc",
    image: dir,
    quote: "Their digital strategy transformed our online presence. The team delivered exceptional results, from brand redesign to implementing cutting-edge web solutions. A true digital partner!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "InnovateLab",
    image: ceo,
    quote: "The creative solutions and digital expertise they brought to our project exceeded expectations. Their strategic approach to digital transformation was exactly what we needed.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    company: "FutureScale",
    image: fro,
    quote: "Outstanding digital agency! Their innovative approach to UX design and digital marketing strategies helped us achieve record-breaking engagement rates.",
    rating: 4
  }
]

export default function Home() {
  
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* google font */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "\n    body {\n      font-family: Poppins, sans-serif;\n    }\n  "
    }}
  />
  <div className="bg-black text-gray-100 text-[15px]">
    <div
      className="relative lg:min-h-screen 2xl: before:absolute before:inset-0 before:w-full"
      style={{
        backgroundImage: "url(https://readymadeui.com/dark-bg-image.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
   

     
      <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 ">
        <div className="pt-52 pb-16">
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px] ">
         Welcome to Web and Media Services
        </h1>
        <p className="text-base text-gray-400">
          Elevate Your Business with Expert Web Development & Social Media Management!
        </p>
        <div className="grid sm:grid-cols-3 gap-6 items-center mt-16">
          <div className="flex flex-col items-center text-center">
            <h5 className="font-bold text-2xl text-blue-600 mb-2">3+</h5>
            <p>Years Experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h5 className="font-bold text-2xl text-blue-600 mb-2">490</h5>
            <p>Cases Solved</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h5 className="font-bold text-2xl text-blue-600 mb-2">18</h5>
            <p>Business Partners</p>
          </div>
        </div>
        <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
          
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 sm:px-10">
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 sm:px-10">
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl text-center mx-auto">
            <h2 className="md:text-5xl text-4xl font-bold md:!leading-[60px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Digital Solutions for the Modern Era
            </h2>
            <p className="text-gray-400 text-lg">
              We transform businesses through innovative digital strategies, cutting-edge development,
              and creative design solutions that drive real results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
            <div className="group hover:bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-center bg-[#111] px-6 py-8 rounded-2xl transition-all duration-300">
              <div className="bg-blue-500/10 p-4 rounded-xl inline-flex">
                <Palette className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Creative Design</h3>
              <p className="text-gray-400">
                Stunning visual experiences that capture your brand&apos;s essence and engage your audience
                with purpose-driven design.
              </p>
              <Link
                href="#"
                className="text-blue-500 inline-block mt-6 hover:text-blue-400 transition-colors"
              >
                Explore services
              </Link>
            </div>

            <div className="group hover:bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-center bg-[#111] px-6 py-8 rounded-2xl transition-all duration-300">
              <div className="bg-purple-500/10 p-4 rounded-xl inline-flex">
                <Code className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Web Development</h3>
              <p className="text-gray-400">
                Scalable, high-performance websites and applications built with the latest technologies
                and best practices.
              </p>
              <Link
                href="/project"
                className="text-blue-500 inline-block mt-6 hover:text-blue-400 transition-colors"
              >
                View projects
              </Link>
            </div>

            <div className="group hover:bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-center bg-[#111] px-6 py-8 rounded-2xl transition-all duration-300">
              <div className="bg-blue-500/10 p-4 rounded-xl inline-flex">
                <Rocket className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Digital Strategy</h3>
              <p className="text-gray-400">
                Data-driven strategies that optimize your digital presence and drive measurable business
                growth.
              </p>
              <Link
                href="#"
                className="text-blue-500 inline-block mt-6 hover:text-blue-400 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* <div className="mt-32 rounded-2xl px-8 py-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Solutions"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Transform Your Digital Presence
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We help businesses navigate the digital landscape with innovative solutions that drive
                  growth. Our team of experts combines creativity with technical excellence to deliver
                  exceptional results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-gray-300">Rapid deployment and iterative development</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/10 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-purple-500" />
                    </div>
                    <p className="text-gray-300">Dedicated team of industry experts</p>
                  </div>
                </div>
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity">
                  Start Your Project
                </button>
              </div>
            </div>
          </div> */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a1f35,#0f1117)] opacity-50 " />
        <div className="relative rounded-[2rem] px-8 py-20 bg-gradient-to-br from-blue-950/50 to-purple-950/50 backdrop-blur-xl border border-white/5 mt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative">
                <Image
                  src={social}
                  alt="Digital Solutions"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl shadow-blue-500/10"
                  priority
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Transform Your Digital Presence
              </h1>
              <p className="text-lg text-gray-400/90 leading-relaxed">
                We help businesses navigate the digital landscape with innovative solutions that drive
                growth. Our team of experts combines creativity with technical excellence to deliver
                exceptional results.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                    <div className="relative bg-blue-950/50 p-3 rounded-lg border border-blue-500/20">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Rapid deployment and iterative development</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                    <div className="relative bg-purple-950/50 p-3 rounded-lg border border-purple-500/20">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Dedicated team of industry experts</p>
                </div>
              </div>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100 font-semibold text-lg">
                    Start Your Project
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>



          <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Impact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#111] p-8 rounded-xl">
                <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
                <p className="text-gray-400">Client Satisfaction Rate</p>
              </div>
              <div className="bg-[#111] p-8 rounded-xl">
                <div className="text-4xl font-bold text-purple-500 mb-2">200+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-[#111] p-8 rounded-xl">
                <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div className="bg-[#111] p-8 rounded-xl">
                <div className="text-4xl font-bold text-purple-500 mb-2">10+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main className="min-h-screen bg-[#0f1117] text-white mt-28">
      <section className="relative px-4 py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Empower Your Online Presence with Our Web Development Services
            </h2>
            <p className="text-lg text-gray-400/90 leading-relaxed max-w-3xl mx-auto">
            Transform your ideas into reality with our expert web development solutions. Whether you’re building a personal blog, an e-commerce store, or a business website, we provide custom designs tailored to your needs, along with responsive and optimized websites that captivate your audience on all devices. To make it even better, we offer free domain and hosting, ensuring a complete, worry-free experience. Let us handle the technicalities while you focus on bringing your vision to life.
            </p>
            <div className="relative inline-block group mt-8">
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200" />
              
              {/* Button */}
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-lg text-white shadow-xl hover:shadow-blue-500/20 transition-all duration-200">
                Get started today
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rotate-12 transform-gpu" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent -rotate-12 transform-gpu" />
        </div>
      </section>
    </main>
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Features Section */}
      <section className="space-y-32 py-20">
        {/* First Feature */}
        <div className="relative px-4 py-12">
          <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative">
                <Image
                  src={graphic}
                  alt="Templates with Tailwind"
                  width={800}
                  height={600}
                  className="w-full rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="max-md:text-center space-y-6">
              <h2 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Bring Your Vision to Life with Our Graphic Design Services
              </h2>
              <p className="text-lg text-gray-400/90">
              Transform your ideas into captivating visuals with our professional graphic design services. Whether you need logos, banners, social media posts, or complete brand identity, we deliver stunning and creative designs tailored to your needs. Our expertise ensures visually appealing and impactful results that help your brand stand out. Let us bring your vision to life with designs that truly make an impression
              </p>
              <button className="relative group inline-flex items-center">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200" />
                <span className="relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg group-hover:bg-blue-700 transition-colors">
                  Try it today
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Second Feature */}
        <div className="relative px-4 py-12">
          <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
            <div className="max-md:text-center space-y-6 md:order-1">
              <h2 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Elevate Your Stories with Professional Video Editing
              </h2>
              <p className="text-lg text-gray-400/90">
              Transform your content with our modern and professional video editing services. We combine advanced editing techniques with creative storytelling to deliver visually stunning and engaging videos that leave a lasting impression. Whether for social media, business promotions, or personal projects, our expert team ensures your videos stand out in today&apos;s competitive landscape.
              </p>
              <button className="relative group inline-flex items-center">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200" />
                <span className="relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg group-hover:bg-blue-700 transition-colors">
                  Try it today
                </span>
              </button>
            </div>
            <div className="relative group md:order-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative">
                <Image
                  src={video}
                  alt="Modern Elegance"
                  width={800}
                  height={600}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl" />
          <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/10 to-transparent blur-2xl" />
        </div>
      </section>
    </main>
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Transforming Visions into Digital Reality
          </h2>
          <p className="text-gray-400 text-lg">
            See how we&apos;ve helped businesses achieve digital excellence through innovative solutions and strategic expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-blue-500"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating 
                          ? 'fill-blue-500 text-blue-500' 
                          : 'fill-gray-700 text-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-400 text-center italic">
                &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
     
     
      <div className="mt-32">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
            Application Metrics
          </h2>
          <p className="text-gray-400">
            Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
            officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
            tempor ut reprehenderit.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12 lg:divide-x lg:divide-gray-300">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-10 inline-block"
              viewBox="0 0 512 512"
            >
              <path
                d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z"
                data-original="#000000"
              />
              <path
                d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-4xl text-blue-600 mt-6">400+</h3>
            <p className="mt-4">Unique Visitors</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-10 inline-block"
              viewBox="0 0 512 512"
            >
              <path
                fillRule="evenodd"
                d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10zm155.471-61.737h-41.422c-5.508 0-10 4.492-10 10v159.571c0 5.508 4.492 10 10 10h41.422c5.508 0 10-4.492 10-10V281.754c0-5.508-4.493-10-10-10zm114.049-64.466h-41.421c-5.508 0-10 4.492-10 10v224.036c0 5.508 4.492 10 10 10h41.421c5.508 0 10-4.492 10-10V217.288c-.001-5.507-4.493-10-10-10zm72.625-57.992h41.421c5.508 0 10 4.492 10 10v282.028c0 5.508-4.492 10-10 10h-41.421c-5.508 0-10-4.492-10-10V159.296c0-5.508 4.492-10 10-10zm2.707-106.018a7.98 7.98 0 0 1-.812-15.938l49.121-2.666a7.98 7.98 0 0 1 8.307 9.094l.006.001-7.088 48.68a7.986 7.986 0 0 1-15.812-2.25l3.878-26.632C385.642 108.019 321.72 152.702 257.158 189.5c-69.131 39.402-138.98 69.744-206.779 93.355a7.976 7.976 0 0 1-5.25-15.062c66.943-23.313 135.906-53.269 204.154-92.167 63.527-36.208 126.449-80.188 186.56-133.799zM45.262 481.873h421.477c5.508 0 10 4.492 10 10v3.193c0 5.508-4.492 10-10 10H45.262c-5.508 0-10-4.492-10-10v-3.193c0-5.508 4.492-10 10-10zM139.587 6.935c-48.325 0-87.5 39.175-87.5 87.5s39.175 87.5 87.5 87.5 87.5-39.175 87.5-87.5c-.001-48.325-39.176-87.5-87.5-87.5zm-8 32.13v5.279c-5.474 1.183-10.606 3.537-14.768 6.92-6.626 5.387-10.827 13.21-10.353 22.965.476 9.817 5.372 16.4 12.186 20.849 5.887 3.844 13.093 5.827 19.733 6.917 5.206.855 10.757 2.201 14.95 4.733 3.261 1.969 5.71 4.838 6.23 9.127.072.595.111 1.013.117 1.26.08 3.359-1.536 5.926-3.962 7.767-3.135 2.379-7.564 3.785-12.005 4.324a33.57 33.57 0 0 1-3.172.254c-5.25.126-10.424-1.156-14.458-3.842-3.274-2.18-5.775-5.367-6.818-9.552a7.982 7.982 0 0 0-15.5 3.812c2.094 8.399 7.044 14.749 13.505 19.052 4.252 2.831 9.164 4.736 14.315 5.711v5.165a8 8 0 1 0 16-.001v-5.01c6.309-1.038 12.699-3.388 17.758-7.226 6.302-4.782 10.494-11.632 10.275-20.829a29.17 29.17 0 0 0-.179-2.76c-1.22-10.052-6.653-16.591-13.856-20.94-6.27-3.786-13.768-5.668-20.637-6.796-4.832-.793-9.912-2.13-13.607-4.543-2.767-1.806-4.752-4.416-4.937-8.224-.202-4.157 1.615-7.512 4.478-9.84 2.281-1.854 5.196-3.144 8.362-3.781a22.978 22.978 0 0 1 10.115.244c5.278 1.338 10.083 4.817 12.614 10.845a7.997 7.997 0 0 0 10.469 4.281 7.997 7.997 0 0 0 4.281-10.469c-4.701-11.196-13.65-17.664-23.489-20.158a37.3 37.3 0 0 0-1.646-.377v-5.161a8 8 0 1 0-16.001.004z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-4xl text-blue-600 mt-6">450+</h3>
            <p className="mt-4">Total Sales</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-10 inline-block"
              viewBox="0 0 28 28"
            >
              <path
                d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94zm-9.56 8a.56.56 0 0 1-.56.56h-.69a.56.56 0 0 1-.56-.56V18.5a.56.56 0 0 1 .56-.56h.73a.56.56 0 0 1 .52.56zm10.5-3.57a5.38 5.38 0 0 1-.9 3 2.59 2.59 0 0 1-2.15 1.15h-3.59a5.53 5.53 0 0 1-2.46-.58l-.4-.2V18.6l.92-.92a9.63 9.63 0 0 0 2.53-4.46l.1-.41a.43.43 0 0 1 .2-.26.4.4 0 0 1 .32 0 1.58 1.58 0 0 1 1 2l-.84 2.81a.5.5 0 0 0 .08.44.48.48 0 0 0 .4.2h3.79a.94.94 0 0 1 .94.94zM11 7.3l-.32 1.85a1.09 1.09 0 0 0 .44 1.09 1.11 1.11 0 0 0 .65.22 1.18 1.18 0 0 0 .52-.13L14 9.45l1.67.88a1.1 1.1 0 0 0 1.17-.09 1.09 1.09 0 0 0 .44-1.08L17 7.3 18.31 6a1.1 1.1 0 0 0 .29-1.14 1.12 1.12 0 0 0-.9-.76l-1.87-.27L15 2.12a1.12 1.12 0 0 0-2 0l-.83 1.69-1.87.27a1.12 1.12 0 0 0-.9.76A1.1 1.1 0 0 0 9.69 6zm-.6-2.23 2.13-.31a.49.49 0 0 0 .47-.27l1-1.93a.11.11 0 0 1 .2 0l1 1.93a.49.49 0 0 0 .38.27l2.13.31a.12.12 0 0 1 .09.08.11.11 0 0 1 0 .11l-1.54 1.5a.53.53 0 0 0-.15.45l.37 2.11a.09.09 0 0 1-.05.11.1.1 0 0 1-.12 0l-1.9-1a.47.47 0 0 0-.46 0l-1.91 1a.09.09 0 0 1-.11 0 .09.09 0 0 1-.05-.11l.37-2.11a.53.53 0 0 0-.15-.45l-1.54-1.5a.11.11 0 0 1 0-.11.12.12 0 0 1-.12-.08zm-3.06 8.18a1 1 0 0 0 1-1.19l-.27-1.52 1.12-1.09a1 1 0 0 0-.56-1.73L7.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L3.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12zm-1.84-1.9a.46.46 0 0 0-.23.06l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45L2.51 8.71l1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29L7.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.46.46 0 0 0-.23-.06zm20.95-2.94a1 1 0 0 0-.82-.69L24.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L20.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12 1 1 0 0 0 1-1.19l-.27-1.52 1.11-1.09a1 1 0 0 0 .27-1.04zM24.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.47.47 0 0 0-.46 0l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45l-1.29-1.29 1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29z"
                data-name="Layer 2"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-4xl text-blue-600 mt-6">500+</h3>
            <p className="mt-4">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-10 inline-block"
              viewBox="0 0 512 512"
            >
              <path
                d="M477.797 290.203c0 59.244-23.071 114.942-64.963 156.834S315.244 512 256 512s-114.942-23.071-156.834-64.963-64.963-97.59-64.963-156.834c0-39.621 10.579-78.512 30.595-112.468 19.419-32.944 47.178-60.48 80.276-79.63 7.646-4.427 17.437-1.814 21.861 5.836 4.426 7.648 1.813 17.437-5.836 21.861-53.882 31.175-88.951 87.036-94.189 148.4H84.6c8.837 0 16 7.163 16 16s-7.163 16-16 16H66.884C74.594 398.12 148.083 471.609 240 479.319v-17.717c0-8.837 7.163-16 16-16s16 7.163 16 16v17.717c91.917-7.71 165.406-81.199 173.116-173.116h-17.717c-8.837 0-16-7.163-16-16s7.163-16 16-16h17.69c-5.238-61.364-40.307-117.227-94.19-148.4-7.648-4.425-10.262-14.212-5.836-21.861 4.425-7.648 14.214-10.261 21.861-5.836 33.098 19.148 60.857 46.685 80.277 79.63 20.016 33.955 30.596 72.846 30.596 112.467zm-253.173-220.2 15.259-15.259-.258 71.899c-.031 8.837 7.106 16.025 15.942 16.058h.059c8.81 0 15.967-7.126 15.999-15.942l.259-72.248 15.492 15.492c3.124 3.124 7.219 4.687 11.313 4.687s8.189-1.563 11.313-4.687c6.248-6.248 6.248-16.379 0-22.627L267.313 4.687c-6.248-6.248-16.379-6.248-22.627 0l-42.689 42.689c-6.248 6.248-6.248 16.379 0 22.627s16.379 6.248 22.627 0zM272 174.358v64.628c16.74 5.24 29.977 18.478 35.218 35.217h50.493c8.837 0 16 7.163 16 16s-7.163 16-16 16h-50.493c-6.823 21.795-27.202 37.655-51.218 37.655-29.585 0-53.654-24.069-53.654-53.655 0-24.015 15.86-44.394 37.654-51.217v-64.628c0-8.837 7.163-16 16-16s16 7.163 16 16zm5.655 115.845c0-11.94-9.715-21.654-21.655-21.654s-21.654 9.714-21.654 21.654 9.714 21.655 21.654 21.655 21.655-9.714 21.655-21.655z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-4xl text-blue-600 mt-6">600+</h3>
            <p className="mt-4">System Uptime (in hours)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}
