import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../context/global/globalContext';
const parse = require('html-react-parser');




export const Popup = (  ) => {  

  
  let { global, popup } = useContext(GlobalContext)
  let [state, setState] = useState({})
  let fileInput = useRef()

  let type = global.popup.type || ''
  let id = global.popup.id || ''
  let callBack = global.popup.callBack || (() => {})
  let data = global.popup.data

  useEffect(() => {
    setState({...data, h1_meta: data['h1-meta']})
    return () => setState({})
  }, [global.popup.data])

  const changeSrc = (res) => {
    setState({img: res, ...state});
  }

  let openPhotoEditor = e=>{
    getPhoto(e,res => changeSrc(res))
  }

  const getPhoto = (e, callBack) => {
    if (window.FileReader) {
      let file = e.target.files[0];
      let reader = new FileReader();
      if(file) {
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          let image = new Image();
          image.src = e.target.result;
          image.onload = callBack(image.src)
        }
      }
    }
  }


  return (
    <div style={{ zIndex: 10000, top: global.popup.status ? '0' : '-150%', left: '0',}} className="bg-dark-o-95 heigth-100vh position-fixed w-100 d-flex animate-all" >
      {
        global.popup.status && 

        <div className="container mt-7">
          <div className="row">
            <div className="col ">
              <div className="card card-custom gutter-b example example-compact m-0">
                <div className="card-header">
                  <h3 className="card-title">Edit / New</h3> 
                  <div className="card-toolbar">
                    <div className="example-tools justify-content-center">
                      <button className="btn btn-primary mr-3" onClick={() => callBack(state, id)}>Save</button>
                      <button className="btn btn-danger" onClick={() => popup.close()}>
                        X   
                      </button> 
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="card-body overflow-auto" style={{height: '84vh'}}>
                    <div className="form-group row">  
                      <div className="col-6"> 
                        {
                          type === "data" &&                          
                          <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" value={state.name} 
                              onChange={e => setState({ ...state, name: e.target.value })}/>
                          </div>
                        }
                        

                        <div className="form-group">
                          <label>Title:</label>
                          <input type="text" className="form-control" placeholder="Enter title" value={state.title} 
                            onChange={e => setState({ ...state, title: e.target.value })}/>
                        </div>   
                        { 
                          type === "data" &&  
                          <div className="form-group">
                            <label>Size:</label>
                            <input type="text" className="form-control" placeholder="Enter site" value={state.razmer} 
                              onChange={e => setState({ ...state, razmer: e.target.value })}/>
                          </div>
                        }
                        

                        <div className="form-group">
                          <label>Url:</label>
                          <input type="text" className="form-control" placeholder="Enter url" value={state.url} 
                            onChange={e => setState({ ...state, url: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Category:</label>
                          <input type="text" className="form-control" placeholder="Enter category" value={state.cat} 
                            onChange={e => setState({ ...state, cat: e.target.value })}/>
                        </div>
                        { 
                          type === "data" &&  
                          <div className="form-group">
                            <label>Category_1:</label>
                            <input type="text" className="form-control" placeholder="Enter category_1" value={state.cat1} 
                              onChange={e => setState({ ...state, cat1: e.target.value })}/>
                          </div>
                        }
                        

                        <div className="form-group">
                          <label>Meta_d:</label>
                          <input type="text" className="form-control" placeholder="Enter meta_d" value={state.meta_d} 
                            onChange={e => setState({ ...state, meta_d: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Meta_k:</label>
                          <input type="text" className="form-control" placeholder="Enter meta_k" value={state.meta_k} 
                            onChange={e => setState({ ...state, meta_k: e.target.value })}/>
                        </div>
                        {
                          type === "data" &&  
                          <div className="form-group">
                            <label>h1 Meta:</label>
                            <input type="text" className="form-control" placeholder="Enter h1 meta" value={state.h1_meta} 
                              onChange={e => setState({ ...state, h1_meta: e.target.value })}/>
                          </div>
                        }
                        {
                          type === "blog" &&  
                          <div className="form-group">
                            <label>h1 :</label>
                            <input type="text" className="form-control" placeholder="Enter h1" value={state.h1} 
                              onChange={e => setState({ ...state, h1: e.target.value })}/>
                          </div>
                        }
                      

                      </div>

                      <div className="col-6 pt-7">
                        <button className="btn p-0" style={{margin: '1px auto', display: 'block', width: '100%'}}>
                          <div className="add-image " onClick={() => fileInput.current.click()} style={{backgroundImage: state.img ? `url(${state.img})` : ''}}>
                            {
                              !state.img && <i className="far fa-plus-circle far" />
                            }
                          </div>
                        </button>
                        <input type="file" className="d-none" ref={fileInput}  onChange={e => openPhotoEditor(e)}/> 
                        {/* eventy petka poxancenq sran */}
                        {
                          type === "data" && <>
                        <div className="form-group">
                          <label>Foto:</label>
                          <input type="text" className="form-control" placeholder="Enter foto" value={state.foto} 
                            onChange={e => setState({ ...state, foto: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Method of Measurement:</label>
                          <input type="text" className="form-control" placeholder="Enter Method of Measurement" value={state.izm} 
                            onChange={e => setState({ ...state, izm: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Price of Gray:</label>
                          <input type="text" className="form-control" placeholder="Enter price for gray" value={state.seriy} 
                            onChange={e => setState({ ...state, seriy: e.target.value })}/>
                        </div>
                        
                        <div className="form-group">
                          <label>Price of Red:</label>
                          <input type="text" className="form-control" placeholder="Enter price for red" value={state.krasniy} 
                            onChange={e => setState({ ...state, krasniy: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Price of Brown:</label>
                          <input type="text" className="form-control" placeholder="Enter price for brown" value={state.kar} 
                            onChange={e => setState({ ...state, kar: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Price Yellow:</label>
                          <input type="text" className="form-control" placeholder="Enter price for yellow" value={state.jol} 
                            onChange={e => setState({ ...state, jol: e.target.value })}/>
                        </div>
                        </>
                        }
                                                {
                          type === "blog" &&  
                          <div className="form-group">
                            <label>Description :</label>
                            <input type="text" className="form-control" placeholder="Enter description" value={state.description} 
                              onChange={e => setState({ ...state, description: e.target.value })}/>
                          </div>
                        }

                        {
                          type === "blog" &&  
                          <div className="form-group">
                            <label>Data :</label>
                            <input type="text" className="form-control" placeholder="Enter data" value={state.data} 
                              onChange={e => setState({ ...state, data: e.target.value })}/>
                          </div>
                        }

                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>Text Input:</label>
                          <textarea className="form-control w-100 min-h-250px" style={{resize: 'none', height: '-webkit-fill-available'}} value={state.text} 
                            onChange={e => setState({ ...state, text: e.target.value })} >

                          </textarea>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>Text Output:</label>
                          <div className="w-100 min-h-250px border" style={{borderRadius: '3px'}}>
                            {parse("<div>" + state.text + "</div>")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      }
   </div>
  )
}