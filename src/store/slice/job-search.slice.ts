import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { delay } from "../../utils/functions";
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
  isLoading: true,
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
  extraReducers: (builder) => {
    builder.addCase(getDataAPI.fulfilled, (state, action) => {
      state.jobs = [...state.jobs, ...action.payload.data];
      state.isLoading = false;
      return state;
    });
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

export const getDataAPI = createAsyncThunk(
  "jobs/getDataAPI",
  async (
    { limit = 15, offset = 0 }: { offset: number; limit: number },
    { getState }
  ) => {
    const { selectedExperience, selectedRoles, selectedSalary } = (
      getState() as RootState
    ).jobs;
    const jobs = getSampleJdJSON();
    const experienceFilterJobs = jobs.filter((job) => {
      const rolesMatch =
        !selectedRoles.length ||
        selectedRoles.map((ele) => ele.toLowerCase()).includes(job.jobRole);
      const experienceMatch =
        !selectedExperience.length || selectedExperience.includes(job?.minExp);
      const salaryMatch =
        !selectedSalary.length || selectedSalary.includes(job?.minJdSalary);

      return rolesMatch && experienceMatch && salaryMatch;
    });
    await delay(500);
    return {
      data: experienceFilterJobs.slice(offset, offset + limit),
      total: experienceFilterJobs.length,
    };
  }
);
