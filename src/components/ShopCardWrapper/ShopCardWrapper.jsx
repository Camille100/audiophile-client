import React from 'react'

import ShopCard from '../ShopCard/ShopCard'

import './ShopCardWrapper.scss'

import headphonesImg from '../../assets/shared/mobile/image-headphones.png'
import earphonesImg from '../../assets/shared/mobile/image-earphones.png'
import speakersImg from '../../assets/shared/mobile/image-speakers.png'

const ShopCardWrapper = (props) => {

    const menuArray = [
        {
            img: headphonesImg,
            imgAlt: "headphones",
            nameClass: "menu-headphones",
            path: "/headphones",
            title: "HEADPHONES",
        },
        {
            img: speakersImg,
            imgAlt: "speakers",
            nameClass: "menu-speakers",
            path: "/speakers",
            title: "SPEAKERS"
        },
        {
            img: earphonesImg,
            imgAlt: "earphones",
            nameClass: "menu-earphones",
            path: "/earphones",
            title: "EARPHONES"
        }
        
    ]


    return (

        <div className="ShopCardWrapper">
           
            <div className="shop-links">
            
                {menuArray.map((item, index) => (
                    
                    props.closeMenu 
                    ? <ShopCard data={item} key={index}  closeMenu={props.closeMenu}/>
                    : <ShopCard data={item} key={index}  />
                    
                ))}
            
            
            </div>
            
        </div>

    )
}

export default ShopCardWrapper
