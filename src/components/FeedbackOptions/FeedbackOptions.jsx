import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(label => {
        return (
          <FeedbackBtn key={label} name={label} onClick={onLeaveFeedback}>
            {label}
          </FeedbackBtn>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
