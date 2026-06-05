import { useRef } from 'react'
import { useEffect } from 'react'
import RobotProfileImg from '../assets/robot.png';
import UserProfileImg from '../assets/user.png';
import './ChatMessage.css'

export function ChatMsg({ msg, sender }) {
return (
    <div  className={sender==='user'?'chat-msg-user':'chat-msg-robot'}>
    {sender === "robot" && <img src={RobotProfileImg} className="robot-profile" alt="robot" />}
    <div className="msg-text">
        {msg}
    </div>
    {sender === "user" && <img src={UserProfileImg}  className="user-profile" alt="user" />}
    </div>
);
}

// 3. MESSAGE LIST DISPLAY COMPONENT
export function ChatMessages({ messages }) {
const chatMsgRef=useRef(null);

useEffect(() => {
    const containerElem = chatMsgRef.current;
    if(containerElem){
    containerElem.scrollTop = containerElem.scrollHeight;
    }
}, [messages]);
return (
    <div className="chat-msg-container"
    ref={chatMsgRef}>
    {messages.map((chatMessage) => {
        return (
        <ChatMsg 
            key={chatMessage.id}
            msg={chatMessage.msg} 
            sender={chatMessage.sender} 
        />
        );
    })}
    </div>
);
}