import React, { useContext } from "react";
import { GlobalContext } from "../../context/global/globalContext";

export const Loading = () => {
  let {global} = useContext(GlobalContext)
  return (
    <div style={{ display: global.loading ? 'block' : 'none'}} className="bg-dark-o-95 heigth-100vh position-absolute w-100 zindex-5">
      Loading ...
    </div>
  )
}