import React from 'react';
import { Code, Database, Wrench, Brain, Monitor, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Full Stack/Backend',
      icon: <Server className="text-blue-400" size={24} />,
      skills: ['Node.js', 'Express.js', 'MERN Stack']
    },
    {
      title: 'Frontend',
      icon: <Monitor className="text-blue-400" size={24} />,
      skills: ['React.js', 'PrimeReact', 'Material UI', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="text-blue-400" size={24} />,
      skills: ['MySQL']
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-blue-400" size={24} />,
      skills: ['Git', 'GitHub', 'JSON', 'Nodemailer']
    },
    {
      title: 'ML Concepts',
      icon: <Brain className="text-blue-400" size={24} />,
      skills: ['Machine Learning', 'Data Analysis', 'Algorithms']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-700/50 rounded-lg p-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
