import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setName } from "./redux/modules/user";

const Start = (props) => {
  const name_ref = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "1.5em", lineHeight: "1.5" }}>
        나는{" "}
        <span
          style={{
            backgroundColor: "#fef5d4",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          {props.name}
        </span>
        에 대해 얼마나 알고 있을까?
      </h1>
      <input
        ref={name_ref}
        style={{
          borderRadius: "30px",
          padding: "10px",
          width: "100%",
        }}
      />
      <button
        onClick={() => {
          dispatch(setName(name_ref.current.value));
          history.push("/quiz");
        }}
        style={{
          padding: "10px 36px",
          backgroundColor: "bisque",
          borderRadius: "30px",
          margin: "36px 0px",
        }}
      >
        시작하기
      </button>
    </div>
  );
};

export default Start;
