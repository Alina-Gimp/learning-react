import React from 'react';

const userDatabase = [{
  name: 'Petya',
  age: 23,
  city: 'Perm',
}, {
  name: 'Latja',
  age: 44,
  city: 'Ljubljana',
}, {
  name: 'Jenja',
  age: 33,
  city: 'Bern',
}];

function InputUserFromObject({ saveUser }) {
  const onClickSave = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    saveUser(userDatabase[randomNumber]);
  };

  return (
    <div>
      <button
        id="btn"
        className="buttonSave"
        onClick={onClickSave}
      >
        Сохранить
      </button>
    </div>
  );
}

export default InputUserFromObject;
