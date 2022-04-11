import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title {this.props.cardTitle}</h4>
          <p className="card-text">{this.props.text}</p>
          <button type="button" className="btn btn-primary">
            do not click
          </button>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  text: `random num ${Math.random()}`,
};
