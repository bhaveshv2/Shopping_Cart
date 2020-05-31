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

    getCartCount = () => {
        const {products} = this.state;
        let count = 0;

        products.forEach((product) => {
            count += product.qty;           //For each quantity or for each cartItem we can use count+=1
        })

        return count;
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
            </div>
        );
    }
}

export default App;
