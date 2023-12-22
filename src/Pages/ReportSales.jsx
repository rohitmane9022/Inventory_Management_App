import React , {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSalesAll } from '../ActionCreater/actions'

export default function ReportSales() {

  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getSalesAll())
  },[])

  const salesList=useSelector(state=> state.salesList)
  const loading= useSelector(state=> state.loading)
  console.log(salesList)

  return (
    <div>
      {loading ?<h1>Loading....</h1>:(
        <div>
           <h1>Report Sales </h1>

{
  salesList?.map(res=>(
    <div>
      <h2>Name: {res.name}</h2>
      <p>Quantity: {res.quantity}</p>
      <p>Description: {res.Description}</p>
      <p>Price: {res.price}</p>
    </div>
  ))
}
        </div>
      )}
      <h2>Total of Sales is: {salesList?.reduce((acc,curr)=> curr.price+acc,0)}</h2>
    </div>
  )
}
