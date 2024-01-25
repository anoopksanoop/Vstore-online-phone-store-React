import { createSlice } from "@reduxjs/toolkit";

const userString = sessionStorage.getItem('user');
let user = {};
if(userString){
  const userParsed = JSON.parse(userString);
  if(userParsed && userParsed.id){
    user = userParsed;

  }
} 
export const UserSlice = createSlice({
    name: "user",
    initialState: {
      value: user,
    },
    reducers: {
      setUser: (state, { payload }) => {
        const user = {
          ...state.value,
          ...(payload),
        
          isLogedIn: true 
        } 

        state.value = user;
        sessionStorage.setItem('user', JSON.stringify(user))
      },
    
      logout: (state) => {
        state.value = null;
      },
    },
  });
  
  export const { setUser, logout } = UserSlice.actions;
  
  export const selectUser = (state) => state.user.value;
  
  export default UserSlice.reducer;