import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userInputType: UserInputType!) {
    createUser(userInputType: $userInputType) {
      uid
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
