import Member from "./Member";

const OnlineMembers = () => {
  return (
    <div className="mt-[20px] pb-[10px] border-b border-solid border-gray-300">
      <h4 className="text-gray-500">Online</h4>
      <Member />
      <Member />
      <Member />
    </div>
  );
};

export default OnlineMembers;
