export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CreateUser extends Omit<User, "id"> {}

export interface UpdateUser extends Partial<User> {}

export interface DeleteUser {
  id: string;
}
