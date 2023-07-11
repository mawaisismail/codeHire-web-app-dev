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

export const GET_RECOMMENDED_JOB = gql`
  query getRecommendedJobs {
    getRecommendedJobs {
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

export const UPDATE_JOB = gql`
  mutation updateJob($jobInput: JobInput!) {
    updateJob(jobInput: $jobInput) {
      id
    }
  }
`;

export const HIRE_USER = gql`
  mutation hireUser($job_id: String!, $user_id: String!) {
    hireUser(job_id: $job_id, user_id: $user_id) {
      id
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

export const CANCELED_HIRE_USER = gql`
  mutation cancelHired($id: String!) {
    cancelHired(id: $id) {
      id
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
export const GET_FILTER_JOBS = gql`
  query getFilterJobs($search: String!) {
    getFilterJobs(search: $search) {
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
