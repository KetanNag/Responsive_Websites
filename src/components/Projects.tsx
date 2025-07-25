import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Student Placement Portal',
      description: 'A comprehensive university placement management application built with React, Node.js, and MySQL. Features include student registration, company listings, and application tracking.',
      technologies: ['React', 'Node.js', 'MySQL'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Resume Builder',
      description: 'An intuitive tool for creating professional resumes with real-time preview and multiple templates. Built using the MERN stack with Tailwind CSS for styling.',
      technologies: ['MERN Stack', 'Tailwind CSS'],
      gradient: 'from-green-600 to-blue-600'
    },
    {
      title: 'Movie Recommendation System',
      description: 'A machine learning-powered system that suggests movies using cosine similarity algorithms. Analyzes user preferences to provide personalized recommendations.',
      technologies: ['Python', 'Machine Learning', 'Cosine Similarity'],
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
