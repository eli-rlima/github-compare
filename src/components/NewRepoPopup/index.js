// Global
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import ConditionalWrapper from 'components/common/ConditionalWrapper';
import ButtonCancel from 'components/common/ButtonCancel';
import ButtonAdd from 'components/common/ButtonAdd';
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import ErrorLabel from 'components/common/ErrorLabel';
// Actions
import { add, error as errorAction } from 'redux/actions/repositories.action';
import { show } from 'redux/actions/popup.action';
// Stylesheet
import './index.scss';

function NewRepoModal() {
  const [repoName, setRepoName] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.repositories);
  const { isOpened } = useSelector(state => state.popup);

  useEffect(() => {
    if (!isOpened) {
      dispatch(errorAction(false));
      setRepoName('');
    }
  },[isOpened, dispatch]);

  const onChange = (e, target) => {
    const { value } = target || e.target;
    
    setRepoName(value);
    if (error) {
      dispatch(errorAction(false));
    }
  }

  const onClickCancel = () => {
    dispatch(show(false));
  }

  const onClickAdd = term => {
    dispatch(add(term));
  }

  return (
    <ConditionalWrapper condition={isOpened}>
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
            onClick={() => onClickAdd(repoName)}
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
