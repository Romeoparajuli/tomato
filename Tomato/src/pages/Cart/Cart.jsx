import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
export const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((Item, index) => {
                        if (cartItems[Item._id]) {
                            return (
                                <div>
                                    <div className="cart-item-title cart-items-items">
                                        <img src={Item.image} />
                                        <p>{Item.name}</p>
                                        <p>${Item.price}</p>
                                        <p>{cartItems[Item._id]}</p>
                                        <p>${Item.price * cartItems[Item._id]}</p>
                                        <p onClick={() => removeFromCart(Item._id)} className='cross'>X</p>

                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                    })}

            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button>  Checkout</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code Enter it here </p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Cart