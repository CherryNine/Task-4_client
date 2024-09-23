import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "app/auth/store/auth.slice";
import { userSlice } from "app/users/store/users.slice";




const store = configureStore({
  reducer: {
   
    auth: authSlice.reducer,
    users: userSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
