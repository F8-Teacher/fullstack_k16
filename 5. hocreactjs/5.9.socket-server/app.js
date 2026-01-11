import { Server } from "socket.io";

const io = new Server({
  cors: "*",
});

io.on("connection", (socket) => {
  console.log("Kết nối", socket.id);
  socket.on("load-data", (data) => {
    console.log(data);
    io.to("f8-k16").emit("new-data", "Dữ liệu gửi về từ server" + Date.now());
  });
  socket.on("join-room", (room) => {
    socket.join(room);
    socket.emit("joined-room");
  });
  socket.on("leave-room", (room) => {
    socket.leave(room);
    socket.emit("leaved-room");
  });
  socket.on("disconnect", () => {
    console.log("Đóng kết nối", socket.id);
  });
});

io.listen(3000);
