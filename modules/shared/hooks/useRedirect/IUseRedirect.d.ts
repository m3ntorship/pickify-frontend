declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
    redirectToPostPage: (id: string) => void;
  }
}

export { IUseRedirect };
