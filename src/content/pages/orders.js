import React, {useContext, useEffect, useState} from 'react'
import { NewOrderElement } from '../components/newOrderElement'
import { OrderElement } from '../components/orderElement'
import { Save } from '../components/save'
import {ContentContext} from "../contentContext";


import orderImg from "../../assets/ikon3.jpg"
import {GlobalContext} from "../../context/global/globalContext";

let oldData = []
let newItem = {}
export const Orders = ( ) => {
  let {  content,get,re,open } = useContext(ContentContext)
  let [state, setState] = useState([])
  let [status, setStatus] = useState([])
  let {loading} = useContext(GlobalContext)

  useEffect(() => {
    loading.start()
    get("data",res=>{
      console.log(res)
      setState(res)
      setStatus(res.map(_ => 1))
      oldData = JSON.parse(JSON.stringify(res))
      setTimeout(()=>loading.end(),1000)
    })


  }, [])

  const callBacks = {
    edit: () => {},
    re: {
      move: () => {},
      store: () => {},
    },
    move: () => {}
  }

  return (
    <div className="row mb-7">
      {/* <Save isHaveChanges = {isHaveChanges} callBack = {() => {}}/> */}
      <NewOrderElement callBack = {() => {}} />
      {
        state.map((item, i) => <OrderElement key = {item.id} order = {item} status = {status[i]} callBacks = {callBacks}/>)
      }
    </div>
  )
}