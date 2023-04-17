import { PropTypes } from 'prop-types';
import { FeedbackDiv, FeedbackButton } from './Feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackDiv>
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackDiv>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};