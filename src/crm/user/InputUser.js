import UserInputRow from "./UserInputRow";
import React, {useState} from "react";

const InputUser = ({saveUser}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onAgeChange = (event) => {
        setAge(event.target.value);
    }

    const onCityChange = (event) => {
        setCity(event.target.value);
    }

    const onClickSave = () => {
        if (!name || !age || !city) return;

        const person = {
            name,
            age,
            city,
        };

        saveUser(person);
        reset();
    }

    const reset = () => {
        setName("");
        setAge("");
        setCity("");
    }

    return (
        <>
            <h1>Данные пользователя</h1>
            <div id="user">
                <UserInputRow
                    title={"Имя"}
                    placeholder={"Мария"}
                    parameter={name}
                    onChange={onNameChange}
                />
                <UserInputRow
                    title={"Возраст"}
                    placeholder={"23"}
                    parameter={age}
                    onChange={onAgeChange}
                />
                <UserInputRow
                    title={"Город"}
                    placeholder={"Нижний Новгород"}
                    parameter={city}
                    onChange={onCityChange}
                />
            </div>

            <div>
                <button id="btn" className="buttonSave"
                        onClick={onClickSave}>Сохранить
                </button>
            </div>
        </>
    )
}

export default InputUser;