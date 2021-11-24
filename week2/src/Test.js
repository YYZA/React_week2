import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBucketFB } from "./redux/modules/bucket";
import { Link } from "react-router-dom";
import "./App.css";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];

function Test(props) {
  const wordInput = useRef();
  const descInput = useRef();
  const exampleInput = useRef();

  const dispatch = useDispatch();

  const addBucketList = () => {
    const word = {
      id: 4,
      textDic: wordInput.current.value,
      textExplain: descInput.current.value,
      textExam: exampleInput.current.value,
    };
    dispatch(addBucketFB(word));
  };

  return (
    <div className="App">
      <Title>단어 추가하기</Title>
      <Input>
        <p>Word</p>
        <Text name="word" ref={wordInput} />
      </Input>
      <Input>
        <p>Description</p>
        <Text name="desc" ref={descInput} />
      </Input>
      <Input2>
        <p>Example</p>
        <Text name="example" ref={exampleInput} />
      </Input2>
      <Link onClick={addBucketList} to="/" className="link2">
        추가하기
      </Link>
    </div>
  );
}

const Input = styled.div`
  color: slateblue;
  text-align: center;
  max-width: 350px;
  min-height: 10vh;
  background-color: aliceblue;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-weight: 800;
`;
const Input2 = styled.div`
  color: slateblue;
  text-align: center;
  max-width: 350px;
  min-height: 10vh;
  background-color: aliceblue;
  padding: 16px;
  margin: 20px auto;
  margin-bottom: 50px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-weight: 800;
`;

const Text = styled.input`
  margin: 10px;
  height: 30px;
  width: 250px;
`;

const Title = styled.h3`
  color: slateblue;
  text-align: center;
`;

export default Test;
