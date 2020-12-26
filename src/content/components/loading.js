import React, { useContext } from "react";
import { GlobalContext } from "../../context/global/globalContext";
import loadingImage from '../../assets/media/loading/Loading.gif'

export const Loading = () => {
  let {global} = useContext(GlobalContext)
  return (
    <div style={{ display: global.loading ? 'block' : 'none', zIndex: 10000}} className="bg-dark-o-100 h-100 heigth-100vh position-fixed w-100">
      <div className="w-250px h-250px bg-img" style={{backgroundImage: `url(${loadingImage})`, margin: 'calc((100vh - 250px) / 2) auto'}}>

      </div>
    </div>
  )
}