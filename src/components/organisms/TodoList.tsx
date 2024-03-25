import styled from "styled-components";
import { ITodo } from "../../types/todo";
import TodoItem from "../molecules/TodoItem";
import { Colors } from "../../utils/constants/colors";

interface Props {
  items: ITodo[];
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${Colors.gray_D7};
  width: 50%;
  gap: 8px;
  padding: 8px;
`;

const Li = styled.li``;

function TodoList({ items }: Props) {
  return (
    <Ul>
      {items.map((item) => {
        return (
          <Li key={item.id}>
            <TodoItem
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
            />
          </Li>
        );
      })}
    </Ul>
  );
}

export default TodoList;
