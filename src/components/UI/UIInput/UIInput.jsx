import React from 'react'
import cl from './UIInput.module.css'

const UIInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cl.UIInput} {...props} />
    );
});

export default UIInput