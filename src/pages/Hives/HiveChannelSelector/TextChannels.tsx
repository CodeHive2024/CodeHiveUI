import TextChannel from "./TextChannel";

const TextChannels = () => {
  return (
    <div className="mt-[20px] pb-[10px] border-b border-solid border-gray-300">
      <h4 className="text-gray-500">Text Channels</h4>
      <TextChannel isSelected={true} />
      <TextChannel isSelected={false} />
      <TextChannel isSelected={false} />
    </div>
  );
};

export default TextChannels;
