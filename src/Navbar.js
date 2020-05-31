import React from 'react';

//This has no state that's why we make it as function component
const Navbar=(props)=>{
    return (
        <div style={styles.nav}>
            <div>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/1170/1170678.svg" alt="cart-logo"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon:{
        height:20,
        marginRight:20,
        color:'white',
    },
    nav:{
        height:50,
        background:'skyblue',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative',
        
    },
    cartCount:{
        background:'orange',
        borderRadius:'50%',
        padding:'2px 8px',
        
    }
}

export default Navbar;