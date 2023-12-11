import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";

type propsData = {
  splitData: any[];
  otpBox: number | string;
  open: boolean;
  setOpen: (value: boolean) => void;
  createHandle: any;
};

const Popup: React.FC<propsData> = ({
  splitData,
  otpBox,
  setOpen,
  open,
  createHandle,
}: propsData) => {
   let navigate = useNavigate()
  function confirmHandle() {
    setOpen(!open);
    alert('OTP sent to your mobile ')
    window.location.reload();
    navigate('/main')
  }
  const otpLength: number = splitData.length;

  return (
    <Dialog
      open={open}
      className="flex justify-center md:flex-row flex-col w-full left[10rem] top-0  absolute md:left-[27rem] md:top-20 md:rounded-xl items-center bg-slate-600 md:w-1/2"
      handler={createHandle}
    >
      <DialogHeader className="text-lg uppercase text-slate-300">
        <h1 className="md:text-lg text-sm">This is your new OTP :</h1>
        <span className="text-white font-semibold  px-4 "> {otpBox}</span>{" "}
        <span className="absolute top-0 left-0 bg-slate-300 rounded-full text-center px-1 text-sm text-black">
          {" "}
          {otpLength}
        </span>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={createHandle}
          className="mr-1 bg-green-200 px-6 py-2 rounded-xl"
        >
          <span className="">Cancel</span>
        </Button>
        <Button
          className="bg-green-200 text-black px-6 py-2 rounded-xl"
          onClick={confirmHandle}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Popup;
