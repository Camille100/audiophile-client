import React from 'react'
import { Link } from 'react-router-dom'

import './MenuDesktop.scss'

const MenuDesktop = () => {
    return (
        <div className="MenuDesktop">
            <div className="menu-links">
                <Link to="/" className="menu-home">HOME</Link>
                <Link to='/headphones' className="menu-headphones">HEADPHONES</Link>
                <Link to='/speakers' className="menu-speakers">SPEAKERS</Link>
                <Link to='/earphones' className="menu-earphones">EARPHONES</Link>
            </div>
        </div>
    )
}

export default MenuDesktop
