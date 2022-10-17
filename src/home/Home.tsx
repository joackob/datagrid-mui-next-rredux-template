import { Container, Stack } from "@mui/material";

import PlansSection from "./PlansSection";
import StepsToDeploySection from "./StepsToDeploySection";
import BuildFastSection from "./BuildFastSection";
import CustomerSuportSection from "./CustomerSuportSection";
import TemplateCustomSection from "./TemplateCustomSection";
import MainSection from "./MainSection";
import OnlineSaleSection from "./OnlineSaleSection";

const Home = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: {
            xs: "var(--color-primario)",
            sm: "white",
          },
        }}
      >
        <MainSection />
      </Container>

      <Container maxWidth={false} className="background-light">
        <Container>
          <Stack spacing={8} py={8}>
            <PlansSection />
            <StepsToDeploySection />
            <BuildFastSection />
            <CustomerSuportSection />
            <OnlineSaleSection />
            <TemplateCustomSection />
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
