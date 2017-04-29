import axios from 'axios';

// let nextTodoId = 0;
// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// });
// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// });
// export const toggleTodo = (id) => ({
//   type: 'TOGGLE_TODO',
//   id
// });

export const _setSummarizeLevel = (level) => ({
  type: 'SET_SUMMARIZE_LEVEL',
  level
});

export const scaleText = (level, text = FULL_TEXT) => {
  // Summary.summarize('Summarize demo', text, function(err, summary, dict) {
  //   if(err) {
  //     console.log("There was an error."); // Need better error reporting
  //   }

  //   level = parseInt(level);
  //   Summary.getSortedSentences(text, level, function (err, sorted_sentences) {
  //     console.log(text);
  //   }, dict);
  // });

  return {
    type: 'SET_TEXT',
    text
  };
};

const LEVELS = {
  1: 2,
  2: 4,
  3: 6,
  4: 12,
  5: 50,
};
export const setSummarizeLevel = (level) => {
  return (dispatch, getState) => {
    dispatch(_setSummarizeLevel(level));

    axios
      .post('https://limitless-spire-64480.herokuapp.com/summarize', {
        url: 'https://www.buzzfeed.com/blakemontgomery/this-guy-built-a-working-iphone-out-of-300-in-spare-parts'
      })
      // .post(`https://community-smmry.p.mashape.com/?SM_API_KEY=9E085CB931&SM_LENGTH=${LEVELS[level]}&SM_URL=https%3A%2F%2Fwww.buzzfeed.com%2Fblakemontgomery%2Fthis-guy-built-a-working-iphone-out-of-300-in-spare-parts%3Futm_term%3D.beLayeJmL%23.fvbOGDY7R`)
      // .set('X-Mashape-Key', '04gC0fqf1FmsheUv4uWWcdsMwkiwp1sEedwjsnwWOzDo9LIfiq')
      // .set('Accept', 'text/plain')

      // .post('https://textanalysis-text-summarization.p.mashape.com/text-summarizer')
      // .send({text: FULL_TEXT})
      // .set('X-Mashape-Key', '04gC0fqf1FmsheUv4uWWcdsMwkiwp1sEedwjsnwWOzDo9LIfiq')
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')


      .then((response) => {
        // dispatch(scaleText(level, `${res.body.sm_api_title} ${res.body.sm_api_content}`));
        dispatch(scaleText(level, response.data));
      })
      .catch((err) => {
        console.error(err);
      });


  // dispatch(scaleText(level, getState().text));
  };
};