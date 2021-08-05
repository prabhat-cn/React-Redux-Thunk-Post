/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from '../../actions/postAction'

const Posts = () => {

  // to call actions
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="row">
      {posts.map((postItem, index) => (
        <PostCard key={index} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
