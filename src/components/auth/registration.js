import {React,useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link'
import PasswordStrengthBar from 'react-password-strength-bar';



const Registration = ({submitForm}) => {
  const [currentPassword,setCurrentPassword] = useState("");
  const [isVisible,setIsVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().nullable(true)
      .trim()
      .min(5, "User Name is Too Short!")
      .max(50, "User Name is Too Long!")
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('Full Name is required'),
    userEmail: Yup.string()
      .required('Email is required')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter valid email'),
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
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleChange = (event) =>{
    setCurrentPassword(event.target.value);
  }

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
                  <h3>Registration</h3>
                  <p>Create your free account</p>
                </div>
                <form className="form_aria" onSubmit={handleSubmit(submitForm)}>
                  <div className="mb-4 input_grp">
                    <input 
                      type="text" 
                      className={`form-control common_input ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName"
                      name="fullName"
                      aria-describedby="emailHelp" 
                      placeholder="Full Name"
                      onKeyPress={(e) => validateInputSpace(e)}
                      minLength={5}
                      maxLength={50}
                      {...register('fullName')}

                    />
                    <span>
                      <img  className="input_icon" src="/static/images/user.png" />
                    </span>
                    <div className="invalid-feedback">{errors.fullName?.message}</div>
                  </div>
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
                      <img  className="input_icon" src="/static/images/Message.png" />
                    </span> 
                    <div className="invalid-feedback">{errors.userEmail?.message}</div>
                  </div>
                  <div className="mb-4 input_grp">
                    <input 
                      type={isVisible?"text":"password"}
                      className={`form-control common_input ${errors.password ? 'is-invalid' : ''}`}
                      id="userPassword" 
                      name="userEmail"
                      placeholder="Create a Strong Password"
                      {...register('password')}
                      onChange={handleChange}
                    />
                    <span>
                      <img className="input_icon" src="/static/images/Lock.png" />
                    </span>
                    <span onClick={showPassword}>
                      <img className="input_icon right-input-icon" src="/static/images/hide-password.svg"  id="hide_password" style={{display: isVisible?"none":"block"}} />
                      <img className="input_icon right-input-icon" src="/static/images/show-password.svg"  id="show_password" style={{display: isVisible?"block":"none"}} />
                    </span>
                    <PasswordStrengthBar className="passwordStrength" password={currentPassword} />

                    <div className="invalid-feedback">{errors.password?.message}</div>
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

export default Registration
