import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./services/actions/postsAction";
import Post from "./Post";

const Posts = () => {
  const { isLoading, posts, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div>
      <h2>Posts : {posts.length}</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
