"use client";
import Filters from "./Filters";
import JobDetails from "./JobDetails";
import JobList from "./JobList";

function JobSearch() {
  return (
    <>
      <Filters />
      <JobDetails />
      <JobList />
    </>
  );
}

export default JobSearch;
