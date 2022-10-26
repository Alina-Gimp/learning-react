import React from 'react';

function MessageResultRow({ message }) {
  const {
    author = 'Not defined',
    text = '',
    date = new Date(),
    isMe = false,
  } = message;

  const displayMessage = `${author} said ${text} - sent at ${date.toLocaleTimeString().slice(0, -3)}`;

  return (
    <div style={{ textAlign: isMe ? 'right' : 'left' }} className="textMessage">{displayMessage}</div>
  );
}

export default MessageResultRow;
