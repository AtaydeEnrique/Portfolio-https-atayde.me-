import React from 'react'
import { NavLink } from 'react-router-dom'

import './Links.css'
const links = [
    { url: '/googl/search', text: '🔎 All' },
    { url: '/googl/news', text: '📰 News' },
    { url: '/googl/image', text: '📸 Images' },
    { url: '/googl/videos', text: '📺 Videos' },
  ];

export const Links = () => {
    return (
        <div className="googl-search-links">
          {links.map(({ url, text }, i) => (
            <NavLink key={i} to={url}>{text}</NavLink>
          ))}
        </div>
        
      )
}
