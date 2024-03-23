import styled from "styled-components";

interface Props {
  id: string;
  isCompleted: boolean;
}

const Input = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
`;

function CheckBox({ id, isCompleted }: Props) {
  return <Input id={id} checked={isCompleted} />;
}

export default CheckBox;
