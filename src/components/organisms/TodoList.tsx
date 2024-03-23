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
`;

function TodoList({ items }: Props) {
  return (
    <Ul>
      {items.map((item) => {
        return (
          <li>
            <TodoItem
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
            />
          </li>
        );
      })}
    </Ul>
  );
}

export default TodoList;
