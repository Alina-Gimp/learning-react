import React, { useState } from 'react';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MessageInputRow from './MessageInputRow';


function MessageInput({ sentMessage, clearChat }) {
  const [message, setMessage] = useState('');
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const [author, setAuthor] = useState('');
  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const [checked, setChecked] = useState(false);
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  const onClickSent = () => {
    if (!message || !author) return;

    sentMessage(message, author, checked);
    reset();
  };

  const onClickClear = () => {
    clearChat();
  };

  const reset = () => {
    setMessage('');
  };

  return (
    <>
      <div className="textMessage" />
      <MessageInputRow
        placeholder="Write a message"
        parameter={message}
        onChange={onMessageChange}
        onSend={onClickSent}
      />
      <MessageInputRow
        placeholder="Your message"
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
        <div>
          <FormGroup>
            <FormControlLabel control={<Switch checked={checked} onChange={switchHandler} />} label="write on the right" />
          </FormGroup>
        </div>
      </div>

    </>
  );
}

export default MessageInput;
