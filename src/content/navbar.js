import React from 'react'

export const Navbar = ( {pages, callBack} ) => {
  return (
    <>
    {
      pages.map(page => <button key = {page.id} onClick={() => callBack(page.id)}>{page.name}</button>)
    }
    </> 
  )
}