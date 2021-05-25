// import React from 'react';
// import type { FC, ReactElement } from 'react';
// import type { IOptionGroup } from './IOptionGroupl';
// import TextPoll from '../../atoms/textPoll/index';
// import styles from './OptionGroup.module.css';

// const OptionGroup: FC<IOptionGroup.IProps> = ({
//   options_groups,
//   caption,
// }): ReactElement => {
//   const letters = (() => {
//     const caps = [...Array(26)].map((val: string, i) =>
//       String.fromCharCode(i + 65),
//     );
//     return caps;
//   })();
//   return (
//     <div className={styles['options-wrapper']}>
//       <div>
//         <h3 className={styles['post-caption']}>{caption}</h3>
//       </div>
//       <div>
//         {options_groups.groups.map((group) =>
//           group.options.map((option, index) => {
//             const letter = letters[index];
//             return (
//               <div
//                 className={styles['container-for-text-poll']}
//                 key={option.id}
//               >
//                 <TextPoll
//                   option={option.body}
//                   id={option.id}
//                   onOptionClick={(): void => undefined}
//                   showResult={false}
//                   letter={letter}
//                 />
//               </div>
//             );
//           }),
//         )}
//       </div>
//     </div>
//   );
// };
// export default OptionGroup;
