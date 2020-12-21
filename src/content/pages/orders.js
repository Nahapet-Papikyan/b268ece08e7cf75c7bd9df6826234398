import React, { useEffect, useState } from 'react'
import { NewOrderElement } from '../components/newOrderElement'
import { OrderElement } from '../components/orderElement'
import { Save } from '../components/save'

const getData = () => [
  {
    id: 0,
    name: 'brushatka',
    price: '250',
  },
  {
    id: 1,
    name: 'brushatka dishovi',
    price: '150',
  },
  {
    id: 2,
    name: 'brushatka ne dishovi',
    price: '450',
  }
]

let oldData = []
export const Orders = ({isHaveChanges}) => {
  let [state, setState] = useState([])
  let [status, setStatus] = useState([])

  useEffect(() => {
    // getting data for state
    let res = getData()
    setState(res)
    setStatus(res.map(_ => 1))
    oldData = JSON.parse(JSON.stringify(res))
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
    <>
      <Save isHaveChanges = {isHaveChanges} callBack = {() => {}}/>
      <NewOrderElement callBack = {() => {}} />
      {
        state.map((item, i) => <OrderElement key = {item.id} order = {item} status = {status[i]} callBacks = {callBacks}/>)
      }
    </>
  )
}