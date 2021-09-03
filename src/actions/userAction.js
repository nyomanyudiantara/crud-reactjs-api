import axios from 'axios'

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const ADD_USER_DETAILS = "ADD_USER_DETAILS";
export const EDIT_USER_DETAILS = "EDIT_USER_DETAILS";
export const DELETE_USER_DETAILS = "DELETE_USER_DETAILS";


export const getUsersList = () => {
    return dispatch => {
        axios.get('https://613080a48066ca0017fda8f9.mockapi.io/amutan')
        .then(function(response) {
            console.log(response)
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    };
}

export const getUsersDetail = (id) => {
    return dispatch => {
        axios.get('https://613080a48066ca0017fda8f9.mockapi.io/amutan/'+id)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: GET_USER_DETAILS,
                payload: {
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: GET_USER_DETAILS,
                payload: {
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    };
}

export const deleteUsersDetail = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_DETAILS,
            payload: {
                data: false,
                errorMessage: false
            }
        })

        dispatch({
            type: ADD_USER_DETAILS,
            payload: {
                data: false,
                errorMessage: false
            }
        })
    };
}

export const addUserDetails = (data) => {
    return dispatch => {
        axios.post('https://613080a48066ca0017fda8f9.mockapi.io/amutan', data)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: ADD_USER_DETAILS,
                payload: {
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: ADD_USER_DETAILS,
                payload: {
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    };
}

export const editUserDetails = (data, id) => {
    return dispatch => {
        axios.put('https://613080a48066ca0017fda8f9.mockapi.io/amutan/'+id, data)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: EDIT_USER_DETAILS,
                payload: {
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: EDIT_USER_DETAILS,
                payload: {
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    };
}

export const deleteUserDetails = (id) => {
    return dispatch => {
        axios.delete('https://613080a48066ca0017fda8f9.mockapi.io/amutan/'+id)
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error);
        })
    };
}
