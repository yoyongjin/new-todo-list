import { useState } from "react";
import { uid } from "react-uid";
import styled from "styled-components";
import { useTodoStore } from "../../store/useTodoStore";
import TextButton from "../atoms/TextButton";
import TextInput from "../atoms/TextInput";

const Container = styled.form`
  display: flex;
`;
function AddTodoForm() {
  const [taskText, setTaskText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);

  console.log(todos);

  return (
    <Container>
      <TextInput
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
      />
      <TextButton
        onClick={() =>
          addTodo({ id: uid(taskText), task: taskText, isCompleted: false })
        }
      />
    </Container>
  );
}

export default AddTodoForm;
