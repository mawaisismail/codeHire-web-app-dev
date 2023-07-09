import { gql } from "@apollo/client";

export const GET_ALL_JOBS_FOR_USERS = gql`
  query getJobs {
    getJobs {
      id
      companyID
      company {
        uid
        userType
        profileImageURL
        userName
        email
        name
        owner
        coverImage
        total_employee
        location
        website
        phone
        established
        about
      }
      title
      coverImg
      experience
      employmentType
      position
      offer_salary
      description
      responsibilities
      qualification
      skills
      freeWords
      location
      createdAt
      updatedAt
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
      companyID
      company {
        uid
        userType
        profileImageURL
        userName
        email
        name
        owner
        coverImage
        total_employee
        location
        website
        phone
        established
        about
      }
      title
      coverImg
      experience
      employmentType
      position
      offer_salary
      description
      responsibilities
      qualification
      skills
      freeWords
      location
      createdAt
      updatedAt
    }
  }
`;

export const APPLY_TO_JOB = gql`
  mutation applyJob($jobApplyDto: JobApplyDto!) {
    applyJob(jobApplyDto: $jobApplyDto) {
      id
      companyID
      company {
        uid
        userType
        profileImageURL
        userName
        email
        name
        owner
        coverImage
        total_employee
        location
        website
        phone
        established
        about
      }
      title
      coverImg
      experience
      employmentType
      position
      offer_salary
      description
      responsibilities
      qualification
      skills
      freeWords
      location
      createdAt
      updatedAt
    }
  }
`;

export const GET_JOB_BY_ID = gql`
  query getJobById($id: String!) {
    getJobById(id: $id) {
      id
      companyID
      company {
        uid
        userType
        profileImageURL
        userName
        email
        name
        owner
        coverImage
        total_employee
        location
        website
        phone
        established
        about
      }
      title
      coverImg
      experience
      employmentType
      position
      offer_salary
      description
      responsibilities
      qualification
      skills
      freeWords
      location
      createdAt
      updatedAt
    }
  }
`;

export const GET_APPLY_JOBS = gql`
  query getApplyJobs {
    getApplyJobs {
      id
      job {
        id
      }
    }
  }
`;
