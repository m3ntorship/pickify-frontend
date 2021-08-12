import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import styles from './Feedback.module.css';
import Button from '../../atoms/Button/Button';
import * as EButton from '../../atoms/Button/types/EButton';
import Terrible from '../../icons/terrible.svg';
import Good from '../../icons/good.svg';
import Bad from '../../icons/bad.svg';
import Neutral from '../../icons/neutral.svg';
import Amazing from '../../icons/amazing.svg';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

const Feedback: FC = (): ReactElement => {
  const emojis: { name: string; checked: boolean; component: JSX.Element }[] = [
    {
      name: 'terrible',
      checked: false,
      component: <Terrible />,
    },
    {
      name: 'bad',
      checked: false,
      component: <Bad />,
    },
    {
      name: 'neutral',
      checked: false,
      component: <Neutral />,
    },
    {
      name: 'good',
      checked: false,
      component: <Good />,
    },
    {
      name: 'amazing',
      checked: false,
      component: <Amazing />,
    },
  ];
  const [checkedValue, setCheckedValue] = useState(''); // set default value here to be defaultChecked or put ''
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedValue(e.target.value);
    console.log('checkedValue is', checkedValue);
  };

  return (
    <form onSubmit={(): boolean => true} className={styles.container}>
      <h1 className={styles.text}>How would you rate your experience?</h1>
      <div className={styles.emojis}>
        {emojis.map((emoji) => {
          return (
            <>
              <fieldset className={styles['form-options']}>
                <p className={styles['form-answer']}>
                  <input
                    type="radio"
                    onChange={handleChange}
                    name="emoji"
                    id={emoji.name}
                    value={emoji.name}
                  />
                  <label htmlFor={emoji.name}>{emoji.component}</label>
                </p>
              </fieldset>
            </>
          );
        })}
      </div>

      <div>
        <TextInput
          label="Do you have any comments?"
          id="my label"
          inputType={ETextInput.InputType.Default}
          variants={ETextInput.Variants.Default}
          disabled={false}
          value=""
          placeholder="Enter your feedback"
          onChangeInputValueHandler={(): boolean => true}
          onClickDeleteInputValueHandler={(): boolean => true}
          onBlurInputHandler={(): boolean => true}
        />
      </div>

      <div className={styles.button}>
        <Button
          size={EButton.buttonSizeValues.XLARGE}
          variant={EButton.buttonVariantValues.PRIMARY}
          disabled
          buttonText="Submit"
        />
      </div>
    </form>
  );
};
export default Feedback;
