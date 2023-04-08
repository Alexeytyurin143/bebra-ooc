import React, { useState } from "react";
import cl from "./AccordionItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const AccordionItem = (props) => {
    const [visiblity, setVisiblity] = useState(false);

    const isActive = () => (props.multiple ? visiblity : props.active);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        props.onToggle();
    };

    async function deleteRecord(id) {
        await axios.delete(`http://localhost:8080/buildingObject/${id}`)
    }

    return (
        <div className={isActive() ? `${cl.card} ${cl.accordionActive}` : `${cl.card}`}>
            <div className={cl.cardHeader} onClick={toogleVisiblity}>
                {props.number}.
                 Округ: {props.post.county}, Район: {props.post.area}, Адрес: {props.post.address}
                <div className={cl.Icons}>
                    <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button onClick={() => {
                        props.remove(props.post);
                        deleteRecord(props.post.id)
                    }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <span className={isActive() ? `${cl.openIcon} ${cl.openIconActive}` : `${cl.openIcon}`}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>

            </div>
            <div className={cl.cardBody}>
                <p>Тип объекта: {props.post.buildingObjectType}</p>
                <p>Состояние объекта: {props.post.buildingObjectState}</p>
                <p>Площадь объекта: {props.post.buildingObjectSquare}</p>
                <p>Собственник: {props.post.owner}</p>
                <p>Фактический пользователь: {props.post.actualUser}</p>
            </div>
        </div>
    )
}

export default AccordionItem