import Bee from "./Bee";

const BeesContent = () => {
  return (
    <div
      id="bees-content"
      className="pt-[23px] flex gap-[23px] justify-center h-[calc(100vh-52px-61px)]"
    >
      <div
        id="filters-card"
        className="rounded-[10px] w-[200px] h-[600px] bg-white border border-[#DFDED9]"
      >
        Filter
      </div>
      <div
        id="bees"
        className="rounded-[10px] w-[555px] overflow-y-auto mb-[23px] bg-white border border-[#DFDED9] p-[23px] flex flex-col gap-[20px]"
      >
        {[1, 1, 1].map((item, i) => {
          if (i === 2) {
            return (
              <Bee
                fullName="Isfar Oshir"
                title="Software Engineer"
                tagLine="Hi, love to code!"
                links={[""]}
                tags={["New", "Winner"]}
                isLastBee={true}
              />
            );
          }
          return (
            <Bee
              fullName="Isfar Oshir"
              title="Software Engineer"
              tagLine="Hi, love to code!"
              links={["Linkedin", "Github"]}
              tags={["Exp", "#1"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BeesContent;
