import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteItems, getitems } from '../ActionCreater/actions'
import { Navigate, useNavigate } from 'react-router'

export default function AllInventaryData() {
  const dispatch= useDispatch()
  const navigate = useNavigate();

  const items= useSelector(state=>state.items)
  const loading =useSelector(state=> state.loading)
  console.log(loading)
  useEffect(()=>{
    dispatch(getitems())
  },[])

  const handleDelete=(data)=>{
   dispatch(DeleteItems(data))
  }

  const handleEdit=(id)=>{
    navigate(`/editinventoryitem/${id}`);
    console.log(id)
  }
  
  return (
    <div>
      {loading ?<h1>Loading....</h1>:(
        <div>
           <h1>All Inventary </h1>

{
  items?.map(res=>(
    <div>
      <h2>Name: {res.name}</h2>
      <p>Quantity: {res.quantity}</p>
      <p>Price: {res.price}</p>
      <button onClick={(e)=>handleDelete(res._id)}>Delete</button>
      <button onClick={(e)=>handleEdit(res._id)}>Edit</button>
    </div>
  ))
}
        </div>
      )}
     
    </div>
  )
}
