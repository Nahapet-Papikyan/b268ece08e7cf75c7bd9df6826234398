import React, { useContext, useState } from 'react'
import  '../style/pages/login/login-2.css'
import  '../style/pages/login/login-2.min.css'
import  '../style/pages/login/login-2.rtl.css'
import  '../style/pages/login/login-2.rtl.min.css'
import loginBackgroundImage from '../assets/media/svg/login-visual-2.svg'
import { GlobalContext } from '../context/global/globalContext'

export const Login = () => {
	// let {log} = useContext(GlobalContext)

	let [state, setState] = useState({userName: '', password: ''})
	let [err, setErr] = useState(false)
  const log =  {
		in: data => {
			console.log(data);
			return true
		},
	}
  return (
    <div className="d-flex flex-column flex-root">
			<div className="login login-2 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white">
				<div className="login-aside order-2 order-lg-1 d-flex flex-row-auto position-relative overflow-hidden">
					<div className="d-flex flex-column-fluid flex-column justify-content-between py-9 px-7 py-lg-13 px-lg-35">
						<div className="d-flex flex-column-fluid flex-column flex-center">
							<div className="login-form login-signin py-11">
								<div className="form ">
									<div className="text-center pb-8">
										<h2 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign In</h2>

									</div>

									<div className="form-group fv-plugins-icon-container">
                    <div className="d-flex justify-content-between mt-n5">
                      <label className="font-size-h6 font-weight-bolder text-dark">Login</label>
                    </div>
										<input className={`form-control form-control-solid h-auto py-7 px-6 rounded-lg ${err && 'is-invalid'}`}
											type="text" value={state.userName} onChange={e => setState({...state, userName: e.target.value})}
											/>
									<div className="fv-plugins-message-container"></div>
                  </div>

									<div className="form-group fv-plugins-icon-container">
										<div className="d-flex justify-content-between mt-n5">
											<label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
										</div>
										<input className={`form-control form-control-solid h-auto py-7 px-6 rounded-lg ${err && 'is-invalid'}`}
											type="password" name="password" 
											value={state.password} onChange={e => setState({...state, password: e.target.value})}/>
									<div className="fv-plugins-message-container"></div>
                  </div>

									<div className="text-center pt-2">
										<button onClick={() => setErr(log.in(state)) }
											className="btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3">Sign In</button>
									</div>
								<div></div>
                </div>
							</div>
						</div>
					</div>
				</div>
				<div className="content order-1 order-lg-2 d-flex flex-column w-100 pb-0 " style={{backgroundColor: "#B1DCED"}}>

					<div className="d-flex flex-column justify-content-center text-center pt-lg-40 pt-md-5 pt-sm-5 px-lg-0 pt-5 px-7">
						<h3 className="display4 font-weight-bolder my-7 text-dark" style={{color:"#986923"}}>Admin Panel</h3>
					</div>
					<div className="content-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{backgroundImage: "url(" + loginBackgroundImage + ")"}}></div>
				</div>
			</div>
		</div>
  )
}