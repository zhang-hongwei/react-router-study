const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    console.log("lll");

    res.send("Hello World!");
});

app.listen(9000, () => console.log("Example app listening on port 9000!"));

app.get("/api/getlist", (req, res) => {
    res.send({
        msg: "成功",
        code: 0,
        success: true,
        data: [
            {
                name: "测试1",
                id: "1"
            },
            {
                name: "测试2",
                id: "2"
            },
            {
                name: "测试3",
                id: "3"
            }
        ]
    });
});

app.get("/api/getUserInfo", (req, res) => {
    res.send({
        msg: "成功",
        code: 0,
        success: true,
        data: {
            name: "张红伟",
            age: "20",
            phone: "18958068191"
        }
    });
});
