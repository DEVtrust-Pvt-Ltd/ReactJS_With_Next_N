import {React,useState} from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Login = ({submitForm}) => {
  const [isVisible,setIsVisible] = useState(false);
  const validationSchema = Yup.object().shape({
    userEmail: Yup.string()
      .required('Email is required')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit,formState } = useForm(formOptions);
  const { errors } = formState;

  const showPassword = (event) => {
    if(isVisible){
      setIsVisible(false);
    }else{
      setIsVisible(true);
    }
  }

  const validateInputSpace = (e) => {
    if(/^\s/.test(e.target.value)){
      e.target.value = e.target.value.trim();
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="clearfix"></div>
      <main>
        <section id="wrap_body">
          <div className="container">
            <div className="outer_body">
              <div className="inner_aria">
                <div className="main_heading">
                  <h3>Welcome back!</h3>
                  <p>Sign In to your account</p>
                </div>
                <form className="form_aria" onSubmit={handleSubmit(submitForm)} >
                  <div className="mb-4 input_grp">
                    <input 
                      type="text" 
                      className={`form-control common_input ${errors.userEmail ? 'is-invalid' : ''}`}
                      id="userEmail" 
                      name="userEmail"
                      aria-describedby="emailHelp" 
                      placeholder="Email Address"
                      onKeyPress={(e) => validateInputSpace(e)}
                      {...register('userEmail')}
                    />
                    <span>
                      <img  className="input_icon" src="/static/images/Message.png"/>
                    </span> 
                    <div className="invalid-feedback">{errors.userEmail?.message}</div>
                  </div>
                  <div className="mb-4 input_grp">
                    <input 
                      type={isVisible?"text":"password"}
                      className={`form-control common_input ${errors.password ? 'is-invalid' : ''}`}
                      id="exampleInputPassword1"
                      name="password" 
                      placeholder="Password" 
                      {...register('password')}
                    />
                    <span>
                      <img className="input_icon" src="/static/images/Lock.png" />
                    </span>
                    <span onClick={showPassword}>
                      <img className="input_icon right-input-icon" src="/static/images/hide-password.svg"  id="hide_password" style={{display: isVisible?"none":"block"}} />
                      <img className="input_icon right-input-icon" src="/static/images/show-password.svg"  id="show_password" style={{display: isVisible?"block":"none"}} />
                    </span>
                    <div className="invalid-feedback">{errors.password?.message}</div> 
                  </div>
                  <div className="recover_password">
                    <Link href='/forgotPassword'>
                      <a>Recover Password</a>
                    </Link> 
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <div className="register_text">
                    <p>Don’t have an account? 
                      <Link href='/register'>
                        <a> Sign Up</a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
