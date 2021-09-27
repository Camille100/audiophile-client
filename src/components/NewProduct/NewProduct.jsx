import React from 'react'

import './NewProduct.scss'
import Button1 from '../Button1/Button1'

const NewProduct = (props) => {
    return (
        <div className="NewProduct">
            <div className="new-product-container">
                <div className="new-product-informations">
                    <h2>NEW PRODUCT</h2>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.description}</p>
                    <Button1 txt="SEE PRODUCT" className="button-new-product"/>
                </div>
            </div> 
        </div>
    )
}

export default NewProduct
