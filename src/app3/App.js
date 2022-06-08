import React, { useEffect, useState, useRef, Fragment }  from 'react'
import request from 'request-promise'
import JSONPretty from 'react-json-pretty';
import Spinner from '../app1/components/UI/Spinner/Spinner';
import './App.css'

export default function App() {
  const productInputRef = useRef()
  const [search, setSearch] = useState('product')
  const [data, setData] = useState('')
  const [clip, setClip] = useState('Copy to Clipboard!')
  const [loading, setLoading] = useState(false)
  const apiKey = process.env.REACT_APP_VERCEL_SCRAPER
  const url = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
  localStorage.setItem("expirationTime", 10);
  
  const copyDataHandler = () =>{
    navigator.clipboard.writeText(data)
    setClip('Copied!')
    setTimeout(()=>{
      setClip('Copy to Clipboard!')
    },1500)
  }
  const sendHandler = (e) =>{
    e.preventDefault();
    const enteredProduct = productInputRef.current.value;
    if (!enteredProduct){
      setData('Nothing was entered!')
      return
    }

    if (search === 'product') {
      getDetailsHandler(enteredProduct)
    } 
    else if (search === 'reviews') {
      getReviewsHandler(enteredProduct)
    }
    else if (search === 'offers') {
      getOffersHandler(enteredProduct)
    }
  }
  
  const getDetailsHandler = async (productId) =>{
    try {
      setLoading(true)
      const response = await request(`${url}&url=https://www.amazon.com/dp/${productId}`);
      const res = response
      setData(res)
      setLoading(false)
      return
    } catch (error) {
      setLoading(false)
      setData('Enter a valid ID!')
  }
  }

  const getReviewsHandler = async (productId) =>{
    try {
      setLoading(true)
      const response = await request(`${url}&url=https://www.amazon.com/product-reviews/${productId}`);
      const res = JSON.parse(response)
      setData(res)
      setLoading(false)
      return
    } catch (error) {
      setLoading(false)
      setData('Enter a valid ID!')
  }
  }

  const getOffersHandler = async (productId) =>{
    try {
      setLoading(true)
      const response = await request(`${url}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
      const res = JSON.parse(response)
      setData(res)
      setLoading(false)
      return
    } catch (error) {
      setLoading(false)
      setData('Enter a valid ID!')
  }
  }

  console.log(data)
  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }

  return (
      <div className='scraper-container'>
        <div className="noise"/>
        <h1>Amazon Scraper</h1>
        <form onSubmit={sendHandler}>
          <select onChange={(e) => setSearch(e.target.value)}>
            <option value={'product'}>Product Details</option>
            <option value={'reviews'}>Product Reviews</option>
            <option value={'offers'}>Product Offers</option>
          </select>
          <input ref={productInputRef} placeholder='Enter product ID'/>        
          <button >SEND</button>
        </form>
        {loading ? <div className='amazon-loading'><Spinner/></div> : (
          <div className='scraper-response'>
          {!data ? (
            <Fragment>
              <p>
                Please enter a product ID from Amazon and select what information you want to retrieve from that item<br/>
              </p>
              <p>
                Example: https://www.amazon.com./dp/<span className='amazon-id'>B08N5KWB9H</span>/<br/>
              </p>
            </Fragment>
          )
          :
          (
            <Fragment>
              <div className='scraper-data-wrap'>
                <h2><b>Your data:</b></h2>
                <button onClick={copyDataHandler}>{clip}</button>
              </div>
              <JSONPretty id="json-pretty" data={data}></JSONPretty>
            </Fragment>
          )}
          
        </div>
        )}
        
      </div>
  )
}
