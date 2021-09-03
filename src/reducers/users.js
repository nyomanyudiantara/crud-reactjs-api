import {GET_USERS_LIST, GET_USER_DETAILS, ADD_USER_DETAILS, EDIT_USER_DETAILS} from '../actions/userAction'

let initialState = {
    getUsersList: false,
    errorUsersList: false,
    getUsersDetail: false,
    errorUsersDetail: false,
    addUserDetails: false,
    errorAddUserDetails: false,
    editUserDetails: false,
    errorEditUserDetails: false,
    title: "PT. Tiga Token Digital"
}

const users = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_LIST:

        return {
            ...state,
            getUsersList: action.payload.data,
            errorUsersList: action.payload.errorMessage
        }

        case GET_USER_DETAILS:

        return {
            ...state,
            getUsersDetail: action.payload.data,
            errorUsersDetail: action.payload.errorMessage
        }

        case ADD_USER_DETAILS:

        return {
            ...state,
            addUserDetails: action.payload.data,
            errorAddUserDetails: action.payload.errorMessage
        }

        case EDIT_USER_DETAILS:

        return {
            ...state,
            editUserDetails: action.payload.data,
            errorEditUserDetails: action.payload.errorMessage
        }

        default:
            return state;
    }
}

export default users
