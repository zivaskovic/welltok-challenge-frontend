import axios from "axios";

export function loadAllPosts(){
  return(dispatch) => {
    return axios.get("/posts").then((response) => {
      dispatch(fetchAllPosts(response.data));
    })
  }
}

export function fetchAllPosts(posts){
  return{
    type: "FETCH_ALL_POSTS",
    posts: posts
  }
}