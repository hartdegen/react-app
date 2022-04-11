import cn from 'classnames';
import React from 'react';

export default class Alert extends React.Component {
  render() {
    const { text, type } = this.props;
    const divClass = cn('alert', {
      [`alert-${type}`]: true,
    });
    return (
      <div className={divClass} role="alert">
        {text}
      </div>
    );
  }
}