import React from 'react'
import "./VideoSection.css"
import VideoCard from "./VideoCard"

function VideoSection() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos_videos'>
      {/* 1.VideoCard */}
        <VideoCard
          title="Learn how to jiggle in front of enemy "
          views="2.5M"
          timestamp="3 months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail.jpg"
        />
        {/* 2.videocard */}
        <VideoCard
          title="All About char Arrays,Strings & solving Leetcode"
          views="265K"
          timestamp="9 months ago"
          channelimage="/images/jatin.png"
          channel="Codehelp"
          image="/images/thumbnail2.jpeg"
        />
        {/* 3.videocard */}
        <VideoCard
          title="Learn how to make youtube clone"
          views="2.5M"
          timestamp="3months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail3.jpg"
        />
          <VideoCard
          title="All About char Arrays,Strings & solving Leetcode"
          views="265K"
          timestamp="9 months ago"
          channelimage="/images/jatin.png"
          channel="Codehelp"
          image="/images/thumbnail2.jpeg"
        />
          <VideoCard
          title="Learn how to make youtube clone"
          views="2.5M"
          timestamp="3months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail3.jpg"
        />
          <VideoCard
          title="Learn how to make youtube clone"
          views="2.5M"
          timestamp="3months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail3.jpg"
        />
          <VideoCard
          title="All About char Arrays,Strings & solving Leetcode"
          views="265K"
          timestamp="9 months ago"
          channelimage="/images/jatin.png"
          channel="Codehelp"
          image="/images/thumbnail2.jpeg"
        />
        {/* 1.VideoCard */}
        <VideoCard
          title="Learn how to jiggle in front of enemy "
          views="2.5M"
          timestamp="3 months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail.jpg"
        />
        {/* 2.videocard */}
        <VideoCard
          title="All About char Arrays,Strings & solving Leetcode"
          views="265K"
          timestamp="9 months ago"
          channelimage="/images/jatin.png"
          channel="Codehelp"
          image="/images/thumbnail2.jpeg"
        />
        {/* 3.videocard */}
        <VideoCard
          title="Learn how to make youtube clone"
          views="2.5M"
          timestamp="3months ago"
          channelimage="/images/jatin.png"
          channel="Young Gamer"
          image="/images/thumbnail3.jpg"
        />
      </div>
      
    </div>
  )
}

export default VideoSection