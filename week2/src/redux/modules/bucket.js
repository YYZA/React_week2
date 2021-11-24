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

export const addBucketFB = (dict) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), { dict });
    const _bucket = await getDoc(docRef);
    const bucket_data = { ..._bucket.data(), id: _bucket.id };

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
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    default:
      return state;
  }
}
