# Mahith V — Portfolio

A modern, dark-themed developer portfolio built with Next.js 14, React, and Tailwind CSS.

## Folder Structure

```
mahith-portfolio/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.js          # Root layout with fonts and metadata
│   └── page.js            # Main page — composes all sections
├── components/
│   ├── Cursor.js          # Custom animated cursor
│   ├── Navbar.js          # Sticky nav with scroll effect
│   ├── Hero.js            # Hero section with typewriter effect
│   ├── Work.js            # Work experience section
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Tech stack + education + marquee
│   └── Contact.js         # Contact links + footer
├── public/                # Static assets (add your photo here)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## How to Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production
```bash
npm run build
npm start
```

## Customization

- **Links**: Update LinkedIn/GitHub URLs in `components/Hero.js` and `components/Contact.js`
- **Colors**: Edit CSS variables in `app/globals.css` under `:root`
- **Content**: Edit text in each component file directly
- **Photo**: Add `photo.jpg` to `/public` and use `<Image src="/photo.jpg" />` in the Hero

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Google Fonts** (Syne + Space Mono)
