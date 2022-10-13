import React, {useState, useEffect} from 'react';
import './СhatPage.css';
import MessageInput from "./MessageInput";
import MessageResult from "./MessageResult";

function ChatPage() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const rawMessages = localStorage.getItem("messages");
        if (!rawMessages) return;

        const messages = JSON.parse(rawMessages);
        messages.forEach(message => {
            message.date = new Date(message.date);
        })

        if (!!messages && messages.length > 0) {
            setMessages(messages);
        }

    }, [messages.length])

    const sentMessage = (text, author) => {
        const messagesForSending = [...messages];

        const message = {
            text,
            date: new Date(),
            author,
        }
        messagesForSending.push(message);

        setMessages(messagesForSending);
        localStorage.setItem("messages", JSON.stringify(messagesForSending));
    }


    const clearChat = () => {
        setMessages([]);
        localStorage.setItem("messages", "");
    }


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
    )

}

export default ChatPage;