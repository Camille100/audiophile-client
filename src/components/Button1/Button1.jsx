import React from 'react'

import './Button1.scss'

const Button1 = (props) => {
    return (
        <div className="Button1">
            <button>{props.txt}</button>
        </div>
    )
}

export default Button1
