import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import TextPollCreation from './TextPollCreation';
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
const CustomTextPoll = (): ReactElement => {
  const [globalstat, setGlobalState] = useState<IPostCreation.IState>(
    postCreationInitialState,
  );
  return (
    <TextPollCreation
      post={globalstat.textPoll}
      setPostCreationGlobalState={setGlobalState}
      postCreationGlobalState={postCreationInitialState}
    />
  );
};
const two = 2;
const three = 3;
describe('TextPollCreation', () => {
  it('should be able to write post Caption', () => {
    customRender(<CustomTextPoll />);
    const postCaption = screen.getByPlaceholderText(
      'What do you want to ask about?',
    );
    userEvent.type(postCaption, 'this is postCaption');
    expect(postCaption).toHaveValue('this is postCaption');
  });

  it('should be able to fill the default two options', () => {
    customRender(<CustomTextPoll />);
    const option1 = screen.getByPlaceholderText('Option 1');
    const option2 = screen.getByPlaceholderText('Option 2');
    userEvent.type(option1, 'this is option1');
    userEvent.type(option2, 'this is option2');
    expect(option1).toHaveValue('this is option1');
    expect(option2).toHaveValue('this is option2');
  });

  it('should render as default of two options without delete option icon but if you click on addOptionBtn should render deleteOptionBtn', () => {
    customRender(<CustomTextPoll />);
    expect(screen.queryByTestId('deleteOptionBtn')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('addOptionBtn'));
    expect(screen.getAllByTestId('deleteOptionBtn')).toHaveLength(three);
  });

  it('click on the third deleteOptionBtn should delete this option and then component get back to default without deleteOptionBtns', () => {
    customRender(<CustomTextPoll />);
    userEvent.click(screen.getByTestId('addOptionBtn'));
    expect(screen.getByPlaceholderText('Option 3')).toBeInTheDocument();
    // click on the third option delete button
    userEvent.click(screen.getAllByTestId('deleteOptionBtn')[two]);
    expect(screen.queryByPlaceholderText('Option 3')).not.toBeInTheDocument();
    expect(screen.getByTestId('optionsWrapper').childElementCount).toBe(two);
    expect(screen.queryByTestId('deleteOptionBtn')).not.toBeInTheDocument();
  });
});
