// @flow
import React, { Component } from 'react';
import Button from '../Button';
import style from './style.css';

type Props = {
  buttonContent: string,
  children: Element
}

type State = {
  opened: boolean
}

class ButtonDropdown extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleDrowpdown = this.handleDrowpdown.bind(this);
  }

  state: State;
  handleDrowpdown: () => void;

  handleDrowpdown() {
    this.setState({
      opened: !this.state.opened
    });
  }


  render() {
    return (
      <div className={style.ButtonDropdownWrapper}>
        <Button
          onClick={this.handleDrowpdown}
        >
          {this.props.buttonContent}
        </Button>
        <button
          onClick={this.handleDrowpdown}
          className={style.ButtonDropdownIcon}
        >
          { this.state.opened ? '\u25B2' : '\u25BC' }
        </button>
        { this.state.opened &&
          <div className={style.dropdown}>{this.props.children}</div>
        }
      </div>
    );
  }
}

export default ButtonDropdown;
