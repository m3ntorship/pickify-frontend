// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import type { TargetElement } from '@testing-library/user-event';
// import OptionGroup from './OptionGroup';
// import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

// describe('Testing the OptionGroup component', () => {
//   it('should render the count of option as it passed in the prop (options) ', () => {
//     const initialOptions = [
//       { id: '0', value: '1' },
//       { id: '1', value: '2' },
//     ];
//     render(
//       <OptionGroup
//         variantMessage={(): ETextInput.Variants => ETextInput.Variants.Default}
//         groupId="test"
//         options={initialOptions}
//         setOptions={(): boolean => {
//           return true;
//         }}
//       />,
//     );
//     const optionsWrapper: TargetElement = screen.getByTestId('optionsWrapper');
//     expect(optionsWrapper.children.length).toEqual(initialOptions.length);
//   });
// });
