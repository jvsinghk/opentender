export interface User {
  email: string;
  name: string;
  company: string;
}

export interface AuthError {
  message: string;
  field?: string;
}