const a = function(state = { a: "aaa" }, action) {
    switch (action.type) {
        case "ADD_A_NUM":
            return {
                ...state,
                text: "测试",
                data: action.payload
            };

        default:
            return {
                ...state,
                text: "测试"
            };
    }
};

export default a;
