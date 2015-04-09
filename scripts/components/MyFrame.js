import React from 'react';

class MyFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MyFrame">
        <iframe src={this.props.url}></iframe>
      </div>
    );
  }
}
MyFrame.propTypes = {
  url: React.PropTypes.string
};

export default MyFrame;