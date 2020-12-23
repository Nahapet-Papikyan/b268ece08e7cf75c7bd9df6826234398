import {
    SET_LOADING, SET_POPUP,
    SET_USER
} from "../type"

const handlers = {


    [SET_USER]: (state, {user}) => ({...state, user}),
    [SET_LOADING]: (state, {loading}) => ({...state, loading}),
    [SET_POPUP]: (state, {popup}) => ({...state, popup}),
    DEFAULT: state => state
}

export const globalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}