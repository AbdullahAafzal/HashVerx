# DevsOrb - Professional Landing Page

A modern, professional landing page built with Next.js, TypeScript, and Tailwind CSS. Features a sleek blue and white color scheme with gradient effects and smooth animations.

## Features

- 🎨 Modern blue and white color theme
- ✨ Smooth animations and hover effects
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🎯 All sections from the original design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
hashVerx/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── TechStack.tsx    # Tech stack section
│   ├── Services.tsx     # Services grid
│   ├── IndustryExpertise.tsx  # Industry expertise
│   ├── WorkWithUs.tsx   # Work with us section
│   ├── HireDevelopers.tsx     # Hire developers section
│   ├── AboutCompany.tsx       # About company section
│   ├── ContactForm.tsx  # Contact form
│   └── Footer.tsx       # Footer
└── ...
```

## Customization

### Colors

The color theme can be customized in `tailwind.config.ts`:
- Primary (Dark Blue): `#0859B2`
- Secondary (Light Blue): `#51CFDF`
- Accent (White): `#ffffff`

### Sections

All sections are modular components in the `components/` directory. You can easily modify or add new sections by editing the respective component files.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

This project is private and proprietary.


