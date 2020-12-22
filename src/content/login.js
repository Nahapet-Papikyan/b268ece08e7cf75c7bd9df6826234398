import React from 'react'
import {} from '../style/pages/login/login-2.css'
import {} from '../style/pages/login/login-2.min.css'
import {} from '../style/pages/login/login-2.rtl.css'
import {} from '../style/pages/login/login-2.rtl.min.css'
import loginBackgroundImage from '../assets/media/svg/login-visual-2.svg'

export const Login = () => {
  return (
    <div className="d-flex flex-column flex-root">
			<div className="login login-2 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
				<div className="login-aside order-2 order-lg-1 d-flex flex-row-auto position-relative overflow-hidden">
					<div className="d-flex flex-column-fluid flex-column justify-content-between py-9 px-7 py-lg-13 px-lg-35">
						<a href="#" className="text-center pt-2">
							<img src="/metronic/theme/html/demo1/dist/assets/media/logos/logo.png" className="max-h-75px" alt="" />
						</a>
						<div className="d-flex flex-column-fluid flex-column flex-center">
							<div className="login-form login-signin py-11">
								<form className="form fv-plugins-bootstrap fv-plugins-framework" novalidate="novalidate" id="kt_login_signin_form">
									<div className="text-center pb-8">
										<h2 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign In</h2>

									</div>

									<div className="form-group fv-plugins-icon-container">
                    <div className="d-flex justify-content-between mt-n5">
                      <label className="font-size-h6 font-weight-bolder text-dark">Login</label>

                    </div>
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="text" name="username" autocomplete="off" />
									<div className="fv-plugins-message-container"></div>
                  </div>

									<div className="form-group fv-plugins-icon-container">
										<div className="d-flex justify-content-between mt-n5">
											<label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
											<a href="javascript:;" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot">Forgot Password ?</a>
										</div>
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="password" name="password" autocomplete="off" />
									<div className="fv-plugins-message-container"></div>
                  </div>

									<div className="text-center pt-2">
										<button id="kt_login_signin_submit" className="btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3">Sign In</button>
									</div>
								<input type="hidden" /><div></div>
                </form>
							</div>

							<div className="login-form login-signup pt-11">
								<form className="form fv-plugins-bootstrap fv-plugins-framework" novalidate="novalidate" id="kt_login_signup_form">
									<div className="text-center pb-8">
										<h2 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign Up</h2>
										<p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
									</div>

									<div className="form-group fv-plugins-icon-container">
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="text" placeholder="Fullname" name="fullname" autocomplete="off" />
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group fv-plugins-icon-container">
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autocomplete="off" />
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group fv-plugins-icon-container">
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Password" name="password" autocomplete="off" />
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group fv-plugins-icon-container">
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirm password" name="cpassword" autocomplete="off" />
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group fv-plugins-icon-container">
										<label className="checkbox mb-0">
										<input type="checkbox" name="agree" />I Agree the 
										<a href="#">terms and conditions</a>. 
										<span></span></label>
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group d-flex flex-wrap flex-center pb-lg-0 pb-3">
										<button type="button" id="kt_login_signup_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4">Submit</button>
										<button type="button" id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4">Cancel</button>
									</div>

								<div></div></form>

							</div>

							<div className="login-form login-forgot pt-11">

								<form className="form fv-plugins-bootstrap fv-plugins-framework" novalidate="novalidate" id="kt_login_forgot_form">

									<div className="text-center pb-8">
										<h2 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Forgotten Password ?</h2>
										<p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
									</div>

									<div className="form-group fv-plugins-icon-container">
										<input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autocomplete="off" />
									<div className="fv-plugins-message-container"></div></div>

									<div className="form-group d-flex flex-wrap flex-center pb-lg-0 pb-3">
										<button type="button" id="kt_login_forgot_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4">Submit</button>
										<button type="button" id="kt_login_forgot_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4">Cancel</button>
									</div>
								<div></div></form>
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