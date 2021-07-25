import Button from '@modules/shared/components/atoms/Button/Button';
import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';
import { loginUser, register } from '../../shared/api/auth';

const Login: FC = (): ReactElement => {
  const router = useRouter();
  useEffect(() => {
    if (document.cookie.split('=')[0] === 'user') {
      router
        .push('/')
        .then()
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const login = async (): Promise<boolean> => {
    loginUser();
    await register();
    return router.push('/');
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
