import React, { useState } from "react";

function Like() {
  const [blog, setBlog] = useState({
    content: "React is Awesome",
    like: 0,
  });

  // const addLike = () => {
  //   setBlog({ ...blog, like: blog.like + 1 });
  // };

  return (
    <div>
      <h2 onClick={() => setBlog({ ...blog, like: blog.like + 1 })}>
        {blog.like > 1 ? "👍 " : "😇"} {blog.like}
      </h2>
      <p> {blog.content}</p>
    </div>
  );
}

export default Like;
