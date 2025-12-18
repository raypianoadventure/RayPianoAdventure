# Raymond's Piano Website

A modern, elegant personal website for Raymond, a young pianist, showcasing his performances across solo, duet, and concerto categories.

## Features

- **Hero Section**: Animated landing page with Raymond's name and tagline
- **Bio Section**: Detailed information about Raymond's musical journey
- **Performance Gallery**: Three categories of performances
  - Solo: Individual piano performances
  - Duet: Collaborative four-hand performances
  - Concerto: Performances with orchestra
- **Dynamic Video Pages**: Separate pages for each category with YouTube embeds
- **Modern Design**: Gradient backgrounds, smooth animations, and responsive layout
- **Framer Motion**: Smooth scroll animations and transitions
- **Tailwind CSS**: Modern utility-first styling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Development

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Customization

### Adding Your YouTube Videos

Edit the file `lib/videos.ts` to add your actual YouTube videos:

```typescript
{
  id: '1',
  title: 'Your Video Title',
  youtubeId: 'YOUR_YOUTUBE_VIDEO_ID', // Extract from YouTube URL
  category: 'solo', // or 'duet' or 'concerto'
  description: 'Your video description',
  date: '2024-01-15'
}
```

**How to get YouTube Video ID:**
- From URL: `https://www.youtube.com/watch?v=YGRO05WcNDk`
- The ID is: `YGRO05WcNDk` (everything after `v=`)

### Updating Bio Content

Edit `app/page.tsx` and find the Bio Section (around line 95) to update the text about Raymond.

### Changing Colors

The website uses gradient color schemes. To change them:
- Edit the `gradient` values in `app/page.tsx` (line 14-28)
- Modify Tailwind classes throughout the components

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `pnpm build`
5. Publish directory: `.next`

### Deploy to GitHub Pages

For static export:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:
```bash
pnpm build
```

3. Deploy the `out` folder to GitHub Pages

## Project Structure

```
raymond-piano-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with hero, bio, and categories
│   ├── globals.css         # Global styles
│   └── videos/
│       └── [category]/
│           └── page.tsx    # Dynamic category pages
├── lib/
│   └── videos.ts           # Video data and helper functions
├── public/                 # Static assets
└── package.json
```

## Adding More Features

### Add a Contact Form

Install a form library:
```bash
pnpm add react-hook-form @hookform/resolvers zod
```

### Add Image Gallery

Install image components:
```bash
pnpm add yet-another-react-lightbox
```

### Add Analytics

Install analytics:
```bash
pnpm add @vercel/analytics
```

## License

© 2024 Raymond Piano Adventures. All rights reserved.

## Support

For questions or issues, please open an issue on the GitHub repository.
