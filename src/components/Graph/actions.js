
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loaded: false,
  data: [],
}

const fetchUsers = createAsyncThunk('actions', () => {  
  return axios
    
    .get('https://fakestoreapi.com/products')  
    .then(response =>console.log(response.data));
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loaded = false  
      
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loaded = true
      state.data = action.payload 
      
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loaded = false
      state.data = []
      console.log(action.error.message)
      
    })
  }
})


export default {userSlice,fetchUsers};