declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
    redirectToProfilePage: () => void;
    redirectToPostPage: (url: string) => void;
  }
}

export { IUseRedirect };
