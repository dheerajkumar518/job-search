import { Box, Container, Typography } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import HomeButton from "./HomeButton";

const HeroSection = () => {
  const route = useRouter();
  function handleClick() {
    route.push("/job-search");
    console.log("Welcome to job search portal!");
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Discover Your Perfect Career Match
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Unlock a world of opportunities and find the job that fits your skills
          and passions. Join thousands of successful professionals who have
          found their dream careers with us.
        </Typography>
        <HomeButton
          endIcon={<IconSearch />}
          onClick={handleClick}
          text="Find Your Dream Job"
        />
      </Container>
    </Box>
  );
};

export default HeroSection;
