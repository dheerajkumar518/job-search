import { Card, InputBase } from "@mui/material";

export default function SearchField({
  onChange,
}: {
  onChange: (x: any) => void;
}) {
  return (
    <Card
      component="form"
      variant="outlined"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        onChange={onChange}
        sx={{ ml: 1, flex: 1, height: "34px" }}
        placeholder="Search Company Name"
        inputProps={{ "aria-label": "Search Company Name" }}
      />
    </Card>
  );
}
