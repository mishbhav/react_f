// 1. INPUT COMPONENT
import { useState } from 'react'
import './ChatInput.css'
export function ChatInput({ onSendMessage }) {
const [inputText, setInputText] = useState('');

function saveInputText(event) {
    setInputText(event.target.value);  
}

function handleSend() {
    if (inputText.trim() === '') return; // Prevent sending empty messages
    onSendMessage(inputText);            // Pass the typed text to App state
    setInputText('');                    // Clear the input field text
}

return (
    <div className="chat-input-container">
    <input  
        placeholder="Send input to chatbot" 
        size="30"
        value={inputText}                // Controlled input element
        onChange={saveInputText} 
        className="chat-input" 
    />
    <button onClick={handleSend} className="send-button">Send Message</button>
    </div>
);
}