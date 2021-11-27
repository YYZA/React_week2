// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
// redux 훅 중, useSelector를 가져옵니다.
import { useSelector, useDispatch } from "react-redux";
import { loadBucketFB, removeBucketFB } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from "redux";
import "./App.css";

const BucketList = (props) => {
  const my_lists = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadBucketFB());
  }, []);

  return (
    <>
      <ListStyle>
        {my_lists.map((list, index) => {
          return (
            <CardsBox key={list.id}>
              <DivBtn>
                <TitleWord>Word</TitleWord>
                <Btn
                  onClick={() => {
                    dispatch(removeBucketFB(list.id));
                  }}
                >
                  X
                </Btn>
              </DivBtn>
              <ItemStyle>{list.dict.textDic}</ItemStyle>
              <Title>Description</Title>
              <ItemStyle>{list.dict.textExplain}</ItemStyle>
              <Title>Example</Title>
              <BlueItemStyle>{list.dict.textExam}</BlueItemStyle>
            </CardsBox>
          );
        })}
      </ListStyle>
      <button
        onClick={() => {
          history.push("/test");
        }}
        className="link"
      >
        +
      </button>
    </>
  );
};

const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  margin: 10px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  background-color: #e54949;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 55vh;
`;

const CardsBox = styled.div`
  border-radius: 10px;
  margin: 20px;
  background-color: aliceblue;
  box-shadow: 2px 5px 5px 1px slateblue;
`;

const ItemStyle = styled.div`
  padding: 0px;
  margin: 8px;
`;
const BlueItemStyle = styled.div`
  padding: 0px;
  color: slategray;
  margin: 8px;
`;

const Title = styled.p`
  margin: 8px;
  text-decoration: underline;
  color: slateblue;
  font-weight: 800;
`;
const TitleWord = styled.p`
  font-weight: 800;
  color: white;
  margin: 8px;
  background-color: slateblue;
  padding: 5px;
  width: 15%;
  border-radius: 10px;
`;

export default BucketList;
