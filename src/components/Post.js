import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <section>
      <article>
        <h4>{post.id}</h4>
        <h4>{post.title}</h4>
        <h4>{post.body}</h4>
      </article>
    </section>
  );
};

export default Post;
