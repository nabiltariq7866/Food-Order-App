import image from "../assets/logo.jpg"
import Button from "./Button";
import Context from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
function Header(){
    const cartContext= useContext(Context);
    const userProgressCtx=useContext(UserProgressContext);
    const totalCardItem = cartContext.item.reduce((totalCardofItem,item)=>{
        console.log("tl "+totalCardofItem)
        return totalCardofItem+item.quantity;
    },0)
   function handleShowCart(){
    userProgressCtx.showCart();

   }
    return<header id="main-header">
        <div id="title">
            <img src={image} alt="Food logo" />
            <h1>FoodOrder</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCardItem})</Button>
        </nav>
        
    </header>
}
export default Header;