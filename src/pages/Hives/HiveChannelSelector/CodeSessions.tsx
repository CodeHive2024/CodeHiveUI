import CodeSession from "./CodeSession";

const CodeSessions = () => {
  return (
    <div className="mt-[20px] pb-[10px] border-b border-solid border-gray-300">
      <h4 className="text-gray-500">Code Sessions</h4>
      <CodeSession />
      <CodeSession />
      <CodeSession />
    </div>
  );
};

export default CodeSessions;
