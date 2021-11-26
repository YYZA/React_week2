// bucket.js
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const REMOVE = "bucket/REMOVE";

const initialState = {
  list: [],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}

export function removeBucket(bucket_index) {
  return { type: REMOVE, bucket_index };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

//middleware
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));
    let bucket_list = [];
    bucket_data.forEach((doc) => {
      bucket_list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadBucket(bucket_list));
  };
};

export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    const _bucket = await getDoc(docRef);
    const bucket_data = { id: _bucket.id, ..._bucket.data() };
    console.log(bucket_data);

    dispatch(createBucket(bucket_data));
  };
};

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: true });

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });
    dispatch(updateBucket(bucket_index));
  };
};

export const removeBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert("아이디가 없네요");
      return;
    }
    const docRef = doc(db, "bucket", bucket_id);
    await deleteDoc(docRef);

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });
    dispatch(removeBucket(bucket_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.bucket_list };
    }
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
    case UPDATE: {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      console.log({ list: new_bucket_list });
      return { list: new_bucket_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
