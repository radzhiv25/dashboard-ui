import { Bug, User, Broadcast } from '@phosphor-icons/react'
import ThreeD05Icon from '../assets/icons/3D05.svg'
import ThreeD08Icon from '../assets/icons/3D08.svg'
import Female05Icon from '../assets/icons/Female05.svg'
import Female08Icon from '../assets/icons/Female08.svg'
import Female09Icon from '../assets/icons/Female09.svg'
import Female15Icon from '../assets/icons/Female15.svg'
import Male06Icon from '../assets/icons/Male06.svg'
import Male07Icon from '../assets/icons/Male07.svg'
import Male08Icon from '../assets/icons/Male08.svg'
import Male11Icon from '../assets/icons/Male11.svg'
import ThreeD03Icon from '../assets/icons/3D03.svg'

export interface Notification {
    icon: any;
    text: string;
    time: string;
}

export interface Activity {
    avatar: {
        bg: string;
        icon: string;
        name: string;
        description: string;
    };
    time: string;
}

export interface Contact {
    name: string;
    avatar: string;
    bg: string;
}

export const notifications: Notification[] = [
    { icon: Bug, text: "You have a bug that needs...", time: "Just now" },
    { icon: User, text: "New user registered", time: "59 minutes ago" },
    { icon: Bug, text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: Broadcast, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" }
];

export const activities: Activity[] = [
    {
        avatar: {
            bg: "bg-blue-100",
            icon: ThreeD05Icon,
            name: "John Doe",
            description: "You have a bug that needs..."
        },
        time: "Just now"
    },
    {
        avatar: {
            bg: "bg-green-100",
            icon: Female05Icon,
            name: "Sarah Wilson",
            description: "Released a new version"
        },
        time: "59 minutes ago"
    },
    {
        avatar: {
            bg: "bg-purple-100",
            icon: ThreeD08Icon,
            name: "Aisha Ahmed",
            description: "Submitted a bug"
        },
        time: "12 hours ago"
    },
    {
        avatar: {
            bg: "bg-orange-100",
            icon: Male07Icon,
            name: "Marcus Johnson",
            description: "Modified A data in Page X"
        },
        time: "Today, 11:59 AM"
    },
    {
        avatar: {
            bg: "bg-gray-100",
            icon: Male11Icon,
            name: "Alex Chen",
            description: "Deleted a page in Project X"
        },
        time: "Feb 2, 2023"
    }
];

export const contacts: Contact[] = [
    {
        name: "Natali Craig",
        avatar: Female15Icon,
        bg: "bg-gray-100"
    },
    {
        name: "Drew Cano",
        avatar: Male08Icon,
        bg: "bg-red-100"
    },
    {
        name: "Orlando Diggs",
        avatar: Male06Icon,
        bg: "bg-yellow-100"
    },
    {
        name: "Andi Lane",
        avatar: Female08Icon,
        bg: "bg-blue-100"
    },
    {
        name: "Kate Morrison",
        avatar: Female09Icon,
        bg: "bg-green-100"
    },
    {
        name: "Koray Okumus",
        avatar: ThreeD03Icon,
        bg: "bg-purple-100"
    }
];
