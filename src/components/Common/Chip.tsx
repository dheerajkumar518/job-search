import { Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

function Chip({ leftIcon, label }: { leftIcon: ReactNode; label: string }) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      bgcolor={"rgb(240, 240, 255)"}
      color={"rgb(103, 67, 250)"}
      gap={"4px"}
      borderRadius={"4px"}
      padding={"4px 6px"}
    >
      {leftIcon}
      <Typography
        sx={{
          m: "0px",
          fontWeight: 400,
          fontSize: "10px",
        }}
        variant="body2"
      >
        {label}
      </Typography>
    </Stack>
  );
}

export default Chip;
