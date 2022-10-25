import React from 'react';

function MessageResultRow({message}) {
    const {
        author: author = 'Not defined',
        text: text = '',
        date: date = new Date(),
        isMe: isMe = false,
    } = message;

    const displayMessage = `${author} said ${text} - sent at ${date.toLocaleTimeString().slice(0, -3)}`;

    return (
        <div style={{textAlign: isMe ? 'right' : 'left'}} className="textMessage">{displayMessage}</div>
    );
}

export default MessageResultRow;
