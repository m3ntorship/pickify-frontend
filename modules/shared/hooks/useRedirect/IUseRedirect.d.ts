declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
    redirectToProfilePage: () => void;
    redirectToPage: (url: string) => void;
    redirectToFriendsPage: () => void;
  }
}

export { IUseRedirect };
