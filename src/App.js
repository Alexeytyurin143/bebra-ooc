import React, { useEffect, useState } from "react";
// import { useState } from "react";
import './styles/App.css';
import Accordion from "./components/Accordion";
import Navbar from "./components/UI/Navbar/Navbar";
import axios from 'axios';
import UIButton from "./components/UI/UIButton/UIButton";

function App() {


 useEffect( () =>{
  fetchPosts()
 }, [])
  
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await axios.get('http://localhost:8080/users/all')
    setPosts(response.data)
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <UIButton>Добавить объект</UIButton>
        <div className="accordion">
          <Accordion posts={posts} multiple={true} />
          {/*  */}
        </div>
      </div>

    </div>
  );
}




// const Objects = [
//   {
//     id: 1,
//     title: "1 карточка объекта",
//     content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, repudiandae? Sed obcaecati dolorum possimus corrupti cupiditate quaerat odit unde quasi harum ipsa amet ipsam, officia exercitationem fuga error incidunt cum? Repellendus, tempore dicta! Quidem sequi minima sit tempore repudiandae commodi. Tempore optio autem quod id sapiente est dolore, facere nemo, illo rerum aliquid fugit quae? Assumenda doloribus amet soluta pariatur? Sequi dicta quisquam veritatis eum accusantium provident eius pariatur ad temporibus, exercitationem necessitatibus? Repellendus, repellat odit praesentium dolorum a nostrum, impedit porro modi consequuntur saepe nihil optio necessitatibus quos omnis? Explicabo, similique. Voluptates, sed vitae? Similique ut accusamus aliquam id mollitia molestias, corporis maxime omnis rem dolorem excepturi debitis aperiam quas magni temporibus. Dolorum tempora dolore praesentium. Consequatur, repellat porro. Ipsum, possimus obcaecati voluptatem magnam dicta id fuga quia libero optio perspiciatis eveniet tenetur quo totam unde quisquam incidunt numquam aut enim facere maxime, eum officia. Harum facilis excepturi perspiciatis?"

//   },
//   {
//     id: 2,
//     title: "2 карточка объекта",
//     content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, repudiandae? Sed obcaecati dolorum possimus corrupti cupiditate quaerat odit unde quasi harum ipsa amet ipsam, officia exercitationem fuga error incidunt cum? Repellendus, tempore dicta! Quidem sequi minima sit tempore repudiandae commodi. Tempore optio autem quod id sapiente est dolore, facere nemo, illo rerum aliquid fugit quae? Assumenda doloribus amet soluta pariatur? Sequi dicta quisquam veritatis eum accusantium provident eius pariatur ad temporibus, exercitationem necessitatibus? Repellendus, repellat odit praesentium dolorum a nostrum, impedit porro modi consequuntur saepe nihil optio necessitatibus quos omnis? Explicabo, similique. Voluptates, sed vitae? Similique ut accusamus aliquam id mollitia molestias, corporis maxime omnis rem dolorem excepturi debitis aperiam quas magni temporibus. Dolorum tempora dolore praesentium. Consequatur, repellat porro. Ipsum, possimus obcaecati voluptatem magnam dicta id fuga quia libero optio perspiciatis eveniet tenetur quo totam unde quisquam incidunt numquam aut enim facere maxime, eum officia. Harum facilis excepturi perspiciatis?"
//   },
//   {
//     id: 3,
//     title: "3 карточка объекта",
//     content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, repudiandae? Sed obcaecati dolorum possimus corrupti cupiditate quaerat odit unde quasi harum ipsa amet ipsam, officia exercitationem fuga error incidunt cum? Repellendus, tempore dicta! Quidem sequi minima sit tempore repudiandae commodi. Tempore optio autem quod id sapiente est dolore, facere nemo, illo rerum aliquid fugit quae? Assumenda doloribus amet soluta pariatur? Sequi dicta quisquam veritatis eum accusantium provident eius pariatur ad temporibus, exercitationem necessitatibus? Repellendus, repellat odit praesentium dolorum a nostrum, impedit porro modi consequuntur saepe nihil optio necessitatibus quos omnis? Explicabo, similique. Voluptates, sed vitae? Similique ut accusamus aliquam id mollitia molestias, corporis maxime omnis rem dolorem excepturi debitis aperiam quas magni temporibus. Dolorum tempora dolore praesentium. Consequatur, repellat porro. Ipsum, possimus obcaecati voluptatem magnam dicta id fuga quia libero optio perspiciatis eveniet tenetur quo totam unde quisquam incidunt numquam aut enim facere maxime, eum officia. Harum facilis excepturi perspiciatis?"
//   },
// ]

export default App;
