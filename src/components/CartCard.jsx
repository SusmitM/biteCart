import { useCartContext } from "../contexts/CartContext"
export const CartCard=({item})=>{
    const { id,name,description,price,image,is_vegetarian,is_spicy,delivery_time,quantity} = item;
    const {removeFromCart,addToCart, handelDecrement}=useCartContext();
    return(
        <div className="CartItem">
                <div className="imgSection">
                  <img src={image} />
                </div>
                <div className="infoSection">
                  <p className="itemName">{name}</p>
                  <div className="itemVariables">
                  <p className="itemPrice">
                     ${price}
                  </p>
                  
                  <p className="itemQuantity">
                    <b>Quantity: </b>
                    <span className="decrementBtn" onClick={()=> handelDecrement(item)}>➖</span> 
                    {quantity} 
                    <span className="incrementBtn"  onClick={() => addToCart(item)}>➕</span>
                  </p>
                  <span className="deleteBtn" onClick={() => removeFromCart(item)}>
                  🗑️
                  </span>
                  </div>
                  
                  <p className="itemDeliveryTime">
                    <b>Delivery Time: </b>
                    {delivery_time}
                  </p>
                 
                </div>
              </div>

    )
}