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

export const CTRL = ({ ctrlId, callBacks}) =>  <div className="h-100 position-absolute w-100 zindex-1 ctrl" >

            <button onClick={()=>callBacks.edit(ctrlId)} className="bg-dark-o-40 bg-hover-gray-800 border-0 "  >
              <i className="far fa-edit" style={editBtnStyle} />
            </button>
            <button onClick={()=>callBacks.remove(ctrlId)} className="bg-dark-o-40 bg-hover-gray-800 border-0" >
              <i className="far fa-trash-alt" style={deleteBtnStyle} />
            </button>

    </div>
