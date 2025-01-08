import Image from 'next/image';

const teamMembers = [
  {
    name: 'Miss Afsheen',
    role: 'CEO Of Agency',
    image: '/afsheen.jpg',
    expertise: ['Web developer', 'E-commerce specialist', 'Social Media Marketer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/afsheen-imran-b623a42a2/',
    },
  },
  {
    name: 'Mohsin',
    role: 'Director of Agency',
    image: '/mohsin.jpg',
    expertise: ['Full-Stack Developer', 'UI/UX Designer', 'Web 3.0 & Metaverse', 'Python Programmer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mohsin-raza-a514392b6/',
    },
  },
  {
    name: 'Abu Bakar',
    role: 'Full-Stack Developer',
    image: '/abubakar.jpg',
    expertise: ['Full-Stack Developer', 'UI/UX Designer', 'SEO Expert', 'E-commerce specialist'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abubaker-siddique-4624422b9/',
    },
  },
];

function Team() {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-300">
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
              className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 hover:shadow-xl"
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
                  <h3 className="text-purple-300 text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mt-1">
                    {member.role}
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-600 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-purple-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
  );
}

export default Team;
