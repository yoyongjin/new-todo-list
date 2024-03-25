import { UseFormRegisterReturn } from "react-hook-form";
import styled, { CSSObject } from "styled-components";
import Atoms from "../atoms";
import { LabelConfig } from "../atoms/Label";
import { InputConfig } from "../atoms/TextInput";

interface Props {
  isRequired?: boolean;
  labelConfig: LabelConfig;
  inputConfig: InputConfig;
  labelStyle?: CSSObject;
  inputStyle?: CSSObject;
  register: UseFormRegisterReturn;
}

function LabeledInput({
  isRequired,
  labelConfig,
  labelStyle,
  inputConfig,
  inputStyle,
  register,
}: Props) {
  return (
    <Container>
      <Atoms.Label
        isRequired={isRequired}
        {...labelConfig}
        customStyle={labelStyle}
      />
      <Atoms.TextInput
        {...inputConfig}
        customStyle={inputStyle}
        register={register}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LabeledInput;
