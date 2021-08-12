import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { useDetectClickOut } from '@modules/shared/hooks/useDetectClickOut/useDetectClickOut';
import styles from './Feedback.module.css';
import Button from '../../atoms/Button/Button';
import * as EButton from '../../atoms/Button/types/EButton';
import Terrible from '../../icons/terrible.svg';
import Good from '../../icons/good.svg';
import Bad from '../../icons/bad.svg';
import Neutral from '../../icons/neutral.svg';
import Amazing from '../../icons/amazing.svg';
import HappyIcon from '../../icons/happy.svg';
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
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { nodeRef, triggerRef, setShow, show } = useDetectClickOut(false);

  const onChangeInputValueHandler = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(e.target.value);
  };
  const onClickDeleteInputValueHandler = (): void => {
    setInputValue('');
  };

  const positiveOrNegativeFeedback = (): string => {
    if (checkedValue === 'good' || checkedValue === 'amazing') {
      return 'positiveFeedback';
    }
    return 'negativeFeedback';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedValue(e.target.value);
    setDisabled(false);
  };

  const handleSubmit = (): void => {
    setIsSubmitted(true);
    setTimeout(() => {
      setShow(!show);
    }, 3000);
    console.log('checkedValue is', checkedValue);
  };
  return (
    <div className="">
      <div
        role="button"
        aria-pressed={false}
        tabIndex={0}
        aria-hidden
        ref={triggerRef}
      >
        <HappyIcon />
      </div>
      {show && (
        <div className={styles.container} role="menu" ref={nodeRef}>
          {!isSubmitted && (
            <form onSubmit={handleSubmit}>
              <h1 className={styles.text}>
                How would you rate your experience?
              </h1>
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
                          <label className={styles.emoji} htmlFor={emoji.name}>
                            {emoji.component}
                          </label>
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
                  value={inputValue}
                  placeholder="Enter your feedback"
                  onChangeInputValueHandler={onChangeInputValueHandler}
                  onClickDeleteInputValueHandler={
                    onClickDeleteInputValueHandler
                  }
                  onBlurInputHandler={(): boolean => true}
                />
              </div>

              <div className={styles.button}>
                <Button
                  size={EButton.buttonSizeValues.XLARGE}
                  variant={EButton.buttonVariantValues.PRIMARY}
                  disabled={disabled}
                  buttonText="Submit"
                  buttonType="submit"
                />
              </div>
            </form>
          )}

          {isSubmitted && positiveOrNegativeFeedback() === 'negativeFeedback' && (
            <div className={styles['submitted-container']}>
              <Terrible className="mb-6" />
              <h1 className={styles.text}>
                Sorry to hear about your experience!
              </h1>
              <h4 className={styles['sub-text']}>
                We will do our best to improve it
              </h4>
            </div>
          )}
          {isSubmitted && positiveOrNegativeFeedback() === 'positiveFeedback' && (
            <div className={styles['submitted-container']}>
              <Amazing className="mb-6" />
              <h1 className={styles.text}>Thanks for your feedback!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Feedback;
