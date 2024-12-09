import { useContext } from "react";
import Model from "./Model";
import Context from "../store/CartContext";
import { currencyFormatter } from "../utill/formatting";
import Input from "./Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./Button";


function CheckOut(){
   const cartContextCrt =  useContext(Context);
   const checkOutProgress = useContext(UserProgressContext);
   const cartTotal = cartContextCrt.item.reduce((totalPrice,item)=> totalPrice+ item.quantity * item.price ,0)
    function handleClose(){
        checkOutProgress.hideCheckOut();
    }
    function handleSubmit(e){
        e.preventDefault();
       const fd =new FormData(e.target)
       const cd = Object.fromEntries(fd.entries());
    fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body: JSON.stringify({
            order:{
                items:cartContextCrt.item,
                customer:cd
            }
        })
    })

    }
    return <Model className="cart" open={checkOutProgress.progress === "checkout"} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>CheckOut</h2>
            <p>Total Amout: {currencyFormatter.format(cartTotal) }</p>
            <Input label="FullName" type="text" id="name"></Input>
            <Input label="Email Adress" type="email" id="email"></Input>
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row ">
                <Input label="Postal Code" type="text" id="postal-code"></Input>
                <Input label="City" type="text" id="city"></Input>
            </div>
            <p >
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
        </Model>
}
export default CheckOut;