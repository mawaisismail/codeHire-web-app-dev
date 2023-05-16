import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query getJobs {
    getJobs {
      id
      title
    }
  }
`;

export const GET_COMPANY_JOB = gql`
  query getCompanyJobs {
    getCompanyJobs {
      id
      title
      createdAt
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

export const APPLY_TO_JOB = gql`
  mutation applyJob($jobApplyDto: JobApplyDto!) {
    applyJob(jobApplyDto: $jobApplyDto) {
      id
    }
  }
`;
