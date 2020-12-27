import React from "react"
import {DbContext} from "./dbContext"
import {APIUrl} from "./url"

import {getKey} from "./key";
import {CAI, CAP, CNI, GABT, RIBI, UIBIAD, GAP, CPFB64} from "../type";


export const DB = ({children}) => {
    const Actions = {
        [CAP]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: CAP
            }),
        }),
        [CAI]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: CAI
            }),
        }),
        [GABT]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: GABT
            }),
        }),
        [RIBI]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: RIBI
            }),
        }),
        [CNI]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: CNI
            }),
        }),
        [UIBIAD]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: UIBIAD
            }),
        }),
        [GAP]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: GAP
            }),
        }),
        [CPFB64]: (args) => ({
            url: APIUrl,
            method: "POST",
            body: JSON.stringify({
                args,
                action: CPFB64
            }),
        }),
    }
    const get = async ({url, method, body, callBack, ErrorCallBack, id = -1}) => {


        let init = {
            method,
            body,
            headers: new Headers({
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                'Content-Type': 'application/json',
                "X-CSRF-Token": getKey(id),

            })
        }
        await fetch(url, init)
            .then(async res => {

                if (!res.ok || res.status !== 200) {
                    console.log(res)
                    ErrorCallBack()
                } else {
                    return res.json()
                }
            })
            .then(res => callBack(res))
            .catch(async error => {
                console.log(error)
                ErrorCallBack()
            })
        //
    }
    const getData = (type, callBack, ErrorCallBack, args = {}) =>
        get({...Actions[type](args), callBack, ErrorCallBack})
    const setData = (type, callBack, ErrorCallBack, args = {}) =>
        get({...Actions[type](args), callBack, ErrorCallBack})

    return (
        <DbContext.Provider value={{getData, setData}}>
            {children}
        </DbContext.Provider>
    )
}