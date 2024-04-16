import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const PlusButton = function ({addTodoItem}) {
  return (
    <>
      <div className="flex justify-center text-orangish">
        <button onClick={() => {addTodoItem()}}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-current text-clamp"
          />
        </button>
      </div>
    </>
  );
};


export default PlusButton;
