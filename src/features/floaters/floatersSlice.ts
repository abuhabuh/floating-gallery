import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const floaterImageUrls: string[] = [];


export const floaterSlice = createSlice({
  name: 'floater',
  initialState: {
    floaterImageUrls: floaterImageUrls
  },
  reducers: {
    addFloaterImgUrl: (state, action: PayloadAction<string>) => {
      state.floaterImageUrls.push(action.payload)
    }
  }
})


export const { addFloaterImgUrl } = floaterSlice.actions
export default floaterSlice.reducer

