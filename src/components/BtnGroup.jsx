import cn from 'classnames';
import React from 'react';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  selectLeft = () => this.setActive('left');

  selectRight = () => this.setActive('right');

  setActive = (active) => {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      'btn-secondary': true,
    };

    const leftButtonClass = {
      ...sharedClasses,
      left: true,
      active: active === 'left',
    };

    const rightButtonClass = {
      ...sharedClasses,
      right: true,
      active: active === 'right',
    };

    return (
      <div className="btn-group" role="group">
        <button type="button" onClick={this.selectLeft} className={cn(leftButtonClass)}>Left</button>
        <button type="button" onClick={this.selectRight} className={cn(rightButtonClass)}>Right</button>
      </div>
    );
  }
}