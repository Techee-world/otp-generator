
type typeProp = {
  setInputTypeSet: (select: string | number ) => void 
};

const InputType = ({ setInputTypeSet }: typeProp) => {
  let inputType: string[] = ["text", "number", "password"];
  function typeHandle(e: any) {
    setInputTypeSet(e.target.value);
  }
  return (
    <div className="flex flex-col items-center gap-3 bg-slate-200 py-4">
      <label htmlFor="" className=" uppercase font-semibold">
        input type
      </label>
      <select
        onChange={typeHandle}
        id="my-dropdown"
        name="my-dropdown"
        className="block appearance-none  bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 sm:text-sm focus:outline-none focus:border-indigo-500"
      >
        {inputType.map((item,index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default InputType