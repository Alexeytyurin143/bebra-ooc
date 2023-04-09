import React, { useEffect, useState } from "react";
import cl from "./AccordionItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import Popup from "../Popup/Popup";
// import EditForm from "../../EditFrom/EditForm";
import { useParams } from "react-router-dom";
import UIButton from "../UIButton/UIButton";
import UIInput from "../UIInput/UIInput";

const AccordionItem = (props) => {
    const [visiblity, setVisiblity] = useState(false);

    const isActive = () => (props.multiple ? visiblity : props.active);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        props.onToggle();
    };

    const [post, setPost] = useState({
        county: '',
        area: '',
        address: '',
        buildingObjectType: '',
        buildingObjectState: '',
        buildingObjectSquare: '',
        owner: '',
        actualUser: '',
    });

    const [popup, setPopup] = useState(false);

    const handleDelete = (deletedID) => {
        axios.delete(`http://localhost:8080/buildingObject/${deletedID}`)
            .then(res => {
                console.log("deleted record", res.data)
            })
            .catch(err => console.log(err))
    }

    // async function getFormData(id) {
    //     await axios.get(`http://localhost:8080/buildingObject/${id}`)
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    // }


    // async function handleSubmit() {
    //     await axios.put('http://localhost:8080/buildingObject', { ...post })
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    // }



    const loadObject = async () => {
        const result = await axios.get(`http://localhost:8080/buildingObject/${props.post.id}`)
        setPost(result.data)
    }

    const editPost = async (e) => {
        const result = await axios.put(`http://localhost:8080/buildingObject/${props.post.id}`, post)
        console.log(result)
    }



    // const editPost = (e) => {
    //     axios.put(`http://localhost:8080/buildingObject/${editedID}`)
    //         .then(res => {
    //             console.log("edited record", res.data)
    //         })
    //         .catch(err => console.log(err))
    // }


    // function createPost(newPost) {
    //     // await axios.post('http://localhost:8080/buildingObject', setPosts(newPost))
    //     // .then(response => console.log(response))
    //     setPosts([...posts, newPost])
    // }

    // http://localhost:8080/buildingObject
    // http://localhost:8080/buildingObject

    return (
        <div className={isActive() ? `${cl.card} ${cl.accordionActive}` : `${cl.card}`}>
            <div className={cl.cardHeader} onClick={toogleVisiblity}>
                {props.post.id}. {props.post.title}
                Округ: {props.post.county}, Район: {props.post.area}, Адрес: {props.post.address}
                <div className={cl.Icons}>
                    <button>
                        <FontAwesomeIcon
                            icon={faPen}
                            onClick={() => {
                                setPopup(true)
                                loadObject()
                            }} />
                    </button>
                    <button onClick={() => {
                        handleDelete(props.post.id)
                        props.remove(props.post)
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
            <Popup visible={popup} setVisible={setPopup}>
                <form className={cl.EditForm}>
                    <p>Округ</p>
                    <UIInput
                        value={post.county}
                        onChange={e => setPost({ ...post, county: e.target.value })}
                        type="text"
                        placeholder="Округ"

                    />
                    <p>Район</p>
                    <UIInput
                        value={post.area}
                        onChange={e => setPost({ ...post, area: e.target.value })}
                        type="text"
                        placeholder="Район"
                    />
                    <p>Адрес</p>
                    <UIInput
                        value={post.address}
                        onChange={e => setPost({ ...post, address: e.target.value })}
                        type="text"
                        placeholder="Адрес"
                    />
                    <p>Тип объекта</p>
                    <UIInput
                        value={post.buildingObjectType}
                        onChange={e => setPost({ ...post, buildingObjectType: e.target.value })}
                        type="text"
                        placeholder="Тип объекта"
                    />
                    <p>Состояние объекта</p>
                    <UIInput
                        value={post.buildingObjectState}
                        onChange={e => setPost({ ...post, buildingObjectState: e.target.value })}
                        type="text"
                        placeholder="Состояние объекта"
                    />
                    <p>Площадь объекта</p>
                    <UIInput
                        value={post.buildingObjectSquare}
                        onChange={e => setPost({ ...post, buildingObjectSquare: e.target.value })}
                        type="text"
                        placeholder="Площадь объекта"
                    />
                    <p>Собственник</p>
                    <UIInput
                        value={post.owner}
                        onChange={e => setPost({ ...post, owner: e.target.value })}
                        type="text"
                        placeholder="Собственник"
                    />
                    <p>Фактический пользователь</p>
                    <UIInput
                        value={post.actualUser}
                        onChange={e => setPost({ ...post, actualUser: e.target.value })}
                        type="text"
                        placeholder="Фактический пользователь"
                    />
                    <UIButton onClick={editPost}>Подтвердить</UIButton>
                </form>
            </Popup>
        </div>
    )
}

export default AccordionItem