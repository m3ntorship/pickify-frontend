import { useRouter } from 'next/router';
import type { IUseRedirect } from './IUseRedirect';

export const useRedirect = (): IUseRedirect.IUseRedirectReturn => {
  const router = useRouter();
  const redirectToHomePage = (): void => {
    router.push('/') as unknown as Promise<boolean>;
  };
  const redirectToLoginPage = (): void => {
    router.push('/login') as unknown as Promise<boolean>;
  };
  return { redirectToHomePage, redirectToLoginPage };
};