import {React,useState} from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ResetPassword = ({submitForm}) => {
  const [isVisible,setIsVisible] = useState(false);
  const [isVisibleConfirm,setIsVisibleConfirm] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])/,
        " Must Contain One Lowercase Character"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "  Must Contain One Uppercase Character"
      )
      .matches(
        /^(?=.*[0-9])/,
        "  Must Contain One Number Character"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Must Contain  One Special Case Character"
      ).min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], "Confirm passwords don't match with password!")
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

  const showConfirmPassword = (event) => {
    if(isVisibleConfirm){
      setIsVisibleConfirm(false);
    }else{
      setIsVisibleConfirm(true);
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
                  <h3>Reset Password</h3>
                  <p>Reset your password.</p>
                </div>
                <form className="form_aria" onSubmit={handleSubmit(submitForm)} >
                  
                  <div className="mb-4 input_grp">
                    <input 
                      type={isVisible?"text":"password"}
                      className={`form-control common_input ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
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
                  <div className="mb-4 input_grp">
                    <input 
                      type={isVisibleConfirm?"text":"password"}
                      className={`form-control common_input ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword" 
                      placeholder="Confirm Password" 
                      {...register('confirmPassword')}
                    />
                    <span>
                      <img className="input_icon" src="/static/images/Lock.png" />
                    </span>
                    <span onClick={showConfirmPassword}>
                      <img className="input_icon right-input-icon" src="/static/images/hide-password.svg"  id="hide_password" style={{display: isVisibleConfirm?"none":"block"}} />
                      <img className="input_icon right-input-icon" src="/static/images/show-password.svg"  id="show_password" style={{display: isVisibleConfirm?"block":"none"}} />
                    </span>
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div> 
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <div className="register_text">
                    <p>Already have an account?
                      <Link href='/'>
                        <a>Sign In</a>
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

export default ResetPassword
