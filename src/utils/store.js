import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

export default store

/* Create Store -
 *   configure Store() - RTK
 *
 * Provide my store to app
 * - <Provider store = {store} - import from react-redux
 *
 * Slice
 * - RTK - createSLice({
 *  name: '',
 *  initialState:
 *  reducers: {
 *     addItem: (state,action)=>{state=action.payload}
 *   }
 * })
 * export const {addItem} = cartSlice.actions
 * export default cartSlice.reducer
 *
 *
 * Put that Slice into Store
 *   - {
 *   reducer: {
 *   cart: cartSLice,
 *  }
 * }
 * */
