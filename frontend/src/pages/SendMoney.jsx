import React from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

export const SendMoney = ({ name, onClick }) => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className="flex flex-col basis-[360px] justify-center">
        <div className="rounded-lg bg-white  w-[100%] text-center p-2 h-[70%] px-4 shadow-md flex flex-col justify-center gap-10">
          <div className="flex flex-col justify-center text-3xl font-bold ">
            Send Money
          </div>
          <div className="flex flex-col justify-evenly gap-3">
            <div className="flex flex-row justify-start gap-3">
              <div className="rounded-full h-12 w-12 bg-green-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center text-xl h-full text-white">
                  R
                </div>
              </div>
              <div className="flex flex-col justify-center text-xl font-semibold">
                Rajdeep Deb
              </div>
            </div>
            <div>
              <InputBox
                label={"Amount (in Rs)"}
                placeholder={"Enter amount"}
              ></InputBox>
              <button
                onClick={onClick}
                type="button"
                class=" w-full text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-[100px] me-2 mb-2"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
