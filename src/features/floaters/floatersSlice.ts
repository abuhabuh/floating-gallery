import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface initialStateInterface {
  floaterImageUrls: string[]
}

const initialState: initialStateInterface = {
  floaterImageUrls: [
    'https://static01.nyt.com/images/2021/02/23/arts/22daftpunk/merlin_68436082_cbc2d16f-e4ce-4e8e-9f06-d2789c9f309b-mobileMasterAt3x.jpg',
    'https://cdn.vox-cdn.com/thumbor/lw117s6AIwbJnn3tSaCNdBd-em0=/0x0:1440x900/1200x800/filters:focal(605x335:835x565)/cdn.vox-cdn.com/uploads/chorus_image/image/68867542/Daft_Punk_breakup_1614005449.0.png'
  ]
}


export const floaterSlice = createSlice({
  name: 'floater',
  initialState: initialState,
  reducers: {
    addFloaterImgUrl: (state, action: PayloadAction<string>) => {
      state.floaterImageUrls.push(action.payload)
      console.log('adding payload str: ' + action.payload)
    }
  }
})


export const { addFloaterImgUrl } = floaterSlice.actions
export const selectImageUrls = (state: initialStateInterface) => state.floaterImageUrls
export default floaterSlice.reducer

