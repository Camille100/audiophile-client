import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import './MenuMobile.scss'
import ShopCardWrapper from '../ShopCardWrapper/ShopCardWrapper'




const MenuMobile = () => {

    


    const isMobileAndTablet = useMediaQuery({
        query: '(max-width: 1440px)'
    })

    const [display, setDisplay] = useState(false)

    const menuMobile = useRef()
    const backgroundFilter = useRef()

    const handleClick = () => {
        return setDisplay(!display)
    }

    useEffect(() => {
        if (display) {
            menuMobile.current.style.transform = "translateX(0)";
            menuMobile.current.style.opacity = 1;
            backgroundFilter.current.style.display = "block";
            backgroundFilter.current.style.opacity = "0.5";
        } else {
            menuMobile.current.style.transform = "translateX(-100vw)";
            menuMobile.current.style.opacity = 0;
            backgroundFilter.current.style.display = "none";
            backgroundFilter.current.style.opacity = "0";
        }
    }, [display])

    useEffect(() => {
        setDisplay(false)
    }, [isMobileAndTablet])

    return (
        <div className="MenuMobile">
            <div className="background-filter" ref={backgroundFilter}></div>
            <div className="burger-menu" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
                    <path d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z" fill="#FFF" fillRule="evenodd" />
                </svg>
            </div>
            <div className="menu-links" ref={menuMobile}>
                <ShopCardWrapper closeMenu={() => setDisplay(false)} />
            </div>
        </div>
    )
}

export default MenuMobile
