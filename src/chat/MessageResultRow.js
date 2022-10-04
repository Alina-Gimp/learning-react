import React from "react";

const MessageResultRow = ({message}) => {
    const displayMessage = message.author + " said " + message.text + " - sent at " + message.date.toLocaleTimeString().slice(0, -3);

    return (
        <div className="textMessage">{displayMessage}</div>
    )
}

export default MessageResultRow