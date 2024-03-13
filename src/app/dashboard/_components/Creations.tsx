import type { iCreation } from "./types";
import { Creation } from "./Creation";
import { Container, Inner, Content } from "~/components/Containers";
import { Title } from "./Title";

interface CreationsProps {
  creations: iCreation[];
}

export const Creations = ({ creations }: CreationsProps) => {
  return creations.length > 0 ? (
    <Container>
      <Inner>
        <Title>My Creations:</Title>
        <Content>
          {creations.map((creation) => (
            <Creation creation={creation} key={creation.id} />
          ))}
        </Content>
      </Inner>
    </Container>  
  ) : (
    <></>
  );
};
