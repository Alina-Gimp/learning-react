import React from 'react';

function UserTableRow({ user: { name = '', age = '', city = '' }, onClickRemove }) {
  return (
    <div
      className="userClass"
      style={{ display: 'flex', justifyContent: 'space-around', padding: '3px' }}
    >
      <div style={{ flex: 1 }}>{name}</div>
      <div style={{ flex: 1 }}>{age}</div>
      <div style={{ flex: 1 }}>{city}</div>
      <div style={{ flex: 1, padding: '3px' }}>
        <button type="button" onClick={onClickRemove}>Удалить</button>
      </div>
    </div>
  );
}

export default UserTableRow;
