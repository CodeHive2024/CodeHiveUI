import {
  DiscordMessages,
  DiscordMessage,
  DiscordMention,
} from "@skyra/discord-components-react";

const Messages = () => {
  return (
    <div className="h-[calc(100vh-52px)] flex-grow flex flex-col">
      <p className="h-[40px] border-b border-solid border-gray-300 flex items-center pl-[20px]">
        #general
      </p>

      {/* DiscordMessages container */}
      <DiscordMessages
        light-theme
        className="flex-grow overflow-y-auto max-h-[calc(100vh-150px)] border-none"
      >
        <DiscordMessage author="Alyx Vargas">
          {" "}
          Hey guys, I'm new here! Glad to be able to join you all!{" "}
        </DiscordMessage>
        <DiscordMessage
          author="Fenton Smart"
          avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafive.png"
        >
          {" "}
          Hi, I'm new here too!{" "}
        </DiscordMessage>
        <DiscordMessage profile="maximillian">
          Hey, <DiscordMention>Alyx Vargas</DiscordMention> and{" "}
          <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
          <br />
          Be sure to read through the{" "}
          <DiscordMention type="channel">rules</DiscordMention>. You can ping{" "}
          <DiscordMention type="role" color="#70f0b4">
            Support
          </DiscordMention>{" "}
          if you need help.
        </DiscordMessage>
        <DiscordMessage profile="willard">
          Hello everyone! How's it going?
        </DiscordMessage>
        <DiscordMessage author="Alyx Vargas">
          Thank you{" "}
          <DiscordMention highlight>Maximillian Osborn</DiscordMention>!
        </DiscordMessage>
        <DiscordMessage
          author="Kayla Feeney"
          avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafour.png"
        >
          I'm doing well, <DiscordMention>Willard Walton</DiscordMention>. What
          about yourself?
        </DiscordMessage>
        <DiscordMessage profile="willard">
          {" "}
          s!8ball How am I doing today?{" "}
        </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
      </DiscordMessages>

      {/* Input field */}
      <input
        placeholder="Message #general"
        className="h-[40px] pl-[10px] pr-[10px] rounded-full border border-solid border-gray-500 ml-[20px] mr-[20px]"
      />
    </div>
  );
};

export default Messages;
