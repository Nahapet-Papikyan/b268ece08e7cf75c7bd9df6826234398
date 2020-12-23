import React, {useContext, useEffect, useState} from 'react'
import {NewOrderElement} from '../components/newOrderElement'
import {OrderElement} from '../components/orderElement'
import {ContentContext} from "../contentContext";
import {GlobalContext} from "../../context/global/globalContext";

let oldData = []

let newItem = {
    id: "",

}

const type = "data"
export const Orders = () => {
    let {get,  openPopup,removeItem} = useContext(ContentContext)
    let [state, setState] = useState([])
    let {loading} = useContext(GlobalContext)

    useEffect(() => {
        loading.start()
        get(type, res => {
            console.log(res)
            setState(res)


            setTimeout(() => loading.end(), 1000)
        })

// eslint-disable-next-line
    }, [])

    const callBacks = {
        edit: i => openPopup(type,state[i]),
        remove:  i => removeItem(state[i].id),
    }

    return (
        <div className="row mb-7">
            <NewOrderElement callBack={()=>openPopup(type,newItem)}/>
            {
                state.map((item, i) => <OrderElement key={item.id} order={item} ctrlId={i} callBacks={callBacks}/>)
            }
        </div>
    )
}