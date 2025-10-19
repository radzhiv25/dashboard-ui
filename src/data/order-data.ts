import Female05 from '../assets/icons/Female05.svg'
import Female08 from '../assets/icons/Female08.svg'
import Female09 from '../assets/icons/Female09.svg'
import Female15 from '../assets/icons/Female15.svg'
import Male06 from '../assets/icons/Male06.svg'
import Male07 from '../assets/icons/Male07.svg'
import Male08 from '../assets/icons/Male08.svg'
import Male11 from '../assets/icons/Male11.svg'

export interface Order {
    id: string
    user: {
        name: string
        avatar: string
    }
    project: string
    address: string
    date: string
    status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected'
    selected?: boolean
}

export const statusColors = {
    'In Progress': 'bg-[#95A4FC]',
    'Complete': 'bg-[#A1E3CB]',
    'Pending': 'bg-[#B1E3FF]',
    'Approved': 'bg-[#FFE999]',
    'Rejected': 'bg-[#FCA5A5]'
}

export const statusDarkColors = {
    'In Progress': 'bg-[#95A4FC]',
    'Complete': 'bg-[#A1E3CB]',
    'Pending': 'bg-[#B1E3FF]',
    'Approved': 'bg-[#FFE999]',
    'Rejected': 'bg-[#EF4444]'
}

export const statusTextColors = {
    'In Progress': 'text-[#8A8CD9]',
    'Complete': 'text-[#4AA785]',
    'Pending': 'text-[#59A8D4]',
    'Approved': 'text-[#FFC555]',
    'Rejected': 'text-[#DC2626]'
}

export const statusDarkTextColors = {
    'In Progress': 'text-[#8A8CD9]',
    'Complete': 'text-[#4AA785]',
    'Pending': 'text-[#59A8D4]',
    'Approved': 'text-[#FFC555]',
    'Rejected': 'text-[#FCA5A5]'
}

export const sampleOrders: Order[] = [
    {
        id: 'CM9801',
        user: { name: 'Natali Craig', avatar: Female05 },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9802',
        user: { name: 'Kate Morrison', avatar: Female08 },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9803',
        user: { name: 'Drew Cano', avatar: Male06 },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9804',
        user: { name: 'Orlando Diggs', avatar: Male07 },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'Approved',
        selected: true
    },
    {
        id: 'CM9805',
        user: { name: 'Andi Lane', avatar: Female09 },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'Rejected',
        selected: false
    },
    {
        id: 'CM9806',
        user: { name: 'Sarah Johnson', avatar: Female15 },
        project: 'E-commerce Platform',
        address: 'Main Street Boston',
        date: '2 hours ago',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9807',
        user: { name: 'Michael Chen', avatar: Male08 },
        project: 'Mobile App Design',
        address: 'Tech Avenue Seattle',
        date: '3 hours ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9808',
        user: { name: 'Emily Rodriguez', avatar: Female05 },
        project: 'Portfolio Website',
        address: 'Design District Miami',
        date: '4 hours ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9809',
        user: { name: 'David Kim', avatar: Male11 },
        project: 'SaaS Dashboard',
        address: 'Innovation Hub Austin',
        date: '5 hours ago',
        status: 'Approved',
        selected: false
    },
    {
        id: 'CM9810',
        user: { name: 'Lisa Wang', avatar: Female08 },
        project: 'Blog Platform',
        address: 'Creative Quarter Portland',
        date: '6 hours ago',
        status: 'Rejected',
        selected: false
    },
    {
        id: 'CM9811',
        user: { name: 'James Wilson', avatar: Male06 },
        project: 'Restaurant Website',
        address: 'Food Court Chicago',
        date: '7 hours ago',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9812',
        user: { name: 'Maria Garcia', avatar: Female09 },
        project: 'Fitness App UI',
        address: 'Health Center Denver',
        date: '8 hours ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9813',
        user: { name: 'Robert Taylor', avatar: Male07 },
        project: 'Real Estate Portal',
        address: 'Property Row Phoenix',
        date: '9 hours ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9814',
        user: { name: 'Jennifer Brown', avatar: Female15 },
        project: 'Educational Platform',
        address: 'Learning District Atlanta',
        date: '10 hours ago',
        status: 'Approved',
        selected: false
    },
    {
        id: 'CM9815',
        user: { name: 'Christopher Lee', avatar: Male08 },
        project: 'Banking Interface',
        address: 'Financial Plaza New York',
        date: '11 hours ago',
        status: 'Rejected',
        selected: false
    },
    {
        id: 'CM9816',
        user: { name: 'Amanda Davis', avatar: Female05 },
        project: 'Travel Booking Site',
        address: 'Tourist Center Las Vegas',
        date: '12 hours ago',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9817',
        user: { name: 'Kevin Martinez', avatar: Male11 },
        project: 'Social Media App',
        address: 'Social Hub Los Angeles',
        date: '13 hours ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9818',
        user: { name: 'Rachel Thompson', avatar: Female08 },
        project: 'Healthcare Portal',
        address: 'Medical Center Houston',
        date: '14 hours ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9819',
        user: { name: 'Daniel Anderson', avatar: Male06 },
        project: 'Gaming Platform',
        address: 'Entertainment District Orlando',
        date: '15 hours ago',
        status: 'Approved',
        selected: false
    },
    {
        id: 'CM9820',
        user: { name: 'Michelle White', avatar: Female09 },
        project: 'News Aggregator',
        address: 'Media Quarter Washington',
        date: '16 hours ago',
        status: 'Rejected',
        selected: false
    }
]

export type SortField = 'id' | 'user' | 'project' | 'date' | 'status'
export type SortDirection = 'asc' | 'desc'