import React from 'react';
import '../App.css';
import {SidebarData} from '../components/SidebarData';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sidebarLists'>
                {SidebarData.map((data, key) => {
                    return <li key={key} id={window.location.pathname == data.link ? 'active' : ''} className='sidebarItem' onClick={() => window.location.pathname = data.link}>
                        <div className='icon'>{ data.icon }</div>
                        <div className='title'>{ data.title }</div>    
                    </li>;
                })}
            </ul>
        </div>
    );
}