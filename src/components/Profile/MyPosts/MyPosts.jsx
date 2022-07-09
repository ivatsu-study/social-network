import React from "react";

import Post from "./Post";

const MyPosts = () => (
  <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message="Hi there, it's me" likeCounts={15} />
      <Post message="Hi there, it's me" likeCounts={25} />
      <Post message="Hi there, it's me" likeCounts={35} />
    </div>
  </div>
);

export default MyPosts;
