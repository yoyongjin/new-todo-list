import styled from "styled-components";
import AddTodoForm from "./components/molecules/AddTodoForm";
import TodoList from "./components/organisms/TodoList";
import { useTodoStore } from "./store/useTodoStore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  const items = useTodoStore((state) => state.todos);

  return (
    <Container>
      <AddTodoForm />
      <TodoList items={items} />
    </Container>
  );
}

export default App;
