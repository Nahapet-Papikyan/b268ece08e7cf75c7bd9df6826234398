import React, {useContext, useEffect, useReducer, useState} from "react"
import {globalReducer} from "./globalReducer"
import {GlobalContext} from "./globalContext"
import {user} from "../../cookie"
import {
    ACTIVE_FILTER,
    ANTOUBYI, COMPLETE, DESCRIPTION,
    GPDBUIAAPI,
    GUDBIOLP,
    NEW_TASK,
    PAGE_SIZE,
    SET_ACTIVE_PAGE,
    SET_LOADING,
    SET_TASKS,
    SET_USER
} from "../type"
import {Login} from "../../content/login"
import {DbContext} from "../db/dbContext"


let initState = {
    user: {
        id: -1,
        status: false
    },
    sizes: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    loading: false,
    newTask: {type:1,parent:3},
    tasks: [],
    description:
        {
            data: "",
            id: -1,
            status: false
        },
    filters: ["default", "All", "for today", "for last 3 days", "only ready", "removed"],
    activeFilter: 0,
}
export const Global = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initState)
    const {getData, setData} = useContext(DbContext)

    useEffect(() => {
        checkUser()

        handleResize()
        handlerStart()
        return () => handlerEnd()

    }, [])
    const handlerStart = () => {
        window.addEventListener("resize", handleResize);
    }
    const handlerEnd = () => {
        window.removeEventListener("resize", handleResize);
    }
    const handleResize = () => dispatch({
        type: PAGE_SIZE,
        "sizes": {
            w: window.innerWidth,
            h: window.innerHeight
        }
    })

    const storage = {
        get: id => JSON.parse(localStorage.getItem(`toDoList-${id}`)),
        set: (id, data) => localStorage.setItem(`toDoList-${id}`, JSON.stringify(data))
    }

    const checkUser = () => {

        let setData = data => dispatch({
            type: SET_USER,
            user: data
        })

        let u = user.get()
        console.log(u)
        if (u.status) {
            loading.start()
            let data = storage.get(u.id)

            // if(data !== null && data.id === u.id){
            //     setData(data)
            //
            //     loading.end()
            // }
            // else {
            console.log(false);
            getData(GUDBIOLP, res => {
                console.log(res)
                if (res.status) {
                    setData(res)
                    storage.set(res.id, res)
                    user.set(res.id)

                }
                loading.end()

            }, res => console.log(res), {login: {id: u.id}})
            // }

        }
    }

    // const createTaskList = data =>{
    //     // let setTasks = tasks => setTasks(tasks)
    //     let addChildren = id =>   data[id].children.map(item => ({...data[item], parent:id, children: addChildren(item)}))
    //     console.log(data)
    //     let k = []
    //     for (let i = 0; i < data.length; i++) {
    //         if(data[i].type === "React Project" || (data[i].type === "Other" && data[i].lvl === 0))k.push(data[i])
    //     }
    //     setTasks( k.map(item=>({...item,children:addChildren(item.id)})) .map(item=>getStatus(item)) )
    //     return 0
    // }
    //
    // const getStatus = item => {
    //
    //     return ({
    //         ...item,
    //         status: (item.children.length
    //             ? ((item.children.map(it => getStatus(it))).map(item=>item.status).reduce((a, b) => a + b, 0)  / item.children.length)
    //             : (item.ready ? 100 : 0)),
    //         ready:(item.children.length
    //             ? ((item.children.map(it => getStatus(it))).map(item=>item.status).reduce((a, b) => a + b, 0)  / item.children.length)
    //             : (item.ready ? 100 : 0)) === 100,
    //         children: item.children.map(item=>getStatus(item))
    //     })
    // }


    const loading = {
        start: () => dispatch({type: SET_LOADING, loading: true}),
        end: () => dispatch({type: SET_LOADING, loading: false})
    }

    const login = (login, pass) => getData(GUDBIOLP, res => {
        if (res.status) {
            dispatch({
                type: SET_USER,
                user: res
            })
            // createTaskList(res.tasksList)
            user.set(res.id)
        }
    }, res => console.log(res), {login, pass})
    const logout = () => {
        user.out()
        dispatch({type: SET_USER, user: {id: -1, pages: []}})
    }

    const changeActivePage = activePageId => getData(GPDBUIAAPI, activePage => {
        if (activePage) {
            dispatch({type: SET_ACTIVE_PAGE, activePage})
        }
    }, res => console.log(res), {uid: state.user.id, pId: activePageId})

    const checkUrl = () => {
        let d = document.location.pathname.split("/")
        let id = -1
        state.user.pages.map(item => (item.name === d[1]) ? id = item.id : -1)
        changeActivePage(id)
    }
    const goTo = {
        page: name => {
            console.log(`go to ${name}`)
        },
        home: () => {
            console.log(`go to home`)
        }
    }


    const newTask = {
        open: newTask => dispatch({type: NEW_TASK, newTask}),
        close: () => dispatch({type: NEW_TASK, newTask:{type:-1,parent:-1}}),
        add: data => {
            console.log(data)
            let newData = [...state.user.tasksList]
            for (let i = 0; i < data.name.length; i++) {
                newData.push({
                    id:newData.length,
                    name:data.name[i],
                    type:data.type,
                    title:data.title?data.title[i] : "",
                    deadline:data.deadline[i],
                    def:data.def?data.def[i]: "",
                    url:data.url?data.url[i]:"",
                    description:data.description[i],
                    lvl:state.newTask.type,
                    component:data.component?data.component[i]:"",
                    children:[],
                })
                if(state.newTask.type){
                    newData[state.newTask.parent].children.push(newData.length-1)
                }

            }


            console.log(newData)
            setData(state.user.id, ANTOUBYI, () => {
                dispatch({type: SET_TASKS, tasksList: newData})
                storage.set(state.user.id, [...state.user.tasksList, data])
                dispatch({type: NEW_TASK, newTask: {type:-1,parent:-1}})
            }, () => {
            }, {data:newData, uid: state.user.id})
        }
    }


    // console.log(state);
    const openDescription = id => dispatch({type: DESCRIPTION, id})
    const complete = id => {
        let u = {
            ...state.user,
            tasksList: state.user.tasksList.map(task => ((task.id === id) ? {...task, ready: true} : task))
        }
        dispatch({type: SET_USER, user: u})
        // createTaskList(u.tasksList)

    }
    const download = data => {

    }
    const remove = id => {
        let u = {
            ...state.user
        }
        console.log(id, !!u.tasksList[id].removed)
        if (!!u.tasksList[id].removed) {
            u = {
                ...u,
                tasksList: u.tasksList.map(item => ({
                    ...item,
                    children: (item.children.indexOf(id) !== -1 ? item.children.splice(item.children.indexOf(id), 1) : item.children)
                }))
            }
            u = {
                ...u, tasksList: u.tasksList.map(item => item.id === id ? {} : item)
            }
        } else {
            u = {
                ...u,
                tasksList: u.tasksList.map(item => item.id === id ? {...item, removed: true} : item)
            }
        }
        // let u = {
        //     ...state.user,
        //     tasksList: state.user.tasksList.map(task => ((task.id === id) ? (task.removed ? {} : {
        //         ...task,
        //         removed: true
        //     }) : task))
        // }
        console.log(u)
        dispatch({type: SET_USER, user: u})
    }
    const restore = id => {
        let u = {
            ...state.user,
            tasksList: state.user.tasksList.map(task => ((task.id === id) ? {...task, removed: false} : task))
        }
        dispatch({type: SET_USER, user: u})
    }
    const checkTime = (start, end) => {
        let t0 = new Date(`${start.M}.${start.D}.20${start.Y} ${start.h}:${start.m}`)
        let t1 = new Date(`${end.M}.${end.D}.${end.Y} ${end.h}:${end.m}`)

        if (t0.toString() === "Invalid Date") return false
        return t0 < t1
    }
    const toggleFilter = activeFilter => dispatch({type: ACTIVE_FILTER, activeFilter})
    const getTime = (day = 0) => {
        let t = new Date()
        t.setDate(t.getDate() + day)
        return {
            M: t.getMonth() + 1,
            D: t.getDate(),
            Y: t.getFullYear().toString().slice(2, 4),
            h: t.getHours(),
            m: t.getMinutes()
        }
    }
    return (
        <GlobalContext.Provider
            value={{
                global: state,
                // tasks,
                login,
                checkTime,
                changeActivePage,
                checkUrl,
                remove,
                getTime,
                restore,
                logout,
                toggleFilter,
                goTo,
                openDescription,
                complete,
                newTask
            }}>
            {state.user.status ? children : <Login/>}
        </GlobalContext.Provider>
    )
}
