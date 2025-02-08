import { TAB_VALUES } from ".";

const baseStyle =
  "cursor-pointer h-auto border border-[#DFDED9] rounded-[20px] pl-[10px] pr-[10px] pt-[3px] pb-[3px]";
const selectedStyle = "border-none bg-[#F0B52A] text-white";
const unselectedStyle =
  "hover:bg-[#F0B52A] hover:text-white transition duration-300";

const Tab = ({
  title,
  selectedTab,
  setSelectedTab,
}: {
  title: TAB_VALUES;
  selectedTab: TAB_VALUES;
  setSelectedTab: Function;
}) => {
  return (
    <div
      onClick={() => setSelectedTab(title)}
      className={`${baseStyle} ${
        selectedTab === title ? selectedStyle : unselectedStyle
      }`}
    >
      {title}
    </div>
  );
};

export default Tab;
