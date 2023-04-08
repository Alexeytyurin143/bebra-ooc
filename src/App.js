import React, { useEffect, useState, } from "react";
// import { useState } from "react";
import './styles/App.css';
import Accordion from "./components/Accordion";
import Navbar from "./components/UI/Navbar/Navbar";
import axios from 'axios';
import UIButton from "./components/UI/UIButton/UIButton";
import Popup from "./components/UI/Popup/Popup";
// import UIInput from "./components/UI/UIInput/UIInput";
import PostForm from "./components/PostForm/PostForm";

function App() {


  useEffect(() => {
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState(false);

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
  
  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="btn"><UIButton onClick={() => setPopup(true)}>Добавить объект</UIButton></div>
        <Popup visible={popup} setVisible={setPopup}>
          <PostForm create={createPost} />
        </Popup>
        <div className="accordion">
          <Accordion remove={removePost} posts={posts} multiple={true} />
        </div>
      </div>

    </div>
  );
}

export default App;
