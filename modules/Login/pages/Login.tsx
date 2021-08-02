import Button from '@modules/shared/components/atoms/Button/Button';
import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';
import { useRedirect } from '../../shared/hooks/useRedirect/useRedirect';

const Login: FC = (): ReactElement => {
  const [session, loading] = useSession();
  const { redirectToHomePage } = useRedirect();

  useEffect(() => {
    if (!loading && session) {
      console.log(session);
      redirectToHomePage();
    }
  }, [session, loading]);

  return (
    <div className="flex justify-center m-3">
      <Button
        onClick={async (): Promise<void> => signIn()}
        variant={EButton.buttonVariantValues.PRIMARY}
        size={EButton.buttonSizeValues.LARGE}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
