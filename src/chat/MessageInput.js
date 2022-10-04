import React, {useState} from "react";
import MessageInputRow from "./MessageInputRow";

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
                placeholder={"Введите сообщение"}
                parameter={message}
                onChange={onMessageChange}
                onSend={onClickSent}
            />
            <MessageInputRow
                placeholder={"Your name"}
                parameter={author}
                onChange={onAuthorChange}
                onSend={onClickSent}
            />

            <div className="buttonDiv">
                <button className="buttonSent"
                        onClick={onClickSent}>Отправить
                </button>
                <button className="buttonClear"
                        onClick={onClickClear}>Очистить</button>
            </div>

        </>
    )
}

export default MessageInput;