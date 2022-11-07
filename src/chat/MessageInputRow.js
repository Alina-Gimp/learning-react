import React from 'react';
import { TextField } from '@mui/material';

function MessageInputRow({
  placeholder, parameter, onChange, onSend,
}) {
  const onKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;

    onSend();
  };

  return (
    <div className="inputText">
      <TextField
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        value={parameter}
        onChange={onChange}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
}

export default MessageInputRow;
