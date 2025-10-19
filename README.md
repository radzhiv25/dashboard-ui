# Dashboard UI

A modern, responsive React dashboard application built with TypeScript, featuring comprehensive analytics, data visualization, and an intuitive user interface.

## 🚀 Features

### 📊 Dashboard Analytics
- **Analytics Cards**: Real-time metrics including customers, orders, revenue, and growth
- **Interactive Charts**: Revenue graphs with current vs previous week comparisons
- **Data Visualization**: Multiple chart types including line charts, pie charts, and bar graphs
- **Projections vs Actuals**: Comparative analysis graphs
- **Revenue by Location**: Geographic revenue distribution
- **Top Selling Products**: Product performance analytics
- **Order Management**: Comprehensive order list with detailed information

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes with smooth transitions
- **Collapsible Sidebars**: Left navigation and right activity panels
- **Modern Animations**: Smooth transitions powered by Framer Motion
- **Interactive Elements**: Hover effects, click animations, and micro-interactions

### 🧭 Navigation & Layout
- **Left Sidebar**: Hierarchical navigation with expandable sections
  - Favorites & Recent items
  - Dashboard views (Default, Order List)
  - eCommerce, Projects, Online Courses
  - User Profile, Account, Corporate, Blog, Social sections
- **Right Sidebar**: Activity and notification panels
  - Real-time notifications
  - Activity timeline with user avatars
  - Contact list with status indicators
- **Top Navigation**: Search functionality, theme toggle, and quick actions

### 📱 Mobile Experience
- **Mobile-First Design**: Optimized layouts for all screen sizes
- **Touch-Friendly**: Intuitive mobile interactions
- **Overlay Sidebars**: Mobile-optimized sidebar behavior
- **Responsive Charts**: Charts that adapt to mobile screen sizes

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.1.7** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **Phosphor Icons** - Modern icon set
- **React Icons 5.5.0** - Additional icon library

### Data Visualization
- **Recharts 3.3.0** - Composable charting library
- **React Leaflet 5.0.0** - Interactive maps
- **Leaflet 1.9.4** - Open-source map library

### State Management & Context
- **React Context API** - Built-in state management
- **Custom Hooks** - Reusable state logic
- **Theme Context** - Global theme management
- **Sidebar Context** - Sidebar state management
- **Dashboard Context** - Dashboard view management

### Development Tools
- **ESLint 9.36.0** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── analytics-cards.tsx
│   │   ├── dashboard-content.tsx
│   │   ├── order-list.tsx
│   │   ├── projection-vs-actual-graph.tsx
│   │   ├── revenue-by-location.tsx
│   │   ├── revenue-graph.tsx
│   │   ├── top-selling-products.tsx
│   │   └── total-sales-pie.tsx
│   ├── graph/               # Reusable chart components
│   │   ├── cartesian-grid.tsx
│   │   ├── x-axis.tsx
│   │   └── y-axis.tsx
│   ├── layout/              # Layout components
│   │   └── Navbar.tsx
│   └── sidebar/             # Sidebar components
│       ├── left-sidebar.tsx
│       └── right-sidebar.tsx
├── context/                 # React Context providers
│   ├── dashboard-context.tsx
│   ├── sidebar-context.tsx
│   └── theme-context.tsx
├── data/                    # Sample data and mock data
│   ├── revenue-graph-data.ts
│   └── stacked-graph-data.ts
├── hooks/                   # Custom React hooks
│   └── useSidebar.ts
├── assets/                  # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
└── lib/                     # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Theme System
The application features a comprehensive theme system with:
- **Automatic persistence** of theme preference
- **Smooth transitions** between light and dark modes
- **Consistent color schemes** across all components
- **System preference detection** (can be extended)

### Responsive Sidebar System
- **Desktop**: Sidebars are part of the main layout
- **Mobile**: Sidebars become overlay panels
- **Collapsible**: Both sidebars can be toggled independently
- **Smooth animations** for all state changes

### Data Visualization
- **Interactive charts** with hover tooltips
- **Responsive design** that adapts to container size
- **Custom styling** that matches the application theme
- **Real-time data updates** (ready for API integration)

### Component Architecture
- **Modular design** with reusable components
- **TypeScript interfaces** for type safety
- **Custom hooks** for shared logic
- **Context providers** for global state management

## 🔧 Customization

### Adding New Dashboard Views
1. Create a new component in `src/components/dashboard/`
2. Add the view to the dashboard context
3. Update the sidebar navigation
4. Implement the view logic

### Styling Customization
- Modify `tailwind.config.js` for theme customization
- Update component styles using Tailwind classes
- Add custom CSS in `src/index.css` if needed

### Adding New Chart Types
- Use Recharts components for new visualizations
- Follow the existing pattern in `src/components/graph/`
- Ensure responsive design and theme compatibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Recharts](https://recharts.org/) for data visualization
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Phosphor Icons](https://phosphoricons.com/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool

---

Built with ❤️ using React, TypeScript, and modern web technologies.