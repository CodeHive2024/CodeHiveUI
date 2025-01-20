import { useState } from "react";

interface SignupFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2" htmlFor="name">
        Name:
      </label>
      <input
        className="block w-full mb-4 p-2 border border-gray-400"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="block mb-2" htmlFor="email">
        Email:
      </label>
      <input
        className="block w-full mb-4 p-2 border border-gray-400"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-2" htmlFor="password">
        Password:
      </label>
      <input
        className="block w-full mb-4 p-2 border border-gray-400"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
