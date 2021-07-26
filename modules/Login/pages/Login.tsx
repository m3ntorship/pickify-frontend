import Button from '@modules/shared/components/atoms/Button/Button';
import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';
import { loginUser, register } from '../../shared/api/auth';
import { getUserToken } from '../../shared/logic/userAuth/userAuth';
import { useRedirect } from '../../shared/hooks/useRedirect/useRedirect';

const Login: FC = (): ReactElement => {
  const { redirectToHomePage } = useRedirect();

  useEffect(() => {
    const user = getUserToken();
    if (user) {
      redirectToHomePage();
    }
  }, []);

  const login = async (): Promise<void> => {
    await loginUser();
    const isError = await register();
    if (!isError) {
      redirectToHomePage();
      toast.success('You logged in successfully');
    } else {
      toast.error('An error has occured');
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
