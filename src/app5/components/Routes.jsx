import React from 'react'
import {Routes as Switch , Route, Navigate} from 'react-router-dom'
import { Results } from './Results'

import './Routes.css'
export const Routes = () => {
  return (
    <div className='googl-results'>
        <Switch>
          <Route exact path='/' element={<Navigate to='/googl/search'/>}/>
          {['/search', '/image', '/news', '/videos'].map((el) =>(
            <Route exact path={el} element={<Results/>} key={el}/>
          ))}
        </Switch>
    </div>
  )
}
