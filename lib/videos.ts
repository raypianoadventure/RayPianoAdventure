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
    title: 'Chopin - Nocturne in D-Flat Major, Op. 27, No. 2',
    youtubeId: 'yrbY2iSlXhw',
    category: 'solo',
    description: 'Video applied for Elite Competition 2025 - 1st Prize',
    date: '2025-11-09'
  },
  {
    id: '2',
    title: "Chopin - 3 Ecossaises, Op. 72, No. 3.\t\t\t\t",
    youtubeId: 'ea03X7dLaYc', 
    category: 'solo',
    description: 'Solo in Euro Art festival, Szczecin, Poland',
    date: '2025-07-26'
  },
  {
    id: '3',
    title: 'Chopin - Waltz in E-flat major, Op. 18 "Grande Valse Brillante"',
    youtubeId: 'FMzfBvlMh-w', 
    category: 'solo',
    description: 'Performance on anuual recital with Liam Sun, 12/07/25',
    date: '2025-12-07'
  },
  {
    id: '4',
    title: 'Tchaikovsky - The Seasons, Op.37a November',
    youtubeId: 'hhVF4B9H3N8', 
    category: 'solo',
    description: 'Russian Chamber music 2025',
    date: '2025-12-13'
  },
  {
    id: '5',
    title: 'Chopin - Waltz "L\'Adieu" Op. 69 No. 1 in A Flat , Posth.',
    youtubeId: 'sJ7xlLG90QE', 
    category: 'solo',
    description: "Performance on piano teacher's recital",
    date: '2025-02-10'
  },
  {
    id: '6',
    title: 'Tchaikovsky - The Seasons, Op.37a December',
    youtubeId: 'IjXkIK6voxs', 
    category: 'solo',
    description: 'Russian Chamber Music Competition Winner Recital',
    date: '2024-12-14'
  },
  {
    id: '7',
    title: 'Bach - Prelude and Fugue in G major BWV 884',
    youtubeId: '7ptZx4LGBNo', 
    category: 'solo',
    description: 'Applied for Bach International Competition 2025, 1st prize winner',
    date: '2024-11-07'
  },
  {
    id: '8',
    title: 'Chopin - Fantaisie-Impromptu',
    youtubeId: 'Nxn4ermhXrg', 
    category: 'solo',
    description: 'Performance at music fest Perugia 2024, Perugia, Italy',
    date: '2024-07-24'
  },
  {
    id: '9',
    title: 'Chopin - Nocturne in B major, Op. 9 No. 3',
    youtubeId: 'AnDRXH6XrOM', 
    category: 'solo',
    description: '2024 Chopin NW Festival Gold Medalist Winner Recital, Helen Belvin Award',
    date: '2024-02-24'
  },
  {
    id: '10',
    title: 'Chopin - Nocturne in E-flat Major Op.9 No.2',
    youtubeId: 'cVbTeWPiis8', 
    category: 'solo',
    description: 'Performance at music fest Perugia 2023, Perugia, Italy',
    date: '2023-08-03'
  },
  {
    id: '11',
    title: 'Chopin - Nocturne in E-flat Major Op.9 No.2',
    youtubeId: 'CrH0H7isHHo', 
    category: 'solo',
    description: 'Performance at PAFE Winner Concert 2023',
    date: '2023-03-24'
  },
  
  
  // Duet performances
  {
    id: '1000',
    title: 'Alfred Schnittke - Pastoral and Minuet from Suite in the old style',
    youtubeId: 'HLB9MxitOF8', 
    category: 'duet',
    description: 'Raymond & Yiming - Performance at Russian Chamber Music 25 winner recital',
    date: '2025-12-13'
  },
  {
    id: '1001',
    title: 'Duet - 6 Studien in kanonischer Form Op. 56 & March from Ballet Love for Three Oranges',
    youtubeId: 'LRd0Vxf8_QQ', 
    category: 'duet',
    description: 'Raymond & Liam - Duet at their annual recital',
    date: '2024-05-12'
  },
  
  // Concerto performances
  {
    id: '2000',
    title: 'Bach - Keyboard Concerto No.3 in D Major BWV 1054 - 1st Movement',
    youtubeId: 'kFDV8VHHxdA', 
    category: 'concerto',
    description: 'Performance with orchestra in Euro Art festival Szczecin, Poland',
    date: '2025-07-25'
  },
  {
    id: '2001',
    title: 'J.S.Bach Concerto no.1 in D Minor BWV 1052 - 1st movement',
    youtubeId: 'WvaWPlJTLtk', 
    category: 'concerto',
    description: 'Performance at SYAMF 2025',
    date: '2025-07-25'
  },
  {
    id: '2002',
    title: 'W.A. Mozart Piano Concerto No. 23 in A major, K. 488 - 1st movement',
    youtubeId: '2ZMcuYEk8pY', 
    category: 'concerto',
    description: 'Performance with orchestra at music fest Perugia 2023, Perugia, Italy',
    date: '2025-07-25'
  },
  {
    id: '2003',
    title: 'Joseph Haydn - Piano Concerto No. 11 in D major - 1st Movement',
    youtubeId: 'YTkNJfF0rBU', 
    category: 'concerto',
    description: 'Performance in music fest Perugia 2023, Perugia, Italy',
    date: '2024-07-22'
  }
];

export function getVideosByCategory(category: 'solo' | 'duet' | 'concerto') {
  return videos.filter(video => video.category === category);
}

export function getAllVideos() {
  return videos;
}
