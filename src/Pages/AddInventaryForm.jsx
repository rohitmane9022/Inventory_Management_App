import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInve, saveFormData } from '../ActionCreater/actions'
import { Navigate } from 'react-router';


 export const AddInventaryForm=()=> {
  const [redirect,setredirect]= useState(false)
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addInve({ [name]: value })); 

  };

  const handlePostData = (e) => {
    e.preventDefault();
    
    dispatch(saveFormData(formData));
    setredirect(true)
  };

  if(redirect){
   return <Navigate to={"/allinventary"}/>
  }

 

  return (
    
      <form onSubmit={handlePostData}>
        <label>Name</label><input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name of Product"
          required
        />
        <label>Quantity</label><input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <label>Price</label><input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button type="submit">Submit</button>
      </form>
    
  );
}
