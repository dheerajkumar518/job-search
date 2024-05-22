import { Container, Stack } from "@mui/material";
import React from "react";
import Header from "../Common/Header";

function LatOut({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Stack height={"50px"}>
        <Header />
      </Stack>
      <Stack overflow={"auto"} height={"calc(100vh - 50px)"}>
        {children}
      </Stack>
    </Container>
  );
}

export default LatOut;
