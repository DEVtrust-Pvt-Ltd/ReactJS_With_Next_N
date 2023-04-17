import React,{useState} from 'react'
import ForgotPass from 'components/auth/forgotPass'
import { useRouter } from 'next/router'
import apiClient from 'libs/apiClient'
import { toast} from 'react-toastify';


const ForgotPassword = () => {
  const router = useRouter()
  const [disableButton,SetDisableButton] = useState(false);
  
  async function onSubmit(data){
    SetDisableButton(true)
    let errorMessage = "";
    let payload = {
      email:data.userEmail
    }
    await apiClient.forgotPassword(payload).then(response =>{
      if(response?.success){
        toast.success(response?.message, {
          toastId: 'toastSuccess',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        SetDisableButton(false)
        router.push("/");
      }
    }).catch(error => {
      if(error.response.data.error){
        errorMessage = error.response.data.message;
        toast.success(errorMessage, {
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
      <ForgotPass submitForm={onSubmit} buttonDisable={disableButton}/>
    </>
  )
}

export default ForgotPassword
