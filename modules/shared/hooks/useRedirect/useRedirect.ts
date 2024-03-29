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
  const redirectToProfilePage = (userId: string): void => {
    router.push(`/profile/${userId}`) as unknown as Promise<boolean>;
  };
  const redirectToPage = (url: string): void => {
    router.push(url) as unknown as Promise<boolean>;
  };
  const redirectToFriendsPage = (): void => {
    router.push('/friends') as unknown as Promise<boolean>;
  };
  return {
    redirectToHomePage,
    redirectToLoginPage,
    redirectToPage,
    redirectToProfilePage,
    redirectToFriendsPage,
  };
};
