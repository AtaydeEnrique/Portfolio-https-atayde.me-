import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import './Results.css'
import { Loader } from './Loader'
export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLocation();

    useEffect(() => {
        if (searchTerm !== '') {
            if (location.pathname.substring(6) === '/videos') {
              getResults(`/search/q=${searchTerm} videos`);
            } else {
              getResults(`${location.pathname.substring(6)}/q=${searchTerm}&num=40`);
            }
          }
    }, [searchTerm, location.pathname])

    if (isLoading) return <Loader/>
    
    switch (location.pathname.substring(6)) {
        case '/search':
            return (
                <div className='googl-search-results'>
                    {results?.map(({ link,title }, index)=>(
                        <div className='search-container' key={index}>
                            <a className='search-container-links' href={link} target="_blank" rel='noreferrer'>
                                <p>
                                    {title}
                                </p>
                                <p>
                                    {link.length > 40 ? link.substring(0,40) + "..." : link}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/image':
            return (
                <div className='googl-search-images'>
                    {results?.map(({ image, link: { href, title} }, index)=>(
                        <a className='images-container' href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy"/>
                            <p>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case '/news':
            return (
                <div className='googl-search-results'>
                    {results?.map(({ links, id , source, title })=>(
                        <div className='search-container' key={id}>
                            <a href={links?.[0].href} target="_blank" rel='noreferrer'>
                                <p>
                                    {title}
                                </p>
                            </a>
                            <div className='search-container-news' >
                                <a href={source?.href} target="_blank" rel="noreferrer">
                                     {source?.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )
        case '/videos':
            return (
                <div className='googl-search-videos'>
                    {results?.map((video, index) => (
                        <div className='images-container video' key={index} >
                            {video.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
                        </div>
                    ))}
                </div>
            )
    
        default:
            return 'ERROR!!'
    }

}
