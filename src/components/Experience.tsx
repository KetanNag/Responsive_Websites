import React from 'react';
import { Building, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Intern</h3>
                    <p className="text-blue-400 font-semibold text-lg">Forage</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    <span>Internship Program</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Worked on optimizing live stock data dashboard performance using Python, JSON, HTML, and JavaScript. 
                    Gained hands-on experience in financial technology and data visualization.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JSON', 'HTML', 'JavaScript', 'Data Visualization'].map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
