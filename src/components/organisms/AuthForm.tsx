import styled from "styled-components";
import Molecules from "../molecules";
import Atoms from "../atoms";

export interface Props {}

const Container = styled.div`
  display: flex;
`;

function AuthForm() {
  return (
    <Container>
      <Molecules.LabeledInput labelConfig={{ children: "이메일" }} />
      <Molecules.LabeledInput labelConfig={{ children: "비밀번호" }} />
      <Atoms.TextButton>로그인</Atoms.TextButton>
    </Container>
  );
}

export default AuthForm;
