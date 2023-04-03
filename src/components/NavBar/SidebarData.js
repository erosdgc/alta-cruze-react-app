import React from "react";
// Font Awesome Icons https://react-icons.github.io/react-icons/icons?name=fa
import * as FaIcons from 'react-icons/fa';
// Ant Design Icons https://react-icons.github.io/react-icons/icons?name=ai
import * as AiIcons from 'react-icons/ai';
// Ionicons 5 https://react-icons.github.io/react-icons/icons?name=io5
// import * as IoIcons from 'react-icons/io5';
// Bootstrap Icons https://react-icons.github.io/react-icons/icons?name=bs
import * as BsIcons from 'react-icons/bs';
// Simple Icons 
import * as SiIcons from "react-icons/si";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Destinations',
        path: '',
        icon: <BsIcons.BsFillGeoAltFill />,
    },
    {
        title: 'Experience',
        path: '/',
        icon: <SiIcons.SiExpo />,
    },
    {
        title: 'Cruises',
        path: '#viewCategory',
        icon: <FaIcons.FaShip />,
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <BsIcons.BsFillEnvelopeFill />,
    },
    {
        title: 'About Us',
        path: '/about',
        icon: <BsIcons.BsInfoCircleFill />,
    },
]