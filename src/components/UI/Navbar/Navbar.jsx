import React, { useState, useEffect } from "react";
import cl from "./Navbar.module.css"
import Popup from "../Popup/Popup";
import EventCalendar from "../EventCalendar/EventCalendar";
import Accordion from "../../Accordion";
import axios from "axios";
import UIInput from "../UIInput/UIInput";
import UIButton from "../UIButton/UIButton";

const Navbar = () => {
    useEffect(() => {
        fetchPosts()
    }, [])

    const [popup, setPopup] = useState(false);
    const [popup2, setPopup2] = useState(false);
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [posts, setPosts] = useState([]);
    async function fetchPosts() {
        const response = await axios.get('http://localhost:8080/buildingObject')
        setPosts(response.data)
    }
    // http://localhost:8080/buildingObject
    // http://localhost:8080/buildingObject
    async function createPost(newPost) {
        // await axios.post('http://localhost:8080/buildingObject', setPosts(newPost))
        // .then(response => console.log(response))
        setPosts([...posts, newPost])
    }


    return (
        <header className={cl.Header}>
            <nav className={cl.NavBody}>
                <ul className={cl.NavList}>
                    <li className={cl.NavItem}><button className={cl.NavLink} onClick={() => setPopup(true)}>Назначить рабочую группу</button></li>
                </ul>
            </nav>
            <div className={cl.Login}>
                <img className={cl.Avatar} src="https://placehold.co/50x50/teal/white" alt="" />
            </div>
            <Popup visible={popup} setVisible={setPopup}>
                <div className={cl.body}>
                    <div className={cl.column}>
                        <div className={cl.row}>
                            <EventCalendar />
                            <select
                                id="title"
                                name="title"
                                value={posts.buildingObjectType}>
                                <option disabled value="">Тип</option>
                                {posts.map((d, i) => (
                                    <option key={i} value={d.buildingObjectType}>{d.buildingObjectType}</option>
                                ))}
                            </select>
                        </div>
                        <UIInput
                            type="text"
                            placeholder="Ссылка на конференцию"
                        />
                        <div className={cl.buttons}>
                            <UIButton onClick={() => setPopup(false)}>Создать</UIButton>
                            <UIButton onClick={() => { setPopup2(true); setPopup(false) }}>Принять решение</UIButton>
                        </div>

                    </div>
                    <div className={cl.list}>
                        <Accordion remove={removePost} posts={posts} multiple={true} />
                    </div>
                </div>
            </Popup>
            <Popup visible={popup2} setVisible={setPopup2}>
                <div className={cl.bodyColumn}>
                    <div className={cl.Popup2Info}>
                        <p>15-04-2023</p>
                        <p>Тип объекта: Новостройка</p>
                    </div>
                    <div className={cl.Popup2Inputs}>
                        <UIInput
                            type="text"
                            placeholder="Формулировка"
                        />
                        <UIInput
                            type="text"
                            placeholder="Срок"
                        />
                        <UIInput
                            type="text"
                            placeholder="Ответсвенный"
                        />
                        <UIInput
                            type="text"
                            placeholder="Замечание"
                        />
                    </div>
                    <div className={cl.Popup2Buttons}>
                        <UIButton onClick={() => setPopup2(false)}>Сохранить</UIButton>
                        <UIButton onClick={() => setPopup2(false)}>Скачать XLS</UIButton>
                    </div>
                </div>
            </Popup>
        </header>
    )
}

export default Navbar