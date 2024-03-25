import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ICustomStyle } from "../../types/style";
import { Colors } from "../../utils/constants/colors";

export interface ITextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ICustomStyle {}

const StyledButton = styled.button<ICustomStyle>`
  background-color: ${Colors.orange_FF5F05};
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  width: 300px;
  height: 48px;
  letter-spacing: -0.32px;
  line-height: 15px;

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.customStyle};
`;

function TextButton({ customStyle, ...restConfig }: ITextButtonProps) {
  return <StyledButton {...restConfig} customStyle={customStyle} />;
}

export default TextButton;
