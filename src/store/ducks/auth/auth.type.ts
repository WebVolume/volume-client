export interface UserDto {}

export interface SignInRequestType {
  id: string;
  password: string;
}

export interface SignInResponseType {
  id: string;
}

export interface CheckUserExistRequestType {
  email?: string | null;
  id?: string | null;
  kakao?: boolean;
}

export interface CheckUserExistResponseType {
  exist: boolean;
  type: string;
  id: string | null;
  email: string | null;
}

export interface SignUpRequestType {
  id: string;
  userName: string;
  email: string | null;
  password?: string;
  kakao?: boolean;
}

export interface SignUpResponseType {
  id: string;
}

export interface CheckIdDuplicationRequestType {
  id: string;
}

export interface CheckIdDuplicationResponseType {
  exist: boolean;
  type: string;
  id: string | null;
  email: string | null;
}
