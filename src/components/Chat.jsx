// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:5000');

// const Chat = () => {
//   const [users] = useState(['User1', 'User2', 'User3', 'User4', 'User5']);
//   const [currentUser, setCurrentUser] = useState('User1');
//   const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('chatMessages')) || []);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     socket.on('receiveMessage', (data) => {
//       setMessages((prevMessages) => {
//         const updatedMessages = [...prevMessages, data];
//         localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
//         return updatedMessages;
//       });
//     });

//     return () => socket.off('receiveMessage');
//   }, []);

//   const sendMessage = () => {
//     const messageData = {
//       user: currentUser,
//       message: newMessage,
//       timestamp: new Date().toLocaleTimeString(),
//     };
//     socket.emit('sendMessage', messageData);
//     setNewMessage('');
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.userList}>
//         <h3>Users</h3>
//         {users.map((user) => (
//           <button key={user} style={styles.userButton} onClick={() => setCurrentUser(user)}>
//             {user}
//           </button>
//         ))}
//       </div>
//       <div style={styles.chatArea}>
//         <h2>Chat with {currentUser}</h2>
//         <div style={styles.messages}>
//           {messages.map((msg, index) => (
//             <div key={index} style={msg.user === currentUser ? styles.ownMessage : styles.otherMessage}>
//               <strong>{msg.user}</strong>: {msg.message} <small>{msg.timestamp}</small>
//             </div>
//           ))}
//         </div>
//         <div style={styles.inputArea}>
//           <input
//             style={styles.input}
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <button style={styles.sendButton} onClick={sendMessage}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: { display: 'flex', width: '80%', margin: 'auto', marginTop: '50px' },
//   userList: { width: '20%', borderRight: '1px solid #ccc', padding: '10px' },
//   userButton: { width: '100%', padding: '10px', margin: '5px 0', cursor: 'pointer' },
//   chatArea: { width: '80%', padding: '10px' },
//   messages: { height: '400px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', marginBottom: '10px' },
//   ownMessage: { textAlign: 'right', color: 'blue', margin: '5px 0' },
//   otherMessage: { textAlign: 'left', color: 'black', margin: '5px 0' },
//   inputArea: { display: 'flex', justifyContent: 'space-between' },
//   input: { flex: 1, padding: '10px' },
//   sendButton: { padding: '10px 20px' }
// };

// export default Chat;




// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your server URL

// const Chat = () => {
//   const [users] = useState(['User1', 'User2', 'User3', 'User4', 'User5']);
//   const [currentUser, setCurrentUser] = useState('User1');
//   const [recipientUser, setRecipientUser] = useState(''); // New state for recipient
//   const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('chatMessages')) || []);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     socket.on('receiveMessage', (data) => {
//       setMessages((prevMessages) => {
//         const updatedMessages = [...prevMessages, data];
//         localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
//         return updatedMessages;
//       });
//     });

//     return () => socket.off('receiveMessage');
//   }, []);

//   const sendMessage = () => {
//     const messageData = {
//       user: currentUser,
//       message: newMessage,
//       timestamp: new Date().toLocaleTimeString(),
//       recipient: recipientUser // Add recipient information
//     };
//     // Emit to a targeted event with recipient included
//     socket.emit('privateMessage', messageData);
//     setNewMessage('');
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.userList}>
//         <h3>Users</h3>
//         {users.map((user) => (
//           <button
//             key={user}
//             style={styles.userButton}
//             onClick={() => {
//               setCurrentUser(user);
//               setRecipientUser(user); // Set recipient when selecting user
//             }}
//           >
//             {user}
//           </button>
//         ))}
//       </div>
//       <div style={styles.chatArea}>
//         <h2>Chat with {currentUser}</h2>
//         <div style={styles.messages}>
//           {messages.map((msg, index) => (
//             <div key={index} style={msg.user === currentUser ? styles.ownMessage : styles.otherMessage}>
//               <strong>{msg.user}</strong>: {msg.message} <small>{msg.timestamp}</small>
//             </div>
//           ))}
//         </div>
//         <div style={styles.inputArea}>
//           <input
//             style={styles.input}
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <button style={styles.sendButton} onClick={sendMessage}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//       container: { display: 'flex', width: '80%', margin: 'auto', marginTop: '50px' },
//       userList: { width: '20%', borderRight: '1px solid #ccc', padding: '10px' },
//       userButton: { width: '100%', padding: '10px', margin: '5px 0', cursor: 'pointer' },
//       chatArea: { width: '80%', padding: '10px' },
//       messages: { height: '400px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', marginBottom: '10px' },
//       ownMessage: { textAlign: 'right', color: 'blue', margin: '5px 0' },
//       otherMessage: { textAlign: 'left', color: 'black', margin: '5px 0' },
//       inputArea: { display: 'flex', justifyContent: 'space-between' },
//       input: { flex: 1, padding: '10px' },
//       sendButton: { padding: '10px 20px' }
//     };

