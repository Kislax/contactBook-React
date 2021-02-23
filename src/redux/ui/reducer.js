import { actionTypes } from "./actions";

const initialState = {
    contacts: [{
        name:"vasua",
        id: 123
    },
    {
        name: "john",
        id: 553
    }
    ],
    loader: false,
    toast:{
        active: false,
        message: ""
    }
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_CONTACT:{
            return {
                ...state,
                contacts: [... state.contacts, action.payload],
                toast:{
                    active: true,
                    message: "Контакт добавлен!"
                }
            }
        }
        case actionTypes.REMOVE_CONTACT:{
            return {
                ...state,
                contacts: state.contacts.join(action.payload),  // TODO нужно изменить логику удаления.
                toast:{
                    active: true,
                    message: "Контакт удален!"
                }
            }
        }
        case actionTypes.REQUEST_RANDOMUSER:{
            return {
                ...state,
                loader: !state.loader
            }
        }
        case actionTypes.RESPONSE_RANDOMUSER:{
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                loader: false
            }
        }
        case actionTypes.ERROR_RANDOMUSER:{
            return {
                ...state,
                toast:{
                  active:true,
                  message: action.payload
                },
                loader: false
            }
        }
        default: {
            return state;
        }
    }

}