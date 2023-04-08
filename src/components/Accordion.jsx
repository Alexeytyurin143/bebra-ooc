import React, { useState } from "react";
import AccordionItem from "./UI/AccordionItem/AccordionItem";

const Accordion = ({ remove, posts, multiple = false }) => {
  const [active, setActive] = useState(0);

  

  return (
    <div>
      {posts.map((post, index) =>
        <AccordionItem
          post={post}
          key={post.id}
          number={index + 1}
          remove={remove}
          active={active === post.id}
          multiple={multiple}
          onToggle={(e) => setActive((a) => (a === post.id ? "" : post.id))} 
          />
      )}
    </div>
  );
};

export default Accordion;