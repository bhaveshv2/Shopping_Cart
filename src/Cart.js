import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price:799,
                    title:'Apple iPhone',
                    qty:5,
                    img:'',
                    id:1,
                },
                {
                    price:299,
                    title:'Apple iWatch',
                    qty:10,
                    img:'',
                    id:2,
                },
                {
                    price:399,
                    title:'Apple iPad',
                    qty:20,
                    img:'',
                    id:3,

                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem product={product} key={product.id}/>
                        // <CartItem product={product} key={product.id} func={console.log('sdsd')} comp={<CartItem/>} jsx={<h1>Hey! Test</h1>} />    //pass fnctions, components or jsx as props
                    )
                })}
            </div>
        )
    }
}

export default Cart;