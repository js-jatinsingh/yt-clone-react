import React from 'react'
import "./Header.css"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
          <MenuIcon/>
          <img src="yt.png" alt='youtube_Image' className="header_logo"/>
        </div>
        <div className='header_input'>
          <input placeholder='Search' type="text" />
          <SearchIcon className='header_Input_search'/>
        </div>
        <div className='header_icon'>
            <VideoCallIcon className='icon'/>
            <AppsIcon className='icon'/>
            <NotificationsIcon className='icon'/>
            <Avatar alt="Jain singh" src="/images/headerIcon.png" />

        </div>
    




    </div>
  )
}

export default Header