const QuestionsContent = () => {
  return (
    <div
      id="questions-content"
      className="pt-[23px] flex gap-[23px] justify-center h-[calc(100vh-52px-61px)]"
    >
      <div
        id="filters-card"
        className="rounded-[10px] w-[200px] h-[600px] bg-white border border-[#DFDED9]"
      ></div>
      <div
        id="questions"
        className="rounded-[10px] w-[555px] overflow-y-auto mb-[23px] bg-white border border-[#DFDED9]"
      >
        {/* {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1, 11, 1, 1,
          1, 1, 1, 11, 1,
        ].map((item) => (
          <div>Hi</div>
        ))} */}
      </div>
    </div>
  );
};

export default QuestionsContent;
