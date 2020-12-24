import React, {useContext, useEffect, useState} from 'react'
import {NewOrderElement} from '../components/newOrderElement'
import {OrderElement} from '../components/orderElement'
import {ContentContext} from "../contentContext";
import {GlobalContext} from "../../context/global/globalContext";

let newItem = {
    id: "",

}

const type = "data"
export const Orders = () => {
    let {get, editItem,removeItem} = useContext(ContentContext)
    let [state, setState] = useState([])
    let {loading} = useContext(GlobalContext)

    useEffect(() => {
        loading.start()
        get(type, res => {
            console.log(res)
            setState(res)
            newItem.id=res[res.length-1].id + 1

            setTimeout(() => loading.end(), 1000)
        })

// eslint-disable-next-line
    }, [])

    const editCallBack = (data,ctrlId)=>{

        let newState = [...state]
        if(ctrlId > state[state.length-1].id){
            newItem = {id:data.id+1}
            newState.push(data)
        }
        else {
            newState[ctrlId] = data
        }
        setState(newState)
    }
    const removeCallBack =  id=>{

        let newState = []
        for (let i = 0; i < state.length; i++) {
            if(id !== state[i].id )newState.push(state[i])
        }
        setState(newState)
        console.log(newState.length)
    }

    const callBacks = {
        edit: i => editItem(type,i,state[i],editCallBack),
        remove:  i => removeItem(type,state[i].id,removeCallBack),
    }

    return (
        <div className="row mb-7  justify-content-center">
            <NewOrderElement callBack={()=>editItem(type,newItem,editItem)}/>
            {
                state.map((item, i) => <OrderElement key={item.id} order={item} ctrlId={i} callBacks={callBacks}/>).reverse()
            }
        </div>
    )
}