import { actionTypes } from "../actions/actions";

const initialState = {
    blackTheme: false,
    contacts: [
        {name:"vanua",
        id:{
            value:"12312312"
        }}
        ],
    loader: false,
    toast:{
        active: false,
        message: ""
    }
}

export default function rootReducer(state = initialState, action){
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
        case actionTypes.SWITCH_THEME:{
            return {
                ...state,
                blackTheme: !state.blackTheme
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
        default:return state
    }

}