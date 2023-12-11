import { useState } from "react";
import InputNumber from "../component/InputNumber";
import InputType from "../component/InputType";
import OtpValue from "../component/OtpValue";
import RandomOtp from "../component/RandomOtp";

type InputNO = {
  setInputNO: (input: number) => void;
  setOtpBox: (input: number | string) => void;
  otpBox: number | string;
  setInputTypeSet: (select: string | number) => void;
  inputTypeSet: "number" | "password" | "text";
  autoInputBox: number;
};
const SideBar = ({
  setInputNO,
  setOtpBox,
  otpBox,
  setInputTypeSet,
  inputTypeSet,
  autoInputBox,

}: InputNO) => {
    const [number, setNumber] = useState<number>(4);
  return (
    <div className="md:w-1/5 w-full h-[92vh] flex flex-col justify-between  bg-green-100 shadow-lg relative">
      <h1 className="text-white text-xl bg-blue-500 hover:bg-blue-600 duration-700 cursor-pointer text-center py-2">
        Create OTP
      </h1>
      <InputNumber
        setInputNO={setInputNO}
        number={number}
        setNumber={setNumber}
      />
      <OtpValue
        number={number}
        otpBox={otpBox}
        setOtpBox={setOtpBox}
        inputTypeSet={inputTypeSet}
      />
      <InputType setInputTypeSet={setInputTypeSet} />
      <div className="bg-blue-500 py-4 text-white text-center">
        Auto Generate OTP
      </div>
      <RandomOtp
        setOtpBox={setOtpBox}
        inputTypeSet={inputTypeSet}
        autoInputBox={autoInputBox}
      />
      <h1 className="text-white text-xl bg-blue-500 hover:bg-blue-600 duration-700 cursor-pointer text-center py-2"></h1>
    </div>
  );
};

export default SideBar;
