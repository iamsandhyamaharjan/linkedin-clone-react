import { createReducer } from '@reduxjs/toolkit'
import userReducer from "./userReducer";
 
const rootReducer = createReducer({
          userState : userReducer,
});
export default rootReducer;