import React from "react";

type ValueProp = {
  newArrData: string | number;
  inputTypeSet: "number" | "password" | "text";
  isCheck: boolean;
  refHandle:any
};

const OtpBox: React.FC<ValueProp> = ({
  newArrData,
  inputTypeSet,
  isCheck,
  refHandle,
}: ValueProp) => {
  function inputBoxHandle(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value, "value");
  }


  return (
    <div >
      <input
        ref={(element) => (refHandle.current = element)}
        onChange={inputBoxHandle}
        value={isCheck ? "" : newArrData}
        className="md:w-16 md:h-16 w-6 h-6 rounded border border-gray-300 text-center text-2xl focus:outline-none focus:border-indigo-500"
        type={inputTypeSet}
        autoFocus
        placeholder="-"
        maxLength={1}
      />
    </div>
  );
};

export default OtpBox;
