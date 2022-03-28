import React from 'react'
import Main from "./Components/Main"
import Result from "./Components/Result"
import { BrowserRouter, Link, } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    
      <Route path='/result/:state' element={ <Result  />}/>
      <Route path='/' element={<Main/>}/>
        
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
