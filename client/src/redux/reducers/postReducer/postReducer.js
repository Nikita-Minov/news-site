import {postsAPI} from '../../../api/postsApi';

const SET_POSTS = 'SET_POSTS';
const SET_POST = 'SET_POST';

const initialState = {
  posts: [],
  currentPost: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    case SET_POST: {
      return {
        ...state,
        currentPost: action.post,
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

export const setPost = (post) => {
  return {
    type: SET_POST,
    post,
  };
};

export const getPosts = () => async (dispatch) => {
  const result = await postsAPI.getPosts();
  dispatch(setPosts(result.posts));
};

export const getPost = (postId) => async (dispatch) => {
  const result = await postsAPI.getPost(postId);
  dispatch(setPost(result.post));
};

export const createPost = (postTitle,
    postText, creatorId) => async (dispatch) => {
  await postsAPI.createPost(postTitle, postText, creatorId);
  await getPosts();
};


export default postReducer;
