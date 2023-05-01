import { Container } from './App.styled';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statictics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  return (
    <Container>
      <Section title="">
        <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
        <Notification message="There is no feedback"></Notification>
        <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
      </Section>
    </Container>
  );
}
