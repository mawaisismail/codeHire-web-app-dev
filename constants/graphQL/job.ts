import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query getJobs {
    getJobs {
      id
      title
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($jobInput: JobInput!) {
    createJob(jobInput: $jobInput) {
      id
      title
    }
  }
`;
