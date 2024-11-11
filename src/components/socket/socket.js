import { io } from "socket.io-client";
const socket = io("https://chat-backend-74c1.onrender.com"); // Replace with your backend URL
export default socket;
