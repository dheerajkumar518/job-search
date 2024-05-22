"use client";
import { Stack, Typography } from "@mui/material";
import { IconHome } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function Header() {
  const route = useRouter();
  function handleClick() {
    route.push("/dashboard");
    console.log("Welcome to job search portal!");
  }
  return (
    <Stack py={"10px"}>
      <Stack
        onClick={handleClick}
        direction={"row"}
        alignItems={"center"}
        gap={"10px"}
        sx={{
          cursor: "pointer",
        }}
      >
        <IconHome stroke={1} size={30} />
        <Typography>Dashboard</Typography>
      </Stack>
    </Stack>
  );
}

export default Header;
