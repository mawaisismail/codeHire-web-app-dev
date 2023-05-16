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
