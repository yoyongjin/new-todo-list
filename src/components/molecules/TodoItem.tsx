import styled from "styled-components";
import { ITodo } from "../../types/todo";
import CheckBox from "../atoms/CheckBox";

interface Props extends ITodo {}

const Container = styled.div`
  display: flex;
`;

const Span = styled.span``;

function TodoItem({ id, task, isCompleted }: Props) {
  return (
    <Container id={id}>
      <Span>
        {id + "."}
        {task}
      </Span>
      <CheckBox id={id} isCompleted={isCompleted} />
    </Container>
  );
}

export default TodoItem;
