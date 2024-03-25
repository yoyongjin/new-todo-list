import Organisms from "@components/organisms";
import styled from "styled-components";

export interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ccc;
`;

function AuthPage() {
  return (
    <Container>
      <Organisms.AuthForm />
    </Container>
  );
}

export default AuthPage;
