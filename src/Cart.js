import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product)=>{
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity} 
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        deleteProduct={props.deleteProduct} 
                    />
                    // OR <CartItem product={product} key={product.id} func={console.log('sdsd')} comp={<CartItem/>} jsx={<h1>Hey! Test</h1>} />    //pass fnctions, components or jsx as props
                )
            })}
        </div>
    )
}


export default Cart;