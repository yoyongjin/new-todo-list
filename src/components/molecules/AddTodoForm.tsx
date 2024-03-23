import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import TextButton from "../atoms/TextButton";

const Container = styled.form`
  display: flex;
`;
function AddTodoForm() {
  return (
    <Container>
      <TextInput />
      <TextButton />
    </Container>
  );
}

export default AddTodoForm;
