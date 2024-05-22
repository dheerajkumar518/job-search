import { Button, Stack } from "@mui/material";
import React from "react";

function HomeButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="contained">
      Find Your Dream Job
    </Button>
  );
}

export default HomeButton;
