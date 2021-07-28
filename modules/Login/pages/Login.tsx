import Button from '@modules/shared/components/atoms/Button/Button';
import type { FC, ReactElement, ReactText } from 'react';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';
import {
  loginUser,
  register,
} from '../../../context/AuthUserContext/api/authApi';
import { useRedirect } from '../../shared/hooks/useRedirect/useRedirect';
import { useAuth } from '../../../context/AuthUserContext/AuthUserContext';

const Login: FC = (): ReactElement => {
  const { loading, isAuthenticated } = useAuth();
  const { redirectToHomePage } = useRedirect();
  const toastId = useRef<ReactText>();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      redirectToHomePage();
    }
  }, [isAuthenticated, loading]);

  const login = async (): Promise<void> => {
    const token: string | undefined = await loginUser();
    toastId.current = toast.warning('Please wait while logging', {
      autoClose: false,
    });
    const { resData } = await register(token);
    toast.dismiss(toastId.current);
    if (!resData.error) {
      redirectToHomePage();
      toast.success(resData.message);
    } else {
      toast.error(resData.message);
    }
  };
  return (
    <div className="flex justify-center m-3">
      <Button
        onClick={login}
        variant={EButton.buttonVariantValues.PRIMARY}
        size={EButton.buttonSizeValues.LARGE}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
