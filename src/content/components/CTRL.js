import React from 'react'

export const CTRL = ({status, callBacks}) => {
  return (
    <div className = {'controller'}>
      {
        status
        ? <> 
            <button ></button>
            <button ></button>
            <button ></button>
            <button ></button>
          </>
        : <>
            <button ></button>
          </>
      }
    </div>
  )
}