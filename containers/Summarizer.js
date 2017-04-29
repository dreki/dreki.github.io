import { connect } from 'react-redux';
import { setSummarizeLevel } from '../actions';
import Summarizer from '../components/Summarizer';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text,
    level: state.level
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAdjustLevel: (level) => {
      dispatch(setSummarizeLevel(level));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summarizer);
