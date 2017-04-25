// @flow
import React from 'react';
import classnames from 'classnames';
import style from './style.css';

type ButtonType = 'primary' | 'secondary' | 'ghost'

type Props = {
  children: string | number | Element,
  disabled: boolean,
  className: string,
  onClick: Function,
  type: ButtonType,
  value: string
}

function Button(props: Props) {
  return (
    <button
      disabled={props.disabled}
      className={
          classnames(
              props.className,
              style.button,
              props.type ? style[props.type] : style.primary
          )
      }
      value={props.value}
      onClick={props.onClick}
    >
      { props.children }
    </button>
  );
}

export default Button;
