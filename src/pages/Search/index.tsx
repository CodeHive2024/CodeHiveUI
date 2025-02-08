import { useState } from "react";
import Tabs from "./Tabs";
import QuestionsContent from "./Questions";
import BeesContent from "./Bees";

export enum TAB_VALUES {
  ALL = "All",
  BEES = "Bees",
  QUESTIONS = "Questions",
  HACKATHONS = "Hackathons",
}

/*
The first search the user makes will show them search results similar
to a search-engine like fashion. So links/paths that make sense top to down.
Hoever if the user clicks a tab, it will transform the view to a more filtered view
*/
const Search = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_VALUES.ALL);

  const Content = () => {
    switch (selectedTab) {
      case TAB_VALUES.BEES:
        return <BeesContent />;
      case TAB_VALUES.QUESTIONS:
        return <QuestionsContent />;
      case TAB_VALUES.HACKATHONS:
        return <div>HACKATHONS</div>;
      default:
        return <div>All</div>;
    }
  };

  return (
    <>
      <div className="bg-[#F4F2ED] h-[100%]">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Content />
      </div>
    </>
  );
};

export default Search;
