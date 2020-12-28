import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../context/global/globalContext';
import { PhotoPopup } from "./components/photoPopup";
const parse = require('html-react-parser');

const tags = [
  {
    id: 0, 
    name: <i className="fal fa-h1" />,
    tag: '<h1></h1>'
  },
  {
    id: 1, 
    name: <i className="fal fa-h2" />,
    tag: '<h2></h2>'
  },
  {
    id: 2, 
    name: <i className="fad fa-paragraph"/>,
    tag: '<p></p>'
  },
  {
    id: 3, 
    name: 'div',
    tag: '<div></div>'
  },
  {
    id: 4, 
    name: <i className="fad fa-italic"/>,
    tag: '<i></i>'
  },
  {
    id: 5, 
    name: <i className="fas fa-bold"/>,
    tag: '<b></b>'
  },
  {
    id: 6, 
    name: <i className="fad fa-link"/>,
    tag: '<a href=""> </a>'
  },
  {
    id: 7, 
    name: <i className="fad fa-list"/>,
    tag: '<ul></ul>'
  },
  {
    id: 8, 
    name: <i className="fad fa-list-ol"/>,
    tag: '<ol></ol>'
  },
  {
    id: 9, 
    name: <i className="fad fa-list-alt"/>,
    tag: '<li></li>'
  }
]

const dataCat=[
  { "id" : 5,
  "name": "крышка на столбы"},
  { "id" : 3,
  "name": "бордюрный камень"},
  { "id" : 6, 
  "name": "брусчатка тротуарная"},
  { "id" : 6, 
  "name": "плитка для дорожек"},
  { "id" : 6, 
  "name": "плитка уличная"},
  { "id" : 6, 
  "name": "тротуарная плитка пресс"},
  { "id" : 1, 
  "name": "тротуарная плитка литьё"},
  { "id" : 4, 
  "name": "водосточные системы"} 
  ]
  const dataCat1=[
  { "id" : 61, 
  "name": "брусчатка тротуарная"},
  { "id" : 61, 
  "name": "плитка для дорожек"},
  { "id" : 61, 
  "name": "плитка уличная"},
  { "id" : 32, 
  "name": "дорожный бордюр"},
  { "id" : 31, 
  "name": "садовая бордюр"},
  { "id" : 51,
  "name": "крышка на забор"},
  { "id" : 4,
  "name": "плитка-400-400-50"},
  { "id" : 5,
  "name": "плитка-500-500-50"},
  { "id" : 4,
  "name": "плитка уличная"},
  { "id" : 5,
  "name": "плитка уличная"},
  { "id" : 3,
  "name": "плитка уличная"}
 ]


