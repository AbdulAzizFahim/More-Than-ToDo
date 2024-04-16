import ToDoCard from "./component/ToDoCard.jsx";
import InputArea from "./component/InputArea.jsx";
import Task from "./component/Task.jsx";
import { useState } from "react";

let App = function () {
  const [inputText, setInputText] = useState("");
  const [listOfTodoText, setListOfTodoText] = useState([]);

  const delayForDivDeleteAnimation = 300;

  const addTodoItem = () => {
    const tempList = [...listOfTodoText];
    tempList.unshift({
      text: inputText,
      index: 1,
      editStatus: "disabled",
      strikeThrough: false,
    });

    tempList.forEach((obj, count) => {
      obj.index = count;
    });

    setListOfTodoText(tempList);
    setInputText("");
  };

  const InputOnChange = (event) => {
    setInputText(event.target.value);
  };

  const deleteTaskWithFadeOutEffect = (targetIndex, ref) => {
    deleteTask(targetIndex);
    divFadeOutAnimation(ref);  
  };

  const deleteTask = (targetIndex) => {
    const deleteTargettedTask = () => {
      let tempList = [...listOfTodoText];
      tempList.splice(targetIndex, 1);

      tempList.forEach((todo, count) => {
        todo.index = count;
      });

      setListOfTodoText(tempList);
    };

    setTimeout(() => {
      deleteTargettedTask();
    }, delayForDivDeleteAnimation);
  };

  const divFadeOutAnimation = (ref) => {
    ref.current.classList.add(
      "transition-opacity",
      `duration-${delayForDivDeleteAnimation}`,
      "ease-in"
    );
    ref.current.style.opacity = 0;
    ref.current.style.visibility = "hidden";
  };

  const editTask = (targetIndex) => {
    let tempList = [...listOfTodoText];
    tempList[targetIndex].editStatus = "";
    setListOfTodoText(tempList);
  };

  const toggleTaskStatus = (targetIndex) => {
    let tempList = [...listOfTodoText];
    tempList[targetIndex].strikeThrough = !tempList[targetIndex].strikeThrough;
    setListOfTodoText(tempList);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-between p-5 bg-backgroundBlack">
        <div className="h-fit w-1/5 p-1 border text-clamp text-white border-black">
          XEROTODO
        </div>
        <div className=" flex flex-col justify-center w-[35%] h-full p-5 border border-black rounded-md">
          <div>
            <ToDoCard />
          </div>
          <div className="h-[30%] text-clampSmall">
            <InputArea
              inputText={inputText}
              InputOnChange={InputOnChange}
              addTodoItem={addTodoItem}
            />
          </div>
          <div className="w-full h-full overflow-hidden hover:overflow-y-scroll">
            {listOfTodoText.map((todo) => (
              <div
                key={`Task-${todo.index}-Value-${todo.text}`}
                className="w-full max-h-fit p-2"
              >
                <Task
                  todo={todo}
                  deleteTaskWithFadeOutEffect={deleteTaskWithFadeOutEffect}
                  editTask={editTask}
                  toggleTaskStatus={toggleTaskStatus}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-fit w-1/5 p-1 border border-black">logout</div>
      </div>
    </>
  );
};

export default App;
