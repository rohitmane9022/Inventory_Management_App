
export const intialState={
   items:[],
 
   formData: {
    name:"",
    quantity:"",
    price:0
  },
  SaleItems:[],
  loading:false,
  error:null
  
  
}
export default function Reducers(state=intialState,action) {

  switch(action.type){
    case 'FETCH-INVENTARY':
      return {...state,items:action.payload,error:null,loading:false}
    case "ADD-INVENTARY-DATA":
     
        return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };

      case "LOADING":
        return {...state, loading:true}

        case "ADD_ITEM_TO_SALES": 
        return {...state, salesList: [...state.salesList, action.payload]}  
      case "FETCH-SALES"  :
        return {...state,salesList:action.payload,error:null,loading:false}
      case "DELETE-ITEM":
        return {...state,items:state.items.filter(item=> item._id !== action.payload)}  
        case "EDIT_INVENTORY_ITEM":
            return {...state, itemsList: state.itemsList.map((item)=>(item._id===action.payload.id? {...item, 
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price } : item))} 
      default:
        return state
  }


}
