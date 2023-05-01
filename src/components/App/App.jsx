import { Container } from './App.styled';
import Section from '../Section/Section';

export default function App() {
  return (
    <Container>
      <Section title="">
        <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
      </Section>
    </Container>
  );
}
