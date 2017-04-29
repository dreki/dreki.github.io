import React from 'react';
import ReactDOM from 'react-dom';

const urlStyle = {
  width: '600px'
};

const textStyle = {
  width: '600px',
  whiteSpace: 'pre-line'
};

class Summarizer extends React.Component {
  componentDidMount() {
    this.props.onAdjustLevel(this.slider.value, this.url.value);
  }

  onChange() {
    this.props.onAdjustLevel(this.slider.value, this.url.value);
  }

  render() {
    let disabled = (this.props.text === '');
    return (
      <div>
        <h1>Shorten article</h1>
        <div><strong>URL of an article on the web</strong>:</div>
        <input type="text"
          style={urlStyle}
          ref={(node) => { this.url = node; }}
          placeholder="URL" defaultValue="https://www.buzzfeed.com/blakemontgomery/this-guy-built-a-working-iphone-out-of-300-in-spare-parts" onChange={() => { this.onChange(); }} />
        <br />
        <br/>
        <div><strong>How long would you like the article to be?</strong>:</div>
        <input ref={(node) => { this.slider = node; }}
          type="range"
          min="1"
          max="5"
          step="1"
          disabled={disabled}
          defaultValue={this.props.level}
          onChange={() => { this.onChange(); }} />
        <pre style={textStyle}>{this.props.text}</pre>
      </div>
    );
  }
}

export default Summarizer;