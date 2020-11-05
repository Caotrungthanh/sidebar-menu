import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import GameIcon from '@material-ui/icons/SportsEsportsOutlined';
import SmsIcon from '@material-ui/icons/SmsOutlined';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

export const SidebarData = [    
    {
        title: 'Home',
        icon: <HomeIcon/>,
        link: '/Home',
    },
    {
        title: 'Mail Box',
        icon: <MailIcon/>,
        link: '/Mail',
    },
    {
        title: 'Game',
        icon: <GameIcon/>,
        link: '/Game',
    },
    {
        title: 'Chat Room',
        icon: <SmsIcon/>,
        link: '/Chat',
    },
    {
        title: 'Mic Settings',
        icon: <HeadsetMicIcon/>,
        link: '/Mic',
    },
]