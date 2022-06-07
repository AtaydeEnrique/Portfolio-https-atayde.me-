import React, {useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies'
import News from './components/News'
import CryptoDetails from './components/Cryptocurrencies/CryptoDetails'

import './App.css'

export default function App() {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 850)
  window.addEventListener('resize', function(event){
    setCollapsed(window.innerWidth <= 850)
  });
  return (
      <Provider store={store}>
        <div className={`app${collapsed ? '-collapsed' : '-full'}`}>
            <div className="noise"/>
            <Navbar/>
            <main className={`main${collapsed ? '-collapsed' : '-full'}`}>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/cryptocurrencies/:id" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
            </main>
        </div>
        </Provider>
  )
}
