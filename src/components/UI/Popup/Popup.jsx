import React from 'react'
import cl from './Popup.module.css'

const Popup = ({ children, visible, setVisible }) => {
    const rootClasses = [cl.Popup]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.PopupContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup