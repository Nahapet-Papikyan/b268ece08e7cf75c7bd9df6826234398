import React from 'react'

export const Save = ({isHaveChanges, callBack}) => {
  return (
    <button onClick={() => callBack() } className={isHaveChanges ? 'btn-primary' : 'd-none'}>Save</button>
  )
}