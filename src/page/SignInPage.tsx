import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignInPage: React.FC = ({}) => {
  const [phone, setPhone] = useState<string>("");
  const [isOpen, setIsOpen] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const phoneNumber = sessionStorage.getItem("phoneNumber");
    if (phoneNumber) {
      setPhone(phoneNumber);
    }
    setIsOpen(phoneNumber);
  }, []);

  const changeHandle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phoneNumber = formData.get("phone");
    if (phoneNumber) {
      setPhone(phoneNumber.toString());
      sessionStorage.setItem("phoneNumber", phoneNumber.toString());
    }
    if (isOpen.length == 10) {
      navigate("/main");
    } else {
      alert("your phone number is not valid");
    }
  };
  function inputHandle(e: any) {
    setIsOpen(e.target.value);
  }

  return (
    <div className="bg-green-100 min-h-[92vh] flex items-center justify-center">
      <div className="max-w-screen-md w-full p-4">
        <h1 className="text-3xl font-bold mb-2 text-center">Sign in</h1>
        <p className="text-gray-600 mb-4 text-center">
          Sign in using your mobile number.
        </p>
        <div className=" p-4 rounded ">
          <form onSubmit={changeHandle}>
            <div className="mb-4 ">
              <label
                className="block text-gray-500 text-sm mb-1"
                htmlFor="phone"
              >
                Phone Number : {phone}
              </label>
              <input
                onChange={inputHandle}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-teal-500 outline-none"
                type="number"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
                value={isOpen}
              />
            </div>
            <button
              className="bg-gradient-to-r w-full from-slate-500 to-blue-400 text-white px-4 py-2 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
