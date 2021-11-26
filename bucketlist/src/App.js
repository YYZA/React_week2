import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import {
  addBucketFB,
  createBucket,
  loadBucketFB,
} from "./redux/modules/bucket";
import Progress from "./Progress";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();

  const addBucketList = () => {
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };

  React.useEffect(() => {
    dispatch(loadBucketFB());
  }, []);

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          <Route path="/" exact render={(props) => <BucketList />} />
          <Route path="/detail/:index" component={Detail} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        위로가기
      </button>
    </div>
  );
}

const Input = styled.div`
  display: flex;
  max-width: 350px;
  min-height: 30px;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  & > * {
    padding: 5px;
  }
  & input {
    border: 1px solid #888;
    border-radius: 5px;
    width: 70%;
    margin-right: 10px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #a673ff;
  }

  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background-color: #a673ff;
    border-radius: 5px;
  }
  & button:hover {
    transition: 300ms;
    background-color: #673ab7;
    cursor: pointer;
  }
`;

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
