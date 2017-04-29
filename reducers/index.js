import { combineReducers } from 'redux';
// import todos from './todos';
import text from './text';
import level from './level';

// import visibilityFilter from './visibilityFilter';

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// });
// export default todoApp;

const summarizeApp = combineReducers({
  text,
  level
});

export default summarizeApp;