const b = function(state = { b: 'aaa' }, action) {
    // console.log('B==action====>', action);
    switch (action.type) {
        case 'ADD_B_NUM':
            return {
                ...state,
                text: '测试',
                ...action.payload
            };

        default:
            return {
                ...state,
                text: '测试'
            };
    }
};

export default b;
