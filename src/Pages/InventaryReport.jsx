import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from "react"
import { getitems } from '../ActionCreater/actions'

export default function InventaryReport() {
  const dispatch= useDispatch()
  const items= useSelector(state=> state.items)
  const loading= useSelector(state=> state.loading)

  useEffect(()=>{
    dispatch(getitems())
  },[])
  
  return (
    <div>
      {loading ?<h1>Loading....</h1>:(
        <div>
           <h1>Report Inventary </h1>

{
  items?.map(res=>(
    <div>
      <h2>Name: {res.name}</h2>
      <p>Quantity: {res.quantity}</p>
      <p>Price: {res.price}</p>

    </div>
  ))
}
        </div>
      )}

      <h2>Total of Inventary is: {items.reduce((acc,curr)=> curr.price+acc,0)}</h2>
    </div>
  )
}
