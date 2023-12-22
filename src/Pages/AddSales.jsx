import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SaveSalesData } from '../ActionCreater/actions'
import { Navigate } from 'react-router'

export default function AddSales() {
  const dispatch=useDispatch()

  const [name,setname]= useState('')
  const [quantity,setquantity]= useState(0)
  const [price,setprice]= useState(0)
  const [Description,setDescription]= useState('')
  const [redirect,setredirect]= useState(false)

  const handleSales=(e)=>{
    e.preventDefault();

    

    const items={
      name:name,
      quantity:quantity,
      Description:Description,
      price:price
    }
    dispatch(SaveSalesData(items))
    setredirect(true)
  }

  if(redirect){
    return <Navigate to={"/allsale"}/>
  }

  return (
    <div>
      <form onSubmit={handleSales}>
        <label>Name</label>
        <input type="text"  placeholder="Name of Sales" value={name} onChange={e=> setname(e.target.value)}/>
        <label>Quantity</label>
        <input type="number"  placeholder="Quantity No" value={quantity} onChange={e=> setquantity(e.target.value)} />
        <label>Description</label>
        <input type="text"  placeholder="Description" value={Description} onChange={e=> setDescription(e.target.value)} />
        <label>Price</label>
        <input type="number"  placeholder="Price" value={price} onChange={e=> setprice(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
