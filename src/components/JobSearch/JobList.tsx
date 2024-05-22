"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Stack } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  getDataAPI,
  setLoading,
  setOpenDrawer,
} from "@/store/slice/job-search.slice";
import { ShowCode } from "@/components/Common/ShowCode";
import JobCard from "./JobCard";
import { useRouter } from "next/navigation";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
let offset = 0;
const JobList = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { jobs, isLoading } = useSelector((state: RootState) => state.jobs);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastJobCardRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        offset += 15;
        dispatch(setLoading(true));
        dispatch(getDataAPI({ offset, limit: 15 }));
      }
    });
    if (node) observer.current.observe(node);
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  function viewMore(job_id: string) {
    dispatch(setOpenDrawer(true));
    router.push(`/job-search?job_id=${job_id}`);
  }

  return (
    <Stack direction={"column"} spacing={"10px"}>
      {jobs?.map((job, index) => (
        <Stack
          key={index}
          ref={index === jobs.length - 1 ? lastJobCardRef : null}
        >
          <JobCard viewMore={() => viewMore(job.jdUid)} job={job} />
        </Stack>
      ))}
      <ShowCode>
        <ShowCode.When isTrue={isLoading}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"300px"}
          >
            <CircularProgress color="success" size={40} />
          </Stack>
        </ShowCode.When>

        <ShowCode.When isTrue={!isLoading && jobs?.length === 0}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"200px"}
          >
            No results
          </Stack>
        </ShowCode.When>
      </ShowCode>
    </Stack>
  );
};

export default JobList;
