import { useState } from "react";
import { useCartContext } from "../contexts/CartContext"
import { CartCard } from "../components/CartCard";


export const Cart=()=>{

    const {CartItems,removeFromCart,totalCartValue,totalDeliveryTime,addToCart, handelDecrement}=useCartContext();
    const [ApplyCoupon,setApplyCoupon]=useState(false);
    return(
        <>
         <h1 className="cartHeading">My Cart</h1>
        <div className="cartHeader">
          
         <div className="cartInfo">
            <p><b>Total Delivery Time: {totalDeliveryTime} minutes </b></p>
            <p><b>Total Price : {ApplyCoupon && totalCartValue>5 ? (totalCartValue-5).toFixed(2) : totalCartValue.toFixed(2)}</b></p>
            <button className="couponBtn" onClick={()=>setApplyCoupon(true)} >Apply Coupon</button>
         </div>
        </div>


         <div className="itemContainer">
        {CartItems.map((item) => {
          
          return (
            <CartCard item={item}/>
          );
        })}
      </div>
        </>
    )
}