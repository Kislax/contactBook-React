import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";


export const GridUsers = () => {

    const { contacts } = useSelector((state) => state.contacts)

    return (
        <div>
            {!!contacts.length ? <h2>{contacts[0].name}</h2>: <h2>Данных нет</h2>
                // contacts.map(contact => {
                //     return (
                //         <CardUser
                //             key={contact.id.value}
                //             data={contact}
                //
                //         />
                //     )
                // })
            }
        </div>
    )


    // useEffect(() => {
    //     fetchRandomUser()
    // });
    //
    // const fetchRandomUser = () => (dispatch, getState) => {
    //     dispatch(reqRandomUser());
    //     return fetch("https://randomuser.me/api/?results=20")
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             dispatch(resRandomUser(responseJson))
    //         })
    //         .catch(error => {
    //             dispatch(errRandomUser(error))
    //         });
    // };

};

