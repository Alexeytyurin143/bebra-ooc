import React, { useState } from "react";
import AccordionItem from "./UI/AccordionItem/AccordionItem";

const Accordion = ({ posts, multiple = false }) => {
  const [active, setActive] = useState(0);

  

  return (
    <div>
      {posts.map((post) =>
        <AccordionItem
          post={post}
          key={post.id}
          active={active === post.id}
          multiple={multiple}
          onToggle={(e) => setActive((a) => (a === post.id ? "" : post.id))} 
          />
      )}
    </div>
  );
};

export default Accordion;