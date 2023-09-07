import { List,FeedbackButton } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <List>
      {options.map(option => (
        <li key={option}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        </li>
      ))}
            </List>
           
  );
};
FeedbackOptions.propTypes={
  options:PropTypes.arrayOf(PropTypes.string)

}

