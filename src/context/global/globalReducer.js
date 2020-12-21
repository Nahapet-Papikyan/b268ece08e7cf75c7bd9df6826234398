import {
    ACTIVE_FILTER,
    COMPLETE,
    DESCRIPTION,
    NEW_TASK,
    PAGE_SIZE,
    SET_ACTIVE_PAGE,

    SET_LOADING, SET_TASKS,
    SET_USER
} from "../type"

const handlers={


    [SET_USER]:(state,{user })=>({...state, user }),
    [SET_LOADING]:(state,{loading })=>({...state, loading}),
    [SET_ACTIVE_PAGE ]:(state,{activePage })=>({...state, activePage}),
    [PAGE_SIZE ]:(state,{sizes })=>({...state, sizes}),
    [NEW_TASK ]:(state,{newTask })=>({...state, newTask}),
    [SET_TASKS ]:(state,{tasksList })=>({...state,user:{...state.user,tasksList}}),
    [COMPLETE]:(state,{id})=>({...state, id}),
    [ACTIVE_FILTER]:(state,{activeFilter})=>({...state, activeFilter}),
    [DESCRIPTION ]:(state,{id})=>({...state, description:{id,status:(id!==-1  && state.user.tasksList[id]),data:(id!==-1 && state.user.tasksList[id])?state.user.tasksList[id].description:""}}),
    DEFAULT:state=>state
}

export const globalReducer = (state,action)=>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}