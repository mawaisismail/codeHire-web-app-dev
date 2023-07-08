import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
  mutation createCompany($createCompanyArgs: CreateCompanyArgs!) {
    createCompany(createCompanyArgs: $createCompanyArgs) {
      uid
      userType
      profileImageURL
      userName
      token
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
      name
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
      name
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
      name
    }
  }
`;
