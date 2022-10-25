import React from 'react';
import UserTableRow from './UserTableRow';

function ResultTable({ users, remove }) {
  return (
    <div id="result_table" className="resultTable">
      <div className="headTable">
        <div className="headTableLabel">Имя</div>
        <div className="headTableLabel">Возраст</div>
        <div className="headTableLabel">Город</div>
        <div className="headTableLabel">Контроль</div>
      </div>
      {
                users.map((user, item) => (
                  <UserTableRow
                    key={item.id}
                    user={user}
                    onClickRemove={() => remove(item.id)}
                  />
                ))
            }
    </div>
  );
}
export default ResultTable;
