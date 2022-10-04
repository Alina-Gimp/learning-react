import React from "react";

const MessageInputRow = ({placeholder, parameter, onChange, onSend}) => {

    const onKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;

        onSend();
    }

    return (
        <div className="input">
            <input type="text" className="inputMessage" value={parameter} onChange={onChange}
                   onKeyDown={onKeyDownHandler} placeholder={placeholder}/>
        </div>
    )
}

export default MessageInputRow;
