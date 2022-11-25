import {
  OptionsList,
  Button,
  OptionItem,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsList>{Object.keys(options).map(key => <OptionItem key={key}>
      <Button name={key} onClick={onLeaveFeedback}>
          {key}
        </Button> </OptionItem>)}
    </OptionsList>
  );
};