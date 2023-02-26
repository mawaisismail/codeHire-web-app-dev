import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInputType: UserInputType!) {
    createUser(userInputType: $userInputType) {
      id
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
      id
      uid
      userType
      profileImageURL
      userName
      name
    }
  }
`;
