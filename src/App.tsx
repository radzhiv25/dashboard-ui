import Dashboard from './components/dashboard/dashboard-content'
import Navbar from './components/layout/Navbar'
import LeftSidebar from './components/sidebar/left-sidebar'
import RightSidebar from './components/sidebar/right-sidebar'
import { SidebarProvider } from './context/sidebar-context'
import { ThemeProvider } from './context/theme-context'
import { DashboardProvider } from './context/dashboard-context'

function App() {

  return (
    <ThemeProvider>
      <SidebarProvider>
        <DashboardProvider>
          <div className="flex bg-white dark:bg-black/90 h-screen relative">
            {/* Desktop: sidebars are part of the flex layout */}
            <div className="hidden md:block h-full">
              <LeftSidebar />
            </div>

            {/* Main content area */}
            <div className="w-full h-full flex-1 flex flex-col">
              <Navbar />
              <div className="flex-1 overflow-y-auto p-4">
                <Dashboard />
              </div>
            </div>

            {/* Desktop: right sidebar */}
            <div className="hidden md:block h-full">
              <RightSidebar />
            </div>

            {/* Mobile: sidebars are overlays */}
            <div className="md:hidden">
              <LeftSidebar />
              <RightSidebar />
            </div>
          </div>
        </DashboardProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
