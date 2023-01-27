import { createSlice } from "@reduxjs/toolkit";

export const auction = createSlice({
  name: "auction",
  initialState: {
    auctions: [],
    allAuctions: [],
  },
  reducers: {
    setAuctions: (state, action) => {
      //payload:all auctions
      state.allAuctions = action.payload;
    },

    addNewAuction: (state, action) => {
      //payload:newAuction
      state.auctions.push(action.payload);
    },

    updateAuction: (state, action) => {
      //payload:updated-auction
      state.auctions = state.auctions.map((auction) => {
        if (auction.id == action.payload) {
          return { ...auction, ...action.payload };
        }
      });
    },

    deleteAuction: (state, action) => {
      //payload : id
      state.auctions = state.auctions.filter((auction) => {
        return auction.id != action.payload;
      });
    },
  },
});

export const { setAuctions, addNewAuction, updateAuction, deleteAuction } =
  auction.actions;

export default auction.reducer;
