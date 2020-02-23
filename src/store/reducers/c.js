import axios from 'axios';
const c = function(state = { c: 'aaa' }, action) {
    // console.log('dispatch=c==>', action);
    switch (action.type) {
        case 'ADD_C_NUM':
            return {
                ...state,
                text: '测试c',
                ...action.payload
            };
        case 'USER_FETCH_REQUESTED':
            return {
                ...state,
                ...action.payload
            };
        case 'USER_FETCH_SUCCEEDED':
            return {
                ...state,
                ...action.payload
            };
        case 'GET_USER_INFO_SUCCESSED':
            return {
                ...state,
                ...action.payload
            };
        default:
            return {
                ...state,
                text: '测试c'
            };
    }
};

export default c;
