import CodeSessions from "./CodeSessions";
import TextChannels from "./TextChannels";
import VoiceChannels from "./VoiceChannels";

const HiveChannelSelector = () => {
  return (
    <div className="h-[calc(100vh-52px)] w-[238px] flex flex-col pt-[20px] pb-[20px]">
      <div className="h-full border-r border-solid border-gray-300 overflow-y-auto scrollbar-none flex flex-col pl-[15px] pr-[15px]">
        <h2 className="text-[20px]">Traverse Admins</h2>
        <TextChannels />
        <VoiceChannels />
        <CodeSessions />
      </div>
    </div>
  );
};

export default HiveChannelSelector;
