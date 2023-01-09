import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    state: {
        error: false,
        isFetching: false,
        success: false,
        isAuthenticated:false,
    },
    user:null,
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   setIsFetching : (state) => {
    state.state.isFetching = true;
   },
   setLoginFailure : (state) => {
    state.state.isFetching = false;
    state.state.error = true ;
   },
   setLoginSuccess: (state, action) => {
    state.state.isFetching = false;
    state.user = action.payload.user;
    state.state.isAuthenticated = true;
   },
  
  setUpdateAccount: (state, action) => {
    state.state.isFetching = false;
    state.user = action.payload.user;
    state.state.success = true;
  },
  logout: (state) => {
    state.user = null;
    state.state.isFetching = false;
    state.token = "";
    state.state.success = false;
    state.state.isAuthenticated = false;
  },

  },    
});

export const {
  setLoginFailure,
    setUpdateAccount,
    setIsFetching,
    setLoginSuccess,
    logout
  } = userSlice.actions;

export default userSlice.reducer;

