"use client";
import React from "react";
import HomeButton from "./HomeButton";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

function Dashboard() {
  const route = useRouter();
  function handleClick() {
    route.push("/job-search");
    console.log("Welcome to job search portal!");
  }
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <HomeButton onClick={handleClick} />
    </Stack>
  );
}

export default Dashboard;
