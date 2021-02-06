// Global
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import ConditionalWrapper from 'components/common/ConditionalWrapper';
import ButtonCancel from 'components/common/ButtonCancel';
import ButtonAdd from 'components/common/ButtonAdd';
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import ErrorLabel from 'components/common/ErrorLabel';
// Stylesheet
import './index.scss';

function NewRepoModal({ show, onClickCancel, onClickAdd, error }) {
  const [repoName, setRepoName] = useState('');

  const onChange = (e, target) => {
    const { value } = target || e.target;

    setRepoName(value);
  }

  return (
    <ConditionalWrapper condition={show}>
      <div className='new-repo'>
        <div className='new-repo_title'>
          <text>New Repository</text>
        </div>
        <div className='new-repo_container-input'>
          <Label
            text="Repository"
            obligatory={true}
          />
          <Input 
            style={{ margin: "4px 24px" }}
            error={error}
            onChange={onChange}
            value={repoName}
          />
          <ErrorLabel 
            text="This is API-feedback-error"
            error={error}
          />
        </div>
        <div className='new-repo_container-button'>
          <ButtonCancel 
            onClick={onClickCancel}
          />
          <ButtonAdd
            onClick={onClickAdd}
            disabled={error || repoName === ''}
          />
        </div>
      </div>
    </ConditionalWrapper>
  );
}

NewRepoModal.propTypes = {
  show: PropTypes.bool,
  onClickAdd: PropTypes.func,
  onClickCancel: PropTypes.func,
  error: PropTypes.bool,
}

export default NewRepoModal;
