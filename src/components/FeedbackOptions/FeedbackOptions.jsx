import { Section } from "components/Section/Section"



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Section title='Please leave feedback'>
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
            </ul>
            </Section>
  );
};

