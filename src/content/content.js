import React, { useState } from 'react'
import { Save } from './components/save';
import { Navbar } from './navbar';
import { Blogs } from './pages/blogs';
import { Orders } from './pages/orders';
import {} from '../style/style.bundle.css'
import {} from '../style/style.bundle.min.css'
import {} from '../style/style.bundle.rtl.css'
import {} from '../style/style.bundle.rtl.min.css'

const initState = {
  activePageId: 0,
  isHaveChanges: true
};

const Pages = [ 
  {
    id: 0,
    name: 'orders',
  },
  {
    id: 1,
    name: 'blogs',
  }
]
export const Content = () => {
  let [state, setState] = useState(initState);

  const changeActivePage = activePageId => {
    if(state.isHaveChanges) {
      let is = window.confirm('are you want to change page ? \n you have unsaved changes ');
      if(is) {
        setState({ ...state, activePageId })
      }
    }
    else {
      setState({ ...state, activePageId })
    }
  }

  return (
    <>
      <Navbar callBack = {changeActivePage} pages = {Pages} />
      {
        state.activePageId === 0 && <Orders isHaveChanges = {state.isHaveChanges} />
      }
      {
        state.activePageId === 1 && <Blogs isHaveChanges = {state.isHaveChanges} />
      }
    </>
  )
}