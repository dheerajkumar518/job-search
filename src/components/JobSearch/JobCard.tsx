import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import {
  IconBriefcase,
  IconClockHour4,
  IconMapPin,
  IconWallet,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { capitalize, getSalary } from "../../utils/functions";
import { JobDetailsType } from "../../utils/types";
import Chip from "../Common/Chip";
import PowerIcon from "../Icons/PowerIcon";

function JobCard({
  job,
  viewMore,
}: {
  job: JobDetailsType;
  viewMore?: () => void;
}) {
  return (
    <Card
      sx={{
        borderRadius: "10px",
      }}
      variant="outlined"
    >
      <CardHeader
        sx={{
          bgcolor: "rgb(248, 249, 251)",
        }}
        avatar={
          <Avatar src={job.logoUrl} variant="square">
            {job.companyName}
          </Avatar>
        }
        title={
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
              <Typography fontSize={"16px"} fontWeight={700}>
                {capitalize(job.jobRole)}
              </Typography>
              <Chip
                leftIcon={<IconClockHour4 stroke={2} size={12} />}
                label={`Posted ${dayjs().add(-2, "day").fromNow()}`}
              />
            </Stack>
            <Stack>
              <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                <IconBriefcase size={14} />
                <Typography fontSize={14} fontWeight={500}>
                  {(job.minExp ?? 0) +
                    ((job.minExp ?? 0) > 1 ? " Years" : " Year")}
                </Typography>
                <IconWallet size={14} />
                <Typography fontSize={14} fontWeight={500}>
                  {getSalary({
                    minSalary: job.minJdSalary || 0,
                    maxSalary: job.maxJdSalary || 0,
                  })}{" "}
                  <Typography
                    component={"span"}
                    variant="caption"
                    fontSize={"12px"}
                  >
                    (estimated)
                  </Typography>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        }
        subheader={capitalize(job.companyName)}
      />
      <CardContent>
        <Typography variant="subtitle1">About role</Typography>
        <Stack onClick={viewMore}>
          <Typography
            className="two-line-clamp"
            fontSize={"14px"}
            color={"rgb(113, 128, 150)"}
            sx={{
              cursor: "pointer",
              "&:hover ": {
                color: "black",
              },
            }}
          >
            {job.jobDetailsFromCompany}
          </Typography>
          <Stack justifyContent={"end"} direction={"row"}>
            <Button
              variant="text"
              sx={{
                textTransform: "lowercase",
                height: "20px",
              }}
              color="success"
            >
              View more
            </Button>
          </Stack>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
          <IconMapPin size={14} />
          <Typography fontSize={12} fontWeight={500}>
            {capitalize(job.location)}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            mt: "15px",
            fontSize: "12px",
          }}
          startIcon={<PowerIcon />}
        >
          Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
