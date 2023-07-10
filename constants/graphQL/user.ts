import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInputType: UserInputType!) {
    createUser(userInputType: $userInputType) {
      uid
      first_name
      last_name
      userType
      profileImageURL
      userName
      name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;
export const UPDATE_USER_INFO = gql`
  mutation updateUser($userInputType: UserInputType!) {
    updateUser(userInputType: $userInputType) {
      uid
      first_name
      last_name
      userType
      profileImageURL
      userName
      name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

export const GET_USER_BY_UID = gql`
  query getUserById($uid: String!) {
    getUserById(uid: $uid) {
      uid
      first_name
      last_name
      userType
      profileImageURL
      userName
      name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;
export const GET_USER = gql`
  query getUser {
    getUser {
      uid
      first_name
      last_name
      userType
      profileImageURL
      userName
      name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

export const GET_LOGIN_USER_BY_UID = gql`
  query getLoginUser($uid: String!) {
    getLoginUser(uid: $uid) {
      uid
      userType
      first_name
      last_name
      profileImageURL
      userName
      name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userInputType: UserInputType!) {
    updateUser(userInputType: $userInputType) {
      uid
      userType
      profileImageURL
      userName
      name
      first_name
      last_name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      uid
      userType
      profileImageURL
      userName
      name
      first_name
      last_name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

export const GET_SAVE_USERS = gql`
  query getAllSaveUsers {
    getAllSaveUsers {
      uid
      userType
      profileImageURL
      userName
      name
      first_name
      last_name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;

// export const SAVE_USER_BY_ID = gql`
//   mutation saveUser($id: String!) {
//    saveUser(id: $ID!){
//       uid
//       }
//       }
//       `;

export const FILTER_USERS = gql`
  query userSearch($search: String!) {
    userSearch(search: $search) {
      uid
      userType
      profileImageURL
      userName
      name
      first_name
      last_name
      currentOccupation
      age
      birthday
      phone
      otherEmail
      documents
      email
      location
      about
      desire {
        desiredOccupation
        firstChoiceOfWork
        secondChoiceOfWork
        employmentType
        annualSalary
        previousSalary
      }
      profession
      otherOccupation
      education {
        degree
        institute
        year
        info
      }
      address {
        Country
        postalCode
        building
      }
      experiences {
        position
        institute
        year
        info
      }
      skills
      languages
      token
    }
  }
`;
