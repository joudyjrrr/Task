import { allLangs } from "@/locales";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "settings",
  initialState: {
    lang: allLangs[0].value,
    dir: "ltr",
    contactInfo: "olivia@untitledui.com",
    iban: "",
  },
  reducers: {
    changeLangHandler: (state, action) => {
      const newLang = action.payload.value === "en" ? "ar" : "en";
      state.lang = newLang;
    },
    changeContactInfoHandler: (state, action) => {
      state.contactInfo = action.payload;
    },
    setSettingsState: function (
      state,
      action: PayloadAction<{ key: string; payload: string }>
    ) {
      const { payload, key } = action.payload;
      state.dir = payload;
    },
  },
  // extraReducers: {
  // },
});

export default slice.reducer;

export const { changeLangHandler, changeContactInfoHandler } = slice.actions;
