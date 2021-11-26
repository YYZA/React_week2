// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeBucketFB, updateBucketFB } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const bucket_index = params.index;

  return (
    <div>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <button
        onClick={() => {
          history.goBack();
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          history.goBack();
          dispatch(removeBucketFB(bucket_list[bucket_index].id));
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
