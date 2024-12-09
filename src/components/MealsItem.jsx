import {currencyFormatter} from "../utill/formatting.js"
import Button from "./Button.jsx";
import Context from "../store/CartContext.jsx"
import { useContext } from "react";
function MealsItem({meal}){
    const cartContext=useContext(Context);
 function   handleAddMealToCart(){
    cartContext.addItem(meal);
 }
    return (
        <li className="meal-item" >
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)} </p>
                    <p className="meal-item-description ">{meal.description}</p>
                </div>
                <p>
                    <Button className="meal-item-actions" onClick={handleAddMealToCart}>Add To Card</Button>
                </p>
            </article>

        </li>
    )
}
export default MealsItem;