import React, {useContext, useEffect, useState} from 'react'
import { NewOrderElement } from '../components/newOrderElement'
import { OrderElement } from '../components/orderElement'
import { Save } from '../components/save'
import {ContentContext} from "../contentContext";


const getData = () => [
  {
    id: 0,
    name: 'brushatka',
    price: '250',
    img: orderImg
  },
  {
    id: 1,
    name: 'brushatka dishovi',
    price: '150',
    img: orderImg
  },
  {
    id: 2,
    name: 'brushatka ne dishovi',
    price: '450',
    img: orderImg
  },
  {
    id: 3,
    name: 'brushatka ne dishovi',
    price: '450',
    img: orderImg
  }
]

let oldData = []
export const Orders = ( ) => {
  let {  content } = useContext(ContentContext)
  let [state, setState] = useState([])
  let [status, setStatus] = useState([])
  let {loading} = useContext(GlobalContext)

  useEffect(() => {
    loading.start()
    // getting data for state
    let res = getData()
    setState(res)
    setStatus(res.map(_ => 1))
    oldData = JSON.parse(JSON.stringify(res))
    setTimeout(() => {loading.end()}, 2000);
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