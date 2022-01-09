import {usersAPI} from '../api/usersApi';
const SET_USER = 'SET_USER';
const SET_LOGIN = 'SET_LOGIN';

const initialState = {
  userInfo: {
    username: '',
    userId: 0,
  },
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case SET_LOGIN: {
      return {
        ...state,
        isAuth: action.status,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUser = (userInfo) => {
  return {
    type: SET_USER,
    userInfo,
  };
};

export const setLogin = (status) => {
  return {
    type: SET_LOGIN,
    status,
  };
};

export const createUser = (username, password) => async (dispatch) => {
  const result = await usersAPI.createAccount(username, password);
  console.log(username + password);
  console.log(result);
};

export const login = (username, password) => async (dispatch) => {
  await usersAPI.login(username, password);
  const result = await usersAPI.getMe();
  dispatch(setUser(result.user));
  dispatch(setLogin(true));
};

export const logout = () => async (dispatch) => {
  await usersAPI.logout();
  dispatch(setUser({user: {username: '', userId: 0}}));
  dispatch(setLogin(false));
};


export default userReducer;
