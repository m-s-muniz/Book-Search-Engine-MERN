import { gql } from '@apollo/client';
// login user mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// add user mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// save book mutation
export const SAVE_BOOK = gql`
mutation saveBook($authors: [String]!, $bookId: String!, $description: String, $image: String, $link: String, $title: String!) {
  saveBook(authors: $authors, bookId: $bookId, description: $description, image: $image, link: $link, title: $title) {
    _id
    username
    email
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

//remove book mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    password
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;