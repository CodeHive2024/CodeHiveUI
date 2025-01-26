import HiveChannelSelector from "./HiveChannelSelector";
import HiveSelector from "./HiveSelector";
import Members from "./Members/Members";
import Messages from "./Messages";

const Hives = () => {
  return (
    <div className="h-full flex">
      <HiveSelector />
      <HiveChannelSelector />
      <Messages />
      <Members />
    </div>
  );
};

export default Hives;
