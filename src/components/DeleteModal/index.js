// Global
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Modal from 'components/common/Modal';
import ButtonCancel from 'components/common/ButtonCancel';
import ButtonDelete from 'components/common/ButtonDelete';
// Assets
import TimesIcon from 'assets/icons/times';
import WarningFullIcon from 'assets/icons/warning-full';
// Actions
import { close } from 'redux/actions/delete-modal.action';
import { remove } from 'redux/actions/repositories.action';
// Stylesheet
import './index.scss';

function DeleteModal() {
  const { isOpened, repository } = useSelector(state => state.deleteModal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    if (isOpened) {
      dispatch(close());
    }
  }

  const onRemove = id => {
    dispatch(remove(id));
    onCloseModal();
  }

  return (
    <Modal show={isOpened} onClose={onCloseModal}>
      <div className='delete-modal'>
        <div className='delete-modal_header'>
          <div className='delete-modal_header_warning'>
            <WarningFullIcon />
          </div>
          <text>Delete Repository</text>
          <div className='delete-modal_header_times'>
            <TimesIcon onClick={onCloseModal}/>
          </div>
        </div>
        <div className='delete-modal_body'>
          <text>
            Are you sure to delete the
            <span> {repository.full_name} </span>
            repository?
          </text>
        </div>
        <div className='delete-modal_footer'>
          <ButtonCancel 
            onClick={onCloseModal}
          />
          <ButtonDelete
            onClick={() => onRemove(repository.id)}
          />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
