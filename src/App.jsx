import { useState,useEffect } from 'react'
import data from './data/data.json'
import  './App.css'


function App() {

  return (
    <>
    <header className='d-flex align-items-center justify-content-between p-1'>
      <a href="#" className='text fs-1 text-primary m-5'>Books</a>
      <button className='btn btn-primary'>Login</button>
    </header>
     <div className=" w-75 p-1 mx-auto d-flex flex-wrap gap-3">
     {
    data.map((el,index) => {
        return(
          <div key={index} className="card" style={{width:"15rem"}}>
         <div className="card-body">
         <h5 className="card-title">{el.author}</h5>
  <h6 className="card-subtitle mb-2 text-body-secondary">{el.country}</h6>
    <p className="card-text">{el.title}</p>
    <a href={el.link} className="card-link">Wikipediya</a>
  </div>
  </div>
        )
      })
     }
     </div>
    </>
  )
}

export default App
