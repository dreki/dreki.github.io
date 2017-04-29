
const level = (state = 5, action) => {
  switch (action.type) {
  case 'SET_SUMMARIZE_LEVEL':
    return action.level;
  default:
    return state;
  }
};

export default level;