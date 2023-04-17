import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const forgotPass = ({submitForm,buttonDisable}) => {

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string()
      .required('Email is required')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter valid email'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit,formState } = useForm(formOptions);
  const { errors } = formState;

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
                  <h3>Recover Password</h3>
                  <p>Enter your registered email to reset your password.</p>
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
                  <div className="register_text">
                    <p className="text-left">Your will receive an E-mail with instructions to reset your password.</p>
                  </div>
                  <button type="submit" disabled={buttonDisable} className="btn btn-primary">Recover Password</button>
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

export default forgotPass
