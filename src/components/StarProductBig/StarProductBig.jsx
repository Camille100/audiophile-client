import React from 'react'
import { useMediaQuery } from 'react-responsive'

import './StarProductBig.scss'

import Button2Alt from '../Button2/Button2Alt'

import imgMobile from '../../assets/home/mobile/image-speaker-zx9.png'
import imgTablet from '../../assets/home/tablet/image-speaker-zx9.png'
import imgDesktop from '../../assets/home/desktop/image-speaker-zx9.png'

const StarProductBig = () => {

    //media queries
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const isTablet = useMediaQuery({query: '(min-width: 768px)'} && {query: '(max-width: 1440px)'})

    const isDesktop = useMediaQuery({
        query: '(min-width: 1440px)'
    })

    //different images depending on media query
    let image;

    if(isMobile) {
        image = <img src={imgMobile} alt="ZX9 speaker" />
    } else if(isTablet) {
        image = <img src={imgTablet} alt="ZX9 speaker" />
    } else if(isDesktop) {
        image = <img src={imgDesktop} alt="ZX9 speaker" />
    }

    return (
        <div className="StarProductBig">

            <div className="star-product-big-image">

                {image}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 944 944">
                    <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".5">
                        <circle cx="472" cy="472" r="235.5" />
                        <circle cx="472" cy="472" r="270.5" />
                        <circle cx="472" cy="472" r="471.5" />
                    </g>
                </svg>

            </div>

            <div className="star-product-big-informations">
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button2Alt txt={"SEE PRODUCT"}/>
            </div>

        </div>
    )
}

export default StarProductBig
