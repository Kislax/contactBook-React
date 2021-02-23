export const actionTypes ={
    SWITCH_THEME : "SWITCH_THEME",
    ADD_CONTACT : "ADD_CONTACT",
    REMOVE_CONTACT : "REMOVE_CONTACT",
    REQUEST_RANDOMUSER : "REQUEST_RANDOMUSER",
    RESPONSE_RANDOMUSER : "RESPONSE_RANDOMUSER",
    ERROR_RANDOMUSER : "ERROR_RANDOMUSER"
}

export const addContact = (contact) => {
    return {
        type: actionTypes.ADD_CONTACT,
        payload: contact
    }
}

export const rmContact = (contact) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        payload: contact
    }
}

export const switchTheme = () => {
    return {
        type: actionTypes.SWITCH_THEME,
    }
}

export const reqRandomUser = () => {
    return {
        type: actionTypes.REQUEST_RANDOMUSER,
    }
}

export const resRandomUser = (json) => {
    return {
        type: actionTypes.RESPONSE_RANDOMUSER,
        payload:json.results,
    }
}

export const errRandomUser = (json) => {
    return {
        type: actionTypes.ERROR_RANDOMUSER,
        payload:json.message,
    }
}

// ... other actions