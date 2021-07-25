import Button from '@modules/shared/components/atoms/Button/Button';
import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';
import { loginUser } from '../api/login';

const Login: FC = (): ReactElement => {
  const router = useRouter();
  useEffect((): void => {
    if (localStorage.getItem('user')) {
      router
        .push('/')
        .then()
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const login = (): void => {
    loginUser();
    router
      .push('/')
      .then()
      .catch((err) => {
        console.log(err);
      });
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
