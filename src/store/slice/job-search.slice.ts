import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobDetailsType } from "../../utils/types";
import { getSampleJdJSON } from "../data";

interface JobState {
  jobs: JobDetailsType[];
  selectedRoles: string[];
  selectedExperience: number[];
  selectedSalary: number[];
  searchText: string;
  isLoading: boolean;
  openDrawer: boolean;
}

const initialState: JobState = {
  jobs: [],
  selectedRoles: [],
  selectedExperience: [],
  selectedSalary: [],
  searchText: "",
  isLoading: false,
  openDrawer: false,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  return getSampleJdJSON();
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSelectedRoles(state, action: PayloadAction<string[]>) {
      state.selectedRoles = action.payload;
      state.jobs = [];
      state.isLoading = true;
    },
    setSelectedExperience(state, action: PayloadAction<number[]>) {
      state.selectedExperience = action.payload;
      state.jobs = [];
      state.isLoading = true;
    },
    setSelectedSalary(state, action: PayloadAction<number[]>) {
      state.selectedSalary = action.payload;
      state.jobs = [];
      state.isLoading = true;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
      state.jobs = [];
      state.isLoading = true;
    },
    setOpenDrawer(state, action: PayloadAction<boolean>) {
      state.openDrawer = action.payload;
    },
    appendJobs(state, action: PayloadAction<JobDetailsType[]>) {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setSelectedRoles,
  setSelectedExperience,
  setSelectedSalary,
  setSearchText,
  setLoading,
  setOpenDrawer,
} = jobSlice.actions;

export default jobSlice.reducer;
