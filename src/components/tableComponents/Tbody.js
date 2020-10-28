import React from 'react'
import editImg from "../../images/edit-img.png";
import headPhones from "../../images/headphones.png";
import xImg from "../../images/x-img.png";

const Tbody = ( props ) => {
    return (
        <tbody style={ props.states.subTotal < 1 ? { display: "none" } : { "": "" } }>
            <tr className="table-container__elements">
                <td>
                    <img
                        onClick={ props.deleteProduct }
                        className="table__container__close" src={ xImg } alt="close-button" />
                </td>
                <td>
                    <img className="table__container__headphones" src={ headPhones } alt="headphones" />
                </td>
                <td>Headphones</td>
                <td>${ props.states.unitPrice.toFixed( 2 ) } </td>
                <td>
                    <div className="table-container__items-box">
                        <button
                            disabled={ props.states.productQuantity === 1 ? true : false }
                            onClick={ props.subtractProductQuantity }
                        >-</button>

                        <p>{ props.states.productQuantity }</p>
                        <button
                            onClick={ props.addProductQuantity }
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
                        onClick={ props.handleSubTotal }
                    >Update Shopping Cart </button>
                </td>
            </tr>

        </tbody>
    )
}

export default Tbody
