type ValueProp = {
  setOtpBox: (input: number | string) => void;
  otpBox: number | string;
  inputTypeSet: "number" | "password" | "text";
  number: number;
};
const OtpValue = ({ setOtpBox, otpBox, inputTypeSet, number }: ValueProp) => {
  function getValueHandle(e: React.ChangeEvent<HTMLInputElement>): void {
    setOtpBox(e.target.value);
  }
  return (
    <div className="flex flex-col items-center gap-3 py-4 ">
      <label htmlFor="" className=" uppercase font-semibold">
        value
      </label>
      <input
        maxLength={number}
        value={otpBox}
        onChange={getValueHandle}
        type={inputTypeSet}
        className="shadow-sm border-none outline-none px-4 py-1 rounded-md"
      />
    </div>
  );
};

export default OtpValue;
