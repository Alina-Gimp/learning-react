import React, {useState} from "react";
import MessageInputRow from "./MessageInputRow";
import {Button} from "@mui/material";

const MessageInput = ({sentMessage, clearChat}) => {
    const [message, setMessage] = useState("");
    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const [author, setAuthor] = useState("");
    const onAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const onClickSent = () => {
        if (!message || !author) return;

        sentMessage(message, author);
        reset();
    }

    const onClickClear = () => {
        clearChat();
    }

    const reset = () => {
        setMessage("");
    }

    return (
        <>
        <div className="textMessage"></div>
        <MessageInputRow
            placeholder={"Write a message"}
            parameter={message}
            onChange={onMessageChange}
            onSend={onClickSent}
        />
        <MessageInputRow
            placeholder={"Your message"}
            parameter={author}
            onChange={onAuthorChange}
            onSend={onClickSent}
        />

        <div className="buttonDiv">
            <div className="buttonSent">
            <Button variant="contained" onClick={onClickSent}>Sent</Button>
            </div>
            <div className="buttonClear">
            <Button variant="outlined" onClick={onClickClear}>Clear</Button>
            </div>
        </div>

</>
)
}

export default MessageInput;