import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePages() {
  return (
    <div className='Home-pages'>
      <Link className='Link' to={"/inventary"}><h2>Inventary Managment</h2></Link>
      <Link to={"/sales"} className='Link'><h2>
        Sale Managemnt
      </h2>
      </Link>
      <Link to={"/reports"} className='Link'><h2>
        Reports and others
      </h2>
      </Link>
    </div>
  )
}
