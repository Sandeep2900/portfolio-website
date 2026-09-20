# 🚀 Sandeep Kumar Saket — 3D Developer Portfolio

> An interactive, immersive 3D portfolio website built with **React 19**, **Three.js**, **React Three Fiber (R3F)**, **TypeScript**, and **Tailwind CSS**. Designed for high-impact visual depth, responsive physics, and enterprise software engineering presentation.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.7-00f0ff?logo=three.js&logoColor=black)](https://r3f.docs.pmnd.rs/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Features & Highlights

### 🌐 1. Real-Time 3D Engine (R3F + Drei)
- **3D Extruded & Beveled Typography (`Headline3D.tsx`)**:
  - Live 3D extruded mesh headline (*"SANDEEP KUMAR SAKET"*) utilizing Helvetiker typeface geometry.
  - Interactive 3D mouse perspective tilt with fluid spring physics.
  - Dynamic container width detection that automatically reflows and scales typography without horizontal overflow.
  - 3D terminal cursor box with sine-wave emissive pulsation.
- **Interactive Cyber Workstation (`Workstation3D.tsx`)**:
  - Metallic laptop chassis with recessed keyboard and trackpad.
  - Live procedural canvas screen texture rendering animated code with syntax highlighting.
  - Orbiting 3D **Ruby Octahedron Crystal** with red emissive refraction.
  - Orbiting 3D **React Atom** with dynamic orbital rings.
  - Floating 3D **PostgreSQL Database Storage Cylinders** with metallic LED grooves.
  - Concentric holographic orbit rings with smooth angular momentum.
- **Cinematic Dolly Camera (`CameraController.tsx`)**:
  - Camera moves through the 3D Z-axis as the user scrolls, creating real parallax depth cues.
  - Cursor tracking that subtly alters camera perspective and focal points.
- **Volumetric Starfield (`VolumetricStars.tsx`)**:
  - Up to 1,600 sparkling stars across the depth field with twinkling pulsation, parallax drift, and theme-adaptive blending.

### 🎛️ 2. Dual Immersion Modes: 3D CINEMATIC vs. 3D LITE
- **3D CINEMATIC**: Full postprocessing bloom, higher particle density, and specular highlights.
- **3D LITE**: Clean, high-performance rendering optimized for low-power devices and battery preservation.
- Saved persistently in `localStorage` and toggleable directly via the navbar and mobile drawer.

### 🌓 3. Pixel-Perfect Light & Dark Themes
- **Adaptive Contrast & Color Accuracy**:
  - Dark Mode: Cyber neon aesthetics with cyan/sapphire glow and deep obsidian backdrop.
  - Light Mode: Neutral daylight lighting, sharp contrast ratios, and dark obsidian 3D headline typography with zero bloom glaze.
- **Theme Switcher**: Seamless instant transition with persistent state.

### 📄 4. Direct Resume Download
- Integrated with Google Drive direct download endpoint (`export=download`).
- Triggers instant PDF file download (`Sandeep Kumar Saket.pdf`) accompanied by celebratory confetti animation.
- Includes a local asset backup in `public/Sandeep_Kumar_Saket_Resume.pdf`.

### 📱 5. Fully Responsive Layout
- Fluid grid architecture scaling effortlessly from mobile screens up to 4K ultra-wide monitors.
- Calibrated navbar and hero padding ensuring that all statistics, badges, and terminal consoles stay in view without awkward clipping.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Build & Bundler** | [Vite 8](https://vitejs.dev/) |
| **3D Rendering** | [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei), [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion & Physics** | [Framer Motion](https://www.framer.com/motion/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── fonts/
│   │   └── helvetiker_bold.typeface.json  # 3D Font asset for Text3D
│   └── Sandeep_Kumar_Saket_Resume.pdf     # Resume PDF asset
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CameraController.tsx       # Smooth camera dolly & mouse parallax
│   │   │   ├── Headline3D.tsx             # 3D Extruded name mesh + neon cursor
│   │   │   ├── HeroScene3D.tsx            # Atmospheric glowing orbit rings
│   │   │   ├── SceneContainer.tsx         # Root R3F Canvas, lights, & bloom
│   │   │   ├── VolumetricStars.tsx        # 3D twinkling cosmic particle field
│   │   │   └── Workstation3D.tsx          # 3D Laptop, Ruby gem, React atom, DB
│   │   ├── About.tsx                      # Architecture philosophy & pipeline terminal
│   │   ├── Contact.tsx                    # Contact methods & social links
│   │   ├── Education.tsx                  # B.Tech CSE details & principles
│   │   ├── Experience.tsx                 # Career timeline (Shriffle, Vistron)
│   │   ├── Footer.tsx                     # Footer navigation & copyright
│   │   ├── Hero.tsx                       # Hero layout, developer console, stat cards
│   │   ├── Navbar.tsx                     # Responsive nav, 3D mode & theme toggles
│   │   ├── Projects.tsx                   # FIXKAR AI flagship showcase & diagnostics
│   │   ├── Skills.tsx                     # 5-column technical stack matrix
│   │   ├── SocialIcons.tsx                # Custom SVG brand icons
│   │   └── TechIcons.tsx                  # Backend & frontend technology pills
│   ├── context/
│   │   ├── SceneContext.tsx               # 3D mode state, mouse coords, scroll tracker
│   │   └── ThemeContext.tsx               # Light / Dark theme management
│   ├── data/
│   │   └── portfolio.ts                   # Structured profile data & download URLs
│   ├── types/
│   │   └── portfolio.ts                   # TypeScript interfaces
│   ├── App.tsx                            # Root application wrapper
│   ├── index.css                          # Global styles, scrollbar, & glassmorphism
│   └── main.tsx                           # React DOM entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sandeep2900/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 👨‍💻 About Sandeep Kumar Saket

- **Role**: Associate Software Engineer
- **Specialization**: Backend Engineering, Ruby on Rails, High-Performance PostgreSQL, RESTful APIs, Asynchronous Job Orchestration (Sidekiq & Redis).
- **Location**: Bhopal, MP, India (Open to Relocate / Remote)
- **LinkedIn**: [linkedin.com/in/sandeep-saket](https://linkedin.com)
- **GitHub**: [github.com/Sandeep2900](https://github.com/Sandeep2900)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
