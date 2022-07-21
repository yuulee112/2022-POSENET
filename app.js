const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");

const app = express();

// DB 연결
mongoose.connect("mongodb://localhost:27017/posenet");
mongoose.connection.on("connected", () => { console.log("POSNET DB connect seccess"); })
mongoose.connection.on("error", (err) => { console.log(err); })


app.use(cors()); //특정 IP 지정도 가능

app.use(bodyParser.urlencoded({ extended: true })); //body에 들어오는 값 인코딩해줌

// 모든 경로에 대한 요청을 json형태로 바꿈
app.use(express.json());

// /user로 들어오는 모든 url은 여기서 작동
app.use("/user", userRouter);


app.listen(8080, () => {
    console.log('server open');
})