"use client";
import { Button, Stack } from "@mui/material";
import axios from "axios";
import React from "react";

function TestLocation() {
  async function handleClick() {
    const { data } = await axios.post("/api/getLocation");
    console.log(data);
  }
  return (
    <Stack>
      <Button onClick={() => handleClick()} variant="contained">
        Get Location
      </Button>
    </Stack>
  );
}

export default TestLocation;
