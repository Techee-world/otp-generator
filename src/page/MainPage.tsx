import React, { useState } from "react";
import SideBar from "./SideBar";
import OtpPage from "./OtpPage";


const App: React.FC = () => {
  const [inputNO, setInputNO] = useState<any>();
  const [otpBox, setOtpBox] = useState<any>("");
  const [inputTypeSet, setInputTypeSet] = useState<any>();
  const [autoInputBox, setAutoInputBox] = useState<number>(4);
  return (
    <>
      <div className="flex md:flex-row flex-col ">
        <SideBar
          autoInputBox={autoInputBox}
          setOtpBox={setOtpBox}
          setInputTypeSet={setInputTypeSet}
          otpBox={otpBox}
          inputTypeSet={inputTypeSet}
          setInputNO={setInputNO}
        />
        <OtpPage
          setAutoInputBox={setAutoInputBox}
          inputNO={inputNO}
          otpBox={otpBox}
          inputTypeSet={inputTypeSet}
          setOtpBox={setOtpBox}
        />
      </div>
    </>
  );
};

export default App;
