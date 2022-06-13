import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Links } from './Links'

import './Search.css'

export const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [ debounceValue ] = useDebounce(text, 500);

  useEffect (() => {
    if (debounceValue) setSearchTerm(debounceValue)

  }, [debounceValue])

  return (
    <div className='googl-search-container'>
      <input
        value={text}
        type='text'
        className='googl-search-input'
        placeholder='Search goggl'
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button className='googl-search-button' type='button' onClick={() => setText('')}>
          X
        </button>
      )}
      <Links/>
    </div>
    
  )
}
