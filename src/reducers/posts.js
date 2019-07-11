

const mainReducer =(state, action) => {
  if (state === undefined) {
    return {
      isLoading: true
    }
  }
  if (action.type === "FETCH_ALL_POSTS") {
      return {
        ...state,
       posts: action.posts.posts,
       isLoading: false
      }
    }
}

export default mainReducer;