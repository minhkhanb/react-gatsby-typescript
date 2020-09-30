import React from 'react';
import { css } from '@emotion/core';

import ArrowLeft from '@src/images/arrow-left.3689acfa.svg';

interface TopbarProps {}
const Topbar: React.FunctionComponent<TopbarProps> = ({}) => {
  return (
    <div
      className='top-bar d-flex align-items-center justify-content-center'
      css={css`
        background: rgb(0, 102, 204);
        height: 52px;
      `}
    >
      <div className='side-bar-header d-flex align-items-center'>
        <div
          className='d-flex align-items-center justify-content-center custom-button collapse-button'
          css={css`
            width: 36px;
            height: 36px;
            background: rgb(255, 255, 255);
            border: 4px solid rgb(113, 198, 255);
            border-radius: 20px;
            cursor: pointer;
          `}
        >
          <img
            src={ArrowLeft}
            alt='toggle from'
            css={css`
              width: 10px;
              position: absolute;
              margin-bottom: 0;
            `}
          />
        </div>
        <span>Collapse the Navigation</span>
      </div>
      <span>Welcome</span>
    </div>
  );
};

export default Topbar;
