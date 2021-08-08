declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
    redirectToPostPage: (url: string) => void;
  }
}

export { IUseRedirect };
