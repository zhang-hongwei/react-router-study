import axios from "axios";

// export function getList(text) {
//     return axios.get("/api/getlist").then(res => {
//         console.log(res);
//     });
//     return { type: ADD_NUM, text };
// }

export function add(payload) {
    // return {
    //     type: "ADD_C_NUM",
    //     payload: payload
    // };

    return dispatch => {
        console.log("========>>>", dispatch);

        return axios.get("/api/getlist").then(res => {
            const { data } = res;
            console.log("ccccccccccccccccc====>", res);
            dispatch({
                type: "ADD_C_NUM",
                payload: data.data
            });
        });
    };
}
