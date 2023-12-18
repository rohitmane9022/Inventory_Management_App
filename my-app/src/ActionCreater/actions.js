import axios from "axios"
import { response } from "express"


export const getitems=()=>async(dispatch)=>{
try{
  dispatch({type:"LOADING"})
  const response=await axios.get("https://inventarymanagment.rohitmane2.repl.co/inventaryall")
  dispatch({type:"FETCH-INVENTARY",payload:response.data.inventaryAll})
  
}
catch(e){console.log(e)}
}

export const addInve=(data)=>{
  return{
    type:"ADD-INVENTARY-DATA",
    payload:data
  }
}

export const saveFormData=(formData)=>async(dispatch)=>{
  try{
    const res= await axios.post("https://inventarymanagment.rohitmane2.repl.co/addInve",formData,{
    headers: {
      'Content-Type': 'application/json',
    },

  })
  
  }
  catch(e){console.log(e)}
  

 

}
export const AddSales=(data)=>{
  return{
    type:"ADD_ITEM_TO_SALES",
    payload:data
  }
}
export const SaveSalesData=(items)=>async(dispatch)=>{

  try{
    const res=await axios.post("https://inventarymanagment.rohitmane2.repl.co/addsales",items,{
      headers: {
        'Content-Type': 'application/json',
      },
  
    })
    
  }
  catch(e){console.error("something went wrong")}


}

export const getSalesAll=()=>async(dispatch)=>{
  try{
    dispatch({type:"LOADING"})
    const response=await axios.get("https://inventarymanagment.rohitmane2.repl.co/sales")
    dispatch({type:"FETCH-SALES", payload:response.data})
  }
  catch(e){console.log(e)}
}

export const DeleteAction=(iteamId)=>{
  return{
    type:"DELETE-ITEM",
    payload:iteamId
  }
}

export const DeleteItems=(itemId)=>async(dispatch)=>{
  try{
    dispatch(DeleteAction(itemId))
    const response= await axios.delete("https://inventarymanagment.rohitmane2.repl.co/items/"+itemId,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
  }
  catch(e){console.log(e)}
}

export const editItems = (itemId) =>({
  type: "EDIT_INVENTORY_ITEM",
  payload: itemId
})
export const editItem=(data)=>async(dispatch)=>{
try{
  dispatch(editItem(data))
  const response=await axios.post("https://inventarymanagment.rohitmane2.repl.co/items/"+data,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
catch(e){console.log(e)}
}