import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/global/globalContext'
import { NewBlockElement } from '../components/newBlockElement'
import { ContentContext } from '../contentContext'
import { Element } from '../components/orderElement'

const type = "blog"

let newItem = {
  id: "",
  text: ''
}
// Nahapet start
export const Blogs = () => {

  let { get, editItem, removeItem } = useContext(ContentContext)
  let [state, setState] = useState([])
  let { loading } = useContext(GlobalContext)

  useEffect(() => {
    loading.start()
    get(type, res => {
      console.log(res)
      setState(res)
      newItem.id = res[res.length - 1].id + 1

      setTimeout(() => loading.end(), 1000)
    })
    return () => { setState([]) }
    // eslint-disable-next-line
  }, [])
  // Nahapet end 
  // Smbat start 
  const editCallBack = (data, ctrlId) => {

    let newState = [...state]
    if (ctrlId > state[state.length - 1].id) {
      newItem = { id: data.id + 1 }
      newState.push(data)
    }
    else {
      newState[ctrlId] = data
    }
    setState(newState)
  }
  const removeCallBack = id => {

    let newState = []
    for (let i = 0; i < state.length; i++) {
      if (id !== state[i].id) newState.push(state[i])
    }
    setState(newState)
    console.log(newState.length)
  }

  const callBacks = {
    edit: i => editItem(type, i, state[i], editCallBack),
    remove: i => removeItem(type, state[i].id, removeCallBack),
  }


  return (
    <div className="row mb-7  justify-content-center">

      <NewBlockElement callBack={() => {editItem(type, -1, newItem, editCallBack)}} />
      {
        state.map((item, i) => <Element key={item.id} type={type} item={item} ctrlId={i} callBacks={callBacks} />).reverse()
      }

    </div>
  )
}
  // Smbat end 