import React from 'react'
import "./VideoCard.css"
import Avatar from '@mui/material/Avatar';
function VideoCard({title,views,timestamp,channelimage,channel,image}) {
  return (
    <div  className='videoCard'>
    <img className='videoimage' src={image} alt="Video Thumbnail"/>
      <div className='videoInfo'>
        <Avatar className='videoCardAvatar' src={channelimage} alt="Channel Image"/>
        <div className='videoText'>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} {timestamp}</p>
      </div>
      </div>

    </div>
  )
}

export default VideoCard