var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/chat.html" );
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket > 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자

var list = {};
io.on("connection", function(socket){
    // socket.id 접속이 된 클라이언트 아이디 
    console.log("connected : ", socket.id);

    // socket.emit("info", socket.id);

    // data = {nickname : nickname}
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        // 모두에게 보내야 하기 때문에 io.emit 사용
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list", list);
    });

    // data = {msg: msg, to: nick}
    socket.on("send", function(data){
        console.log("client message : ", data.msg);

        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        
        if ( data.to == "전체" ) { // 닉네임 선택이 전체로 되어 있으면 모두에게 전송
            io.emit("newMessage", data);
        } else { // 닉네임 선택하면 특정 닉네임에게만 전송
            data["is_dm"] = true;
            let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; });
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data); // 내가 전송한 메세지를 띄우기
        }
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    });
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});