import React from 'react'
import { Link } from 'react-router-dom'

export default function InventaryMagament() {
  return (
    <div style={{marginTop:"100px"}}>
      <Link to={"/addinventary"} className='Link'>Add Inventary</Link>
      <Link to={"/allinventary"} className='Link'>All Inventary</Link>
      
    </div>
  )
}
