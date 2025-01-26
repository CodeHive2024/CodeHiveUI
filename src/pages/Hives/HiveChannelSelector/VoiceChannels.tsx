import VoiceChannel from "./VoiceChannel";

const VoiceChannels = () => {
  return (
    <div className="mt-[20px] pb-[10px] border-b border-solid border-gray-300">
      <h4 className="text-gray-500">Voice Channels</h4>
      <VoiceChannel />
      <VoiceChannel />
      <VoiceChannel />
    </div>
  );
};

export default VoiceChannels;
