import React from "react";
import img from "./dog.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnser } from "./redux/modules/quiz";

const Quiz = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  const setAnswer = (user_answer) => {
    dispatch(addAnser(user_answer));
  };

  React.useEffect(() => {
    if (user_answer_list.length === quiz_list.length) {
      // const _score =
      //   (100 / quiz_list.length) *
      //   quiz_list.filter((q, idx) => {
      //     return q.answer === user_answer_list[idx];
      //   }).length;

      // const score = Math.round(_score);

      // console.log(score);
      history.push("/score");
      return;
    }
  }, [user_answer_list]);
  if (user_answer_list.length === quiz_list.length) {
    // history.push("/score");
    return null;
  }

  return (
    <div>
      <p>{user_answer_list.length + 1}번 문제</p>
      <h3>{quiz_list[user_answer_list.length].question}</h3>
      <img src={img} />

      <div>
        <button
          onClick={() => {
            setAnswer(true);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          O
        </button>
        <button
          onClick={() => {
            setAnswer(false);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Quiz;
