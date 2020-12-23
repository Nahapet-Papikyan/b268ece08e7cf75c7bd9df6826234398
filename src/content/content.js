
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
import {GABT, RIBI} from "../context/type";
import {GlobalContext} from "../context/global/globalContext";


const initState = {
  activePageId: 0,
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
  let {popup} = useContext(GlobalContext)



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

  const get = (type,callBack) =>  getData(GABT,res=>callBack(res),()=>{},{type})

  const newItem = data =>{}
  const editItem = (type,id,data,callBack) =>{
    openPopup({type,id,data,callBack})
    console.log(type,id,data,callBack)
  }
  const removeItem = (type, id, callBack )=>{

    setData(RIBI,res=>{
      if(res)callBack(id)
    },()=>{},{type,id})
    console.log(id)
  }


  const openPopup = (type,data)=>popup.open(type,data)

  const closePopup =() => popup.close()




  // order == "data" ||| blog="blog"
  // get("data")
  return (
      <ContentContext.Provider value={{content:state,pages:Pages,changeActivePage,get,newItem,
        editItem,openPopup,closePopup,
        removeItem, }}>
    <div className="d-flex flex-column flex-root heigth-100vh overflow-hidden">
      <Loading />
      <div className="d-flex flex-row flex-column-fluid page" >
        <Navbar />
        <div className="d-flex flex-column flex-row-fluid heigth-100vh overflow-auto py-5 wrapper">
          <div className="container mt-7">
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
      </ContentContext.Provider>
  )
}