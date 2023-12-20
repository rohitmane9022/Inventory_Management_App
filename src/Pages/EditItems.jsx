import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { editItem, getitems } from '../ActionCreater/actions'

export default function EditItems() {
 



  const dispatch=useDispatch()
  const {id}= useParams()
  const itemList= useSelector(state=> state.items)

  useEffect(()=>{
    dispatch(getitems())
  },[])

  console.log(itemList)
  const itemFind=itemList.find(item=> item._id===id)
 
  
  const [itemName, setItemName] = useState(itemFind && itemFind.name)
  const [itemQty, setItemQty] = useState(itemFind && itemFind.quantity)
  const [itemPrice, setItemPrice] = useState(itemFind && itemFind.price)
  
  const handlePostData=()=>{
    const item = {
      id: id,   
      name: itemName,
      quantity: itemQty, 
      price: itemPrice
     }

    //  dispatch(editItem(item))
  }
  return (
    <div>
      <form onSubmit={handlePostData}>
        <label>Name</label><input
          type="text"
          name="name"
          value={itemName}
          onChange={e=> setItemName(e.target.value)}
          placeholder="Name of Product"
          required
        />
        <label>Quantity</label><input
          type="text"
          name="quantity"
          value={itemQty}
          onChange={e=> setItemQty(e.target.value)}
          placeholder="Quantity"
          required
        />
        <label>Price</label><input
          type="number"
          name="price"
          value={itemPrice}
          onChange={e=> setItemPrice(e.target.value)}         
           placeholder="Price"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
