import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  const history = useHistory();
  return (
    <div>
      <h1>404 Error , 주소를 다시 입력해주세요! </h1>
      <button
        onClick={() => {
          history.push("/detail");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
