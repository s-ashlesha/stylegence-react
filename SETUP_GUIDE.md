# Stylegence React - Complete Setup Guide

## 📋 Complete File Structure

```
stylegence-react/
│
├── public/
│   ├── assets/
│   │   └── video/
│   │       ├── hero.mp4          ← YOU NEED TO ADD THIS
│   │       ├── bg-proximity.mp4  ← YOU NEED TO ADD THIS
│   │       ├── hero1.mp4         ← YOU NEED TO ADD THIS
│   │       └── hero2.mp4         ← YOU NEED TO ADD THIS
│   └── index.html                ✓ PROVIDED
│
├── src/
│   ├── components/
│   │   ├── CursorRing.jsx        ✓ PROVIDED
│   │   ├── EarlyAdopters.jsx     ✓ PROVIDED
│   │   ├── Experience.jsx        ✓ PROVIDED
│   │   ├── Features.jsx          ✓ PROVIDED
│   │   ├── Hero.jsx              ✓ PROVIDED
│   │   ├── Navbar.jsx            ✓ PROVIDED
│   │   ├── Process.jsx           ✓ PROVIDED
│   │   └── TypewriterBridge.jsx  ✓ PROVIDED
│   │
│   ├── css/
│   │   └── style.css             ✓ PROVIDED
│   │
│   ├── App.js                    ✓ PROVIDED
│   └── index.js                  ✓ PROVIDED
│
├── .gitignore                    ✓ PROVIDED
├── package.json                  ✓ PROVIDED
└── README.md                     ✓ PROVIDED
```

## 🚀 Step-by-Step Setup

### Step 1: Prerequisites Check

Ensure you have these installed:
```bash
node --version  # Should be v14 or higher
npm --version   # Should be v6 or higher
```

If not installed, download from: https://nodejs.org/

### Step 2: Project Setup

1. **Navigate to the project directory:**
   ```bash
   cd stylegence-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install:
   - react (^18.2.0)
   - react-dom (^18.2.0)
   - react-scripts (5.0.1)

### Step 3: Add Video Files

**IMPORTANT**: The app requires 4 video files. Create the video directory and add your videos:

```bash
mkdir -p public/assets/video
```

Then copy your video files:
- `hero.mp4` → Main hero section background (looping)
- `bg-proximity.mp4` → Ambient background for Experience/Process sections (looping)
- `hero1.mp4` → Mannequin outfit-changing video for Experience section
- `hero2.mp4` → Mannequin outfit-changing video for Process section

**Video Requirements:**
- Format: MP4 (H.264 codec recommended)
- Recommended resolution: 1920x1080 or higher
- Should loop seamlessly
- Keep file sizes optimized (use compression if needed)

**If you don't have videos yet:**
You can temporarily use placeholder videos or the app will show blank video elements (won't crash, but visuals will be missing).

### Step 4: Start Development Server

```bash
npm start
```

The browser will automatically open to `http://localhost:3000`

**Expected behavior:**
- Hero section with video background and smash animation
- Custom cyan cursor ring following mouse
- Smooth scrolling between sections
- Typewriter animation starts when scrolled into view
- Feature cards expand on click
- Process steps cycle every 1.8 seconds
- Infinite scrolling CTA strip at bottom

### Step 5: Verify All Features Work

Go through this checklist:

- [ ] Custom cursor appears and follows mouse smoothly
- [ ] Hero title "STYLEGENCE" plays grow → smash animation
- [ ] "Launching Soon!" appears after smash
- [ ] Scroll indicator animates
- [ ] Video backgrounds play (if videos added)
- [ ] Liquid glass orb animates in Experience section
- [ ] Typewriter starts typing when scrolled into view
- [ ] Feature cards reveal on scroll
- [ ] Feature cards expand/collapse on click with ripple
- [ ] Process steps cycle with AI scan animation
- [ ] Infinite CTA strip scrolls continuously
- [ ] Hover effects work on buttons and cards

