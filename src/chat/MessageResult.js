import React from "react";
import MessageResultRow from "./MessageResultRow";

const MessageResult = ({messages}) => {
    return (
        <div className="windowMessage">
            {
                messages.map((message, index) =>
                    (
                        <MessageResultRow
                            key={index}
                            message={message}
                        />

                    )
                )
            }
        </div>
    )
}
export default MessageResult