import Navbar from './components/layout/Navbar'
import LeftSidebar from './components/sidebar/LeftSidebar'
import RightSidebar from './components/sidebar/RightSidebar'
import { SidebarProvider } from './context/SidebarContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex bg-white dark:bg-black/90 min-h-screen relative">
          {/* Desktop: sidebars are part of the flex layout */}
          <div className="hidden md:block">
            <LeftSidebar />
          </div>

          {/* Main content area */}
          <div className="w-full h-screen flex-1">
            <Navbar />
            <div className="p-4">
              <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Dashboard</h1>
            </div>
          </div>

          {/* Desktop: right sidebar */}
          <div className="hidden md:block">
            <RightSidebar />
          </div>

          {/* Mobile: sidebars are overlays */}
          <div className="md:hidden">
            <LeftSidebar />
            <RightSidebar />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
