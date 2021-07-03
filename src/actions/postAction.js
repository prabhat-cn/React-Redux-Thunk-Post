import { 
  GET_POSTS,
  GET_POST, 
  CREATE_POST, 
  UPDATE_POST, 
  DELETE_POST } from "./types";
  import axios from 'axios'

// get all posts using thunk to load data so dispatch
export const getPosts = () => async (dispatch) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`) 
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  })
}

// get a post or read data using thunk
export const getPost = (id) => async (dispatch) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) 
  dispatch({
    type: GET_POST,
    payload: result.data,
  });
}

// create a post using thunk
export const createPost = (post) => async (dispatch) => {
  const result = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
}

// update a post using thunk
export const updatePost = (post) => async (dispatch) => {
  const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)

  dispatch({
    type: UPDATE_POST,
    payload: result.data,
  });
}

// delete a post
export const deletePost = (id) => async (dispatch) => {
  //  "id" coming from front end
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

  dispatch({
    type: DELETE_POST,
    payload: id,
  });
}
