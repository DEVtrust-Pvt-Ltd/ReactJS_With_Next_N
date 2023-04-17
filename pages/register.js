import React  from 'react'
import Registration from 'components/auth/registration'
import apiClient from 'libs/apiClient'
import { useRouter } from 'next/router'
import { toast} from 'react-toastify';

const Register = () => {
  let router= useRouter()

  async function onSubmit(data){
    
    let responseError = "";
    let errorMessage = "";
    let payload = {
      name:data.fullName,
      email:data.userEmail,
      password:data.password,
    }
    await apiClient.registerUser(payload).then(response =>{
      if(response?.success){
        toast.success(response?.message, {
          toastId: 'toastSuccess',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        router.push("/");
      }
    }).catch(error => {
      responseError = error.response.data.error;
      if(responseError.hasOwnProperty('email')){
        errorMessage = error.response.data.error.email[0];
        toast.error(errorMessage, {
          toastId: 'toastError',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }else{
        errorMessage = "Something Went Wrong."
        toast.error(errorMessage, {
          toastId: 'toastCatchError',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }); 
  }

  return (
    <>
      <Registration submitForm={onSubmit} />
    </>
  )
}


export default Register
