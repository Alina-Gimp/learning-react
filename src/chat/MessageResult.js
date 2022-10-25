import React from 'react';
import MessageResultRow from './MessageResultRow';

function MessageResult({ messages }) {
  return (
    <div className="windowMessage">
      {
                messages.map((message, item) => (
                  <MessageResultRow
                    key={item.id}
                    message={message}
                  />

                ))
            }
    </div>
  );
}
export default MessageResult;
