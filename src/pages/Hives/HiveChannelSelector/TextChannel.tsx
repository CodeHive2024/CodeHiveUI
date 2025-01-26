const TextChannel = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div className="pt-[2px] pb-[2px]">
      <div
        className={`rounded-[6px] flex pt-[3px] pb-[3px] pl-[10px] pr-[10px] ${
          isSelected ? "bg-[rgb(251,179,0)]" : ""
        }`}
      >
        <p># general</p>
        <div className="ml-auto flex gap-[5px]">
          <p>Ic</p>
          <p>Ic</p>
        </div>
      </div>
    </div>
  );
};

export default TextChannel;
