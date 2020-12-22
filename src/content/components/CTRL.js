import React from 'react'

let editBtnStyle = {
  color: 'yellow',
  fontSize: '25px'
}
let deleteBtnStyle = {
  color: 'red',
  fontSize: '25px'
}

let restoreBtnStyle = {
  color: 'greenyellow',
  fontSize: '25px'
}

export const CTRL = ({status, callBacks}) => {

  return (
    <div className="h-100 position-absolute w-100 zindex-1 ctrl" >
      {
        status
        ? <> 
            <button className="bg-dark-o-40 bg-hover-gray-800 border-0 "  >
              <i className="far fa-edit" style={editBtnStyle} />
            </button>
            <button className="bg-dark-o-40 bg-hover-gray-800 border-0" >
              <i className="far fa-trash-alt" style={deleteBtnStyle} />
            </button>
          </>
        : <>
            <button className="bg-dark-o-40 bg-hover-gray-800 border-0">
              <i className="far fa-trash-undo-alt" style={restoreBtnStyle} />
            </button>
          </>
      }
    </div>
  )
}