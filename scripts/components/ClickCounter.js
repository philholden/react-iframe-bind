import React from 'react';
import {default as styles} from '../style/ClickCounterStyles';
import StyleSheet from 'react-style';



export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ClickCounter">
        <button onClick={this.props.onDec} style={styles.button}>-1</button>
        <span style={styles.value}>{this.props.value}</span>
        <button onClick={this.props.onInc} style={styles.button}>+1</button>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  value: React.PropTypes.number,
  onDec: React.PropTypes.func,
  onInc: React.PropTypes.func,
};