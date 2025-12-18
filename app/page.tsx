'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, Users, Music2 } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: 'Solo',
      description: "A curated collection of Raymond's piano performances from competitions",
      icon: Music,
      href: '/videos/solo',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Duet',
      description: "Raymond's Collaborative four-hand piano performances with fellow musicians",
      icon: Users,
      href: '/videos/duet',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Concerto',
      description: "Raymond's performances featuring orchestral collaborations and works with accompaniment",
      icon: Music2,
      href: '/videos/concerto',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Portrait Watermark Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(/RayPianoAdventure/raymond-portrait.jpg)',
            backgroundPosition: 'center 30%',
            filter: 'grayscale(10%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 z-10"></div>
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Raymond Zhou
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-purple-200 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Young Pianist & Composer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#bio" 
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Discover My Journey
            </a>
          </motion.div>
          <br/>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#videos" 
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Performance Gallery
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 text-center">About Raymond Zhou</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Raymond Zhou is an 11-year-old pianist and composer who truly enjoys learning, exploring, and expressing himself through music. He began piano lessons at the age of four, and over the years, music has grown into a central part of his daily life.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Raymond has completed Repertoire Piano of Royal Conservatory of Music (RCM) Level 10 Repertoire Examination in October 2024, with score 50.5/56. He enjoys working on a wide variety of repertoire and is especially interested in developing musical depth, expression, and personal interpretation.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                In addition to piano performance, Raymond has a strong interest in composition. He began teaching himself composition at age seven and has since received meaningful recognition for his original works. He is a two-time winner (2023 and 2024) of the MTNA Composition Competition at both the Washington State and Northwest Division levels, advancing to the national finals each year. Having his work performed at the 2023 MTNA State Conference Recital was a particularly inspiring experience for him.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Raymond has participated in many competitions, festivals, and concerts, earning top prizes and special awards. One highlight was performing at Weill Recital Hall at Carnegie Hall in 2024, which left a lasting impression on him.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                He enjoys collaborative music-making and has attended Music Fest Perugia (2023, 2024), performing Haydn Piano Concerto No. 11 and Mozart Piano Concerto No. 23 with orchestra. In 2025, he participated in the Euro Art Festival, performing Bach Piano Concerto No. 1 in D minor and chamber music with fellow young pianists.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Outside of piano, Raymond studies violin, and plays clarinet in his school band. He is a thoughtful and motivated student who responds well to encouragement, structure, and clear musical direction. He is excited to continue growing musically and learning from new perspectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Categories Section */}
      <section id="videos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Performance Gallery
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link href={category.href}>
                    <div className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 cursor-pointer">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{category.description}</p>
                        
                        <div className="mt-6 flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                          <span className="text-sm font-medium">View Performances</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Raymond Piano Adventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
