import React from 'react';
import ReactDOM from 'react-dom';

const textStyle = {
  width: '600px',
  whiteSpace: 'pre-line'
};

class Summarizer extends React.Component {
  onChange() {
    this.props.onAdjustLevel(this.slider.value);
  }

  render() {
    return (
      <div>
        <h1>Digestion begins</h1>
        {this.props.level}
        <input ref={(node) => { this.slider = node; }}
          type="range"
          min="1"
          max="5"
          step="1"
          defaultValue={this.props.level}
          onChange={() => { this.onChange(); }} />
        <pre style={textStyle}>{this.props.text}</pre>
      </div>
    );
  }
}

export default Summarizer;