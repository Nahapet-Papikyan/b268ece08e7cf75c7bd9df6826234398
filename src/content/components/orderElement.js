import React from 'react'
import { CTRL } from './CTRL'

const base_url = "http://bruschatka2000.ru/"
export const OrderElement = ({status, order, callBacks}) => {
  return (
    <div className="col-lg-3 mb-3">
      <div class="card card-custom card-order-element">
        <div class="card-header ribbon ribbon-right">
          <h3 class="card-title">
            <h2>{order.name}</h2>
          </h3>
        </div>
        <div class="card-body overflow-hidden p-0 position-relative">
        <CTRL status = {status} callBacks = {callBacks}/>
          <div style={{backgroundImage: `url(${base_url}${order.img})`}} className="bg-img mb-2 min-h-250px w-100 zindex-0">
          </div>
          <p>{order.price}</p>
        </div>
      </div>
    </div>)
}