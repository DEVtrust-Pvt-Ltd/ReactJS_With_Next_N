import { useEffect,useState } from 'react'
import ResetPassword from 'components/auth/resetPassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import apiClient from 'libs/apiClient'


const ResetPasswordToken = () => {
  const [userToken, setUserToken] = useState("");
  const router = useRouter()
  
  useEffect(() => {
    const {token} = router.query;
    setUserToken(token);
  })



  async function onSubmit(data){
    let errorMessage = "";
    let payload = {
      token:userToken,
      password:data.password
    }
    await apiClient.resetPassword(payload).then(response =>{
      if(response?.success){
        toast.success(response?.message, {
          toastId: 'toastSuccess',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        router.push("/dashboard");
      }
    }).catch(error => {
      if(error.response.data.error){
        errorMessage = error.response.data.message;
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
      <ToastContainer />
      <ResetPassword submitForm={onSubmit} />
    </>
  )
}

export default ResetPasswordToken
