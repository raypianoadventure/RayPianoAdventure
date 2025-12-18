'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import CopyButton from './CopyButton';

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  category: string;
}

interface VideoScrollContainerProps {
  videos: Video[];
}

export default function VideoScrollContainer({ videos }: VideoScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          {videos.length} {videos.length === 1 ? 'Performance' : 'Performances'}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 border border-white/20"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 border border-white/20"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#9333ea #1e1b4b'
          }}
        >
          {videos.map((video, index) => {
            const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
            
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-[400px]"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
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
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
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
                        📎 Easy Access for Teacher:
                      </div>
                      <div className="flex flex-col gap-2">
                        <CopyButton 
                          text={youtubeUrl} 
                          label="Copy YouTube Link"
                        />
                        <a
                          href={youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 hover:scale-105 text-sm font-medium"
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
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 12px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(30, 27, 75, 0.5);
          border-radius: 6px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #9333ea, #ec4899);
          border-radius: 6px;
          border: 2px solid rgba(30, 27, 75, 0.5);
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #a855f7, #f472b6);
        }
      `}</style>
    </>
  );
}
