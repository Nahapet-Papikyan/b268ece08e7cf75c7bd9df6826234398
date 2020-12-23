
import React, { useState ,useContext} from 'react'
import { Navbar } from './navbar'
import { Blogs } from './pages/blogs'
import { Orders } from './pages/orders'
import { Loading } from './components/loading'

import '../style/style.bundle.css'
import '../style/aside/dark.css'
import '../style/custom.style.css'
import {ContentContext} from "./contentContext";
import {DbContext} from "../context/db/dbContext";


const initState = {
  activePageId: -1,
  isHaveChanges: false
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
  let {getData,setData} =  useContext(DbContext);



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

  const get = (type,callBack) =>  getData("GABT",res=>callBack(res),()=>{},{type})

  // order == "data" ||| blog="blog"
  // get("data")
  return (
      <ContentContext.Provider value={{content:state,pages:Pages,changeActivePage,get }}>
    <div className="d-flex flex-column flex-root">
      <Loading />
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