declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
    redirectToProfilePage: (userId: string) => void;
    redirectToPage: (url: string) => void;
    redirectToFriendsPage: () => void;
  }
}

export { IUseRedirect };
