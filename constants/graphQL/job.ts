import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query getJobs {
    getJobs {
      id
      title
    }
  }
`;
