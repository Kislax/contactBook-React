import React from "react";

export const addPopup = () => {


    return(
        <div>
            <h3>Добавление нового контакта</h3>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <label htmlFor="Имя">
                    <input type="text"/>
                </label>
                <label htmlFor="Фамилия">
                    <input type="text"/>
                </label>
                <label htmlFor="Телефон">
                    <input type="text"/>
                </label>
                <label htmlFor="Почта">
                    <input type="text"/>
                </label>

            </div>
        </div>
    )
}