# 🛰 Esri Wayback Clone - Historical Imagery Viewer

A modern web application for viewing historical satellite imagery using Esri's Wayback archive, built with Vite, Leaflet.js, and vanilla JavaScript.

## ✨ Features

### Core Features
- **🛰 Latest World Imagery** - View current Esri World Imagery
- **🕒 Historical Imagery** - Browse through historical releases automatically fetched from Wayback
- **📅 Interactive Timeline** - Visual timeline with year selection and navigation
- **📍 Map Controls** - Full Leaflet map with zoom, fullscreen, scale, and coordinates display

### Search & Navigation
- **🔍 Location Search** - Search any location worldwide (powered by Nominatim)
- **Jump to Tomas Oppus** - Quick navigation to default location (Philippines)
- **Previous/Next Buttons** - Navigate through imagery releases
- **Year Dropdown** - Select specific years quickly

### Extra Tools
- **🌙 Dark Mode** - Toggle between light and dark themes
- **🗺️ Mini Map** - Overview map for context
- **📏 Measure Tool** - Measure distances on the map
- **✏️ Draw Polygon** - Draw polygons and calculate areas
- **📤 Export Coordinates** - Export current view coordinates as JSON
- **📋 Copy Coordinates** - Copy coordinates to clipboard
- **📍 Geolocation** - Find your current location
- **🎚️ Layer Opacity** - Adjust imagery transparency
- **🏷️ Satellite Labels** - Toggle place name labels

### Keyboard Shortcuts
- `←` / `→` - Navigate releases
- `F` - Toggle fullscreen
- `D` - Toggle dark mode
- `M` - Activate measure tool
- `G` - Get current location
- `ESC` - Clear active tools

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **Leaflet.js** - Interactive maps library
- **@esri/wayback-core** - Esri Wayback integration
- **ArcGIS REST Services** - Imagery tile services
- **Vanilla JavaScript (ES Modules)** - No framework overhead
- **CSS3** - Custom styling with CSS variables

## 📁 Project Structure

```
wayback-viewer/
│
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
│
├── src/
│   ├── main.js             # Application entry point
│   ├── map.js              # Map initialization and controls
│   ├── wayback.js          # Wayback API integration
│   ├── search.js           # Location search functionality
│   ├── timeline.js         # Timeline UI component
│   ├── metadata.js         # Metadata display
│   ├── ui.js               # UI handlers and events
│   ├── styles.css          # All styles
│   └── config.js           # App configuration
│
└── assets/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd wayback-viewer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

Running `npm run dev` will start a local development server at `http://localhost:3000`.

### Production Build

Running `npm run build` will create optimized files in the `dist/` directory.

## 🎨 Customization

### Default Location

Edit `src/config.js` to change the default view:

```javascript
map: {
  defaultCenter: [10.375, 124.9167], // Your coordinates
  defaultZoom: 15
}
```

### Styling

Modify CSS variables in `src/styles.css` to customize colors:

```css
:root {
  --primary-color: #0078d4;
  --bg-color: #ffffff;
  /* ... */
}
```

## 📊 Code Statistics

- **JavaScript**: ~1,565 lines (7 modules)
- **CSS**: ~651 lines
- **Total**: ~2,216 lines of code

## 🔌 API Usage

### No API Key Required

This application uses public endpoints that don't require an ArcGIS API key:
- Esri World Imagery (public)
- Esri Wayback Archive (public)
- Nominatim OpenStreetMap Search (public)

### External Services

- **Esri Wayback**: Historical imagery archive
- **Nominatim**: Geocoding service (usage policy applies)
- **OpenStreetMap**: Base map tiles

## 📱 Responsive Design

The application is fully responsive:
- Desktop: Full sidebar with all controls
- Mobile: Collapsible sidebar, touch-friendly controls
- Tablet: Adaptive layout

## ⌨️ Module Exports

### map.js
- `initMap()` - Initialize Leaflet map
- `loadWaybackImagery(url)` - Load historical imagery
- `loadLatestImagery()` - Load current imagery
- `toggleLabels(show)` - Show/hide labels
- `setOpacity(value)` - Set layer opacity
- `searchLocation(query)` - Search for location
- `copyCoordinates()` - Copy to clipboard
- `exportCoordinates()` - Export as JSON
- `toggleMeasure()` - Enable measure tool
- `toggleDraw()` - Enable draw tool
- `locateUser()` - Get user location
- `showToast(message, type)` - Show notification

### wayback.js
- `fetchReleases()` - Get all releases
- `getReleasesByYear()` - Group by year
- `getCurrentRelease()` - Get current release
- `getNextRelease()` - Navigate forward
- `getPreviousRelease()` - Navigate backward
- `getReleaseMetadata(release)` - Get metadata

## 🐛 Known Limitations

1. **Wayback API**: The actual Esri Wayback endpoint may have CORS restrictions. The app includes mock data fallback for demonstration.

2. **Nominatim Rate Limits**: Free geocoding has usage limits (1 request/second). For production, consider a paid geocoding service.

3. **Mini Map**: Requires leaflet-minimap plugin for full functionality. Currently uses a placeholder implementation.

## 📝 License

MIT License - Feel free to use this project for learning or commercial purposes.

## 🙏 Credits

- **Esri** - World Imagery and Wayback Archive
- **Leaflet** - Map library
- **OpenStreetMap** - Map data and geocoding

---

Built with ❤️ for exploring our changing planet through satellite imagery.
