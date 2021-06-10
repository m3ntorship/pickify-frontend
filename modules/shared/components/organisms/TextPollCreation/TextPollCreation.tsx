import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import OptionGroup from '../../molecules/OptionGroup/OptionGroup';

const TextPollCreation: FC = (): ReactElement => {
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };
  const initialOptions = [
    { id: randomId(), value: '1' },
    { id: randomId(), value: '2' },
  ];
  console.log('Hello');
  // useEffect(() => {
  //   return (): void => {
  //     console.log('Clean');
  //   };
  // }, [initialOptions]);
  const [options, setOptions] = useState(initialOptions);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });
  const onSubmit = (): void => {
    setFormSubmitted(true);
  };
  // console.log('initialOptions: ', initialOptions);
  const onError = (): void => {
    setFormSubmitted(true);
    console.log('error');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <OptionGroup
        groupId="0"
        options={options}
        setOptions={setOptions}
        register={register}
        formSubmitted={formSubmitted}
        reset={reset}
        errors={errors}
        dirtyFields={dirtyFields}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default TextPollCreation;
