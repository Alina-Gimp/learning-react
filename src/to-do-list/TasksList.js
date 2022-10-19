import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const tasksList = ({ tasks }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="taskList">
      {
                    tasks.map((task) => (
                      <p className="task">
                        <Checkbox
                          {...label}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                        {task}
                      </p>
                    ))
                }
    </div>
  );
};
export default tasksList;
