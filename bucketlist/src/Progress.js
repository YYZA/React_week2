import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Progress(props) {
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;
  bucket_list.map((l, idx) => {
    if (l.completed) {
      count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"} />
      <Circle />
    </ProgressBar>
  );
}

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 10px;
  width: 100%;
  height: 20px;
`;

const HighLight = styled.div`
  background-color: #673ab7;
  transition: 1s;
  width: ${(props) => props.width};
  border-radius: 10px;
  height: 20px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 5px solid #673ab7;
  border-radius: 40px;
  margin: 0px 0px 0px -20px;
`;

export default Progress;
