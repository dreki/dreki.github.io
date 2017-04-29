import axios from 'axios';

export const _setSummarizeLevel = (level) => ({
  type: 'SET_SUMMARIZE_LEVEL',
  level
});

export const scaleText = (level, text = FULL_TEXT) => {
  return {
    type: 'SET_TEXT',
    text
  };
};

const LEVELS = {
  1: 2,
  2: 4,
  3: 6,
  4: 10,
  5: 100,
};
export const setSummarizeLevel = (level) => {
  return (dispatch, getState) => {
    dispatch(_setSummarizeLevel(level));
    dispatch(scaleText(level, ''));  // blank while waiting

    axios
      .post('https://limitless-spire-64480.herokuapp.com/summarize', {
        url: 'https://www.buzzfeed.com/blakemontgomery/this-guy-built-a-working-iphone-out-of-300-in-spare-parts',
        sentences: LEVELS[level]
      })
      .then((response) => {
        dispatch(scaleText(level, response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};