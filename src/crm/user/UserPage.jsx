import React, { useState } from 'react';
import './UserPage.css';
import ResultTable from './ResultTable';
import InputUser from './InputUser';

function UserPage() {
  const [users, setUsers] = useState([]);

  const saveUser = (user) => {
    const usersForSaving = [...users];
    usersForSaving.push(user);
    setUsers(usersForSaving);
  };

  const removeUser = (index) => {
    const usersForRemoving = [...users];
    usersForRemoving.splice(index, 1);
    setUsers(usersForRemoving);
  };

  return (
    <>
      <InputUser
        saveUser={saveUser}
      />
      <ResultTable
        users={users}
        remove={removeUser}
      />
    </>
  );
}

export default UserPage;
