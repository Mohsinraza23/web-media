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
    role: 'Senior Coordinator / Marketing Manager',
    image: '/abubakar.jpg',
    expertise: ['Full-Stack Developer', 'UI/UX Designer', 'SEO Expert', 'E-commerce specialist'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abubaker-siddique-4624422b9/',
    },
  },
  {
    name: 'Saad Raza',
    role: 'Managing Head',
    image: '/saad.jpg',
    expertise: ['Frontend Developer', 'UI/UX Designer', 'SEO Expert'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-saad-raza-6aa58b2b4/',
    },
  },
  {
    name: 'Haroon Afridi',
    role: 'Marketing Manager',
    image: '/haron.jpg',
    expertise: ['Full-Stack Developer', 'Marketing Expert'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/haroon-khan-afridi-2aa798168/',
    },
  },
  {
    name: 'Rahat',
    role: 'Graphic Designing Head',
    image: '/rahat.jpg',
    expertise: ['Graphic Designer', 'Frontend Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/rahat-bano-5b78b41b3/',
    },
  },
  {
    name: 'Saira Nadeem',
    role: 'Senior Developer / Social Media Marketer',
    image: '/s.jpg',
    expertise: ['Web Developer', 'UI/UX Designer', 'SEO Expert', 'Graphic Designer', 'Digital Marketing'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/saira-naseer-448973243/',
    },
  },
  {
    name: 'Yousra Wahid',
    role: 'Senior Developer',
    image: '/ys.jpg',
    expertise: ['Full-Stack Developer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yusra-waheed-9a67a4227/',
    },
  },
  {
    name: 'Hamza Bhatti',
    role: 'Senior Developer / Marketing Manager',
    image: '/hm.jpg',
    expertise: ['Web developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/hamzabhatti143/',
    },
  },
  {
    name: 'Nida',
    role: 'Senior Developer & SEO Marketing Executive',
    image: '/n.jpg',
    expertise: ['Web developer', 'UI/UX Designer', 'SEO Expert'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nida-nasar-37452914b/',
    },
  },
  {
    name: 'Saima Waheed',
    role: 'Senior Developer / Generative AI Specialist',
    image: '/sam.jpg',
    expertise: ['Senior Developer', 'UI/UX Designer', 'SEO Expert'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/saima-waheed-8639ab328/',
    },
  },
  {
    name: 'Abdul Salam',
    role: 'Senior Developer & Marketing Executive',
    image: '/salam.jpg',
    expertise: ['Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abdul-sallam-9248bb244/',
    },
  },
  {
    name: 'Furrukh',
    role: 'Senior Developer',
    image: '/f.jpg',
    expertise: ['Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abubaker-siddique-4624422b9/',
    },
  },
  {
    name: 'Muhammad Fazain',
    role: 'Senior Developer',
    image: '/faz.jpg',
    expertise: ['Frontend Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-faizan-2541132b8/',
    },
  },
  {
    name: 'Dua Ali Khan',
    role: 'SQA Engineer',
    image: '/Dua.jpg',
    expertise: ['SQA Engineer', 'Web Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dua-ali-khan-7015952b4/',
    },
  },
  {
    name: 'Amna Immad',
    role: 'Junior Developer',
    image: '/am.jpg',
    expertise: ['Web Developer', 'UI/UX Designer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/aamna-imdadullah-9616082bb/',
    },
  },
  {
    name: 'Yousra Khan',
    role: 'Senior Developer',
    image: '/y2.jpg',
    expertise: ['Web Developer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/hafiza-yousra-khan-/',
    },
  },
  {
    name: 'Qaimudin',
    role: 'Junior Developer',
    image: '/q.jpg',
    expertise: ['Web Developer'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/qaimudin-khuwaja-7127252b4/',
    },
  },
];

function Team() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-300">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Our talented team of digital experts brings together diverse skills and experience to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-4 sm:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50 hover:shadow-xl"
            >
              <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-lg mb-4 sm:mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-purple-300 text-xl sm:text-2xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-sm sm:text-base font-medium">
                  {member.role}
                </p>
                <div>
                  <h4 className="text-gray-400 text-xs sm:text-sm font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs sm:text-sm rounded-full bg-purple-600 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-gray-400 hover:text-purple-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
