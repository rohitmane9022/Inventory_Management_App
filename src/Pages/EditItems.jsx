import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router'
import { editItem, editItemToInventory } from '../ActionCreater/actions'

export default function EditItems() {
 

  const {id} = useParams()
  const dispatch = useDispatch()
  const items = useSelector((state)=>(state.items))

  const item = getItem()

  function getItem(){
    const item = items.find((item)=>(item._id===id))
    return item;
  }

  const [itemName, setItemName] = useState(item && item.name)
  const [itemQty, setItemQty] = useState(item && item.quantity)
  const [itemPrice, setItemPrice] = useState(item && item.price)
  const [redirect,setredirect]= useState(false)

  const onSubmitClick = (e) =>{
    e.preventDefault();
      const item = {
       id: id,   
       name: itemName,
       quantity: itemQty, 
       price: itemPrice
      }
      dispatch(editItemToInventory(item, id))
      setredirect(true)
  }

  if(redirect){
    return <Navigate to={"/allinventary"}/>
  }

   return(
        
        <form onSubmit={onSubmitClick}>
           <h2>Edit Inventory Item</h2>
           <div>
           <label> Name: 
           <input type="text" value={itemName}  onChange={(e)=>{setItemName(e.target.value)}}/>
           </label>
           </div>
           <div>
           <label>  Qty: 
           <input type="text" value={itemQty} onChange={(e)=>{setItemQty(e.target.value)}}/>
           </label>
           </div>
           <div>
           <label>  Price: 
           <input type="text" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}}/>
           </label>
           </div>


          <button type="Submit">Edit</button>
          </form>
      
   )
}
