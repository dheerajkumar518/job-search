"use client";

import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { IconShare, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { setOpenDrawer } from "@/store/slice/job-search.slice";
import { capitalize, getSalary } from "@/utils/functions";
import { JobDetailsType } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function JobDetails() {
  const dispatch = useDispatch<AppDispatch>();

  function handleCloseDrawer() {
    dispatch(setOpenDrawer(false));
  }

  function handleOpenDrawer() {
    dispatch(setOpenDrawer(true));
  }
  const { openDrawer } = useSelector((state: RootState) => state.jobs);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={openDrawer}
      onClose={handleCloseDrawer}
      onOpen={handleOpenDrawer}
    >
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <JobDetailsContent handleCloseDrawer={handleCloseDrawer} />
      </Suspense>
    </SwipeableDrawer>
  );
}

function JobDetailsContent({
  handleCloseDrawer,
}: {
  handleCloseDrawer: () => void;
}) {
  const param = useSearchParams();
  const selectedJobId = param.get("job_id");

  const { jobs } = useSelector((state: RootState) => state.jobs);
  const selectedJob = jobs.find(
    (job) => job.jdUid === selectedJobId
  ) as JobDetailsType;

  return (
    <>
      {selectedJob && (
        <Stack p={"20px"} width={500}>
          <DrawerHead
            selectedJob={selectedJob}
            handleCloseDrawer={handleCloseDrawer}
          />
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ItemList
              title={"Salary"}
              description={getSalary({
                minSalary: selectedJob.minJdSalary || 0,
                maxSalary: selectedJob.maxJdSalary || 0,
              })}
            />
            <Divider variant="middle" component="li" />

            <ItemList
              title={"Min Experience"}
              description={
                (selectedJob.minExp ?? 0) +
                ((selectedJob.minExp ?? 0) > 1 ? " Years" : " Year")
              }
            />
            <Divider variant="middle" component="li" />

            <ItemList
              title={"Locations"}
              description={capitalize(selectedJob.location)}
            />
            <Divider variant="middle" component="li" />
          </List>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"20px"}
          >
            <Stack gap={"5px"} width={"150px"} direction={"column"}>
              <Typography textAlign={"center"}>Overview</Typography>
              <Divider
                sx={{ bgcolor: "black", height: "1px" }}
                variant="middle"
              />
            </Stack>
          </Stack>
          <Typography mt={"20px"} fontWeight={700} variant="subtitle1">
            About role
          </Typography>
          <Stack>
            <Typography fontSize={"14px"} color={"rgb(113, 128, 150)"}>
              {selectedJob.jobDetailsFromCompany}
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default JobDetails;

function DrawerHead({
  selectedJob,
  handleCloseDrawer,
}: {
  selectedJob: JobDetailsType;
  handleCloseDrawer: () => void;
}) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      className="drawerHead"
    >
      <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
        <Typography fontSize={"16px"} fontWeight={700}>
          {capitalize(selectedJob?.jobRole)}
        </Typography>
        <IconButton
          sx={{
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: "12px",
          }}
        >
          <IconShare size={16} />
        </IconButton>
      </Stack>
      <Button
        sx={{
          textTransform: "unset",
        }}
        color="inherit"
        variant="outlined"
        startIcon={<IconX />}
        onClick={handleCloseDrawer}
      >
        Close
      </Button>
    </Stack>
  );
}

function ItemList({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primaryTypographyProps={{
          fontSize: "12px",
          variant: "caption",
        }}
        secondaryTypographyProps={{
          fontSize: "16px",
          variant: "body1",
        }}
        primary={title}
        secondary={<Typography>{description}</Typography>}
      />
    </ListItem>
  );
}
