const b = function(state = { b: "aaa" }, action) {
    switch (action.type) {
        case "ADD_B_NUM":
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

export default b;
