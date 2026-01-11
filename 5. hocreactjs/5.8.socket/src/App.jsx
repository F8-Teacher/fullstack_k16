import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");
export default function App() {
  const [data, setData] = useState("");
  const [isJoined, setJoined] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Client đã kết nối");
    });
    socket.on("disconnect", () => {
      console.log("Client đóng kết nối");
    });
    socket.on("new-data", (data) => {
      setData(data);
    });
    socket.on("joined-room", () => {
      setJoined(true);
    });
    socket.on("leaved-room", () => {
      setJoined(false);
    });
  }, []);
  const handleClick = () => {
    socket.emit("load-data", "Hello anh em");
  };
  const handleJoinRoom = () => {
    if (isJoined) {
      socket.emit("leave-room", "f8-k16");
    } else {
      socket.emit("join-room", "f8-k16");
    }
  };
  return (
    <div>
      <h1>Websocket</h1>
      <h2>{data}</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleJoinRoom}>
        {isJoined ? "Leave" : "Join"} Room
      </button>
    </div>
  );
}

//HTTP Polling --> HTTP Long Polling

//Join room --> Emit lên server socket -> join --> Trả về trạng thái cho client --> Cập nhật state
