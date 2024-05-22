import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slice/job-search.slice"; // Adjust the import path if necessary

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
