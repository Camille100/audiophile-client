import React from 'react'
import NewProduct from '../../components/NewProduct/NewProduct'

import './Home.scss'
import ShopCardWrapper from '../../components/ShopCardWrapper/ShopCardWrapper'
import StarProductBig from '../../components/StarProductBig/StarProductBig'
import StarProductMedium from '../../components/StarProductMedium/StarProductMedium'
import StarProductSmall from '../../components/StarProductSmall/StarProductSmall'
import CompanyPresentation from '../../components/CompanyPresentation/CompanyPresentation'


const Home = () => {


    const productObj = {
        title: "XX99 MARK II HEADPHONES",
        description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
    }

    return (
        <div className="Home">

            <NewProduct data={productObj} />

            <div className="home-container">

                <div className="ShopCardWrapper-home-container">
                    <ShopCardWrapper />
                </div>

                <div className="home-star-products">
                    <StarProductBig />
                    <StarProductMedium />
                    <StarProductSmall />
                </div>

                <div className="company-presentation-home-container">
                    <CompanyPresentation />
                </div>

            </div>


        </div>
    )
}

export default Home
