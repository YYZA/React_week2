const SET_NAME = "user/SET_NAME";

const initialState = {
  user_name: "",
};

export const setName = (name) => {
  return { type: SET_NAME, name };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NAME: {
      return { ...state, user_name: action.name };
    }
    default:
      return state;
  }
}
