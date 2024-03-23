import styled from "styled-components";
import AddTodoForm from "./components/molecules/AddTodoForm";
import TodoList from "./components/organisms/TodoList";
import { ITodo } from "./types/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const items: ITodo[] = [
  { id: "1", task: "todo1", isCompleted: false },
  { id: "2", task: "todo2", isCompleted: false },
  { id: "3", task: "todo3", isCompleted: false },
];

function App() {
  return (
    <Container>
      <AddTodoForm />
      <TodoList items={items} />
    </Container>
  );
}

export default App;
