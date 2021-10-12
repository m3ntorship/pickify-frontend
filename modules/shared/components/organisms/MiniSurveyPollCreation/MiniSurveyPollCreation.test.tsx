import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import MiniSurveyPollCreation from './MiniSurveyPollCreation';
import postCreationInitialState from '../PostCreation/postCreationInitialState';
import type { IPostCreation } from '../PostCreation/types/IPostCreation';

const customRender = (ui: ReactElement): unknown => {
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};
const CustomMiniSurvey = (): ReactElement => {
  const [globalstat, setGlobalState] = useState<IPostCreation.IState>(
    postCreationInitialState,
  );
  return (
    <MiniSurveyPollCreation
      post={globalstat.miniSurvey}
      setPostCreationGlobalState={setGlobalState}
      postCreationGlobalState={postCreationInitialState}
    />
  );
};

const two = 2;
describe('MiniSurveyPollCreation', () => {
  it('should be able to write post Caption', () => {
    customRender(<CustomMiniSurvey />);
    const postCaption = screen.getByPlaceholderText(
      'What do you want to ask about?',
    );
    userEvent.type(postCaption, 'this is postCaption');
    expect(postCaption).toHaveValue('this is postCaption');
  });

  it('should be able to fill the default two options in the first default group', () => {
    customRender(<CustomMiniSurvey />);
    const option1 = screen.getByPlaceholderText('Option 1');
    const option2 = screen.getByPlaceholderText('Option 2');
    userEvent.type(option1, 'this is option1');
    userEvent.type(option2, 'this is option2');
    expect(option1).toHaveValue('this is option1');
    expect(option2).toHaveValue('this is option2');
  });

  it('should add two goups after clicking "Add Option Group" button', () => {
    customRender(<CustomMiniSurvey />);
    const addOptionGroupBtn = screen.getByTestId('addOptionGroupBtn');
    userEvent.click(addOptionGroupBtn);
    expect(screen.getAllByTestId('optionsWrapper').length).toBe(two);
  });
});
