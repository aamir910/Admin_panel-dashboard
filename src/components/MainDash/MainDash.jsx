import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import BasicTable from '../MainTable/MainTable'
function MainDash() {
  return (
    <div  className='MainDash'> 
     <h1>Dashboard </h1>
         <Cards/>
         <BasicTable/>
    </div>
  )
}

export default MainDash
