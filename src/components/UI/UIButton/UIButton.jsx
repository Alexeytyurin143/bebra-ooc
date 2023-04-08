import React from 'react'
import cl from './UIButton.module.css'

const UIButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.UIBtn}>
            {children}
        </button>
    )
}

export default UIButton