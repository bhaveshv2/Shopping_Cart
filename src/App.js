import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import CartItem from './CartItem';
// import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price:799,
                    title:'Apple iPhone',
                    qty:5,
                    img:'https://images.unsplash.com/photo-1574763788197-1808b6ac8142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
                    id:1,
                },
                {
                    price:299,
                    title:'Apple iWatch',
                    qty:10,
                    img:'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80',
                    id:2,
                },
                {
                    price:399,
                    title:'Apple iPad',
                    qty:20,
                    img:'https://images.unsplash.com/photo-1586364191708-0b695214eed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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

    getCartCount = () => {
        const {products} = this.state;
        let count = 0;

        products.forEach((product) => {
            count += product.qty;           //For each quantity or for each cartItem we can use count+=1
        });

        return count;
    }

    getCartTotal = () => {
        const {products} = this.state;
        let total = 0;

        products.forEach((product)=>{                   //we can use products.map as well
            total += (product.qty * product.price);
        });

        return total;
    }

    render(){
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                <Cart products={products}
                onIncreaseQuantity={this.handleIncreaseQuantity} 
                onDecreaseQuantity={this.handleDecreaseQuantity}
                deleteProduct={this.handleDeleteProduct}/>
                <div style={{padding:10,fontSize:20}}>Total:${this.getCartTotal()}</div>
            </div>
        );
    }
}

export default App;
