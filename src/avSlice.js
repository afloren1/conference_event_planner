import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://i.pinimg.com/736x/3d/ca/43/3dca4327b648e87df9b26cf86201696b.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://i.pinimg.com/564x/68/2d/fe/682dfeb9a10ca2372168bc5308ea3717.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://i.pinimg.com/564x/c2/5e/ab/c25eabf2885f5aacc2a081e50fad013d.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://i.pinimg.com/564x/28/72/ac/2872ac1d4220b1827af41ae14b386614.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://i.pinimg.com/736x/3a/e9/10/3ae910a5743cf9cf2b6867d0c3eed5c4.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
    const item = state[action.payload];
    if (item) {
        item.quantity++;
    }
},
    decrementAvQuantity: (state, action) => {
    const item = state[action.payload];
    if (item && item.quantity > 0) {
        item.quantity--;
    }
},
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
