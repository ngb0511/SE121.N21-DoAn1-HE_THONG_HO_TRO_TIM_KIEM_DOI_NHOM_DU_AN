import React from 'react';
import classNames from 'classnames/bind';
import styles from './Successful.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Successful = (props) => {
  return (
    <div className={cx('popup-box')}>
      <div className={cx('box')}>
        <span className={cx('close-icon')} onClick={props.handleClose}>
          x
        </span>
        {props.content}
        <div className={cx('content')}>
          <div>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <h1>Thành công</h1>
          <br></br>
          <p>Thao tác đã được thực hiện thành công</p>
          <div>
            <button id={cx('cancel')} onClick={props.handleClose}>
              Thoát
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successful;
