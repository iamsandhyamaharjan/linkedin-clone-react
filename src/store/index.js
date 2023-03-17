import { configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reducers'


export default configureStore({
  reducer: {
          root:rootReducer,
  },
})