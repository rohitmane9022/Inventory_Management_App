import { Link } from 'react-router-dom'


export default function Report() {
  return (
    <div>
      <div style={{marginTop:"100px"}}>
      <Link to={"/reportinventary"} className='Link'>Report of Inventary</Link>
      <Link to={"/reportsales"} className='Link'>Report of Sales</Link>
      
    </div>
    </div>
  )
}