## 🔧 Common Issues & Solutions

### Issue: Videos not showing
**Solution**: 
- Check video files are in `public/assets/video/`
- Verify file names match exactly (case-sensitive)
- Try refreshing the page (Ctrl+F5)
- Check browser console for 404 errors

### Issue: Animations not working
**Solution**:
- Clear browser cache
- Check if `prefers-reduced-motion` is enabled in OS (will disable animations)
- Verify CSS file is loading in browser DevTools

### Issue: Custom cursor not appearing
**Solution**:
- CSS rule `body { cursor: none; }` hides default cursor
- Custom cursor only works on desktop (not touch devices)
- Check browser console for JavaScript errors

### Issue: Build fails
**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: Typewriter doesn't start
**Solution**:
- Scroll down to the typewriter section
- It only starts when 45% visible (Intersection Observer)
- Check browser console for errors

## 🎨 Customization Guide

### Changing Colors

Edit `src/css/style.css`:

```css
/* Main cyan accent */
#6effd8 → Your color

/* Purple accent */
#a5b4fc → Your color

/* Background */
#0a0b10 → Your color
```

### Changing Fonts

Fonts are loaded from Google Fonts in `public/index.html`. To change:

1. Remove unwanted font links
2. Add new Google Font links
3. Update CSS font-family values

### Adding/Removing Features

Edit `src/components/Features.jsx`:

Find the `featuresData` array and add/remove objects:
```javascript
{
  id: 10,  // Unique ID
  title: "Your Feature",
  icon: <svg>...</svg>,  // SVG icon
  description: "Description text"
}
```

### Adjusting Animation Speed

**Hero Smash:**
- Edit CSS in `style.css` → `.smash-title` animation delays

**Typewriter:**
- Edit `TypewriterBridge.jsx` → `typingSpeed` and `deletingSpeed` variables

**Process Steps:**
- Edit `Process.jsx` → `setInterval` value (currently 1800ms)

## 🚢 Production Build

### Build for deployment:
```bash
npm run build
```

This creates optimized files in `build/` folder.

### Deploy to various platforms:

**Netlify/Vercel:**
- Drag & drop the `build` folder
- Or connect GitHub repo for auto-deploy

**Traditional hosting:**
- Upload contents of `build/` folder
- Configure server to serve `index.html` for all routes

**Environment variables:**
- Create `.env` file for API keys (if needed later)
- Access via `process.env.REACT_APP_VARIABLE_NAME`

## 📊 Performance Optimization

Current optimizations:
- ✓ CSS animations use `transform` (GPU-accelerated)
- ✓ Intersection Observer for scroll triggers (not scroll event)
- ✓ RequestAnimationFrame for cursor animation
- ✓ Videos use `playsInline` for mobile

**Further optimizations:**
- Compress video files (use HandBrake or similar)
- Use WebM format alongside MP4 for better compression
- Add lazy loading for videos below fold
- Enable gzip compression on server

## 🐛 Debugging Tips

### Check what's rendering:
```bash
# Install React DevTools browser extension
# Inspect component tree and props
```

### Check CSS is loading:
- Browser DevTools → Network tab
- Look for `style.css` (should be 200 status)

### Check animations:
- Browser DevTools → Elements tab
- Inspect element classes (should see 'active', 'reveal', etc.)

### Check console:
- Press F12 → Console tab
- Look for errors or warnings

## 📞 Support Resources

- React Documentation: https://react.dev
- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## ✅ Final Checklist

Before considering setup complete:

- [ ] `npm install` completed without errors
- [ ] All 4 video files added to `public/assets/video/`
- [ ] `npm start` runs without errors
- [ ] Page loads at localhost:3000
- [ ] All sections visible when scrolling
- [ ] Animations play correctly
- [ ] No console errors
- [ ] Custom cursor works
- [ ] Click interactions work (feature cards)

---

**Ready to launch! 🚀**

If you encounter issues not covered here, check the browser console for specific error messages.