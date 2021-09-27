import React from 'react'
import { Link } from 'react-router-dom'

import './ShopCard.scss'

import Button3 from '../Button3/Button3'

const ShopCard = (props) => {

    return (
        <div className={`ShopCard ${props.data.nameClass}`}>
            <Link to={props.data.path} onClick={props.closeMenu}>
                <img src={props.data.img} alt={props.data.imgAlt} />
                <div className="menu-card">
                    <h1>{props.data.title}</h1>
                    <Button3 />
                </div>
            </Link>
        </div>
    )
}

export default ShopCard
