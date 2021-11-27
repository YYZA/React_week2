// bucket.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const REMOVE = "bucket/REMOVE";

const initailState = {
  list: [],
};

// Action Creators
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function removeBucket(bucket_index) {
  return { type: REMOVE, bucket_index };
}

// middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "dictionary"));
    console.log(bucket_data);
    let bucket_list = [];

    bucket_data.forEach((doc) => {
      if (doc.exists) {
        bucket_list = [...bucket_list, { id: doc.id, ...doc.data() }];
      }
    });
    console.log(bucket_list);
    dispatch(loadBucket(bucket_list));
  };
};

export const removeBucketFB = (bucket_id) => {
  console.log(bucket_id);
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert("아이디가 없네요");
      return;
    }
    const docRef = doc(db, "dictionary", bucket_id);
    await deleteDoc(docRef);

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(removeBucket(bucket_index));
  };
};

export const addBucketFB = (dict) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), { dict });
    const _bucket = await getDoc(docRef);
    const bucket_data = { ..._bucket.data(), id: _bucket.id };
    console.log(bucket_data);
    dispatch(createBucket(bucket_data));
  };
};

// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.bucket_list };
    }
    // do reducer stuff
    case CREATE: {
      const new_bucket_list = [...state.list];
      return { list: new_bucket_list };
    }
    case REMOVE: {
      const remove_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
      return { list: remove_bucket_list };
    }

    default:
      return state;
  }
}
