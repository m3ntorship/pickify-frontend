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
  const redirectToProfilePage = (): void => {
    router.push('/profile') as unknown as Promise<boolean>;
  };
  const redirectToPostPage = (url: string): void => {
    router.push(url) as unknown as Promise<boolean>;
  };
  const redirectToFriendsPage = (): void => {
    router.push('/friends') as unknown as Promise<boolean>;
  };
  return {
    redirectToHomePage,
    redirectToLoginPage,
    redirectToPostPage,
    redirectToProfilePage,
    redirectToFriendsPage,
  };
};
