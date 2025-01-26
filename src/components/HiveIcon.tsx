import { useState } from "react";

const HiveIcon = () => {
  const Notification = () => {
    return (
      <div className="w-[5px] h-[10px] rounded-br-full rounded-tr-full bg-blue-500"></div>
    );
  };

  const Selected = () => {
    return (
      <div className="w-[5px] h-[40px] rounded-br-full rounded-tr-full bg-[rgb(251,179,0)]"></div>
    );
  };

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev); // Set the clicked icon as selected
  };

  return (
    <div className="flex items-center">
      {isSelected ? <Selected /> : null}
      <div
        className="bg-blue-500 rounded-full w-[49px] h-[49px] mx-auto cursor-pointer"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default HiveIcon;
