let InputField = function ({ InputOnChange, inputText }) {
  return (
    <input
      type="text"
      className="w-full h-full border-none rounded-xl p-5 bg-inputGray text-slate-100"
      placeholder="write your next task"
      onChange={(e) => {
        InputOnChange(e);
      }}
      value = {inputText}
    />
  );
};

export default InputField;
