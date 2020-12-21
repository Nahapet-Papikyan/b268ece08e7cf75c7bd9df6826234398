import React from 'react'
import { CTRL } from './CTRL'

export const OrderElement = ({status, order, callBacks}) => {
  return (
    <div>{order.name}  {order.price}
      <CTRL status = {status} callBacks = {callBacks}/>
    </div>
  )
}