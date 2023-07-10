import React, { FC } from "react";
import { Container } from "@mui/material";
import { JobPreview } from "@/components/jobs/JobPreview";

const Index: FC = () => {
  return (
    <Container maxWidth="lg">
      <JobPreview />
    </Container>
  );
};
export default Index;
