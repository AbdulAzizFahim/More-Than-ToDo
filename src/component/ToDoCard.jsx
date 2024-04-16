let ToDoCard = function () {
  return (
    <div className="flex items-center w-full h-full border border-borderGray rounded-xl">
      <div className=" flex flex-col  items-center w-3/4">
        <div className="p-2 text-clamp text-gray-200 font-mono font-bold">
          STATUS
        </div>
        <div className="p-2 text-clampSmall text-gray-200 font-mono border rounded-lg">
          keep it up
        </div>
      </div>
      <div
        className="flex justify-center items-center mr-9
       bg-orangish rounded-full h-clamp text-clamp aspect-square text-dynamic text-gray-900 font-semibold"
      >
        1/3
      </div>
    </div>
  );
};

export default ToDoCard;
