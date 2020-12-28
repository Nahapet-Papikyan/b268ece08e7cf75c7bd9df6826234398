import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/global/globalContext'
import {ContentContext} from "./contentContext";


export const Navbar = () => {
// <<<<<<< HEAD
  let {log} = useContext(GlobalContext)
  let {pages, content, changeActivePage} = useContext(ContentContext)
  let [fullNavbar, setFullNavbar] = useState(false)


  return (
    <div className={`aside aside-left aside-fixed d-flex flex-column flex-row-auto ${fullNavbar && 'w-70px aside-minimize'}`}
         style={{height: '100vh', position: "fixed"}}>
      {// =======
// 	let {log} = useContext(GlobalContext)
//   let { pages, content, changeActivePage  } = useContext(ContentContext)
//   let [fullNavbar, setFullNavbar] = useState(true)
//
//
//   return (
//     <div className={`aside aside-left aside-fixed d-flex flex-column flex-row-auto zindex-5 ${fullNavbar && 'w-70px aside-minimize'}`}
//       style={{minHeight: `100vh`, transition: 'width .3s'}}>
// >>>>>>> 998e39a8fb58b0d33c20879423f1ace5781b3948
      }
      <div className="brand flex-column-auto" id="kt_brand" kt-hidden-height="65">
        {
          !fullNavbar && <a href="https://bruschatka2000.ru/" className="brand-logo">
            Bruschatka 2000
          </a>
        }
{/*<<<<<<< HEAD*/}
        <button className="brand-toggle btn btn-sm px-0" onClick={() => setFullNavbar(!fullNavbar)}>
          <span className="svg-icon svg-icon svg-icon-xl">
{/*=======
  <button className=" btn btn-sm px-0" onClick={() => setFullNavbar(!fullNavbar)} style={{transform: fullNavbar ? 'rotate(180deg)' : 'rotate(0)', transition: 'transition: all 0.5s ease 0s;'}} >
  <span className="svg-icon svg-icon svg-icon-xl" >
  >>>>>>> 998e39a8fb58b0d33c20879423f1ace5781b3948*/}
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,
                5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,
                11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,
                18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,
                18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,
                6.70710318 Z" fill="#000000" fillRule="nonzero"
                      transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)">
                </path>
                <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,
                15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,
                8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,
                13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,
                15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,
                15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"
                      transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)">
                </path>
              </g>
            </svg>
          </span>
        </button>
      </div>

      <div className="aside-menu-wrapper flex-column-fluid">
        <div className="aside-menu my-4 scroll ps ps--active-y">

          <ul className="menu-nav">
            {
/* <<<<<<< HEAD*/
              pages.map(page =>
                <li className="menu-item" key={page.id}>
                  <button className={`menu-link bg-dark-o-40 bg-hover-gray-800 border-0 menu-link ${content.activePageId === page.id && 'bg-gray-800'}`}
                          onClick={() => changeActivePage(page.id)}>
                    <span className="menu-text">{page.name}</span>
                  </button>
                </li>
              )}
            {/*{// =======*/}
{/*//               pages.map(page =>*/}
{/*//               <li className="menu-item" key={page.id} >*/}
{/*//                 <button className={`menu-link bg-dark-o-40 bg-hover-gray-800 border-0 menu-link ${content.activePageId === page.id && 'bg-gray-800'}`}*/}
{/*//                   onClick={() => { changeActivePage(page.id); setFullNavbar(true)}}>*/}
{/*//                   <span class="svg-icon menu-icon">*/}
{/*//                     {page.icon}*/}
{/*//                   </span>*/}
{/*//                   <span className="menu-text">{page.name}</span>*/}
{/*//                 </button>*/}
{/*//               </li>*/}
{/*// >>>>>>> 998e39a8fb58b0d33c20879423f1ace5781b3948*/}
            // }
            //   )
            // }
            <li className="menu-item">
              <button className="menu-link bg-dark-o-40 bg-hover-gray-800 border-0 menu-link"
                      style={{marginTop: '60vh'}}
                      onClick={() => log.out()}>
{/*=======*/}
{/*                style={{marginTop: '60vh'}}*/}
{/*                onClick={() => log.out()}>*/}
{/*                  <span class="svg-icon menu-icon">*/}
{/*                    <i className="fad fa-sign-out"></i>*/}
{/*                  </span>*/}
{/*>>>>>>> 998e39a8fb58b0d33c20879423f1ace5781b3948*/}
                <span className="menu-text">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}