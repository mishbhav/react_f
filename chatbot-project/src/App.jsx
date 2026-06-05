import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'
import { ChatInput } from './components/ChatInput';    
import { ChatMessages } from './components/ChatMessage';
     
function App() {
  const [cht, setCht] = useState([
    {
      msg: "Hello Chat.", 
      sender: "user",
      id: 1
    },
    {
      msg: "Hello User. How can I help you?", 
      sender: "robot",
      id: 2
    }
  ]);

  function sendMessage(text) {
    // FIX: Generate the chatbot response immediately upon clicking the button
    const robotResponse = Chatbot.getResponse(text);

    setCht([
      ...cht,
      {
        msg: text,                       // User's message
        sender: 'user',
        id: crypto.randomUUID()
      },
      {
        msg: robotResponse,              // Robot's response
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
  }

  return (
    <div className="app-container">
      <ChatMessages messages={cht} />
      <ChatInput onSendMessage={sendMessage} /> 
    </div>
  );
}
      

export default App
