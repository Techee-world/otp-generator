import React, { useState, useRef } from "react";
import OtpBox from "../component/OtpBox";
import Popup from "../component/Popup";
import { useNavigate } from "react-router-dom";

type InputProp = {
  inputNO: number;
  otpBox: number | string;
  inputTypeSet: "number" | "password" | "text";
  setOtpBox: (input: number | string) => void;
  setAutoInputBox: (input: number) => void;
};
const OtpPage: React.FC<InputProp> = ({
  inputNO,
  otpBox,
  inputTypeSet,
  setOtpBox,
  setAutoInputBox,
}: InputProp) => {
  const navigate = useNavigate()
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const stringData: string = String(otpBox);
  const splitData: (number | string)[] = stringData.split("");
  const [open, setOpen] = useState<boolean>(false);

  const createHandle = () => {
    if (otpBox === "") {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };
  let refHandle = useRef();

  const newInputBox = (): JSX.Element[] => {
    const array: JSX.Element[] = [];
    if (inputNO < 7) {
      for (let i = 0; i < inputNO; i++) {
        setAutoInputBox(i + 5);
        array.push(
          <div className=" ">
            <OtpBox
              refHandle={refHandle}
              isCheck={isCheck}
              inputTypeSet={inputTypeSet}
              newArrData={splitData[i + 4]}
              key={i}
            />
          </div>
        );
      }
    }
    return array;
  };

  function clearHandle() {
    window.location.reload();
    setIsCheck(true);
    setOtpBox("");
    navigate('/main')
  }

  return (
    <div className="  my-10 md:my-0 m-auto flex justify-center items-center">
      <div className="flex flex-col bg-slate-400 justify-center items-center p-10 shadow-2xl">
        <form className=" grid grid-cols-4 md:flex gap-2  p-10">
          <OtpBox
            refHandle={refHandle}
            isCheck={isCheck}
            newArrData={splitData[0]}
            inputTypeSet={inputTypeSet}
          />
          <OtpBox
            refHandle={refHandle}
            newArrData={splitData[1]}
            isCheck={isCheck}
            inputTypeSet={inputTypeSet}
          />
          <OtpBox
            refHandle={refHandle}
            newArrData={splitData[2]}
            isCheck={isCheck}
            inputTypeSet={inputTypeSet}
          />
          <OtpBox
            refHandle={refHandle}
            newArrData={splitData[3]}
            isCheck={isCheck}
            inputTypeSet={inputTypeSet}
          />
          {newInputBox()}
        </form>
        <div className="flex gap-4">
          <button
            onClick={clearHandle}
            className="bg-slate-600 py-1 border px-6 hover:bg-slate-900 duration-700 text-white border-gray-300 rounded-md "
          >
            clear
          </button>
          <button
            onClick={createHandle}
            className="bg-slate-600 py-1 border px-6 hover:bg-slate-900 duration-700 text-white border-gray-300 rounded-md"
          >
            create otp
          </button>
          <Popup
            splitData={splitData}
            otpBox={otpBox}
            setOpen={setOpen}
            createHandle={createHandle}
            open={open}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
