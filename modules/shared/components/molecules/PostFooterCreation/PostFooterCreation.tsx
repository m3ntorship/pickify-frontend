import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFooterCreation } from './IPostFooterCreation';
import styles from './PostFooterCreation.module.css';
import Privacy from '../Privacy/Privacy';
import Divider from '../../atoms/Divider/Divider';
import Button from '../../atoms/Button/Button';
import * as EButton from '../../atoms/Button/types/EButton';

/** 
* @Notice you will use the handleChange functions to get and use the value of the toggler and the select
* @ThingsNeededToBeDoneInParentComponent
const [togglerIsChecked,setTogglerIsChecked] = useState(false);
const handleTogglerChange = (e: React.ChangeEvent<HTMLInputElement>):void => { setTogglerIsChecked(e.target.checked) }<Test>;
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {console.log(e.target.value)};
*/
const PostFooterCreation: FC<IPostFooterCreation.IProps> = ({
  handlePrivacySelectChange,
  togglerIsChecked,
  handleTheRadioButtonOnChange,
  postButtonIsDisabled = true,
  handleSubmitButtonClick,
  handleCancelButtonClick,
}): ReactElement => {
  return (
    <div className={styles.container}>
      <Privacy
        privacyOptions={['friends', 'family']}
        withDivider
        togglerIsChecked={togglerIsChecked}
        handleTogglerChange={handleTheRadioButtonOnChange}
        handleSelectChange={handlePrivacySelectChange}
      />
      <div className={styles['primary-button']}>
        <Button
          size={EButton.buttonSizeValues.SMALL}
          variant={EButton.buttonVariantValues.PRIMARY}
          disabled={postButtonIsDisabled}
          buttonType="submit"
          onClick={handleSubmitButtonClick}
          buttonText="post"
        />
      </div>
      <div className={styles.divider}>
        <Divider type="horizontal" length="auto" />
      </div>

      <div className={styles['responsive-button']}>
        <Button
          size={EButton.buttonSizeValues.NORMAL}
          variant={EButton.buttonVariantValues.QUATERNARY}
          onClick={handleCancelButtonClick}
          buttonText="cancel"
        />
        <Button
          size={EButton.buttonSizeValues.XLARGE}
          variant={EButton.buttonVariantValues.PRIMARY}
          disabled={postButtonIsDisabled}
          buttonType="submit"
          onClick={handleSubmitButtonClick}
          buttonText="post"
        />
      </div>
    </div>
  );
};

export default PostFooterCreation;
