/* eslint-disable react-hooks/exhaustive-deps */
import DownArrow from "@/components/Icons/DownArrow";
import { AppDispatch, RootState } from "@/store";
import {
  getDataAPI,
  setSelectedExperience,
  setSelectedRoles,
  setSelectedSalary
} from "@/store/slice/job-search.slice";
import { experience, minSalary, roles } from "@/utils/functions";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  let offset = 0;
  const dispatch = useDispatch<AppDispatch>();

  const { selectedExperience, selectedRoles, selectedSalary } = useSelector(
    (state: RootState) => state.jobs
  );

  useEffect(() => {
    dispatch(getDataAPI({ offset, limit: 15 }));
  }, [dispatch, selectedExperience, selectedRoles, selectedSalary]);

  return (
    <Stack
      width={"100%"}
      py={2}
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      alignItems={"flex-end"}
      spacing={"15px"}
      gap={"10px"}
    >
      <Autocomplete
        size="small"
        multiple
        id="tags-outlined"
        options={roles as string[]}
        filterSelectedOptions
        onChange={(_, value) => {
          dispatch(setSelectedRoles(value));
        }}
        renderInput={(params) => <TextField {...params} placeholder="Roles" />}
        sx={{
          minWidth: "200px",
        }}
        ChipProps={{
          sx: {
            borderRadius: "3px",
          },
          deleteIcon: <IconX color="black" size={10} stroke={4} />,
        }}
        popupIcon={<DownArrow />}
      />
      <Autocomplete
        size="small"
        multiple
        id="tags-outlined"
        options={experience as number[]}
        filterSelectedOptions
        onChange={(_, value) => {
          dispatch(setSelectedExperience(value));
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Experience" />
        )}
        sx={{
          minWidth: "200px",
        }}
        ChipProps={{
          sx: {
            borderRadius: "3px",
          },
          deleteIcon: <IconX color="black" size={10} stroke={4} />,
        }}
        popupIcon={<DownArrow />}
      />
      <Autocomplete
        size="small"
        multiple
        id="tags-outlined"
        options={minSalary as number[]}
        filterSelectedOptions
        onChange={(_, value) => {
          dispatch(setSelectedSalary(value));
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Minimum basic salary" />
        )}
        sx={{
          minWidth: "200px",
        }}
        ChipProps={{
          sx: {
            borderRadius: "3px",
          },
          deleteIcon: <IconX color="black" size={10} stroke={4} />,
        }}
        popupIcon={<DownArrow />}
      />
    </Stack>
  );
};

export default Filters;
