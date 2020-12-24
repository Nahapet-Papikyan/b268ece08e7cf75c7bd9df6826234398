import React from 'react'
import { CTRL } from './CTRL'
  const base_url = "http://bruschatka2000.ru/" 
export const Element = ({ type, item, ctrlId, callBacks}) => {


  return (
    <div className="card card-custom card-order-element m-5" >
      <div className="card-header my-card-header">
        {type === 'data' ? (item.name || '') : (item.title || '')}
      </div>
      <div className="card-body overflow-hidden p-0 position-relative">
        <CTRL  callBacks = {callBacks} ctrlId={ctrlId} />
        <div style={{backgroundImage: `url(${base_url}${type === 'data' ? '' : 'images/'}${item.img})`}} className="bg-img mb-2 min-h-250px w-100 zindex-0" />
      </div>
    </div>)
}