export const Popup = (  ) => {  

  
  let { global, popup } = useContext(GlobalContext)
  let [state, setState] = useState({})
  let [showCategorys, setShowCategorys] = useState([false, false])
  let [photoPopup, setPhotoPopup] = useState({ type: '', isOpen: false, close: () => {}, callBack: () => {} })
  let textarea = useRef()


  let type = global.popup.type || ''
  let id = global.popup.id || ''
  let callBack = global.popup.callBack || (() => {})
  let data = global.popup.data
  
  useEffect(() => {
    setState({...data, h1_meta: data['h1-meta']})
    return () => setState({}) 
  }, [global.popup.data])

  console.log(photoPopup);

  const openPhotoEditor = (type = '_') => {
    return {
      type,
      isOpen: true,
      callBack: res => type === 'avatar' ? setState({...state, img: res}) : setState({...state, text: state.text + res}), 
      close: () => setPhotoPopup({ type: '', isOpen: false, close: () => {}, callBack: () => {} })
    }
  }
  

  const addTag = (value) => {
    setState({...state, text: state.text.substring(0, textarea.current.selectionStart) + value + state.text.substring(textarea.current.selectionStart, state.text.length) })
  }
  console.log(state);
  return (
    <div style={{ zIndex: 1000000, top: global.popup.status ? '0' : '-150%', left: '0', bottom: global.popup.status ? '0' : '',}} 
      className="bg-gray-500 heigth-100vh position-fixed w-100 d-flex animate-all" >
      {
        global.popup.status && 

        <div className="container mt-7">
          <div className="row">
            <div className="col ">
              <div className="card card-custom gutter-b example example-compact m-0">
                <div className="card-header ">
                  <h3 className="card-title">Edit / New</h3> 
                  <div className="card-toolbar">
                    <div className="example-tools justify-content-center">
                      <button className="btn btn-primary mr-3" onClick={() => callBack({...state, cat: state.cat !== '' ? dataCat[state.cat].id : '', cat1: state.cat1 !== '' ? dataCat[state.cat1].id : ''}, id)}>Save</button>
                      <button className="btn btn-danger" onClick={() => popup.close()}>
                        X   
                      </button> 
                    </div>
                  </div>
                </div>
                
                <PhotoPopup isOpen={photoPopup.isOpen} close={photoPopup.close} type={photoPopup.type}  callBack={photoPopup.callBack}/>

                <div className="form">
                  <div className="card-body overflow-auto" style={{height: '84vh'}}>
                    <div className="form-group row">  
                      <div className="col-6"> 
                        {
                          type === "data" &&                          
                          <div className="form-group">
                            <label>Имя </label>
                            <input type="text" className="form-control" placeholder="Enter name" value={state.name} 
                              onChange={e => setState({ ...state, name: e.target.value })}/>
                          </div>
                        }
                        

                        <div className="form-group">
                          <label>Мета title</label>
                          <input type="text" className="form-control" placeholder="Enter title" value={state.title} 
                            onChange={e => setState({ ...state, title: e.target.value })}/>
                        </div>   
                        { 
                          type === "data" &&  
                          <div className="form-group">
                            <label>Размеры Товара</label>
                            <input type="text" className="form-control" placeholder="Enter site" value={state.razmer} 
                              onChange={e => setState({ ...state, razmer: e.target.value })}/>
                          </div>
                        }
                        

                        <div className="form-group">
                          <label>Url</label>
                          <input type="text" className="form-control" placeholder="Enter url" value={state.url} 
                            onChange={e => setState({ ...state, url: e.target.value })}/>
                        </div>
                        
                        <div className="form-group">
                          <label>Мета description</label>
                          <input type="text" className="form-control" placeholder="Enter meta_d" value={state.meta_d} 
                            onChange={e => setState({ ...state, meta_d: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Мета keywords</label>
                          <input type="text" className="form-control" placeholder="Enter meta_k" value={state.meta_k} 
                            onChange={e => setState({ ...state, meta_k: e.target.value })}/>
                        </div>
                        {
                          type === "data" &&  
                          <div className="form-group">
                            <label>Заголовок h1</label>
                            <input type="text" className="form-control" placeholder="Enter h1 meta" value={state.h1_meta} 
                              onChange={e => setState({ ...state, h1_meta: e.target.value })}/>
                          </div>
                        }
                        {
                          type === "blog" &&  
                          <div className="form-group">
                            <label>Заголовок</label>
                            <input type="text" className="form-control" placeholder="Enter h1" value={state.h1} 
                              onChange={e => setState({ ...state, h1: e.target.value })}/>
                          </div>
                        }
                         <div className="form-group">
                            <label>Категория Товара : {state.cat !== '' ? dataCat[state.cat] ? dataCat[state.cat].name : 'не выбрано'  : 'не выбрано'}</label>
                            <div>
                              <button className="btn btn-primary" onClick={() => setShowCategorys([true, false])}>
                                {state.cat ? dataCat[state.cat] ? dataCat[state.cat].name : 'выбрать категорию ' : 'выбрать категорию '}
                              </button>
                              <div className={` overflow-auto `} style={{transition: 'all .5s', height: showCategorys[0] ? 'auto' : '0px'}}>

                                <button className={ ` btn btn-bg-success p-1 m-1`} onClick={() => {setState({...state, cat: '' }); setShowCategorys([false, false])}}> не выбрано </button>
                               
                                {
                                  dataCat.map((item, i) => state.cat !== i && <button key={i} className={ ` btn btn-bg-success p-1 m-1`} onClick={() => {setState({...state, cat: i.toString() }); setShowCategorys([false, false])}}> {item.name} </button>)
                                }

                              </div>
                            </div>
                          </div>
                        { 
                          type === "data" &&  
                          <div className="form-group">
                            <label>Дополнительная Категория Товара : {state.cat1 !== '' ? dataCat1[state.cat1] ? dataCat1[state.cat1].name : 'не выбрано' : 'не выбрано'}</label>
                            <div>
                              <button className="btn btn-primary" onClick={() => setShowCategorys([false, true])}>
                                {state.cat1 ? dataCat1[state.cat1] ? dataCat1[state.cat1].name : 'выбрать подкатегорию ' : 'выбрать подкатегорию '}
                              </button>
                              <div className={` overflow-auto `} style={{transition: 'all .5s', height: showCategorys[1] ? 'auto' : '0px'}}>

                                <button className={ ` btn btn-bg-success p-1 m-1`} onClick={() => {setState({...state, cat1: '' }); setShowCategorys([false, false])}}> не выбрано </button>
                               
                                {
                                  dataCat1.map((item, i) => state.cat1 !== i && <button key={i} className={ ` btn btn-bg-success p-1 m-1`} onClick={() => {setState({...state, cat1: i.toString() }); setShowCategorys([false, false])}}> {item.name} </button>)
                                }

                              </div>
                            </div>
                          </div>
                        }
                    
                      </div>

                      <div className="col-6 pt-7">
                        <button className="btn p-0" 
                          onClick={() => setPhotoPopup(openPhotoEditor('avatar'))}
                          style={{margin: '1px auto', display: 'block', width: '100%'}}>
                          <div className="add-image " style={{backgroundImage: state.img ? `url(${state.img})` : ''}}>
                            {
                              !state.img && <i className="far fa-plus-circle far" />
                            }
                          </div>
                        </button>
                        {
                          type === "data" && <>
                        <div className="form-group">
                          <label>Папка, откуда нужно загрузить картинку камня</label>
                          <input type="text" className="form-control" placeholder="Enter foto" value={state.foto} 
                            onChange={e => setState({ ...state, foto: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Единицы измерения </label>
                          <input type="text" className="form-control" placeholder="Enter Method of Measurement" value={state.izm} 
                            onChange={e => setState({ ...state, izm: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Цена серого  камня </label>
                          <input type="text" className="form-control" placeholder="Enter price for gray" value={state.seriy} 
                            onChange={e => setState({ ...state, seriy: e.target.value })}/>
                        </div>
                        
                        <div className="form-group">
                          <label>Цена красного камня</label>
                          <input type="text" className="form-control" placeholder="Enter price for red" value={state.krasniy} 
                            onChange={e => setState({ ...state, krasniy: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Цена коричневого камня</label>
                          <input type="text" className="form-control" placeholder="Enter price for brown" value={state.kar} 
                            onChange={e => setState({ ...state, kar: e.target.value })}/>
                        </div>

                        <div className="form-group">
                          <label>Цена желтого камня</label>
                          <input type="text" className="form-control" placeholder="Enter price for yellow" value={state.jol} 
                            onChange={e => setState({ ...state, jol: e.target.value })}/>
                        </div>
                        </>
                        }
                        {
                          type === "blog" &&  
                          <div className="form-group">
                            <label>Краткое описание </label>
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
                      <label>Oписание Input:</label>

                        <div>
                        <button className="bg-hover-warning-o-3 btn line-height-0 p-2 pl-4 text-center text-hover-primary " onClick={() => setPhotoPopup(openPhotoEditor())} ><i className="fad fa-image"/></button>
                          {
                            tags.map(item => <button className="bg-hover-warning-o-3 btn line-height-0 p-2 pl-4 text-center text-hover-primary " onClick={() => addTag(item.tag)} key={item.id}>{item.name}</button>)
                          }

                        </div>
                      </div>

                      <div className="col-6">
                      <label>Oписание  Output:</label>

                      </div>

                    </div>

                    <div className="form-group row">
                      
                      <div className="col-6">
                        <div className="form-group">

                            <textarea className="form-control w-100 min-h-250px" ref={textarea}
                              style={{resize: 'none', height: '-webkit-fill-available'}} value={state.text} 
                              onChange={e => setState({ ...state, text: e.target.value })} >

                            </textarea>

                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <div className="w-100 min-h-250px border bg-white" style={{borderRadius: '3px'}}>
                            {parse('<div className="bg-white overflow-auto">' + state.text + '</div>')}
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