import React, {useContext, useEffect, useReducer} from "react"
import {globalReducer} from "./globalReducer"
import {GlobalContext} from "./globalContext"
import {user} from "./cookie"
import {
 CAI, CAP,
    SET_LOADING, SET_POPUP,
    SET_USER
} from "../type"
import {Login} from "../../content/login"
import {DbContext} from "../db/dbContext"


let initState = {
    user: {
        id: -1,
        userName: "",
        status: false
    },
    loading: false,
    popup:{
        status:true,
        data:{}
    }
}
export const Global = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initState)
    const {getData} = useContext(DbContext)

    useEffect(() => {
        checkUser()
// eslint-disable-next-line
    }, [])

    const checkUser = () => {
        console.log("check logged users")
        let u = user.get()
        console.log(u)
        if (u.status) {
            getData(CAI, res => {
                if (res) {
                    dispatch({
                        type: SET_USER,
                        user: res
                    })

                } else {
                    user.out()
                }
            }, () => {
            }, {id: u.id})

        }

    }

    const loading = {
        start: () => dispatch({type: SET_LOADING, loading: true}),
        end: () => dispatch({type: SET_LOADING, loading: false})
    }

    const popup = {
        open:  data=>dispatch({type:SET_POPUP,popup:{...data,status:true }}),
        close: ()=>dispatch({type:SET_POPUP,popup:{status:true,data:{}}})
    }

    const log = {
        in: ({userName, password}, callBack) => {
            if (userName.length > 5 && userName === userName.replace(/\s/g, "") && password.length > 7 && password === password.replace(/\s/g, "")) {
                getData(CAP, res => {
                    if (res) {
                        dispatch({
                            type: SET_USER,
                            user: res
                        })
                        user.set(res.id)
                    } else {
                        callBack(true)
                    }
                }, () => {
                    callBack(true)
                }, {userName, password})
            } else {
                console.log(userName.length > 5, userName === userName.replace(/\s/g, ""), password.length > 7, password === password.replace(/\s/g, ""))
                callBack(true)
            }

        },
        out: () => {
            user.out()
            dispatch({type: SET_USER, user: {id: -1, status: false, userName: ""}})
        }
    }

    console.log(state)

    return (
        <GlobalContext.Provider
            value={{
                global: state,
                loading,
                popup,
                log,
            }}>
            {state.user.status ? children : <Login/>}
        </GlobalContext.Provider>
    )
}
