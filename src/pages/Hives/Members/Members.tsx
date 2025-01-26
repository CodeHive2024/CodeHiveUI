import OfflineMembers from "./OfflineMembers";
import OnlineMembers from "./OnlineMembers";

const Members = () => {
  return (
    <div className="h-[calc(100vh-52px)] w-[238px] flex flex-col pt-[20px] pb-[20px]">
      <div className="h-full border-l border-solid border-gray-300 overflow-y-auto scrollbar-none flex flex-col pl-[15px] pr-[15px]">
        <OnlineMembers />
        <OfflineMembers />
      </div>
    </div>
  );
};

export default Members;
