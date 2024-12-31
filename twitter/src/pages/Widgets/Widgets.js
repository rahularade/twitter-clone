import React from 'react'
import "./widgets.css"
import SearchIcon from "@mui/icons-material/Search"
import {TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed"
import { height } from '@mui/system'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets-input'>
        <SearchIcon className='widgets-searchIcon' />
        <input type="text" placeholder='Search Twitter' />
      </div>
      <div className='widgets-widgetContainer'>
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1863629666713547170"}/>
        <TwitterTweetEmbed tweetId={"1816174440071241866"}/>
        <TwitterTimelineEmbed sourceType="profile" screenName="Solo Leveling" options={{height: 400}}/>
      </div>
    </div>
  )
}

export default Widgets