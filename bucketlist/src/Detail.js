// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeBucket } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const removeBucketList = () => {
    dispatch(removeBucket(params.index));
  };

  return (
    <>
      <h1>{bucket_list[params.index]}</h1>
      <button
        onClick={() => {
          history.goBack();
          removeBucketList();
        }}
      >
        삭제하기{" "}
      </button>
    </>
  );
};

export default Detail;
