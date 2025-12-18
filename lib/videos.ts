export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  category: 'solo' | 'duet' | 'concerto';
  description: string;
  date: string;
}

export const videos: Video[] = [
  // Solo performances
  {
    id: '1',
    title: 'Chopin Nocturne Op. 9 No. 2',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'solo',
    description: 'A beautiful rendition of Chopin\'s famous nocturne',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Mozart Sonata K. 545',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'solo',
    description: 'First movement of Mozart\'s Sonata in C Major',
    date: '2024-02-20'
  },
  {
    id: '3',
    title: 'Debussy Clair de Lune',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'solo',
    description: 'Impressionistic masterpiece by Claude Debussy',
    date: '2024-03-10'
  },
  
  // Duet performances
  {
    id: '4',
    title: 'Brahms Hungarian Dance No. 5',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'duet',
    description: 'Four-hand piano duet performance',
    date: '2024-04-05'
  },
  {
    id: '5',
    title: 'Schubert Fantasy in F Minor',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'duet',
    description: 'Romantic duet with expressive melodies',
    date: '2024-05-12'
  },
  
  // Concerto performances
  {
    id: '6',
    title: 'Mozart Piano Concerto No. 21',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'concerto',
    description: 'Performance with orchestra - Second movement',
    date: '2024-06-18'
  },
  {
    id: '7',
    title: 'Grieg Piano Concerto in A Minor',
    youtubeId: 'YGRO05WcNDk', // Sample video - replace with actual
    category: 'concerto',
    description: 'First movement with full orchestra',
    date: '2024-07-22'
  }
];

export function getVideosByCategory(category: 'solo' | 'duet' | 'concerto') {
  return videos.filter(video => video.category === category);
}

export function getAllVideos() {
  return videos;
}
