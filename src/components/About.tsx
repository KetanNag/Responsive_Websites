import React from 'react';
import { Calendar, MapPin, Languages, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with extensive experience in the MERN stack, 
              always eager to learn and adapt to new technologies. My journey in software development 
              is driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy tackling 
              complex problems and turning ideas into reality through clean, efficient code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-semibold">Date of Birth</span>
                </div>
                <p className="text-gray-300">May 1, 2001</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-semibold">Location</span>
                </div>
                <p className="text-gray-300">Ahmedabad, India</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Languages className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-semibold">Languages</span>
                </div>
                <p className="text-gray-300">English, Hindi</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <User className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-semibold">Passion</span>
                </div>
                <p className="text-gray-300">Innovation & Learning</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-4xl">KN</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ketan Nag</h3>
                <p className="text-blue-400">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
