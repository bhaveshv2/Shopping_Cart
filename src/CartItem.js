import React from 'react';

class CartItem extends React.Component{
    // /** Promises or ajax calls */
    // // testing(){
    // //     const promise = new Promise((resolve,reject)=>{
    // //         setTimeout(()=>{
    // //             resolve('done')
    // //         },5000);
    // //     });

    // //     promise.then(()=>{
    // //         // setState act as like a synchronous call. So every statement finishes instantly and shift to another statement and value get updated instantly.
    // //         this.setState({qty:this.state.qty+10});                 //1+10 = 11
    // //         this.setState({qty:this.state.qty+10});                 //11+10 = 21
    // //         this.setState({qty:this.state.qty+10});                 //21+10 = 31  , It will show 31 after 5s. So no Batching has been done

    // //         console.log(this.state);                                //same qty get updated to 31 in the state as well. no need for prevState and another callback
    // //     });
    // // }

    // increaseQuantity=()=>{
    //     /*this.state.qty +=1;
    //     //setState form 1 => Object form (This form is use when we does not require the previous state)
    //     this.setState({
    //         qty:this.state.qty+1
    //     },()=>{
    //         console.log(this.state);
    //     });*/

    //     /*//This is the Concept of ***Batching*** in which all the setState merge into one call and re-render the 
    //     //component only once. The call is from last setState function and increase the quantity by 3
    //     this.setState({
    //         qty:this.state.qty+1
    //     });
    //     this.setState({
    //         qty:this.state.qty+1
    //     });
    //     this.setState({
    //         qty:this.state.qty+3
    //     });*/

    //     //setState form 2 => Function form (This form is use when we required the previous state)
    //     // this.setState((prevState)=>{
    //     //     return {qty:prevState.qty+1}
    //     // });

    //     /* //This is also concept of ***batching*** in form of function setState. In function form the batching maintain a queue
    //     //will pass the callback in the queue one by one and prevState get updated everytime and react performing batching 
    //     //the component get re-render only once
    //     this.setState((prevState)=>{
    //         return {qty:prevState.qty+1}
    //     });
    //     this.setState((prevState)=>{
    //         return {qty:prevState.qty+1}
    //     });
    //     this.setState((prevState)=>{
    //         return {qty:prevState.qty+1}
    //     });*/

    //     /** Concept of asynchronous nature of setState() */
    //     this.setState((prevState)=>{
    //         return {qty:prevState.qty+1}
    //     },()=>{
    //         console.log(this.state);
    //     });
    // }

    // decreaseQuantity=()=>{
    //     const {qty} = this.state;

    //     if(qty===0){
    //         return;
    //     }

    //     this.setState((prevState)=>{
    //         return {qty:prevState.qty-1}
    //     });
    // }
    render(){
        console.log(this.props);
        const {price,title,qty}=this.props.product;       //defining variables from above contructor
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>          {/*use the variable title or this.state.title */}
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)} />          {/* or we can use here as well this.incrementQuantity.bind(this) */}
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}/>
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                            onClick={()=>this.props.deleteProduct(this.props.product.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}

// style Elements in jsx itself or pass style as a object
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;