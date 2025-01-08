import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ChatState {
  chatDrawer: boolean;
  chatId: number;
}

const initialState: ChatState = {
  chatDrawer: false,
  chatId: 0,
};

export const chatSlice = createSlice({
  name: "chatDrawer",
  initialState,
  reducers: {
    updateDrawer: (state) => {
      state.chatDrawer = !state.chatDrawer;
    },
    chatId: (state, action: PayloadAction<number>) => {
      state.chatId = action.payload;
    },
  },
});

export const { updateDrawer, chatId } = chatSlice.actions;
export default chatSlice.reducer;
