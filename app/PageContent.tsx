'use client'
import Image, { StaticImageData } from 'next/image'
import { ChevronDown, ChevronRight, ChevronUp, ExternalLink, Github, Linkedin } from 'lucide-react'
import { useState } from 'react';
import PROFILE_PIC from './images/profile_pic.jpg'
import dayjs from 'dayjs';
import _ from 'lodash';
import { BlogPost } from './blog/page';
import Link from 'next/link';

const latestBlogPost = {
  id: 1,
  title: "Building Scalable Microservices",
  preview: "Exploring best practices for designing and implementing microservices architecture...",
  date: "2024-12-15",
  slug: "building-scalable-microservices",
  image: "/images/blog/microservices.jpg"
}

export type Timeline = {
  year: string,
  role: string,
  company: string,
  description: React.ReactNode,
  image?: string | StaticImageData,
  projects?: {
    id: number | string,
    image?: string | StaticImageData,
    name: string,
    description: React.ReactNode,
    technologies: string[],
    highlights: string[],
    link: string
  }[]
}[]

const Clamped = ({ Content }: { Content: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const stringContent = (Content?.valueOf().props.children as Array<React.ReactNode>)
    .map((item: any) => item?.props?.children || item).join('\n')
  return (
    <div>
      <div className={`text-gray-400 mb-4 whitespace-pre text-wrap ${isExpanded ? '' : 'line-clamp-3'} prose prose-invert`}>
        {Content}
      </div>
      {
        stringContent.split('\n').length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline mb-8"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )
      }
    </div>

  )
}

export default function Home({ timeline, blogPosts }: { timeline: Timeline, blogPosts: BlogPost[] }) {
  console.log(blogPosts)

  const latestBlogPost = blogPosts.reduce((prev, current) => dayjs(prev.date).isAfter(dayjs(current.date)) ? prev : current)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      <main className="pt-24 pb-12">
        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Full-Stack Engineer
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Building the future of the web
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over {dayjs().diff(dayjs("01/06/2016"), "year")} years of experience in full-stack development, I specialize in building
                scalable web applications using modern technologies. Passionate about clean code,
                performance optimization, and creating exceptional user experiences.
                <br />
                <br />
                When not coding, you can find me training for my next marathon / triathlon 🏊🚴🏃
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/hlminh2000" className="p-2 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/le-minh-ha-57644440/" className="p-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 relative rotate-3">
                <div className="absolute inset-0 transform rotate-3 p-4 drop-shadow-sm">
                  <Image
                  src={PROFILE_PIC}
                  alt="Minh Ha"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
                </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </section>


        {/* Latest Blog Post Section */}
        <section id="blog" className="max-w-4xl mx-auto px-6 mb-24">
          <h3 className="text-2xl font-bold mb-8">Latest Blog Post</h3>
          <article className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6">
            {latestBlogPost.image && (
              <div className="md:w-1/3">
                <Image
                  src={latestBlogPost.image}
                  alt={latestBlogPost.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            )}
            <div className={latestBlogPost.image ? "md:w-2/3" : "w-full"}>
              <Link href={`/blog/${latestBlogPost.slug}`} className="block">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                  {latestBlogPost.title}
                </h2>
              </Link>
              <p className="text-gray-400 mb-4">{latestBlogPost.preview}</p>
              <div className="text-sm text-gray-500">{dayjs(latestBlogPost.date).format("DD/MM/YYYY")}</div>
            </div>
          </article>
          <div className="mt-6 text-center">
            <Link href="/blog" className="text-blue-400 hover:underline">
              View all blog posts
            </Link>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="max-w-4xl mx-auto px-6 mb-24">
          <h3 className="text-2xl font-bold mb-12">My Timeline</h3>
          <div className="relative">
            {_.reverse(timeline.map((item, index) => (

              <div key={index} className="mb-12 relative pl-8 border-l border-gray-800">
                {item.image && (
                  <div className="mb-4">
                    <Image
                      src={item.image}
                      alt={`${item.company} logo`}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                )}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-400" />
                <div className="mb-1 text-sm text-blue-400">{item.year}</div>
                <h4 className="text-xl font-semibold mb-2">{item.role}</h4>
                <div className="text-gray-400 mb-2">{item.company}</div>
                <Clamped Content={item.description} />


                {item.projects && item.projects.map(project => {
                  const [isExpanded, setIsExpanded] = useState(false);
                  const Description = project.description;
                  return (
                    <div key={project.id} className="mb-4 last:mb-0">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-between w-full text-left bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium text-gray-200">{project.name}</span>
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-gray-400" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 pl-4 animate-fadeIn">
                          <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mb-8'>
                            {project.image && (
                              <div className="md:col-span-3">
                                <Image
                                  src={project.image}
                                  alt={`${project.name}`}
                                  width={200}
                                  height={200}
                                  className="rounded-md"
                                />
                              </div>
                            )}
                            <div className={
                              `text-gray-400 mb-4 ${project.image ? "md:col-span-9" : "md:col-span-12"}
                            whitespace-pre text-wrap
                            `
                            }>
                              {Description}
                            </div>
                          </div>

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
                  )
                })}
                
              </div>
            )))}
            <div className="mb-12 relative pl-8 border-l border-gray-800" id="contact">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-400" />
              <div className="mb-1 text-sm text-blue-400">{dayjs().year()}</div>
              <h4 className="text-xl font-semibold mb-2">[Your logo here]</h4>
              {/* <div className="text-gray-400 mb-2">Your Company Logo</div> */}
              <div className='text-gray-400 mb-4 whitespace-pre text-wrap'>See yourself on this timeline? Tell me about you.</div>
              <form className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="text"
                    id="companyLogo"
                    name="companyLogo"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
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
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
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
        </section> */}
      </main>
    </div>
  )
}

