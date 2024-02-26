import type { iCreation } from "./types";
import { Creation } from "./Creation";
import { Container, Inner, Content } from "~/components/Containers";
import { Title } from "./Title";

interface CreationsProps {
  creations: iCreation[];
}

export const Creations = ({ creations }: CreationsProps) => {
  return (
    <Container>
      <Inner>
        <Title>My Creations:</Title>
        <Content>
          {creations.length > 0 ? (
            creations.map((creation) => (
              <Creation creation={creation} key={creation.id} />
            ))
          ) : (
            <p>{"You don't have any creations yet..."}</p>
          )}
        </Content>
      </Inner>
    </Container>
  );
};
