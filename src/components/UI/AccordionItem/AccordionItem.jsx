import React, { useState } from "react";
import cl from "./AccordionItem.module.css"
// ,
const AccordionItem = ({ post, active, multiple, onToggle }) => {
    const [visiblity, setVisiblity] = useState(false);

    const isActive = () => (multiple ? visiblity : active);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        onToggle();
    };

    // 

    // 
    return (
        <div className={isActive() ? `${cl.card} ${cl.accordionActive}` : `${cl.card}`}>
            <div className={cl.cardHeader} onClick={toogleVisiblity}>
                {post.id}. {post.title}
                <span className={cl.accordionIcon}>
                    {isActive() ? '-' : '+'}
                </span>
            </div>
            <div className={cl.cardBody}>{post.body}</div>
        </div>
    )
}

export default AccordionItem