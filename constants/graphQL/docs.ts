import { gql } from "@apollo/client";

export const GET_DOCS = gql`
  query getDocs {
    getDocs {
      uid
      url
      name
    }
  }
`;

export const UPLOAD_DOCS = gql`
  mutation upload($url: String!, $name: String!) {
    upload(url: $url, name: $name) {
      uid
    }
  }
`;

export const DELETE_DOC = gql`
  mutation deleteDoc($uid: String!) {
    deleteDoc(uid: $uid) {
      uid
    }
  }
`;