// export default Chat;
import React, { useState, useEffect } from 'react';
import socket from './socket/socket.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Chat.css";
import notificationSoundFile from '../assets/notification.wav';

const users = ['Swathi', 'Vasant', 'Kannan', 'Joy', 'Jack'];

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(users[1]); // Set currentUser initially to "Vasant"
  const [selectedUser, setSelectedUser] = useState(users[0]); // Set selectedUser initially to "Swathi"
  const [newMessage, setNewMessage] = useState('');
  const [unreadMessages, setUnreadMessages] = useState({});

  const notificationSound = new Audio(notificationSoundFile);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => {
        const isDuplicate = prevMessages.some(
          (msg) =>
            msg.sender === data.sender &&
            msg.receiver === data.receiver &&
            msg.content === data.content &&
            msg.time === data.time
        );

        if (isDuplicate) return prevMessages;

        const updatedMessages = [...prevMessages, data];
        localStorage.setItem('messages', JSON.stringify(updatedMessages));

        if (data.receiver === currentUser && data.sender !== selectedUser) {
          setUnreadMessages((prev) => ({
            ...prev,
            [data.sender]: true,
          }));

          notificationSound.currentTime = 0;
          notificationSound.play().catch((error) => {
            console.error("Notification sound playback failed:", error);
          });

          toast.dismiss();
          toast.info(`New message from ${data.sender}`);
        }

        return updatedMessages;
      });
    });

    return () => socket.off('receive_message');
  }, [currentUser, selectedUser]);

  const sendMessage = () => {
    if (currentUser === selectedUser) {
      alert("You cannot send a message to yourself!");
      return;
    }

    const messageData = {
      sender: currentUser,
      receiver: selectedUser,
      content: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit('send_message', messageData);

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, messageData];
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    setNewMessage('');
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setUnreadMessages((prev) => ({
      ...prev,
      [user]: false,
    }));
  };

  return (
    <div className="chat-container">
      <div className="user-list">
        <h3>Users</h3>
        {users
          .filter((user) => user !== currentUser) // Filter out currentUser
          .map((user) => (
            <p
              key={user}
              onClick={() => handleUserClick(user)}
              className={user === selectedUser ? 'selected' : ''}
            >
              {user} {unreadMessages[user] && <span className="unread-indicator">•</span>}
            </p>
          ))}
      </div>

      <div className="chat-box">
        <h3>Chat with {selectedUser}</h3>

        <div className="current-users">
          {/* <p><strong>Current Sender:</strong> {currentUser}</p> */}
          <label htmlFor="user-select">Change Sender:</label>
          <select
            id="user-select"
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="messages-container">
          {messages
            .filter((msg) => 
              (msg.sender === currentUser && msg.receiver === selectedUser) || 
              (msg.sender === selectedUser && msg.receiver === currentUser))
            .map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === currentUser ? 'sent' : 'received'}`}
              >
                <div className="message-bubble">
                  <strong>{msg.sender}</strong>: {msg.content} <em>({msg.time})</em>
                </div>
              </div>
            ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Chat;
