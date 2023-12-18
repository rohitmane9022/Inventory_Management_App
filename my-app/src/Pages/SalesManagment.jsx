import React from 'react'
import { Link } from 'react-router-dom'

export default function SalesManagment() {
  return (
    <div style={{marginTop:"100px"}}>
      <Link to={"/addsale"} className='Link'>Add Sales</Link>
      <Link to={"/allsale"} className='Link'>All Sales</Link>
      
    </div>
  )
}
