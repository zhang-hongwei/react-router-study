import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from "...";
import { getList, getUserInfo } from "../../http/index";

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchList(action) {
    try {
        const res = yield call(getList, action.payload.userId);
        const { data } = res;
        yield put({ type: "USER_FETCH_SUCCEEDED", payload: data });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* fetchUser(action) {
    try {
        const res = yield call(getUserInfo, action.payload.userId);
        const { data } = res;
        yield put({
            type: "GET_USER_INFO_SUCCESSED",
            payload: {
                userInfo: data
            }
        });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
    console.log("============>>>>mysaga==>");
    yield takeEvery("USER_FETCH_REQUESTED", fetchList);
    yield takeEvery("GET_USER_INFO", fetchUser);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/

export default mySaga;
