import React, { useContext } from "react";
import { GlobalContext } from "../../context/global/globalContext";

export const Loading = () => {
  let {global} = useContext(GlobalContext)
  return (
    <div style={{position: 'fixed', zIndex: '10000', display: global.loading ? 'block' : 'none'}}>
      Loading ...
    </div>
  )
}