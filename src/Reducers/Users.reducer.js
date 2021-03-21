import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED
} from "../Actions/Types";

const initialState = {
  loading: true,
  data: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.users
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false
      };
    case EDIT_USER_REQUEST:
      return {
        ...state,
        userToEdit: action.user
      };

    case EDIT_USER_SUCCESS:
      const updatedUsers = state.data.map((user) => {
        if (user.id !== action.user.id) {
          return user;
        }
        return { ...user, ...action.user };
      });
      return {
        ...state,
        data: updatedUsers,
        loading: false,
        userToEdit: action.user
      };

    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
        userToEdit: state.userToEdit,
        loading: false
      };
    default:
      return state;
  }
}
