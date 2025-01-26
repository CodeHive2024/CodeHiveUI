import Member from "./Member";

const OfflineMembers = () => {
  return (
    <div className="mt-[20px] pb-[10px] border-b border-solid border-gray-300">
      <h4 className="text-gray-500">Offline</h4>
      <Member />
    </div>
  );
};

export default OfflineMembers;
