import { useCartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
export const FoodCard = ({ item }) => {
  const {
    id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time,
  } = item;
  const { addToCart,iteminCart } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="itemCard" >
      <div className="imageSection">
        <img src={image} />
      </div>
      <div className="detailsSection">
       
          <div className="itemName">{name}</div>
          <div className="itemPrice"> ${price}</div>
        
        <div className="itemDescription">{description}</div>
        <div className="deliveryTime">
        Delivery Time: {delivery_time} min
        </div>
        {
        iteminCart(item) ? (<div className="addToCartBtn" onClick={() => navigate("/cart")}>🡵</div>) : (<div className="addToCartBtn" onClick={() => addToCart(item)}>
          +
        </div>)
      }
        
      </div>
    </div>
  );
};
