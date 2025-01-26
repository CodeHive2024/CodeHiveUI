import HiveIcon from "../../components/HiveIcon";

const HiveSelector = () => {
  return (
    <div className="h-[calc(100vh-52px)] w-[72px] flex flex-col pt-[20px] pb-[20px]">
      <div className="h-full border-r border-solid border-gray-300 overflow-y-auto scrollbar-none">
        {[1, 1, 11].map(() => (
          <>
            <HiveIcon />
            <div className="h-[10px]" />
          </>
        ))}
      </div>
    </div>
  );
};

export default HiveSelector;
