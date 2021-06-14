import type { FC, ReactElement } from 'react';
import React from 'react';

const Test: FC = (): ReactElement => {
  return <div>Test</div>;
};
export default Test;
// import React, { useState } from 'react';
// import type { FC, ReactElement } from 'react';
// import PlusIcon from '../../icons/plus.svg';
// import type { IOptionGroup } from '../OptionGroup/types/IOptionGroup';
// import OptionGroup from '../OptionGroup/OptionGroup';
// import OptionGroupsHeader from './OptionGroupsHeader/OptionGroupHeader';

// const OptionGroups: FC = (): ReactElement => {
//   const randomId = (): string => {
//     const randomHelper = 10000000000;
//     return `id_${Math.round(Math.random() * randomHelper)}`;
//   };

//   const initialOptionGroups: IOptionGroup.IProps[] = [
//     { id: randomId(), groupName: '' },
//   ];
//   const [optionGroups, setOptionGroups] =
//     useState<IOptionGroup.IProps[]>(initialOptionGroups);

//   const addGroupHandler = (): void => {
//     setOptionGroups([...optionGroups, { id: randomId(), groupName: '' }]);
//   };

//   const deleteGroupHandler = (groupId: string): void => {
//     setOptionGroups(
//       optionGroups.filter((optionGroup) => optionGroup.id !== groupId),
//     );
//   };

//   return (
//     <>
//       {optionGroups.map((optionGroup) => (
//         <div key={optionGroup.id} className="mb-2 bg-grey-bg p-4 rounded-md ">
//           <div className="flex justify-between pb-2">
//             <OptionGroupsHeader
//               deleteGroupHandler={(): void => {
//                 deleteGroupHandler(optionGroup.id);
//               }}
//             />
//           </div>
//           <OptionGroup id={optionGroup.id} />
//         </div>
//       ))}
//       <div className="flex flex-col bg-grey-bg p-4 rounded-md ">
//         <button
//           type="button"
//           className="text-dark-grey cursor-pointer flex items-center self-start focus:outline-none"
//           onClick={addGroupHandler}
//         >
//           <PlusIcon className="fill-dark-grey mr-1 my-3xxs" />
//           <span className="text-sm font-medium">Add Option Group</span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default OptionGroups;
