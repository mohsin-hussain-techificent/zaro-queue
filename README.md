# Pixel Pier NYC - Next.js Version

This is a Next.js conversion of the original Pixel Pier NYC WordPress theme. The site features a modern, responsive design with smooth animations and interactive elements.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Animated Headline**: Rotating text animation in the hero section
- **Portfolio Carousel**: Interactive portfolio showcase with navigation
- **Smooth Animations**: CSS transitions and hover effects
- **Modern UI**: Clean, professional design with attention to detail
- **Performance Optimized**: Fast loading times and smooth interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixel-pier-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pixel-pier-nextjs/
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Header.js       # Navigation header
│   ├── AnimatedHeadline.js  # Hero section with rotating text
│   └── PortfolioCarousel.js # Portfolio showcase
├── pages/              # Next.js pages
│   └── index.js        # Home page
├── public/             # Static assets
│   └── assets/         # Images and other assets
└── package.json        # Dependencies and scripts
```

## Components

### Layout
The main layout component that wraps all pages and includes global styles and meta tags.

### Header
Responsive navigation header with logo and menu functionality.

### AnimatedHeadline
Hero section with rotating text animation that cycles through different words.

### PortfolioCarousel
Interactive portfolio showcase with navigation controls and smooth transitions.

## Styling

The project uses CSS-in-JS with styled-jsx for component-specific styles. Global styles are defined in the Layout component.

### CSS Variables
The project uses CSS custom properties for consistent theming:
- `--vamtam-body-link-regular`: Default link color
- `--vamtam-body-link-hover`: Hover state color
- `--vamtam-site-max-width`: Maximum content width
- And more...

## Assets

All images and assets are stored in the `public/assets/` directory. The assets were copied from the original WordPress theme and optimized for web use.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new file in the `pages/` directory
2. Export a default React component
3. Use the Layout component for consistent styling

### Adding New Components

1. Create a new file in the `components/` directory
2. Export a default React component
3. Use styled-jsx for component-specific styles

## Deployment

The project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The site is optimized for performance with:
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size
- Efficient animations

## License

This project is for demonstration purposes. The original design belongs to Pixel Pier NYC.

## Credits

- Original design: Pixel Pier NYC
- Icons: Font Awesome
- Images: Various photographers (see image metadata) 