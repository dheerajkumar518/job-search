"use client";
import React from "react";
import JobList from "./JobList";
import Filters from "./Filters";
import JobDetails from "./JobDetails";
import { Container } from "@mui/material";

function JobSearch() {
  return (
    <Container>
      <Filters />
      <JobDetails />
      <JobList />
    </Container>
  );
}

export default JobSearch;
