import React, { useState } from "react";
import UIButton from "../UI/UIButton/UIButton";
import UIInput from "../UI/UIInput/UIInput";
import cl from './PostForm.module.css'
import axios from "axios";


const PostForm = ({ create }) => {
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

    async function handleSubmit(e) {
        await axios.post('http://localhost:8080/buildingObject', { ...post })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const addNewPost = (e) => {
        const newPost = { ...post }
        create(newPost)
        handleSubmit()
        setPost({
            county: '',
            area: '',
            address: '',
            buildingObjectType: '',
            buildingObjectState: '',
            buildingObjectSquare: '',
            owner: '',
            actualUser: '',
        })
    }


    // https://jsonplaceholder.typicode.com/posts
    // http://localhost:8080/buildingObject
    return (
        <form className={cl.PostForm}>
            <UIInput
                value={post.county}
                onChange={e => setPost({ ...post, county: e.target.value })}
                type="text"
                placeholder="Округ"

            />
            <UIInput
                value={post.area}
                onChange={e => setPost({ ...post, area: e.target.value })}
                type="text"
                placeholder="Район"
            />
            <UIInput
                value={post.address}
                onChange={e => setPost({ ...post, address: e.target.value })}
                type="text"
                placeholder="Адрес"
            />
            <UIInput
                value={post.buildingObjectType}
                onChange={e => setPost({ ...post, buildingObjectType: e.target.value })}
                type="text"
                placeholder="Тип объекта"
            />
            <UIInput
                value={post.buildingObjectState}
                onChange={e => setPost({ ...post, buildingObjectState: e.target.value })}
                type="text"
                placeholder="Состояние объекта"
            />
            <UIInput
                value={post.buildingObjectSquare}
                onChange={e => setPost({ ...post, buildingObjectSquare: e.target.value })}
                type="text"
                placeholder="Площадь объекта"
            />
            <UIInput
                value={post.owner}
                onChange={e => setPost({ ...post, owner: e.target.value })}
                type="text"
                placeholder="Собственник"
            />
            <UIInput
                value={post.actualUser}
                onChange={e => setPost({ ...post, actualUser: e.target.value })}
                type="text"
                placeholder="Фактический пользователь"
            />
            <UIButton onClick={addNewPost}>Создать</UIButton>
        </form>
    )
}

export default PostForm