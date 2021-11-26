// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const REMOVE = "bucket/REMOVE";

const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function removeBucket(bucket_index) {
  return { type: REMOVE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE: {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case REMOVE: {
      const remove_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
      return { list: remove_bucket_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
