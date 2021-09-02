import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import styles from './Feedback.module.css';
import Button from '../../atoms/Button/Button';
import * as EButton from '../../atoms/Button/types/EButton';
import Terrible from '../../icons/terrible.svg';
import Good from '../../icons/good.svg';
import Bad from '../../icons/bad.svg';
import Neutral from '../../icons/neutral.svg';
import Amazing from '../../icons/amazing.svg';
import Box from '../../atoms/Box/Box';
import HappyIcon from '../../icons/happy.svg';
import FeedbackCheckMark from '../../icons/feedbackCheckMark.svg';
import { useDetectClickOut } from '../../../hooks/useDetectClickOut/useDetectClickOut';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

const Feedback: FC = (): ReactElement => {
  const emojis: {
    rate: string;
    checked: boolean;
    component: JSX.Element;
  }[] = [
    {
      rate: '1',
      checked: false,
      component: <Terrible />,
    },
    {
      rate: '2',
      checked: false,
      component: <Bad />,
    },
    {
      rate: '3',
      checked: false,
      component: <Neutral />,
    },
    {
      rate: '4',
      checked: false,
      component: <Good />,
    },
    {
      rate: '5',
      checked: false,
      component: <Amazing />,
    },
  ];
  const [checkedRate, setCheckedRate] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { nodeRef, triggerRef, setShow, show } = useDetectClickOut(false);

  useEffect(() => {
    setCheckedRate('');
    setDisabled(true);
  }, [show]);

  const positiveOrNegativeFeedback = (): string => {
    if (Number(checkedRate) <= 3) {
      return 'negativeFeedback';
    }
    return 'positiveFeedback';
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedRate(e.target.value);
    setDisabled(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const handleCancelButtonClick = (): void => {
    setShow(false);
  };

  return (
    <div className="md:relative">
      <div
        className="cursor-pointer"
        ref={triggerRef}
        data-testid="open-feedback"
      >
        <HappyIcon />
      </div>
      {show && (
        <div
          className="absolute top-12 right-0"
          ref={nodeRef}
          data-testid="feedback-popup"
        >
          <Box isWhiteColor>
            <>
              <Box.Body classes="md:w-20xl w-18xl ">
                <>
                  {!isSubmitted && (
                    <form onSubmit={handleSubmit}>
                      <h1 className={styles.text}>
                        How would you rate your experience?
                      </h1>
                      <div className={styles.emojis}>
                        <fieldset className="flex flex-row">
                          {emojis.map((emoji) => {
                            return (
                              <p
                                className={styles['form-answer']}
                                key={emoji.rate}
                              >
                                <input
                                  type="radio"
                                  onChange={handleChange}
                                  name="Feedback"
                                  id={emoji.rate}
                                  value={emoji.rate}
                                />
                                <label
                                  className={styles.emoji}
                                  htmlFor={emoji.rate}
                                  data-testid={emoji.rate}
                                >
                                  {emoji.component}
                                </label>
                              </p>
                            );
                          })}
                        </fieldset>
                      </div>
                      {!checkedRate && (
                        <div>
                          <p className={styles.text}>
                            Do you have any comments?
                          </p>
                          <TextInput
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
                      )}

                      {checkedRate && (
                        <div className="flex flex-col">
                          <label className={styles.text} htmlFor="Feedback">
                            Do you have any comments?
                          </label>

                          <textarea
                            className={styles['text-area']}
                            id="Feedback"
                            name="Feedback"
                            rows={4}
                            cols={30}
                            placeholder="Enter your feedback"
                          />
                        </div>
                      )}

                      <div className={styles.button}>
                        <Button
                          size={EButton.buttonSizeValues.FULLWIDTH}
                          variant={EButton.buttonVariantValues.PRIMARY}
                          disabled={disabled}
                          buttonText="Submit"
                          buttonType="submit"
                        />
                      </div>
                    </form>
                  )}
                  {isSubmitted && (
                    <>
                      <div className={styles['submitted-container']}>
                        <span className="mb-6 fill-success">
                          <FeedbackCheckMark />
                        </span>
                        {positiveOrNegativeFeedback() ===
                          'negativeFeedback' && (
                          <div
                            className="text-center"
                            data-testid="negativeFeedback"
                          >
                            <h1 className={styles.text}>
                              Sorry to hear about your experience!
                            </h1>
                            <h4 className={styles['sub-text']}>
                              We will do our best to improve it.
                            </h4>
                          </div>
                        )}
                        {positiveOrNegativeFeedback() ===
                          'positiveFeedback' && (
                          <div data-testid="positiveFeedback">
                            <h1 className={styles.text}>
                              Thanks for your feedback!
                            </h1>
                          </div>
                        )}
                      </div>
                      <div className={styles.button}>
                        <Button
                          size={EButton.buttonSizeValues.FULLWIDTH}
                          variant={EButton.buttonVariantValues.PRIMARY}
                          buttonText="Cancel"
                          onClick={handleCancelButtonClick}
                        />
                      </div>
                    </>
                  )}
                </>
              </Box.Body>
            </>
          </Box>
        </div>
      )}
    </div>
  );
};
export default Feedback;
