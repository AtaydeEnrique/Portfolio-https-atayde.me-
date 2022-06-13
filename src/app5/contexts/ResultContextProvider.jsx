import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://atayde.herokuapp.com/googl'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon Musk')
    console.log('/googl/searc'.substring(6))
    
    // /videos, /search, /image, /news
    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
        })

        const data = await response.json()
        
        if(type.includes('/news')) {
            setResults(data.entries)
        } else if(type.includes('/image')){
            setResults(data.image_results)
        } else {
            setResults(data.results)
        }
        setIsLoading(false)
    }

    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)