import type { ReactElement } from 'react';
import React from 'react';

const Useless2 = (): ReactElement => {
  return <div>useless</div>;
};
export default Useless2;

// import React, { useEffect, useState } from 'react';
// import type { FC, ReactElement } from 'react';
// import { useForm } from 'react-hook-form';
// import OptionGroup from '../../molecules/OptionGroup/OptionGroup';
// import type { IOptionGroup } from '../../molecules/OptionGroup/types/IOptionGroup';
// // import TextInput from '../../atoms/TextInputs/TextInput';
// import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

// const TextPollCreation: FC = (): ReactElement => {
//   const randomId = (): string => {
//     const randomHelper = 10000000000;
//     return `id_${Math.round(Math.random() * randomHelper)}`;
//   };

//   const [options, setOptions] = useState<IOptionGroup.IOption[]>([]);
//   const [textPollState, setTextPollState] = useState<{
//     postCaption: { id: string; value: string };
//     options: IOptionGroup.IOption[];
//   }>({
//     postCaption: { id: 'id_123181239', value: '' },
//     options,
//   });

//   useEffect(() => {
//     setOptions([
//       { id: randomId(), value: '1' },
//       { id: randomId(), value: '2' },
//     ]);
//   }, []);
//   console.log(textPollState);

//   useEffect(() => {
//     setTextPollState({ ...textPollState, options });
//   }, [options]);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, dirtyFields, isSubmitted },
//   } = useForm({
//     mode: 'onSubmit',
//     reValidateMode: 'onChange',
//     shouldUnregister: true,
//   });
//   const onSubmit = (): boolean => {
//     // console.log(data);
//     setTextPollState({
//       postCaption: { id: 'id_123181239', value: '' },
//       options,
//     });
//     return true;
//   };
//   const onError = (): boolean => {
//     return true;
//   };
//   const variantMessage = (optionId: string): ETextInput.Variants => {
//     if (errors[optionId]) {
//       return ETextInput.Variants.Error;
//     }
//     if (dirtyFields[optionId]) {
//       return ETextInput.Variants.Success;
//     }

//     return ETextInput.Variants.Default;
//   };
//   return (
//     <div className="space-y-4">
//       <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
//         {/* <TextInput
//           id="id_123181239"
//           // onChange={() => {}}
//           variants={
//             isSubmitted
//               ? variantMessage('id_123181239')
//               : ETextInput.Variants.Default
//           }
//           inputType={ETextInput.InputType.Default}
//           placeholder="What do you want  to ask about?"
//           disabled={false}
//           // reset={reset}
//           onChange={() => {}}
//           onClick={() => {}}
//           onBlur={() => {}}
//           {...register('id_123181239', {
//             required: {
//               value: true,
//               message: 'This field is required',
//             },
//             minLength: { value: 3, message: 'Minimum letters is 3' },
//           })}
//         /> */}
//         <OptionGroup
//           groupId="0"
//           options={textPollState.options}
//           setOptions={setOptions}
//           variantMessage={variantMessage}
//           register={register}
//           formSubmitted={isSubmitted}
//           reset={reset}
//           errors={errors}
//           dirtyFields={dirtyFields}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };
// export default TextPollCreation;
