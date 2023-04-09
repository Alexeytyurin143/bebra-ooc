import React, { useState, useEffect } from "react";
import cl from "./Navbar.module.css"
import Popup from "../Popup/Popup";
import EventCalendar from "../EventCalendar/EventCalendar";
import Accordion from "../../Accordion";
import axios from "axios";

const Navbar = () => {
    // useEffect(() => {
    //     fetchPosts()
    //   }, [])

    const [popup, setPopup] = useState(false);
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [posts, setPosts] = useState([]);
    async function fetchPosts() {
        const response = await axios.get('http://localhost:8080/buildingObject')
        setPosts(response.data)
    }
    // https://jsonplaceholder.typicode.com/posts
    // http://localhost:8080/buildingObject
    async function createPost(newPost) {
        // await axios.post('https://jsonplaceholder.typicode.com/posts', setPosts(newPost))
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
                <EventCalendar />
                <Accordion remove={removePost} posts={posts} multiple={true} />
            </Popup>
        </header>
    )
}

export default Navbar