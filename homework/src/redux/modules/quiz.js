const ADD_ANSWER = "quiz/ADD_ANSWER";
export const addAnser = (user_answer) => {
  return { type: ADD_ANSWER, user_answer };
};
const initialState = {
  quiz_list: [
    { question: "르탄이는 1살이다.", answer: false },
    { question: "르탄이는 2살이다.", answer: false },
    { question: "르탄이는 3살이다.", answer: true },
  ],
  user_answer_list: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ANSWER: {
      const new_user_answer_list = [
        ...state.user_answer_list,
        action.user_answer,
      ];
      return { ...state, user_answer_list: new_user_answer_list };
    }

    default:
      return state;
  }
}
