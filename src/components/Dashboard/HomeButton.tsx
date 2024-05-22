import { Button } from "@mui/material";
import { ReactNode } from "react";

function HomeButton({
  onClick,
  text,
  endIcon,
}: {
  onClick?: () => void;
  text?: string;
  endIcon?: ReactNode;
}) {
  return (
    <Button endIcon={endIcon} onClick={onClick} variant="contained">
      {text}
    </Button>
  );
}

export default HomeButton;
