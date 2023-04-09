import React, { useEffect, useState, } from "react";
// import { useState } from "react";
import './styles/App.css';
import Accordion from "./components/Accordion";
import Navbar from "./components/UI/Navbar/Navbar";
import axios from 'axios';
import UIButton from "./components/UI/UIButton/UIButton";
// import { usePosts } from "./components/hooks/usePosts";
import Popup from "./components/UI/Popup/Popup";
// import UIInput from "./components/UI/UIInput/UIInput";
import PostForm from "./components/PostForm/PostForm";
import UISelect from "./components/UI/UISelect/UISelect";

function App() {

  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState(false);
  const [filterer, setFilterer] = useState('');

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts() {
    const response = await axios.get('http://localhost:8080/buildingObject')
    setPosts(response.data)
  }

  function createPost(newPost) {
    // await axios.post('https://jsonplaceholder.typicode.com/posts', setPosts(newPost))
    // .then(response => console.log(response))
    setPosts([...posts, newPost])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    removePost()
  }, [])


  // const sortedAndSearchedPosts = usePosts(posts, filterer.sort, filterer.query);

  const onFilterChange = e => setFilterer(e.target.value);


  // https://jsonplaceholder.typicode.com/posts
  // http://localhost:8080/buildingObject
  



  const filteredPosts = posts.filter(n => ((!filterer || n.filterer === filterer)));


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="btn"><UIButton onClick={() => setPopup(true)}>Добавить объект</UIButton></div>
        <Popup visible={popup} setVisible={setPopup}>
          <PostForm create={createPost} />
        </Popup>
        <UISelect
          value={filterer}
          onChange={onFilterChange}
          defaultOption="Тип"
          posts={posts}
        />
        <div className="accordion">
          <Accordion remove={removePost} posts={posts} multiple={true} />
          {/*  */}
        </div>
      </div>

    </div>
  );
}

export default App;
