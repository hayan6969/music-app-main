import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface OfferState {
  offerDialog: boolean;
  cancelDialog: boolean;
  completeDialog: boolean;
  revisionDialog: boolean;
  ratingDialog: boolean;
  arbitrationDialog: boolean;
  invoiceDialog: boolean;
  reportDialog: boolean;
  musicBackgroundDialog: boolean;
  musicPlayerDialog: boolean;
  isMusicAssets: boolean;
  isCustomer: boolean;
  reportUserDialog: boolean;
  filterExplore: string;
}

const initialState: OfferState = {
  offerDialog: false,
  cancelDialog: false,
  completeDialog: false,
  revisionDialog: false,
  ratingDialog: false,
  arbitrationDialog: false,
  invoiceDialog: false,
  reportDialog: false,
  musicBackgroundDialog: false,
  musicPlayerDialog: false,
  isMusicAssets: false,
  isCustomer: false,
  reportUserDialog: false,
  filterExplore: "all",
};

export const offerSlice = createSlice({
  name: "offerDialog",
  initialState,
  reducers: {
    updateDialog: (state) => {
      state.offerDialog = !state.offerDialog;
    },
    cancelDialog: (state) => {
      state.cancelDialog = !state.cancelDialog;
    },
    completeDialog: (state) => {
      state.completeDialog = !state.completeDialog;
    },
    revisionDialog: (state) => {
      state.revisionDialog = !state.revisionDialog;
    },
    ratingDialog: (state) => {
      state.ratingDialog = !state.ratingDialog;
    },
    arbitrationDialog: (state) => {
      state.arbitrationDialog = !state.arbitrationDialog;
    },
    invoiceDialog: (state) => {
      state.invoiceDialog = !state.invoiceDialog;
    },
    reportDialog: (state) => {
      state.reportDialog = !state.reportDialog;
    },
    musicBackgroundDialog: (state) => {
      state.musicBackgroundDialog = !state.musicBackgroundDialog;
    },
    musicPlayerDialog: (state) => {
      state.musicPlayerDialog = !state.musicPlayerDialog;
    },
    musicAssets: (state, action: PayloadAction<boolean>) => {
      state.isMusicAssets = action.payload;
    },
    isCustomer: (state, action: PayloadAction<boolean>) => {
      state.isCustomer = action.payload;
    },
    reportUserDialog: (state) => {
      state.reportUserDialog = !state.reportUserDialog;
    },
    filterExplore: (state, action: PayloadAction<string>) => {
      state.filterExplore = action.payload;
    },
  },
});

export const {
  updateDialog,
  cancelDialog,
  completeDialog,
  revisionDialog,
  ratingDialog,
  arbitrationDialog,
  invoiceDialog,
  reportDialog,
  musicBackgroundDialog,
  musicPlayerDialog,
  musicAssets,
  isCustomer,
  reportUserDialog,
  filterExplore,
} = offerSlice.actions;
export default offerSlice.reducer;
