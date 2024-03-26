import { Container, Inner, Content } from "~/components/Containers";
import { Suggestion } from "~/components/Actions/Suggestion";
import { Title } from "./Title";

interface SuggestionsProps {
  suggestions: string[];
}

export const Suggestions = ({ suggestions }: SuggestionsProps) => {
  return (
    <Container>
      <Inner>
        <Title>Create:</Title>
        <Content>
          {suggestions.map((suggestion) => (
            <Suggestion key={suggestion}>{suggestion}</Suggestion>
          ))}
        </Content>
      </Inner>
    </Container>
  );
};
