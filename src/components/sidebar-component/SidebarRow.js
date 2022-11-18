import React from 'react';
import "./SidebarRow.css";
function SidebarRow({Icon,title,selected}) {
  return (
    <div className={`sidebarRow ${selected &&"selected"}`}>
        <Icon className="sidebarRowIcon"/>
        <h2 className='sidebarRowTitle'>{title}</h2>
    </div>
  )
}

export default SidebarRow