import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const timeline = [
    { year: '2024', role: 'Senior Full-Stack Engineer', company: 'Tech Corp' },
    { year: '2022', role: 'Full-Stack Developer', company: 'StartupCo' },
    { year: '2020', role: 'Frontend Developer', company: 'WebAgency' }
  ];

  const blogPosts = [
    { title: 'Building Scalable APIs', date: 'Jan 2024' },
    { title: 'React Performance Tips', date: 'Dec 2023' },
    { title: 'Modern CSS Techniques', date: 'Nov 2023' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="px-6 py-32 text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          John Developer
        </h1>
        <p className="text-xl text-gray-300">Full-Stack Engineer</p>
        <div className="flex justify-center gap-4 mt-6">
          <Github className="w-6 h-6 hover:text-purple-400 cursor-pointer" />
          <Linkedin className="w-6 h-6 hover:text-purple-400 cursor-pointer" />
          <Mail className="w-6 h-6 hover:text-purple-400 cursor-pointer" />
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
          <p className="text-gray-300">
            Full-stack engineer with 5+ years of experience building scalable web applications.
            Passionate about clean code, performance optimization, and modern development practices.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Timeline</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-gray-800 bg-opacity-50 rounded-lg p-6">
              <div className="text-purple-400 font-mono">{item.year}</div>
              <div>
                <h3 className="font-bold">{item.role}</h3>
                <p className="text-gray-400">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex justify-between items-center">
              <h3 className="font-bold hover:text-purple-400 cursor-pointer">{post.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{post.date}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;