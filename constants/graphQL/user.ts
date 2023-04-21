import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInputType: UserInputType!) {
    createUser(userInputType: $userInputType) {
      uid
      userType
      profileImageURL
      userName
      name
      token
    }
  }
`;
export const UPDATE_USER_INFO = gql`
  mutation updateUser($userInputType: UserInputType!) {
    updateUser(userInputType: $userInputType) {
      uid
      userType
      profileImageURL
      userName
      name
    }
  }
`;

export const GET_USER_BY_UID = gql`
  query getUserById($uid: String!) {
    getUserById(uid: $uid) {
      uid
      userType
      profileImageURL
      userName
      name
    }
  }
`;
