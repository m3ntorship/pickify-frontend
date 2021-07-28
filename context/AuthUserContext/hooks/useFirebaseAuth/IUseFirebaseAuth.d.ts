declare namespace IUseFirebaseAuth {
  export interface IProps {
    user: IUserData | null;
    isAuthenticated: boolean;
    loading: boolean;
  }

  export interface IUserData {
    userImg: string | undefined;
    username: string | undefined;
    email: string | undefined;
  }
}

export { IUseFirebaseAuth };
