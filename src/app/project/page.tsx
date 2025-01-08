import Image from 'next/image'
import Link from 'next/link'

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: string;
    icon: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Business Consultancy Website",
        description: "Designed and developed a professional business consultancy website for Westchester International Group. The project highlights include modern UI/UX design, responsive layouts, and seamless navigation to enhance user engagement and accessibility.",
        imageUrl: "/bs.jpg",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        link: "https://westchestergroup.co/",
        icon: "🌐"
    },
    {
        id: 2,
        title: "KababJee Resturant Website",
        description: "Developed a modern and secure website for KababJee Restaurant, featuring an intuitive interface for online food ordering, menu browsing, and reservation management. The platform ensures a seamless user experience with optimized performance.",
        imageUrl: "/kb.jpg",
        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
        link: "https://kababjees-website-eight.vercel.app/",
        icon: "🍖"
    },
    {
        id: 3,
        title: "Ansareez Digital Agency Website",
        description: "A professional and modern website for Ansareez, showcasing digital marketing, web design, and social media services. Designed with a sleek interface and user-friendly navigation to highlight the agency's expertise and services.",
        imageUrl: "/ag.jpg",
        technologies: ["Python", "React", "Next.js", "Tailwind CSS"],
        link: "https://ansareez.co.uk/",
        icon: "🤖"
    },
    {
        id: 4,
        title: "Dubai Hotel Booking",
        description: "A luxurious hotel website for booking premium rooms, exploring world-class amenities, and experiencing the best hospitality in Dubai.",
        imageUrl: "/bb.jpg",
        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
        link: "https://dubai-hotel-website-zyw6.vercel.app/",
        icon: "🏨"
    },
    {
        id: 5,
        title: "E-Commerce Website for Designdior",
        description: "A modern and intuitive e-commerce website designed for Designdior, offering a seamless online shopping experience with a focus on user engagement, efficient navigation, and secure transactions.",
        imageUrl: "/ec.jpg",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        link: "https://designdior.com/",
        icon: "💻"
    },
    {
        id: 6,
        title: "Novel Hub Website",
        description: "A captivating and user-friendly website for novel enthusiasts, designed to explore, read, and purchase novels online with an immersive browsing experience and seamless navigation.",
        imageUrl: "/nb.jpg",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        link: "https://novel-website-byyusrawaheed.vercel.app/",
        icon: "💻"
    }
]

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-16">
                <h1 className="text-5xl font-extrabold text-center text-purple-300 mb-12">
                    Our Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 hover:shadow-xl"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-5xl mb-4">{project.icon}</div>
                                <h2 className="text-2xl font-bold text-purple-300 mb-3">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

