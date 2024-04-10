import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-[90%] text-center p-2 h-[85%] px-4">
          <Heading label={"Sign In"}></Heading>
          <SubHeading
            label={"Enter your credentials to access your account"}
          ></SubHeading>

          <InputBox label={"Email"} placeholder={"abc@gmail.com"}></InputBox>
          <InputBox label={"Password"} placeholder={"123456"}></InputBox>
          <div className="mt-6">
            <Button label={"Sign In"}></Button>
          </div>

          <div className="mt-6">
            <BottomWarning
              label={"Dont have an account?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            ></BottomWarning>
          </div>
        </div>
      </div>
    </div>
  );
};
