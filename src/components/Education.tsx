import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Pandit Deendayal Energy University',
      grade: 'CGPA: 7.14',
      type: 'graduation'
    },
    {
      degree: 'Class XII',
      institution: 'Higher Secondary Education',
      grade: '62%',
      type: 'school'
    },
    {
      degree: 'Class X',
      institution: 'Secondary Education',
      grade: '75%',
      type: 'school'
    }
  ];

  const certifications = [
    'Python Programming (Udemy)',
    'Web Development Bootcamp',
    'Computer Vision',
    'Fintech/Blockchain',
    'SSC CGL'
  ];

  const achievements = [
    'Finalist in District-level Cricket Tournament'
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Award className="text-blue-400" size={28} />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <p className="text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-blue-400" size={28} />
              Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-blue-400 font-semibold">3+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technologies</span>
                  <span className="text-blue-400 font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Certifications</span>
                  <span className="text-blue-400 font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
