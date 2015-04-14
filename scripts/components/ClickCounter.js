import React from 'react';

export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ClickCounter">
        <button onClick={this.props.onDec}>-1</button>
        {this.props.value}
        <button onClick={this.props.onInc}>+1</button>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  value: React.PropTypes.number,
  onDec: React.PropTypes.func,
  onInc: React.PropTypes.func,
};