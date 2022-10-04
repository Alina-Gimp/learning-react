import React from "react";
import UserTableRow from "./UserTableRow";

const ResultTable = ({users, remove}) => {
    return (
        <div id="result_table" className="resultTable">
            <div className="headTable">
                <div className="headTableLabel">Имя</div>
                <div className="headTableLabel">Возраст</div>
                <div className="headTableLabel">Город</div>
                <div className="headTableLabel">Контроль</div>
            </div>
            {
                users.map((user, index) => (
                    <UserTableRow
                        key={index}
                        user={user}
                        onClickRemove={() => remove(index)}
                    />
                ))
            }
        </div>
    )
}
export default ResultTable