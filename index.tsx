import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedProject, setExpandedProject] = useState(null);
  
  // Timeline data definition moved inside the component
  const timeline = [
    {
      year: "2024",
      role: "Senior Full-Stack Engineer",
      company: "TechCorp",
      description: "Leading development of cloud-native applications",
      projects: [
        {
          id: 1,
          name: "E-commerce Platform Redesign",
          description: "Led the complete redesign and reconstruction of the company's e-commerce platform, resulting in a 40% increase in conversion rates.",
          technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
          highlights: [
            "Implemented microservices architecture",
            "Designed real-time inventory management",
            "Optimized checkout flow reducing cart abandonment by 25%"
          ],
          link: "https://example.com/project1"
        },
        {
          id: 2,
          name: "Analytics Dashboard",
          description: "Built a real-time analytics dashboard processing data from multiple sources.",
          technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
          highlights: [
            "Real-time data processing pipeline",
            "Custom visualization components",
            "Automated reporting system"
          ],
          link: "https://example.com/project2"
        }
      ]
    },
    {
      year: "2022",
      role: "Full-Stack Developer",
      company: "StartupX",
      description: "Architected and built scalable web applications",
      projects: [
        {
          id: 3,
          name: "Social Media Management Tool",
          description: "Developed a comprehensive social media management platform for enterprise clients.",
          technologies: ["Angular", "Django", "Redis", "Kubernetes"],
          highlights: [
            "Multi-platform content scheduling",
            "AI-powered content recommendations",
            "Analytics and reporting dashboard"
          ],
          link: "https://example.com/project3"
        }
      ]
    },
    {
      year: "2020",
      role: "Frontend Developer",
      company: "DigitalCo",
      description: "Developed responsive web interfaces"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Microservices",
      preview: "Exploring best practices for designing and implementing microservices architecture...",
      date: "2024-12-15",
      readTime: "8 min"
    },
    {
      title: "React Performance Optimization",
      preview: "Deep dive into advanced techniques for optimizing React applications...",
      date: "2024-11-30",
      readTime: "6 min"
    },
    {
      title: "The Future of Web Development",
      preview: "Analyzing emerging trends and technologies shaping the future of web development...",
      date: "2024-11-15",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Rest of the component remains exactly the same */}
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Minh Ha
            </h1>
            <div className="flex gap-8">
              {['about', 'timeline', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  } transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Full-Stack Engineer
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Building the future of web
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over 8 years of experience in full-stack development, I specialize in building
                scalable web applications using modern technologies. Passionate about clean code,
                performance optimization, and creating exceptional user experiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                <img
                  src="/api/placeholder/400/400"
                  alt="Profile"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <h3 className="text-2xl font-bold mb-12">Career Timeline</h3>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="mb-12 relative pl-8 border-l border-gray-800">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-400" />
                <div className="mb-1 text-sm text-blue-400">{item.year}</div>
                <h4 className="text-xl font-semibold mb-2">{item.role}</h4>
                <div className="text-gray-400 mb-2">{item.company}</div>
                <p className="text-gray-500 mb-4">{item.description}</p>
                
                {item.projects && item.projects.map(project => (
                  <div key={project.id} className="mb-4 last:mb-0">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="flex items-center justify-between w-full text-left bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-medium text-gray-200">{project.name}</span>
                      {expandedProject === project.id ? (
                        <ChevronUp size={20} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </button>
                    
                    {expandedProject === project.id && (
                      <div className="mt-4 pl-4 animate-fadeIn">
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-300 mb-2">Technologies</div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-300 mb-2">Key Highlights</div>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="text-gray-400 flex items-start">
                                <ChevronRight size={16} className="mt-1 mr-2 text-blue-400" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <h3 className="text-2xl font-bold mb-12">Latest Posts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="text-sm text-gray-400 mb-4">{post.date} · {post.readTime}</div>
                <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
                <p className="text-gray-400 mb-6">{post.preview}</p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;