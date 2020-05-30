import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:1099,
            title:'Apple Phone',
            qty:5,
            img:''
        }
        // this.increamentQuantity = this.increamentQuantity.bind(this);
    }

    increaseQuantity=()=>{
        // this.state.qty +=1;
        // setState form 1 => Object form (This form is use when we does not require the previous state)
        // this.setState({
        //     title:'Google Pixle'
        // });

        // setState form 2 => Function form (This form is use when we required the previous state)
        this.setState((prevState)=>{
            return {qty:prevState.qty+1}
        });
    }

    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            return {qty:prevState.qty-1}
        });
    }
    render(){
        const {price,title,qty}=this.state;       //defining variables from above contructor
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
                            onClick={this.increaseQuantity} />          {/* or we can use here as well this.incrementQuantity.bind(this) */}
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                            onClick={this.decreaseQuantity}/>
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>
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