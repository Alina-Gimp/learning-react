import React, { useState, useEffect } from 'react';
import './СhatPage.css';
import MessageInput from './MessageInput';
import MessageResult from './MessageResult';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const rawMessages = localStorage.getItem('messages');
    if (!rawMessages) return;

    const storedMessages = JSON.parse(rawMessages);
    storedMessages.forEach((message) => {
      message.date = new Date(message.date);
    });

    if (!!storedMessages && storedMessages.length > 0) {
      setMessages(storedMessages);
    }
  }, [messages.length]);

  const sentMessage = (text, author, isMe) => {
    const messagesForSending = [...messages];

    const message = {
      text,
      date: new Date(),
      author,
      isMe,
    };
    messagesForSending.push(message);

    setMessages(messagesForSending);
    localStorage.setItem('messages', JSON.stringify(messagesForSending));
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.setItem('messages', '');
  };

  return (
    <>
      <h1 className="chatName">Online-chat</h1>
      <MessageResult
        messages={messages}
      />
      <MessageInput
        sentMessage={sentMessage}
        clearChat={clearChat}
      />
    </>
  );
}

export default ChatPage;
