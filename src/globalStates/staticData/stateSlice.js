import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from 'libs/apiClient'

const initialState = {
  statesAndCity:[],
  error:null,
  success:null,
  status: 'idle',
}


export const getUsState = createAsyncThunk(
  'usStatesData/getStatesCity',
  async () => {
    const response = await apiClient.getStateAndCity() //NOSONAR
    return response
  }
)

const stateSlice = createSlice({
  name: 'usStatesData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUsState.fulfilled, (state, action) => {
      state.status = 'idle'
      state.statesAndCity = action.payload.data
    })
  }
})

export const usStates = (state) => state.usStatesData

export const usStatesReducer = stateSlice.reducer



