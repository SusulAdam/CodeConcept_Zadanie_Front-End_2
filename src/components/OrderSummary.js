import React from 'react'

const OrderSummary = ( props ) => {

    const { states, handleGrandTotal, combindedAlertProceedToCheckout } = props

    return (
        <div class="orderSummary">
            <div class="orderSummary__shipping-box">
                <p class="orderSummary__shipping-subtitle">shipping</p>
                <p class="orderSummary__shipping-price">{ states.shipping !== 0 ? `$${ states.shipping }0` : `$${ states.shipping }.00` }</p>
            </div>
            <div class="orderSummary__cartTotal-subtitle-box">
                <p class="orderSummary__cartTotal-subtitle">cart totals</p>
            </div>
            <div class="orderSummary__cartTotals-boxs">
                <div class="orderSummary__cartTotals-Prices-boxs">
                    <div class="orderSummary__subtotal-box">
                        <p class="orderSummary__subtotal-subtitle">Subtotal</p>
                        <p class="orderSummary__subtotal-price">${ states.subTotal.toFixed( 2 ) }</p>
                    </div>
                    <div class="orderSummary__granTotal-box">
                        <p class="orderSummary__grandTotal-subtitle">Grand Total</p>
                        <p class="orderSummary__grandTotal-price">${ handleGrandTotal }</p>
                    </div>
                </div>
                <button
                    disabled={ states.subTotal > 0 ? false : true }
                    onClick={ combindedAlertProceedToCheckout }
                    class="orderSummary__checkout-cart">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default OrderSummary
