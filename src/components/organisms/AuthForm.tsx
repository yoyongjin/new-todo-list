import Molecules from "@components/molecules";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Atoms from "../atoms";
import { useCallback, useState } from "react";

export interface Props {}

export interface IAuthFormData {
  email: string;
  password: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #ddd;
  padding: 20px;
`;

function AuthForm() {
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const { control, register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      console.log(data);
      switch (authMode) {
        case "signup": {
          try {
            // const response = await axiosClient.post("auth/signup", data);
            const response = await axios.post(
              "http://192.168.20.130:4000/api/auth/signup",
              data
            );

            console.log(response.data);
          } catch (error) {
            console.error(error);
          }

          break;
        }
        case "login": {
          try {
            // const response = await axiosClient.post("auth/login", data);
            const response = await axios.post(
              "http://192.168.20.130:4000/api/auth/login",
              data
            );

            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      }
    },
    [authMode]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Molecules.LabeledInput
        labelConfig={{ children: "이메일" }}
        inputConfig={{ name: "email" }}
        register={register("email")}
      />
      <Molecules.LabeledInput
        labelConfig={{ children: "비밀번호" }}
        inputConfig={{ name: "password" }}
        register={register("password")}
      />
      <Atoms.TextButton onClick={() => setAuthMode("signup")}>
        회원가입
      </Atoms.TextButton>
      <Atoms.TextButton onClick={() => setAuthMode("login")}>
        로그인
      </Atoms.TextButton>
      <DevTool control={control} />
    </Form>
  );
}

export default AuthForm;
