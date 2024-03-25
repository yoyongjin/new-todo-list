import styled, { CSSObject } from "styled-components";
import { LabelConfig } from "../atoms/Label";
import { InputConfig } from "../atoms/TextInput";
import Atoms from "../atoms";

interface Props {
  isRequired?: boolean;
  labelConfig?: LabelConfig;
  inputConfig?: InputConfig;
  labelStyle?: CSSObject;
  inputStyle?: CSSObject;
}

function LabeledInput({
  isRequired,
  labelConfig,
  labelStyle,
  inputConfig,
  inputStyle,
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
