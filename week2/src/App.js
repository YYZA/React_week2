import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
// useDispatch를 가져와요!
// import { useDispatch } from "react-redux";
// // 액션생성함수도 가져오고요!
// import { createBucket } from "./redux/modules/bucket";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Test from "./Test.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Route exact path="/" component={BucketList} />
        <Route path="/test" exact component={Test} />
        <Link to="/test">넘어가기</Link>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
