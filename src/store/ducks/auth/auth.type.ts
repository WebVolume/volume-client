export interface UserDto {}

export interface SignInRequestType {
  id: string;
  password: string;
}

export interface SignInResponseType {
  id: string;
}

export interface CheckDuplicationRequestType {
  email?: string | null;
  id?: string | null;
}

export interface CheckDuplicationResponseType {
  exist: boolean;
  type: string;
  id: string | null;
  email: string | null;
}

export interface SignUpRequestType {
  id: string;
  username: string;
  email: string | null;
  password?: string;
  kakao?: boolean;
}

export interface SignUpResponseType {
  id: string;
}
