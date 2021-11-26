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
    </ProgressBar>
  );
}

const ProgressBar = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background-color: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 40px;
`;

export default Progress;
