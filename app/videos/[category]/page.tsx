import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getVideosByCategory } from '@/lib/videos';
import VideoScrollContainer from '@/components/VideoScrollContainer';

interface PageProps {
  params: Promise<{
    category: 'solo' | 'duet' | 'concerto';
  }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: 'solo' },
    { category: 'duet' },
    { category: 'concerto' }
  ];
}

export default async function VideoCategory({ params }: PageProps) {
  const { category } = await params;
  const videos = getVideosByCategory(category);
  
  const categoryInfo = {
    solo: {
      title: 'Solo Performances',
      description: "A curated collection of Raymond's piano performances from competitions",
      gradient: 'from-purple-500 to-pink-500'
    },
    duet: {
      title: 'Duet Performances',
      description: "Raymond's Collaborative four-hand piano performances with fellow musicians",
      gradient: 'from-blue-500 to-cyan-500'
    },
    concerto: {
      title: 'Concerto Performances',
      description: "Raymond's performances featuring orchestral collaborations and works with accompaniment",
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
          
          <div>
            <div className={`inline-block bg-gradient-to-r ${info.gradient} text-transparent bg-clip-text mb-4`}>
              <h1 className="text-5xl md:text-6xl font-bold">{info.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mb-4">{info.description}</p>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span>💡 Tip: Scroll horizontally to browse all videos →</span>
            </p>
          </div>
        </div>
      </header>

      {/* Horizontal Scroll Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <VideoScrollContainer videos={videos} />

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
