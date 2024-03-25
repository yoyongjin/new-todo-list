import styled from "styled-components";
import Molecules from "../../components/molecules";
import Organisms from "../../components/organisms";
import { useTodoStore } from "../../store/useTodoStore";

export interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function TodoListPage() {
  const items = useTodoStore((state) => state.todos);

  return (
    <Container>
      <Molecules.AddTodoForm />
      <Organisms.TodoList items={items} />
    </Container>
  );
}

export default TodoListPage;
