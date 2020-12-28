import React, { useContext, useEffect, useRef, useState } from 'react'
import { DbContext } from '../../context/db/dbContext';
import { CPFB64, GAP } from '../../context/type';
import plus from '../../assets/media/Capture.PNG'
// import { GlobalContext } from '../context/global/globalContext';


const baseUrl = "https://bruschatka2000.ru/978ea7af39ad5fefb6bfbc82a1c5023494bdade2/"
export const PhotoPopup = ( {isOpen, type, close, callBack} ) => {  
  let {getData, setData} = useContext(DbContext)
  let [state, setState] = useState([])
  let [photo, setPhoto] = useState('')
  let [canSave, setCanSave] = useState(false)
  let [selected, setSelected] = useState('')
  let fileInput = useRef()

  useEffect(() => {
    getData(GAP, res => setState(res), () => {}, {})
  // eslint-disable-next-line
  }, [])

  const changeSrc = (res) => {
    // setState({img: res, ...state});
    if (res) {
      setPhoto(res)
      setSelected('')
      setCanSave(true)
    }
    
  }

  let openPhotoEditor = e=>{
    getPhoto(e,res => changeSrc(res))
  }

  const getPhoto = (e, callBack) => {
    if (window.FileReader) {
      let file = e.target.files[0]
      let reader = new FileReader()
      if(file) {
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          let image = new Image()
          image.src = e.target.result
          image.onload = callBack(image.src)
        }
      }
    }
  }
  const addPhoto = () => {
    photo ? setData(CPFB64, res => closePhotoPopup(res), () => {}, {photo}) : closePhotoPopup(selected)
  }

  const closePhotoPopup = value => {
    callBack(type === 'avatar' ? baseUrl + value : `<img src="${baseUrl + value}" />`)
    close()
  }

  const changeSelected = value => {
    if(value !== selected) {
      setSelected(value)
      setPhoto('')
      setCanSave(true)
    } else {
      setSelected('')
      setCanSave(false)
    }

  }

  return ( 
    <div style={{ zIndex: 100000000, top: '0', left: '0', height: isOpen ? '100%' : '0%', overflow: 'hidden',}}
      className={`bg-gray-400 position-absolute w-100 d-flex animate-all`}>
      <div className="container mt-7">
          <div className="row">
            <div className="col ">
              <div className="card card-custom gutter-b example example-compact m-0">
                <div className="card-header ">
                  <h3 className="card-title">Edit / New</h3> 
                  <div className="card-toolbar">
                    <div className="example-tools justify-content-center">
                      <button className={`btn btn-primary `} disabled={!canSave}  onClick={() => addPhoto()}>Add Photo</button>
                      <button className="btn btn-danger ml-3" onClick={() => close()}>X</button>
                    </div>
                  </div>
                </div>
                <div className="form">
                <div className="card-body overflow-auto"  style={{  maxHeight: '77vh', flexWrap: 'wrap', textAlign: 'center',  alignItems: 'center', width: '100%'}}>
                  <button  
                    onClick={() => fileInput.current.click()}
                    className="p-0 image-item " style={{filter: 'none', backgroundImage: photo ? `url(${photo})` : `url(${plus})`}}  >

                  </button>
                  {
                    state.map((item, i) => 
                      <button key={i} 
                        onClick={() => changeSelected(item)} 
                        className={`image-item ${selected === item && 'image-item-selected'}`} 
                        style={{backgroundImage: `url(${baseUrl + item})`}} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="file" className="d-none" ref={fileInput}  onChange={e => openPhotoEditor(e)}/> 
   </div>
  )
}