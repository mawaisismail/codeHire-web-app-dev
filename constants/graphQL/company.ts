import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
  mutation createCompany($createCompanyArgs: CreateCompanyArgs!) {
    createCompany(createCompanyArgs: $createCompanyArgs) {
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
      token
      workingHours {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
    }
  }
`;
export const UPDATE_COMPANY_INFO = gql`
  mutation updateCompany($createCompanyArgs: CreateCompanyArgs!) {
    updateCompany(createCompanyArgs: $createCompanyArgs) {
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
      workingHours {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      token
    }
  }
`;
export const GET_LOGIN_COMPANY = gql`
  query getLoginCompany($uid: String!) {
    getLoginCompany(uid: $uid) {
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
      workingHours {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      established
      about
      token
    }
  }
`;
export const GET_COMPANY = gql`
  query getCompany {
    getCompany {
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
      workingHours {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      about
      token
    }
  }
`;
