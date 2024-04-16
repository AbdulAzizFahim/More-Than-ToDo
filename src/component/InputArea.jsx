import InputField from "./InputField";
import PlusButton from "./PlusButton";

let InputArea = function ({inputText, InputOnChange, addTodoItem}) {
  return (
    <div className="flex items-center  w-full h-full rounded-xl p-3">
        <div className="w-[85%]">
          <InputField InputOnChange={InputOnChange} inputText={inputText} />
        </div>
        <div className="w-[10%]">
          <PlusButton addTodoItem={addTodoItem} />
        </div>
    </div>
  );
};

export default InputArea;
