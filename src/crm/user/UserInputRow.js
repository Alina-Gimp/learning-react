import React from 'react';

function UserInputRow({
  title, placeholder, parameter, onChange,
}) {
  return (
    <div className="inputRow">
      <label>
        {title}
      </label>
      <input
        type="text"
        id="input_name"
        value={parameter}
        onChange={onChange}
        style={{ borderRadius: '5px' }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default UserInputRow;
