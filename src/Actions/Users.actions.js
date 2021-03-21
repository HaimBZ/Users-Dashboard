//import axios from "axios";
import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "./Types";

// Users action
export const getUsers = () => {
  let apiUrl = "https://test-api-server.herokuapp.com/users";
  return (dispatch) => {
    dispatch(getUsersRequest());
    return fetch(apiUrl).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch(getUsersSuccess(data));
        });
      } else {
        response.json().then((error) => {
          dispatch(getUsersFailed(error));
        });
      }
    });
  };
};

export const getUsersRequest = () => {
    return {
      type: GET_USERS_REQUEST
    }
  }

export const getUsersSuccess = (users) => {
    return {
      type: GET_USERS_SUCCESS,
      users
    }
  }
  
  export const getUsersFailed = (error) => {
    return {
      type: GET_USERS_FAILED,
      error
    }
  }

export const editUser = (user) => {
  let apiUrl = `https://test-api-server.herokuapp.com/users/${user.id}`;
  return (dispatch) => {
    dispatch(editUserRequest(user));
    return fetch(apiUrl, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch(editUserSuccess(data, data.message));
        });
      } else {
        response.json().then((error) => {
          dispatch(editUserFailed(error));
        });
      }
    });
  };
};

const editUserRequest = (user) => {
  return {
    type: EDIT_USER_REQUEST,
    user,
  };
};

const editUserSuccess = (user, message) => {
  return {
    type: EDIT_USER_SUCCESS,
    user,
    message,
  };
};

const editUserFailed = (error) => {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
};
