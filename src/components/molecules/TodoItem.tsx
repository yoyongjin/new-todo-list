import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { Colors } from "../../utils/constants/colors";
import TextButton from "../atoms/TextButton";

interface Props extends ITodo {}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.black_14};
  border-radius: 8px;
  padding: 0 10px;
  height: 50px;
`;

const Span = styled.span``;

function TodoItem({ id, task }: Props) {
  return (
    <Container id={id}>
      <Span>{"id: " + id}</Span>
      <Span> {"task:" + task}</Span>
      <TextButton
        customStyle={{
          width: "50px",
          height: "15px",
          backgroundColor: Colors.red_EB2323,
        }}
      >
        Delete
      </TextButton>
    </Container>
  );
  (";");
}

export default TodoItem;
