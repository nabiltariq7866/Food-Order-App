import { useReducer } from "react";
import { createContext } from "react";
const Context = createContext({
    item:[],
    addItem:()=>{},
    removeItem:()=>{},
})
function cartReducer(state,action){
   if(action.type==="addItem"){
    const existingCartItemIndex = state.item.findIndex(item=>item.id===action.item.id);
    const updateArray=[...state.item];
    if(existingCartItemIndex>-1){
        const existingItem=state.item[existingCartItemIndex];
        const updateitem={
            ...existingItem,
            quantity:existingItem.quantity+1,
        }
        updateArray[existingCartItemIndex]=updateitem;

    }else{
        updateArray.push({...action.item,quantity:1});
    }


    return {
        ...state,item:updateArray
    }

   }
   if(action.type==="removeItem"){
    console.log("action id:" + action.id)
    const existingCartItemIndex = state.item.findIndex(item=>item.id===action.id);
    console.log("index find"+existingCartItemIndex);
    const updateArray=[...state.item];
    let existingItem=state.item[existingCartItemIndex];
    console.log(existingItem.quantity);
        if(existingItem.quantity===1){
            updateArray.splice(existingCartItemIndex,1);

        }else{
            console.log("elseinner")
           const updateItem= {
            ...existingItem,
            quantity: existingItem.quantity-1

           }
           updateArray[existingCartItemIndex]=updateItem;
          
        

        }
        return{
            ...state,
            item:updateArray

        }
   }
        return state;
}
export function CartContextProvider({children}){
    const [state,dispatch]=useReducer(cartReducer,{item:[]})
    function addItem(item){
        console.log("Add to Card")
        console.log(item);
        dispatch({type:'addItem',
            item
        })
        
    }
    function removeItem(id){ 
        console.log("id remove:" + id);
        dispatch({type:'removeItem',
            id
        })


    }
    const cartContext={
        item:state.item,
        addItem,
        removeItem
    }
    console.log(cartContext);
    return <Context.Provider value={cartContext} >
        {children}
    </Context.Provider>


}
export default Context;