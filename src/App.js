import React, { useEffect, useState, } from "react";
import './styles/App.css';
import Accordion from "./components/Accordion";
import Navbar from "./components/UI/Navbar/Navbar";
import axios from 'axios';
import UIButton from "./components/UI/UIButton/UIButton";
import Popup from "./components/UI/Popup/Popup";
import PostForm from "./components/PostForm/PostForm";

function App() {

  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState(false);

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts() {
    const response = await axios.get('http://localhost:8080/buildingObject')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    removePost()
  })


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="btn"><UIButton onClick={() => setPopup(true)}>Добавить объект</UIButton></div>
        <Popup visible={popup} setVisible={setPopup}>
          <PostForm />
        </Popup>
        <div className="accordion">
          <Accordion remove={removePost} posts={posts} multiple={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
