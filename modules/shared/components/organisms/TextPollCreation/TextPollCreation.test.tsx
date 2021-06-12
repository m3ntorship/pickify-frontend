// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import type { TargetElement } from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
// import TextPollCreation from './TextPollCreation';

// describe('Testing the TextPollCreation Component', () => {
//   it('should render 3 options when new option is added', () => {
//     const optionsCount = 3;

//     render(<TextPollCreation />);

//     const addOptionBtn: TargetElement = screen.getByTestId('addOptionBtn');
//     userEvent.click(addOptionBtn);

//     const optionsWrapper: TargetElement = screen.getByTestId('optionsWrapper');
//     expect(optionsWrapper.children.length).toEqual(optionsCount);
//   });

//   it('should have 3 options when option is added and should have 2 when option is deleted', () => {
//     const optionsCountAfterDelete = 2;
//     const indexOfDeletedOption = 2;

//     render(<TextPollCreation />);

//     // Click the add option button
//     const addOptionBtn: TargetElement = screen.getByTestId('addOptionBtn');
//     userEvent.click(addOptionBtn);

//     // Delete the 2nd Option by clicking on the delete option button
//     const deleteOptionBtn: TargetElement[] =
//       screen.getAllByTestId('deleteOptionBtn');
//     userEvent.click(deleteOptionBtn[indexOfDeletedOption]);

//     // Check if an option was deleted
//     const optionsWrapperAfterDelete: TargetElement =
//       screen.getByTestId('optionsWrapper');
//     expect(optionsWrapperAfterDelete.children.length).toEqual(
//       optionsCountAfterDelete,
//     );
//   });
// });
