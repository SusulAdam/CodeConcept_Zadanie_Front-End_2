import React from 'react'

const HeaderShoppingCart = ( props ) => {
    return (
        <div className="header-container">
            <h1 className="header-container__h1">Shopping Cart</h1>
            <button
                disabled={ props.subTotal > 0 ? false : true }
                onClick={ props.combindedAlertProceedToCheckout } className="header-container__handleCheckout">Proceed to checkout</button>
        </div>
    )
}

export default HeaderShoppingCart
