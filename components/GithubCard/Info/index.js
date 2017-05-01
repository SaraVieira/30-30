// @flow

import React from 'react';
import style from './index.css';

type Props = {
  company: string,
  email: string,
}

const Info = (props: Props) => (
  <div>
    {(props.company || props.email) &&
    <div className={style.info}>
      {props.company &&
      <small>
        <strong>Comapany:</strong>
        {props.company}
      </small>
    }
      {props.email &&
      <small>
        <strong>Email:</strong>
        {props.email}
      </small>
    }
    </div>
  }
  </div>
);

export default Info;
