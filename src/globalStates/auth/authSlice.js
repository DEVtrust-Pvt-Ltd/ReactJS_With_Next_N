import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from 'libs/apiClient'


let userToken = null;
if (typeof window !== 'undefined') {
  userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
}

const initialState = {
  userToken: null,
  userDetails: null,
  error:null,
  success:null,
  status: 'idle',
}


export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload,{ rejectWithValue }) => {
    
    await apiClient.userLogin(payload).then(response => {
      return response
    }).catch(error =>{
      if (error) {
        throw error
      }
      return rejectWithValue(error.response.data)
    });
  }
)



const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = 'rejected'
      state.error=true
      state.success=false
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      console.log('asdasd',action?.payload);
      state.status = 'idle'
      state.userToken = action?.payload?.userToken
      state.userDetails = action?.payload?.user
      state.error=false
      state.success=true
    })
  }
})

export const userState = (state) => state.userData

export const userReducer = authSlice.reducer
