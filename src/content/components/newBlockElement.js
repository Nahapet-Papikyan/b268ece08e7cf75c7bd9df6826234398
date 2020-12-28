import React from 'react'

export const NewBlockElement = ({callBack}) => {
  return (
    <div className="card card-custom card-order-element m-5 my-card-header pt-0">
      <div className="card-body overflow-hidden p-0 position-relative w-100">
        <button className="btn p-0 w-100 h-100" style={{margin: '0px auto', display: 'block'}}>
          <div className="add-image w-100 h-100" onClick={callBack}>
            <i className="far fa-plus-circle far" />
          </div>
        </button>
      </div>
    </div>)
}