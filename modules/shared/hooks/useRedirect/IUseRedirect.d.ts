declare namespace IUseRedirect {
  interface IUseRedirectReturn {
    redirectToHomePage: () => void;
    redirectToLoginPage: () => void;
  }
}

export { IUseRedirect };
