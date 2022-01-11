import {postsAPI} from '../api/postsApi';

const SET_POSTS = 'SET_POSTS';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    default: {
      return state;
    }
  }
};

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const getPosts = () => async (dispatch) => {
  const result = await postsAPI.getPosts();
  dispatch(setPosts(result.posts));
};

export const createPost = (postTitle,
    postText, creatorId) => async (dispatch) => {
  await postsAPI.createPost(postTitle, postText, creatorId);
  await getPosts();
};


export default postsReducer;
