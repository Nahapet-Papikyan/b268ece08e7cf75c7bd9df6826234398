import React, { useState } from 'react'
import { Save } from './components/save';
import { Navbar } from './navbar';
import { Blogs } from './pages/blogs';
import { Orders } from './pages/orders';
import '../style/style.bundle.css'
import '../style/aside/dark.css'
import '../style/custom.style.css'
import {ContentContext} from "./contentContext";

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
      <ContentContext.Provider value={{content:state,pages:Pages,changeActivePage }}>
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page" >
        <Navbar />
        <div className="d-flex flex-column flex-row-fluid wrapper">
          <div className="content d-flex flex-column flex-column-fluid" >
            <div className="d-flex flex-column-fluid">
              <div className="container">
                {
                  state.activePageId === 0 && <Orders  />
                }
                {
                  state.activePageId === 1 && <Blogs />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </ContentContext.Provider>
  )
}