import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
let Task = function ({ todo, deleteTaskWithFadeOutEffect, toggleTaskStatus }) {
  const taskRef = useRef(null);
  const textRef = useRef(null);

  const enableTaskEdit = (ref) => {
    enableTextArea(ref);
    focusTask(ref);
  };

  const focusTask = (ref) => {
    ref.current.focus();
  };

  const enableTextArea = (ref) => {
    ref.current.disabled = false;
  };

  return (
    <div
      ref={taskRef}
      className="flex items-center h-full w-full border rounded-lg bg-inputGray text-slate-100 p-3"
    >
      <div className=" flex h-full w-[80%]">
        <div
          className={`rounded-full h-8 aspect-square
        ${
          todo.strikeThrough
            ? "bg-completed border-none"
            : "border-2 border-orangish "
        }`}
          onClick={() => toggleTaskStatus(todo.index)}
        />
        <div className="w-[40%] h-full ">
          <textarea
            ref={textRef}
            className={`h-full w-full text-clampSmall font-mono font-medium  px-2 text-wrap break-words bg-inputGray resize-none ${
              todo.strikeThrough ? "line-through" : ""
            }`}
            disabled={todo.editStatus}
            value={todo.text}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-end w-[20%]">
        <div>
          <button data-key={todo.index} onClick={() => enableTaskEdit(textRef)}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-current text-clampSmall"
            />
          </button>
        </div>
        <div>
          <button
            data-key={todo.index}
            onClick={() => deleteTaskWithFadeOutEffect(todo.index, taskRef)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-current text-clampSmall"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
