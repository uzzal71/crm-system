export type UserType = {
  name: string;
  email: string;
  role: string;
};

export interface AuthState {
  user: UserType | null;
  token: string | null;
}
