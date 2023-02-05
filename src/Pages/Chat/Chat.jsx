import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { userInfo } from "../../context/AuthProvider";

const socket = io("http://localhost:5000");
const Chat = () => {
  const {user} = useContext(userInfo)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   socket.on("messageTransfer", (message) => {
     if (message.to === user.email) {
       setMessages([...messages, message]);
     } else {
       setMessages([...messages, '']);
     }
   });
  }, [messages]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    socket.emit("send message", { sender: user.email, to: '', message });

  };

  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 mx-auto border h-fit p-3">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ul>
        <div className="sent text-right">
          <div className="btn my-2 flex justify-end gap-2">
            <form onSubmit={handleSubmit}>
              <input type="text" name="message" className="border" />
              <button type="submit" className="border p-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
        <br />
        <div className="text-end">
          <Link className="border p-2 rounded" to="/device">
            Device
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
