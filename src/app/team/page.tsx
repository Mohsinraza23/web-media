import Image, { StaticImageData } from 'next/image';
import afsheen from '../../../public/afsheen.jpg';
import mohsin from '../../../public/mohsin.jpg';
import abubakar from '../../../public/abubakar.jpg';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  image: StaticImageData | string; // Updated to accommodate StaticImageData
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function Page() {
  const teamMembers: TeamMember[] = [
   
    {
      name: "Miss Afsheen",
      role: "CEO and Director of Agency",
      expertise: ["Full-Stack Developer", "E-commerce specialist" , "Social Media Marketer",],
      image: afsheen,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/afsheen-imran-b623a42a2/",
      }
    },
    {
      name: "Mohsin Raza",
      role: "Director of Agency",
      expertise: ["UI/UX Design", "SEO Expert", "Full-Stack Developer" ],
      image: mohsin,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mohsin-raza-a514392b6/",
      }
    },
    {
      name: "Abu-Bakar",
      role: "Full Stack Developer",
      expertise: ["Full-Stack Developer", "UI/UX Design", "Cloud Architecture"],
      image: abubakar,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/abubaker-siddique-4624422b9/",
      }
    },
  ];

  return (
    <div>
       
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our talented team of digital experts brings together diverse skills and experience 
            to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#0A0F1C] p-6"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-[#4169E1] font-medium mt-1">
                    {member.role}
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-[#1A1F2C] text-[#4169E1]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-[#4169E1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-[#4169E1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a href={member.socialLinks.github} className="text-gray-400 hover:text-[#4169E1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

