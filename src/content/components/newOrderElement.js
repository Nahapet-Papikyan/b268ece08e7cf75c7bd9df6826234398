import React from 'react'

export const NewOrderElement = ({callBack}) => {
  return (
    <div class="card card-custom card-order-element m-5">
      <div class="card-header">
        Add Element
      </div>
      <div className="card-body overflow-hidden p-0 position-relative">
        <div className="bg-img mb-2 min-h-250px w-100 zindex-0">
        </div>
        <p></p>
      </div>
    </div>)
}