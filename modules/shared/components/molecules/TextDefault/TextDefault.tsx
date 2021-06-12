import type { ReactElement } from 'react';
import React from 'react';

const Useless3 = (): ReactElement => {
  return <div>useless</div>;
};
export default Useless3;

// import React, { useState } from 'react';
// import type { FC, ReactElement } from 'react';
// import DragIcon from '../../icons/drag.svg';
// import DeleteIcon from '../../icons/delete.svg';
// import TextInput from '../../atoms/TextInputs/TextInput';
// import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
// import type { ITextDefault } from './types/TextDefault';

// const TextDefault: FC<ITextDefault.IProps> = ({
//   id,
//   letter = '#',
//   deletable = false,
//   placeholder,
//   deleteInputHandler,
//   register,
//   reset,
//   variants,
//   // onChange,
// }): ReactElement => {
//   const [inputVal, setInputVal] = useState('');
//   const firstName = { ...register };
//   const handleChange = (e) => {
//     setInputVal(e.target.value);
//   };
//   return (
//     <div className="flex items-center" id={`option-${id}-box`}>
//       <DragIcon className="mr-3" />
//       <span className="flex-1">
//         <TextInput
//           id={id}
//           variants={variants}
//           inputType={ETextInput.InputType.Choices}
//           letter={letter}
//           placeholder={placeholder}
//           disabled={false}
//           reset={reset}
//           value={inputVal}
//           onChange={(e) => {
//             firstName.onChange(e); // method from hook form register
//             handleChange(e); // your method
//           }}
//           onBlur={firstName.onBlur}
//           ref={firstName.ref}
//         />
//       </span>
//       {deletable ? (
//         <DeleteIcon
//           data-testid="deleteOptionBtn"
//           className="ml-3 cursor-pointer"
//           onClick={deleteInputHandler}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default TextDefault;
