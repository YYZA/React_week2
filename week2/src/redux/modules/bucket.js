// bucket.js

// Actions
const CREATE = "bucket/CREATE";

const initialState = {
  list: [],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
