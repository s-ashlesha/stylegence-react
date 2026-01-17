# Stylegence - AI Fashion Platform Landing Page

A futuristic, high-end fashion-tech landing page built with React, featuring glassmorphism, metallic chrome effects, cyan-neon animations, custom cursors, typewriter effects, and smooth micro-interactions.

## 🎨 Features

- **Dark Theme Aesthetic**: Deep space background (#0a0b10) with chrome/glassmorphism effects
- **Custom Cursor**: Hollow cyan ring that follows the mouse with smooth easing
- **Cinematic Hero Animation**: "STYLEGENCE" title with smash/grow animation sequence
- **Typewriter Bridge**: Rotating sentences with metallic shimmer effect
- **Liquid Glass Orb**: Cyan-only animated orb with caustic lighting
- **Interactive Features Grid**: 9 glass cards with expand/collapse on click + ripple effect
- **AI Scan Animation**: Process steps with cycling active states and glowing scan-line
- **Infinite Scrolling CTA**: Marquee-style strip with brand messaging
- **Video Backgrounds**: Multiple video layers with edge-blended masks

## 📁 Project Structure

```
stylegence-react/
├── public/
│   ├── assets/
│   │   └── video/
│   │       ├── hero.mp4          # Main hero background video
│   │       ├── bg-proximity.mp4  # Background ambient video
│   │       ├── hero1.mp4         # Experience section video
│   │       └── hero2.mp4         # Process section video
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation with logo + waitlist button
│   │   ├── Hero.jsx              # Hero section with smash animation
│   │   ├── Experience.jsx        # Welcome section with liquid glass orb
│   │   ├── TypewriterBridge.jsx  # Cycling typewriter text animation
│   │   ├── Features.jsx          # 9 interactive glass feature cards
│   │   ├── Process.jsx           # 3-step journey with AI scan animation
│   │   ├── EarlyAdopters.jsx     # CTA section with infinite scroll strip
│   │   └── CursorRing.jsx        # Custom animated cursor
│   ├── css/
│   │   └── style.css             # Complete styles with all animations
│   ├── App.js                    # Main app component
│   └── index.js                  # React entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add video files:**
   
   Place your video files in `public/assets/video/`:
   - `hero.mp4` - Main hero background
   - `bg-proximity.mp4` - Ambient background loop
   - `hero1.mp4` - Experience section mannequin video
   - `hero2.mp4` - Process section mannequin video

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎯 Key Components Explained

### Hero Component
- Cinematic title animation sequence (wait → grow → smash)
- "Launching Soon!" reveal after smash
- Video background with gradient overlay
- Scroll indicator with pulse animation

### TypewriterBridge Component
- Three rotating phrases with typing/deleting animation
- Intersection Observer to start animation on scroll into view
- Metallic gradient shimmer on text
- Glowing cyan cursor

### Features Component
- Grid of 9 glass cards with glassmorphism effect
- Click to expand/collapse (only one open at a time)
- Ripple effect on click emanating from cursor position
- Scroll-triggered reveal animation
- Cyan glowing icons

### Process Component
- Cycling active states on 3 steps (every 1.8s)
- AI scan-line animation on active step titles
- Video mannequin with edge-blended mask
- Vertical flow line connecting steps

### CursorRing Component
- Smooth cursor following with easing (0.18 lerp)
- Expands on hover over interactive elements
- Cyan to purple color transition on hover
- Hidden when mouse leaves window

## 🎨 Design Tokens

### Colors
- Background: `#0a0b10`
- Primary Cyan: `#6effd8`
- Secondary Purple: `#a5b4fc`
- Text: `#eaeaff`
- Muted Text: `#a7add0`

### Fonts
- **Orbitron**: Headings, titles, brand
- **Satoshi**: Hero origin text
- **Space Grotesk**: Taglines
- **Chakra Petch**: Typewriter text
- **Oxanium**: Process step titles
- **Unbounded**: Feature section title
- **Sora**: Feature descriptions
- **Inter**: Body text (fallback)

### Key Animations
- `smashBack`: Hero title smash sequence
- `aiScan`: Glowing scan-line on process steps
- `metallicFlow`: Shimmer effect on typewriter
- `orbDrift`: Liquid orb floating animation
- `ctaScroll`: Infinite marquee scroll
- `rippleGlass`: Click ripple effect

## 🔧 Customization

### Changing Animation Timings

Edit timing values in components:
- **TypewriterBridge**: `typingSpeed: 45`, `deletingSpeed: 28`
- **Process**: Step cycle interval `1800ms`
- **Hero**: Smash animation delays in CSS

### Modifying Glass Effects

Adjust glassmorphism in `style.css`:
```css
backdrop-filter: blur(22px);
background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
```

### Adding New Features

To add a feature card, edit `featuresData` array in `Features.jsx`:
```javascript
{
  id: 10,
  title: "New Feature",
  icon: <svg>...</svg>,
  description: "Description here"
}
```

## 📱 Responsive Design

The layout adapts for mobile devices:
- Grid columns collapse to 1 column on small screens
- Text sizes use `clamp()` for fluid scaling
- Process steps stack vertically on mobile
- Touch-friendly tap targets

## ⚡ Performance Notes

- Videos use `playsInline` for mobile compatibility
- All animations use CSS transforms (GPU-accelerated)
- Intersection Observer for scroll-triggered animations
- RequestAnimationFrame for smooth cursor movement

## 🎭 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari 14+
- Modern mobile browsers

**Note**: Custom cursor is disabled on touch devices automatically.

## 📄 License

All rights reserved © 2025 Stylegence

---

Built with ❤️ using React, CSS3 animations, and futuristic design principles.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
