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

    handleIncreaseQuantity = (product)=>{
        console.log('Increase the qurantity of',product);
        const {products}= this.state;               //Taking array of products
        const index=products.indexOf(product);       //Taking index of particular product

        products[index].qty += 1;

        this.setState({
            products           //This is called short hands as products:products both are same that why
        });
    }

    handleDecreaseQuantity = (product)=>{
        console.log('Increase the qurantity of',product);
        const {products}= this.state;               //Taking array of products
        const index=products.indexOf(product);       //Taking index of particular product

        if(products[index].qty===0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products           //This is called short hands as products:products both are same that why
        });
    }

    handleDeleteProduct=(id)=>{
        const {products} = this.state;

        const items = products.filter((item)=>item.id!==id); // (item)=>item.id!==id, will return the array of products in which 'id' matching product is not there [{}]

        this.setState({
            products:items
        })
    }

    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity} 
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            deleteProduct={this.handleDeleteProduct}/>
                        // OR <CartItem product={product} key={product.id} func={console.log('sdsd')} comp={<CartItem/>} jsx={<h1>Hey! Test</h1>} />    //pass fnctions, components or jsx as props
                    )
                })}
            </div>
        )
    }
}

export default Cart;