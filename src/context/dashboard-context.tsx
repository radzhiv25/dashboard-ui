import { createContext, useContext, useState, type ReactNode } from 'react'

type DashboardType = 'Default' | 'Order List'

interface DashboardContextType {
    selectedDashboard: DashboardType
    setSelectedDashboard: (dashboard: DashboardType) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
    const [selectedDashboard, setSelectedDashboard] = useState<DashboardType>('Default')

    return (
        <DashboardContext.Provider value={{ selectedDashboard, setSelectedDashboard }}>
            {children}
        </DashboardContext.Provider>
    )
}

export function useDashboard() {
    const context = useContext(DashboardContext)
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider')
    }
    return context
}
