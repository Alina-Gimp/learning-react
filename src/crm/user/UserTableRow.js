import React from "react";

const UserTableRow = ({user, onClickRemove}) => {

    return (
        <div className="userClass"
             style={{display: "flex", justifyContent: "space-around", padding: "3px"}}>
            <div style={{flex: 1}}>{user.name}</div>
            <div style={{flex: 1}}>{user.age}</div>
            <div style={{flex: 1}}>{user.city}</div>
            <div style={{flex: 1, padding: "3px"}}>
                <button onClick={onClickRemove}>Удалить</button>
            </div>
        </div>
    )
}

export default UserTableRow