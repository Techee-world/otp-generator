import React from 'react';

type inputProp = {
  setInputNO: (input: number) => void;
  setNumber: (input: number) => void;
  number: number;
};
const InputNumber:React.FC<inputProp> = ({ setInputNO ,number , setNumber }: inputProp) => {

  function changeHandle(e: any): void {
    setNumber(e.target.value);
    setInputNO(e.target.value - 4 );
  }
  return (
    <div className="flex flex-col w-full  items-center gap-3 bg-slate-200 py-4">
      <label htmlFor="" className=" uppercase font-semibold">
        input Number
      <p className='text-xs font-mono font-normal text-center'>( max - 10 , min - 4 )</p>
      </label>
      <input
        onChange={changeHandle}
        type="number"
        value={number}
        maxLength={10}
        minLength={4}
        className="shadow-sm border-none outline-none px-4 py-1 rounded-md"
      />
    </div>
  );
};

export default InputNumber;
