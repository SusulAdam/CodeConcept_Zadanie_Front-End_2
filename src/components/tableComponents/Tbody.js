import React from 'react'
import editImg from "../../images/edit-img.png";
import headPhones from "../../images/headphones.png";
import xImg from "../../images/x-img.png";

const Tbody = ( props ) => {
    return (
        <tbody style={ this.state.subTotal < 1 ? { display: "none" } : { "": "" } }>
            <tr className="table-container__elements">
                <td>
                    <img
                        onClick={ this.deleteProduct }
                        className="table__container__close" src={ xImg } alt="close-button" />
                </td>
                <td>
                    <img className="table__container__headphones" src={ headPhones } alt="headphones" />
                </td>
                <td>Headphones</td>
                <td>${ this.state.unitPrice.toFixed( 2 ) } </td>
                <td>
                    <div className="table-container__items-box">
                        <button
                            disabled={ this.state.productQuantity === 1 ? true : false }
                            onClick={ this.subtractProductQuantity }
                        >-</button>

                        <p>{ this.state.productQuantity }</p>
                        <button
                            onClick={ this.addProductQuantity }
                        >+</button>

                        <img src={ editImg } alt="edit-png" />
                    </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="table-container__updateBtn">
                    <button
                        onClick={ this.handleSubTotal }
                    >Update Shopping Cart </button>
                </td>
            </tr>

        </tbody>
    )
}

export default Tbody
