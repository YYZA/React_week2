import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// useDispatch를 가져와요!
import { useDispatch } from "react-redux";
// 액션생성함수도 가져오고요!
import { createBucket } from "./redux/modules/bucket";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];

function Test() {
  const text = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);
  // useHistory 사용하는 것과 비슷하죠? :)
  const dispatch = useDispatch();

  const addBucketList = () => {
    dispatch(createBucket(text.current.value));
    dispatch(createBucket(text2.current.value));
    dispatch(createBucket(text3.current.value));
  };

  return (
    <div className="App">
      <Input>
        <input type="text" ref={text} />
        <input type="text" ref={text2} />
        <input type="text" ref={text3} />
        <Link to="/">
          <button onClick={addBucketList}>추가하기</button>
        </Link>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default Test;
