# Reels Prontos - Premium Social Media Templates

![Project Preview](/public/preview.jpg)

A high-conversion landing page for selling premium social media video template packs, featuring time-sensitive offers and immersive animations.

## ✨ Key Features

- **Limited-Time Offer System**
  - Persistent 12-hour countdown timer
  - Airport-style digital display
  - Automatic offer expiration handling

- **Content Presentation**
  - Auto-rotating video carousel
  - Template pack preview system
  - Responsive grid layout for packs

- **Visual Experience**
  - Parallax scrolling effects
  - Framer Motion animations
  - Custom golden gradient theme (#c5a030)
  - Glassmorphism design elements

- **Conversion Optimization**
  - Sticky call-to-action sections
  - Benefit-driven content structure
  - Trust-building social proof elements

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **UI Icons**: Lucide React
- **Fonts**: Montserrat, Poppins, Bodoni Moda
- **Deployment**: Vercel Edge Network

## 🚀 Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/reels-prontos.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎛 Core Components

| Component                | Description                                  |
|--------------------------|----------------------------------------------|
| `CountdownTimer`          | Persistent offer timer with digital display  |
| `ReelCarousel`           | Responsive video preview carousel           |
| `AnimatedSection`         | Scroll-triggered animation containers       |
| `ParallaxSection`         | Interactive scroll-based effects            |

## ⚙ Configuration

- `tailwind.config.ts`  
  Custom theme extensions:
  ```ts
  theme: {
    extend: {
      colors: {
        primary: '#c5a030', // Gold accent
        secondary: '#034803' // Dark green
      }
    }
  }
  ```

- `next.config.js`  
  Optimized for video handling:
  ```js
  module.exports = {
    images: {
      domains: ['res.cloudinary.com'] // CDN for video thumbnails
    }
  }
  ```

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details.

---

**Note**: This is a demonstration project for portfolio purposes. All content and timing mechanisms are examples only.
