import { useContext } from "react";
import Model from "./Model";
import Context from "../store/CartContext.jsx";
import Cartitem from "./CartItem.jsx";
import { currencyFormatter } from "../utill/formatting.js";
import Button from "./Button.jsx"
import UserProgressContext from "../store/UserProgressContext.jsx";
function Carts(){
   const crtcontext = useContext(Context);
   const userProgressCtx = useContext(UserProgressContext);
   const cartTotal = crtcontext.item.reduce((totalPrice,item)=> totalPrice + item.quantity * item.price,0);
   function handleDecreaseQuantity(id){
      console.log(id);
      crtcontext.removeItem(id);
   }
   function handleIncreaseQuantity(item){
      crtcontext.addItem(item);
   }
    function handleHideCart(){
      
      userProgressCtx.hideCart();
    }

   console.log("total price"+cartTotal);
 return <Model className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart'? handleHideCart: null}>
    <h2>Cart Model</h2>
    <ul>
        {crtcontext.item.map(item=><Cartitem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onDecrease={()=>handleDecreaseQuantity(item.id)} onIncrease={()=>handleIncreaseQuantity(item)}/>)}
        
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={handleHideCart}>Close</Button>
 {crtcontext.item.length !== 0 &&  <Button onClick={()=>userProgressCtx.showCheckOut()}>Go To Checkout</Button>}
    </p>


 </Model>
}
export default Carts;