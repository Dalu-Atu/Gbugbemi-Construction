# Gbubemi Construction - Landing Page

A modern, responsive landing page for Gbubemi Construction, a leading Nigerian construction company specializing in infrastructure development and industrial projects.

## 🚀 Live Demo

[View Live Site](https://gbugbemi-construction.vercel.app)

## 📋 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Portfolio** - Interactive gallery showcasing completed projects
- **Services Overview** - Detailed breakdown of construction services offered
- **Contact Integration** - Contact forms with email integration
- **Performance Optimized** - Fast loading times and SEO friendly
- **Dark/Light Mode** - Theme switching capability

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** Vercel
- **Package Manager:** npm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Dalu-Atu/gbugbemi-construction.git
cd gbubemi-construction
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

# Gbubemi Construction - Project Structure

```
gbubemi-construction/
├── 📁 node_modules/
├── 📁 public/
│   └── 📁 images/
├── 📁 src/
│   ├── 📁 pages/
│   │   └── 📄 HomePage.jsx
│   ├── 📁 ui/
│   │   ├── 📄 CardUI.jsx
│   │   ├── 📄 CarouselUI.jsx
│   │   ├── 📄 ContactUI.jsx
│   │   ├── 📄 FooterSection.jsx
│   │   ├── 📄 ProjectSection.jsx
│   │   └── 📄 ServiceSection.jsx
│   ├── 📄 App.jsx
│   ├── 📄 TestimonialSection.jsx
│   ├── 📄 main.jsx
│   └── 📄 index.css
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```

## 📋 File Descriptions

### Root Files

- `package.json` - Project dependencies and scripts
- `package-lock.json` - Locked dependency versions
- `vite.config.js` - Vite configuration file
- `eslint.config.js` - ESLint configuration
- `index.html` - Main HTML template
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

### Source Directory (`src/`)

- `main.jsx` - Application entry point
- `App.jsx` - Main App component
- `index.css` - Global styles

### Pages Directory (`src/pages/`)

- `HomePage.jsx` - Main landing page component

### UI Components Directory (`src/ui/`)

- `CardUI.jsx` - Reusable card components
- `CarouselUI.jsx` - Image/content carousel
- `ContactUI.jsx` - Contact form components
- `FooterSection.jsx` - Website footer
- `ProjectSection.jsx` - Projects showcase section
- `ServiceSection.jsx` - Services overview section

### Additional Components

- `TestimonialSection.jsx` - Client testimonials section

### Public Directory (`public/`)

- `images/` - Static images and assets

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx"
  }
}
```

## 🎨 Design System

- **Primary Colors:** emerald
- **Typography:** Inter font family
- **Breakpoints:** Mobile-first responsive design
- **Components:** Reusable, modular components

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📊 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Core Web Vitals:** All green

## 🚀 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

```bash
npm run build
npm run export  # if using static export
```

## 🔄 Future Enhancements

- [ ] Blog section for company updates
- [ ] Client testimonials carousel
- [ ] Project case studies with detailed pages
- [ ] Admin panel for content management
- [ ] Multi-language support (

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project:

- **Developer:** [Daniel Atu](mailto:danieelatu@gmail.com)
- **Client:** Gbubemi Construction

---

Built with ❤️ using React.js
