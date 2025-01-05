'use client'
import React from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight, ChevronUp, ExternalLink } from 'lucide-react'
import { useState } from 'react';
import _ from 'lodash';
import { Timeline } from '../timeline';

export const TimelineProject = ({ project }: { project: Timeline[number]['projects'][number] }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const Description = project.description;
  return (
    <div key={project.id} className="mb-4 last:mb-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-500"
      >
        <span className="font-medium text-gray-200">{project.name}</span>
        {isExpanded ? (
          <ChevronUp size={20} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>

      <div
        className={`mt-4 pl-4 overflow-hidden transition-max-height duration-500 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className='md:grid md:grid-cols-12 gap-4 mb-8 sm:flex sm:flex-col-reverse'>
          <div className={
            `text-gray-400 mb-4 ${project.image ? "md:col-span-9" : "md:col-span-12"}
                        `
          }>
            {Description}
          </div>
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
              <li key={highlightIndex} className="text-gray-400 grid grid-cols-12 gap-2">
                <div className='col-span-1 flex justify-center'>
                  <ChevronRight size={16} className="mt-1 mr-2 text-blue-400" />
                </div>
                <div className="col-span-11">
                  {highlight}
                </div>
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
    </div>
  )
}