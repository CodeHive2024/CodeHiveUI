const Bee = ({
  fullName,
  title,
  tagLine,
  tags,
  links,
  isLastBee,
}: {
  fullName: string;
  title: string;
  tagLine: string;
  tags: string[];
  links: string[];
  isLastBee?: boolean;
}) => {
  return (
    <div
      id="bee-container"
      className={`flex gap-[23px] items-top ${
        !isLastBee && "border-b border-[#DFDED9]"
      }`}
    >
      <div id="img-div">
        <div
          id="img"
          className="flex-1 w-[40px] h-[40px] rounded-full bg-green-500"
        ></div>
      </div>
      <div
        id="bio-div"
        className="pb-[15px] flex-[3] w-[100px] flex flex-col gap-[3px]"
      >
        <div id="first-line" className="flex gap-[5px]">
          <h2 className="font-bold">{fullName}</h2>
          {tags.map((tag) => (
            <div className="rounded-full border border-gray pt-[2px] pb-[2px] pl-[10px] pr-[10px]">
              <p className="text-xs">{tag}</p>
            </div>
          ))}
        </div>
        <div id="title">
          <p className="text-xs">{title}</p>
        </div>
        <div id="tagLine">
          <p className="text-xs text-gray-500">{tagLine}</p>
        </div>
        <div id="mutuals">
          <p className="text-xs text-gray-800 font-bold">8 Mutual Friends</p>
        </div>
        <div id="links" className="flex gap-[10px]">
          {links.map((link) => (
            <a
              className="text-xs"
              href="https://www.google.com"
              target="_blank"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div id="connect" className="flex-1">
        <button className="bg-white">Buzz</button>
      </div>
    </div>
  );
};

export default Bee;
