import React,{ useEffect,useState } from 'react'
import Login from 'components/auth/login'
import { useRouter } from 'next/router'
import apiClient from 'libs/apiClient'
import { toast} from 'react-toastify';
import {useAppSelector } from 'store'
import {userState } from 'globalStates/auth/authSlice'


const IndexPage = () => {
  const router = useRouter()
  const userInfo = useAppSelector(userState)
  const [clientCount,setClientCount] = useState(0)
  
  useEffect(() => {
    let authToken = localStorage.getItem('userToken')?localStorage.getItem('userToken'):null; 
    if (authToken != null) {
      if(clientCount > 0){
        router.push('/clients');
      }else{
        router.push('/addClient');
      }
    }
  }, [userInfo])



  async function onSubmit(data){
    let errorMessage = "";
    let payload = {
      email:data.userEmail,
      password:data.password,
    }
    await apiClient.userLogin(payload).then( async(response) =>{
      if(response?.success){
        toast.success(response?.message, {
          toastId: 'toastSuccess',
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        let authToken = localStorage.getItem('userToken')?localStorage.getItem('userToken'):null; 
        await apiClient.getAllClients(authToken).then(res => {
          if(res?.data?.length >0){
            setClientCount(res?.data?.length);
            router.push('/clients');
          }else{
            router.push('/addClient');
          }
        }).catch (error => {
          localStorage.removeItem('userToken')
          router.push('/');
        });
      }
    }).catch(error => {
      if(error?.response?.data?.error){
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
      <Login submitForm={onSubmit} />
    </>
  )
}

export default IndexPage
