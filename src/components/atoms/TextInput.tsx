import { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled, { css } from "styled-components";
import { ICustomStyle } from "../../types/style";
import { Colors } from "../../utils/constants/colors";

export interface InputConfig extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

type Props = InputConfig & ICustomStyle;

const defaultStyles = css<Props>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => props.width || 180}px;
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;

  ::placeholder {
    color: ${Colors.gray_6C};
  }

  ${(props) => props.customStyle && css(props.customStyle)}
`;

const Input = styled.input<Props>`
  ${defaultStyles}
`;

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ register, ...rest }) => {
    return (
      <Input
        {...register}
        {...rest}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
