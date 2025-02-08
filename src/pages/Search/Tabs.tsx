import { TAB_VALUES } from ".";
import Tab from "./Tab";

const Tabs = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TAB_VALUES;
  setSelectedTab: Function;
}) => {
  return (
    <div className="bg-white w-[100%] h-[61px] flex items-center justify-center">
      <div className="tabs flex gap-[20px]">
        {Object.values(TAB_VALUES).map((tab: TAB_VALUES) => (
          <Tab
            title={tab}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
