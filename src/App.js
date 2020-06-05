import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from "firebase";

// import CartItem from './CartItem';
// import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[],
            loading:true
        }

        this.db=firebase.firestore();
    }

    componentDidMount() {
        // firebase
        //     .firestore()
        //     .collection("products")
        //     .get()
        //     .then(snapshot => {
        //         const products = snapshot.docs.map(doc => {
        //         const data = doc.data();
        //         data["id"] = doc.id;
        //         return data;
        //         });
        //         this.setState({ products: products, loading: false });
        //     });

        this.db
            .collection("products")
            // .where('price','==',100)                             //'where' query the firebase according to the condition
            // .where('qty','==',3)
            .orderBy('qty')                                         //orderBy query is sorting the data according to fields
            .onSnapshot(snapshot => {                                   //onSnapshot is listener for firebase changes
                const products = snapshot.docs.map(doc => {
                const data = doc.data();
                data["id"] = doc.id;
                return data;
                });
                this.setState({ products: products, loading: false });
            });
    }

    handleIncreaseQuantity = (product)=>{
        console.log('Increase the qurantity of',product);
        const {products}= this.state;               //Taking array of products
        const index=products.indexOf(product);       //Taking index of particular product

        // products[index].qty += 1;

        // this.setState({
        //     products           //This is called short hands as products:products both are same that why
        // });

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty:products[index].qty+1
        })
        .then(()=>{
            console.log('Increase:Update Successfully!');
        })
        .catch((err)=>{
            console.log('Error:',err);
        })
    }

    handleDecreaseQuantity = (product)=>{
        console.log('Decrease the qurantity of',product);
        const {products}= this.state;               //Taking array of products
        const index=products.indexOf(product);       //Taking index of particular product

        if(products[index].qty===0){
            return;
        }

        // products[index].qty -= 1;

        // this.setState({
        //     products           //This is called short hands as products:products both are same that why
        // });

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty:products[index].qty-1
        })
        .then(()=>{
            console.log('Decrease:Update Successfully!');
        })
        .catch((err)=>{
            console.log('Error:',err);
        })
    }

    handleDeleteProduct=(id)=>{

        // const items = products.filter((item)=>item.id!==id); // (item)=>item.id!==id, will return the array of products in which 'id' matching product is not there [{}]

        // this.setState({
        //     products:items
        // });

        const docRef = this.db.collection('products').doc(id);

        docRef.delete()
        .then(()=>{
            console.log('Deleted Successfully!');
        })
        .catch((err)=>{
            console.log('Error:',err);
        })


        //for deleting the paticular field,  docRef.update({capital:fiebase.firestore.FieldValue.delete()});
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

    addProduct = () => {
        this.db
            .collection('products')
            .add({
                img:'https://www.ifbappliances.com/media/catalog/product/cache/1/image/550x629/9df78eab33525d08d6e5fb8d27136e95/s/e/senorita-aqua-sx-6-5kg-horizontal-angle-front-loaders-washing-machines.jpg',
                price:100,
                qty:1,
                title:'Washing Machine'
            })
            .then((docRef)=>{
                console.log('Product have been added!',docRef);
            })
            .catch((err)=>{
                console.log('Error:',err);
            })
    }

    render(){
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add Product</button>
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
