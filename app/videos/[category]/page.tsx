'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { getVideosByCategory } from '@/lib/videos';
import { use } from 'react';
import CopyButton from '@/components/CopyButton';

interface PageProps {
  params: Promise<{
    category: 'solo' | 'duet' | 'concerto';
  }>;
}

export default function VideoCategory({ params }: PageProps) {
  const { category } = use(params);
  const videos = getVideosByCategory(category);
  
  const categoryInfo = {
    solo: {
      title: 'Solo Performances',
      description: "Raymond's individual piano performances",
      gradient: 'from-purple-500 to-pink-500'
    },
    duet: {
      title: 'Duet Performances',
      description: "Raymond's collaborative four-hand piano performances",
      gradient: 'from-blue-500 to-cyan-500'
    },
    concerto: {
      title: 'Concerto Performances',
      description: 'Performances with orchestra',
      gradient: 'from-orange-500 to-red-500'
    }
  };

  const info = categoryInfo[category];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="py-8 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-block bg-gradient-to-r ${info.gradient} text-transparent bg-clip-text mb-4`}>
              <h1 className="text-5xl md:text-6xl font-bold">{info.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">{info.description}</p>
          </motion.div>
        </div>
      </header>

      {/* Video Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => {
              const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
              
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                    {/* Video Embed */}
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {video.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(video.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      {/* Easy Access Buttons */}
                      <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                        <div className="text-sm text-gray-400 mb-1 font-medium">
                          📎 YouTube video details:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <CopyButton 
                            text={youtubeUrl} 
                            label="Copy YouTube Link"
                          />
                          <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 hover:scale-105 text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in YouTube
                          </a>
                        </div>
                        <div className="mt-2 p-3 bg-white/5 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">Direct Link:</div>
                          <div className="text-xs text-purple-300 break-all font-mono">
                            {youtubeUrl}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {videos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No videos available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Raymond Piano Adventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
