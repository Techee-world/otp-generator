import React from 'react'

type randomOtp = {
  setOtpBox: (input: number | string) => void;
  autoInputBox: number;
  inputTypeSet: "number" | "password" | "text";
};
const RandomOtp: React.FC<randomOtp> = ({
  setOtpBox,
  autoInputBox,
  inputTypeSet,
}: randomOtp) => {
  const generateOTP = (length: number) => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOtpBox(OTP);
  };
  const generate = (length: number) => {
    const digits =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%?/&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(digits.length);
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 71)];
    }
    setOtpBox(OTP);
  };
  return (
    <div>
      {inputTypeSet == "number" ? (
        <button
          className="bg-gray-500 py-2 px-4 hover:bg-gray-800 text-white duration-700  border border-white rounded-md w-full my-4 uppercase"
          onClick={() => generateOTP(autoInputBox)}
        >
          otp generator
        </button>
      ) : (
        <button
          className="bg-gray-500 py-2 px-4 hover:bg-gray-800 text-white duration-700  border border-white rounded-md w-full my-4 uppercase"
          onClick={() => generate(autoInputBox)}
        >
          otp generator
        </button>
      )}
    </div>
  );
};

export default RandomOtp